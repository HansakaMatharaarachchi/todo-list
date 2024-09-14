import { notification, Spin } from "antd";
import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import SignInForm from "../../components/auth/SignInForm";
import { useAuth } from "../../contexts";

interface SignInFormValues {
	email: string;
	password: string;
}

const initialValues: SignInFormValues = {
	email: "",
	password: "",
};

const signInFormValidationSchema = Yup.object().shape({
	email: Yup.string().required("Email is required"),
	password: Yup.string().required("Password is required"),
});

const SignIn = () => {
	const { signIn } = useAuth();

	const handleSignInFormSubmit = async (
		values: SignInFormValues,
		formikHelpers: FormikHelpers<SignInFormValues>
	) => {
		const { setSubmitting } = formikHelpers;

		try {
			await signIn(values.email, values.password);

			notification.success({
				message: "Signed in",
				description: "You have signed in successfully.",
			});
		} catch (error) {
			// Handle errors appropriately depending on api response.
			notification.error({
				message: "Oops!",
				description: "Something went wrong while signing in. Please try again.",
			});
		} finally {
			// Always reset submitting state.
			setSubmitting(false);
		}
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={signInFormValidationSchema}
			onSubmit={handleSignInFormSubmit}
		>
			{(formikProps) => (
				<Spin
					spinning={formikProps.isSubmitting}
					tip="Creating your account please wait..."
				>
					<SignInForm {...formikProps} />
				</Spin>
			)}
		</Formik>
	);
};

export default SignIn;
