import { TODO_STATUS } from "./constants";

export interface User {
	id: string;
	name: string;
	email: string;
}

export interface Todo {
	id: string;
	title: string;
	description: string;
	status: TODO_STATUS;
}
