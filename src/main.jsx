import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css";
import { router } from "./Route/Route.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

import {
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<Toaster />
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={router} />
			</QueryClientProvider>
		</AuthProvider>
	</React.StrictMode>
);
