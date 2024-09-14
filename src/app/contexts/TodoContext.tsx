import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import { Outlet } from "react-router-dom";
import { Todo } from "../interfaces";

type TodosContextType = {
	todos: Todo[];
	addTodo: (todo: Todo) => void;
	updateTodo: (id: string, updatedTodo: Partial<Todo>) => void;
	removeTodo: (id: string) => void;
};

const TodosContext = createContext<TodosContextType | undefined>(undefined);

export const TodoProvider = () => {
	const [todos, setTodos] = useState<Todo[]>(() => {
		// Load todos from localStorage.
		const savedTodos = localStorage.getItem("todos");

		return savedTodos ? JSON.parse(savedTodos) : [];
	});

	// Save todos to localStorage whenever todos change.
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const addTodo = useCallback((newTodo: Todo) => {
		setTodos((currentTodos) => [...currentTodos, newTodo]);
	}, []);

	const updateTodo = useCallback(
		(todoId: string, updatedTodo: Partial<Todo>) => {
			setTodos((currentTodos) => {
				const indexToUpdate = currentTodos.findIndex(
					(item) => item.id === todoId
				);
				if (indexToUpdate === -1) return currentTodos;

				const updatedTodos = [...currentTodos];
				updatedTodos[indexToUpdate] = {
					...updatedTodos[indexToUpdate],
					...updatedTodo,
				};
				return updatedTodos;
			});
		},
		[]
	);

	const removeTodo = useCallback((todoId: string) => {
		setTodos((currentTodos) => {
			const indexToRemove = currentTodos.findIndex(
				(item) => item.id === todoId
			);
			if (indexToRemove === -1) return currentTodos;

			const updatedTodos = [...currentTodos];
			updatedTodos.splice(indexToRemove, 1);
			return updatedTodos;
		});
	}, []);

	const contextValue: TodosContextType = useMemo(
		() => ({
			todos,
			addTodo,
			updateTodo,
			removeTodo,
		}),
		[addTodo, removeTodo, todos, updateTodo]
	);

	return (
		<TodosContext.Provider value={contextValue}>
			<Outlet />
		</TodosContext.Provider>
	);
};

export const useTodos = () => {
	const context = useContext(TodosContext);

	if (context === undefined) {
		throw new Error("useTodos must be used within a TodosProvider");
	}
	return context;
};

export default TodoProvider;
