import { Button, Form, Input, Select } from "antd";
import { Field, FormikProps } from "formik";
import React from "react";
import { TODO_STATUS } from "../../constants";

interface TodoFormValues {
	title: string;
	description: string;
	status: TODO_STATUS;
}

type TodoFormProps = FormikProps<TodoFormValues>;

const TodoForm: React.FC<TodoFormProps> = ({
	handleSubmit,
	errors,
	touched,
	isSubmitting,
	setFieldValue,
}) => (
	<Form
		name="todoForm"
		labelCol={{ span: 5 }}
		wrapperCol={{ span: 16 }}
		onFinish={handleSubmit}
		className="p-4 mx-auto "
	>
		<Form.Item
			label="Title"
			validateStatus={errors.title && touched.title ? "error" : ""}
			help={errors.title && touched.title ? errors.title : undefined}
		>
			<Field
				as={Input}
				name="title"
				placeholder="Add a Title..."
				className="ant-input"
			/>
		</Form.Item>

		<Form.Item
			label="Description"
			validateStatus={errors.description && touched.description ? "error" : ""}
			help={
				errors.description && touched.description
					? errors.description
					: undefined
			}
		>
			<Field
				as={Input.TextArea}
				name="description"
				placeholder="Add a Description..."
				rows={4}
				className="ant-input"
			/>
		</Form.Item>

		<Form.Item
			label="Status"
			validateStatus={errors.status && touched.status ? "error" : ""}
			help={errors.status && touched.status ? errors.status : undefined}
		>
			<Field name="status">
				{({ field }) => (
					<Select
						{...field}
						placeholder="Select a Status..."
						className="ant-select"
						onChange={(value) => {
							setFieldValue("status", value);
						}}
					>
						{Object.values(TODO_STATUS).map((status) => (
							<Select.Option key={status} value={status}>
								{status}
							</Select.Option>
						))}
					</Select>
				)}
			</Field>
		</Form.Item>

		<Form.Item className="flex justify-end">
			<Button
				type="primary"
				htmlType="submit"
				disabled={isSubmitting}
				className="self-end bg-primary hover:bg-primary-dark"
			>
				Submit
			</Button>
		</Form.Item>
	</Form>
);

export default TodoForm;
