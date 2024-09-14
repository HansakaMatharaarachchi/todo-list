import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: "#ff7844",
				},
			}}
		>
			<App />
		</ConfigProvider>
	</StrictMode>
);
