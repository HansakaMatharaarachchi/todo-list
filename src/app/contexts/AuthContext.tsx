import { Layout, Spin } from "antd";
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { User } from "../interfaces";

type AuthContextType = {
	user: User | null;
	isAuthenticated: boolean;
	isLoading: boolean;
	signIn: (email: string, password: string) => Promise<void>;
	signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = () => {
	const [user, setUser] = useState<User | null>(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const { Content } = Layout;
	const navigate = useNavigate();

	// Load existing user from local storage initially.
	useEffect(() => {
		const existingUser = localStorage.getItem("user");

		if (existingUser) {
			setUser(JSON.parse(existingUser));
			setIsAuthenticated(true);
		}

		setIsLoading(false);
	}, []);

	// If user is not authenticated, show the sign in page.
	useEffect(() => {
		if (!isAuthenticated) {
			navigate("/sign-in");
		}
	}, [isAuthenticated]);

	// If user is authenticated, show the app.
	useEffect(() => {
		if (isAuthenticated) {
			navigate("/");
		}
	}, [isAuthenticated]);

	const signIn = useCallback(async (email: string, password: string) => {
		setIsLoading(true);

		if (!(email && password)) {
			throw new Error("Invalid credentials");
		}

		try {
			// Simulate API call.
			const response = await new Promise<User>((resolve) => {
				setTimeout(() => {
					const user: User = {
						id: "1",
						name: "Test User",
						email: email,
					};
					resolve(user);
				}, 1000);
			});

			setUser(response);

			// Save user to local storage.
			localStorage.setItem("user", JSON.stringify(response));

			setIsAuthenticated(true);
		} finally {
			setIsLoading(false);
		}
	}, []);

	const signOut = useCallback(async () => {
		setIsLoading(true);

		try {
			// Simulate API call.
			await new Promise<void>((resolve) => {
				setTimeout(() => {
					resolve();
				}, 1000);
			});

			setUser(null);

			// Remove user from local storage.
			localStorage.removeItem("user");

			setIsAuthenticated(false);
		} finally {
			setIsLoading(false);
		}
	}, []);

	const contextValue: AuthContextType = useMemo(
		() => ({
			user,
			isAuthenticated,
			isLoading,
			signIn,
			signOut,
		}),
		[isAuthenticated, isLoading, signIn, signOut, user]
	);

	// If auth is loading, show a loading spinner.
	if (isLoading) {
		return (
			<Layout>
				<Content className="flex items-center justify-center min-h-screen">
					<Spin size="large" />
				</Content>
			</Layout>
		);
	}

	return (
		<AuthContext.Provider value={contextValue}>
			<Outlet />
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);

	if (context === undefined) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};

export default AuthContextProvider;
