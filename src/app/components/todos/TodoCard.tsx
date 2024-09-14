import { Button, Popconfirm, Switch } from "antd";
import { useState } from "react";
import { TODO_STATUS } from "../../constants";
import { Todo } from "../../interfaces";

type TodoCardProps = {
	todo: Todo;
	onStatusChange: (id: string, status: TODO_STATUS) => void;
	onEditClick: (id: string) => void;
	onDeleteClick: (id: string) => void;
};

const TodoCard = ({
	todo,
	onStatusChange,
	onDeleteClick,
	onEditClick,
}: TodoCardProps) => {
	const handleStatusChange = (checked: boolean) => {
		const newStatus = checked ? TODO_STATUS.COMPLETED : TODO_STATUS.INCOMPLETE;

		onStatusChange(todo.id, newStatus);
	};

	return (
		<div className="flex flex-col p-4 bg-white border rounded-md shadow-md">
			<div className="flex flex-wrap items-start justify-between mb-4 md:flex-nowrap">
				{todo.title && (
					<span className="inline-block text-2xl font-semibold break-all">
						{todo.title}
					</span>
				)}
			</div>
			<div className="flex flex-wrap justify-between mb-4">
				<div className="flex flex-wrap gap-2.5">
					<div className="flex items-center text-sm text-black/80">
						{todo.description && (
							<span className="text-xs italic text-black/75">
								{todo.description}
							</span>
						)}
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-2.5 py-1.5">
				<div className="flex flex-wrap pr-2 py-1.5 items-center justify-between">
					<div className="flex gap-2.5 items-center">
						<div className="flex items-center gap-1 text-sm">
							<Button
								id="edit-todo-btn"
								type="primary"
								size="small"
								title="Edit todo"
								onClick={() => {
									onEditClick(todo.id);
								}}
							>
								Edit
							</Button>
							<Popconfirm
								title="Delete Task"
								description="Are you sure to delete this task?"
								onConfirm={() => {
									onDeleteClick(todo.id);
								}}
								okText="Yes"
								cancelText="No"
							>
								<Button danger size="small">
									Delete
								</Button>
							</Popconfirm>
						</div>
					</div>
					<div className="flex items-center gap-2 text-sm">
						<span className="text-sm text-black/75">Status:</span>
						<Switch
							checked={todo.status === TODO_STATUS.COMPLETED}
							onChange={handleStatusChange}
							checkedChildren="Done"
							unCheckedChildren="Todo"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TodoCard;
