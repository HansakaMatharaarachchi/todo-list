import { RouteObject } from "react-router-dom";
import { NotFoundPage, SignInPage, SignUpPage, TodosPage } from "./pages";
import { AuthProvider, TodosProvider } from "./contexts";

export const routes: RouteObject[] = [
	{
		Component: AuthProvider,
		children: [
			{
				Component: TodosProvider,
				children: [
					{
						path: "/",
						Component: TodosPage,
					},
					{
						path: "/sign-up",
						Component: SignUpPage,
					},
					{
						path: "/sign-in",
						Component: SignInPage,
					},
					{
						path: "*",
						Component: NotFoundPage,
					},
				],
			},
		],
	},
];
