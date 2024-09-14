import { Formik } from "formik";
import * as Yup from "yup";
import TodoForm from "../../components/todos/TodoForm";
import { TODO_STATUS } from "../../constants";
import { useTodos } from "../../contexts";
import { Todo } from "../../interfaces";

interface AddOrUpdateTodoContainerProps {
	existingTodo?: Todo; // Optional todo object to update
	onSubmitSuccess?: () => void;
}

const initialValues = {
	title: "",
	description: "",
	status: TODO_STATUS.INCOMPLETE,
};

const todoValidationSchema = Yup.object().shape({
	title: Yup.string().required("Title is required"),
	description: Yup.string().required("Description is required"),
	status: Yup.string()
		.oneOf(Object.values(TODO_STATUS), "Invalid status")
		.required("Status is required"),
});

const AddOrUpdateTodoContainer = ({
	existingTodo,
	onSubmitSuccess,
}: AddOrUpdateTodoContainerProps) => {
	const { addTodo, updateTodo } = useTodos();

	const handleSubmit = (values: Omit<Todo, "id">) => {
		if (existingTodo?.id) {
			updateTodo(existingTodo.id, values);
		} else {
			addTodo({
				...values,
				id: crypto.randomUUID(),
			});
		}
		onSubmitSuccess?.();
	};

	return (
		<Formik
			initialValues={existingTodo || initialValues}
			validationSchema={todoValidationSchema}
			onSubmit={handleSubmit}
		>
			{(formikProps) => <TodoForm {...formikProps} />}
		</Formik>
	);
};

export default AddOrUpdateTodoContainer;
