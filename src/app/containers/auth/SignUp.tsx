import { notification, Spin } from "antd";
import { Formik, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import SignUpForm from "../../components/auth/SignUpForm";
import { useAuth } from "../../contexts";

interface SignUpFormValues {
	username: string;
	email: string;
	password: string;
}

const initialValues: SignUpFormValues = {
	username: "",
	email: "",
	password: "",
};

const signUpFormValidationSchema = Yup.object().shape({
	username: Yup.string()
		.required("Username is required")
		.min(3, "Username must be at least 3 characters"),
	email: Yup.string()
		.email("Invalid email address")
		.required("Email is required"),
	password: Yup.string()
		.required("Password is required")
		.min(6, "Password must be at least 6 characters"),
});

const SignUp = () => {
	const { signIn } = useAuth();

	const navigate = useNavigate();

	const handleSignUpFormSubmit = async (
		values: SignUpFormValues,
		formikHelpers: FormikHelpers<SignUpFormValues>
	) => {
		const { setSubmitting } = formikHelpers;

		try {
			// Simulate sign up API call.
			await new Promise<void>((resolve) => {
				setTimeout(() => {
					resolve();
				}, 1000);
			});

			notification.success({
				message: "Success!",
				description: "Your account has been created successfully.",
			});

			// For simplicity, we will sign in the user after successful sign up.
			try {
				await signIn(values.email, values.password);
				// Redirect to To Dos page.
				navigate("/");
			} catch (error) {
				// Handle errors appropriately depending on api response.
				notification.error({
					message: "Oops!",
					description:
						"Something went wrong while signing in, please try again.",
				});
			}
		} catch (error) {
			// Handle errors appropriately depending on api response.
			notification.error({
				message: "Oops!",
				description:
					"Something went wrong while creating your account, please try again.",
			});
		} finally {
			// Always reset submitting state.
			setSubmitting(false);
		}
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={signUpFormValidationSchema}
			onSubmit={handleSignUpFormSubmit}
		>
			{(formikProps) => (
				<Spin
					spinning={formikProps.isSubmitting}
					tip="Creating your account please wait..."
				>
					<SignUpForm {...formikProps} />
				</Spin>
			)}
		</Formik>
	);
};

export default SignUp;
