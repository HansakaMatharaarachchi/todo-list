import { Button, Form, Input } from "antd";
import { ErrorMessage, Field, FormikProps } from "formik";

interface SignInFormValues {
	email: string;
	password: string;
}

type Props = FormikProps<SignInFormValues>;

const SignInForm = ({ errors, touched, isSubmitting, handleSubmit }: Props) => (
	<Form
		name="signUpForm"
		labelCol={{ span: 8 }}
		wrapperCol={{ span: 16 }}
		onFinish={handleSubmit}
	>
		<Form.Item
			label="Email"
			validateStatus={errors.email && touched.email ? "error" : ""}
			help={<ErrorMessage name="email" />}
		>
			<Field
				as={Input}
				type="email"
				name="email"
				placeholder="Enter your email"
			/>
		</Form.Item>

		<Form.Item
			label="Password"
			validateStatus={errors.password && touched.password ? "error" : ""}
			help={<ErrorMessage name="password" />}
		>
			<Field
				as={Input.Password}
				name="password"
				placeholder="Enter your password"
			/>
		</Form.Item>

		<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
			<Button type="primary" htmlType="submit" disabled={isSubmitting}>
				SignIn
			</Button>
		</Form.Item>
	</Form>
);

export default SignInForm;
