import { Col, Divider, Flex, Layout, Row, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import { SignInContainer } from "../containers";

const { Title } = Typography;

const SignIn = () => (
	<Layout>
		<Content>
			<Row justify="center" align="middle" className="min-h-svh">
				<Col md={12} lg={6}>
					<Flex vertical justify="center" align="center" gap={24}>
						<img src="/logo.png" alt="logo" className="w-64" />
						<Flex
							vertical
							justify="center"
							align="center"
							className="p-12 bg-white shadow-lg rounded-2xl"
						>
							<Title level={2}>SignIn</Title>
							<SignInContainer />
							<Divider>OR</Divider>
							<span>
								Don't have an account? &nbsp;
								<Link to="/sign-up">
									<strong>
										<u>SignUp</u>
									</strong>
								</Link>
							</span>
						</Flex>
					</Flex>
				</Col>
			</Row>
		</Content>
	</Layout>
);

export default SignIn;
