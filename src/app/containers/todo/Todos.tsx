import { Empty, Modal, Typography } from "antd";
import { useState } from "react";
import TodoCard from "../../components/todos/TodoCard";
import { useTodos } from "../../contexts";
import AddOrUpdateTodoContainer from "./AddOrUpdateTodo";
import { Todo } from "../../interfaces";

const { Title } = Typography;

const Todos = () => {
	const { todos, updateTodo, removeTodo } = useTodos();
	const [todoToUpdate, setTodoToUpdate] = useState<Todo | null>(null);

	return (
		<div className="flex flex-col flex-1 gap-1 py-8">
			{todos.length === 0 ? (
				<Empty
					className="flex flex-col justify-center flex-1"
					description="Todo list is empty"
				/>
			) : (
				todos.map((todo) => (
					<TodoCard
						key={todo.id}
						todo={todo}
						onStatusChange={(id, status) => {
							updateTodo(id, { status });
						}}
						onDeleteClick={removeTodo}
						onEditClick={(todoId) => {
							setTodoToUpdate(todos.find((todo) => todo.id === todoId) || null);
						}}
					/>
				))
			)}
			<Modal
				open={!!todoToUpdate}
				destroyOnClose
				onCancel={() => {
					setTodoToUpdate(null);
				}}
				footer={null}
			>
				<Title className="text-center" level={2}>
					Edit Todo
				</Title>
				<AddOrUpdateTodoContainer
					existingTodo={todoToUpdate ?? undefined}
					onSubmitSuccess={() => {
						setTodoToUpdate(null);
					}}
				/>
			</Modal>
		</div>
	);
};

export default Todos;
