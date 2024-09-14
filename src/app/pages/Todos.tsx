import { Button, Layout, Modal, Typography } from "antd";
import { useState } from "react";
import { TodosContainer } from "../containers";
import AddOrUpdateTodoContainer from "../containers/todo/AddOrUpdateTodo";
import { useAuth } from "../contexts";
import NavBar from "../layouts/Header";

const { Content } = Layout;
const { Title } = Typography;

const Todos = () => {
	const { signOut } = useAuth();
	const [isAddTodoModalVisible, setIsAddTodoModalVisible] = useState(false);

	return (
		<Layout className="min-h-screen">
			<NavBar
				onSignOutClick={() => {
					signOut();
				}}
			/>
			<Content className="container flex flex-col flex-1 w-full h-full py-8 mx-auto">
				<Button
					type="primary"
					className="flex items-center self-end justify-center gap-2 px-5 py-5 font-semibold text-white transition rounded-lg bg-primary hover:shadow-lg duration-3000"
					title="Add new Todo"
					icon={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="w-6 h-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 6v6m0 0v6m0-6h6m-6 0H6"
							/>
						</svg>
					}
					onClick={() => {
						setIsAddTodoModalVisible(true);
					}}
				>
					Add Todo
				</Button>
				<TodosContainer />
				<Modal
					open={isAddTodoModalVisible}
					destroyOnClose
					onCancel={() => {
						setIsAddTodoModalVisible(false);
					}}
					footer={null}
				>
					<Title className="text-center" level={2}>
						Add Todo
					</Title>
					<AddOrUpdateTodoContainer
						onSubmitSuccess={() => {
							setIsAddTodoModalVisible(false);
						}}
					/>
				</Modal>
			</Content>
		</Layout>
	);
};

export default Todos;
