import { Avatar, Button, Dropdown, Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

type NavBarProps = {
	onSignOutClick: () => void;
};

type SignOutMenuProps = {
	onSignOutClick: () => void;
};

const SignOutMenu = ({ onSignOutClick }: SignOutMenuProps) => (
	<Menu>
		<Menu.Item key="1" />
		<Menu.Item key="2">
			<Button
				type="text"
				className="w-full text-left text-gray-700 hover:text-primary"
				id="sign-out-btn"
				onClick={onSignOutClick}
			>
				Sign out
			</Button>
		</Menu.Item>
	</Menu>
);

const NavBar = ({ onSignOutClick }: NavBarProps) => {
	return (
		<Header className="h-20 bg-white border-b shadow-sm">
			<div className="container flex items-center justify-between h-full mx-auto">
				{/* Logo */}
				<Link to="/" className="flex items-center">
					<img className="w-auto h-10" src="/logo.png" alt="BookmarkHub Logo" />
				</Link>

				{/* Profile dropdown */}
				<Dropdown
					trigger={["click"]}
					placement="bottomRight"
					arrow
					overlay={<SignOutMenu onSignOutClick={onSignOutClick} />}
				>
					<Avatar
						src="https://avatar.iran.liara.run/public"
						size={48}
						className="cursor-pointer ring-2 ring-gray-300"
					/>
				</Dropdown>
			</div>
		</Header>
	);
};

export default NavBar;
