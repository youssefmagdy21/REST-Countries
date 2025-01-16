import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouteObject } from "react-router-dom";
import Root from "./layouts/Root.tsx";
import Index from "./pages/Index.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import { ThemeProvider } from "./contexts/ThemeContext/ThemeProvider.tsx";
import { countryLoader } from "./utils/countryLoader.ts";
import { countriesLoader } from "./utils/countriesLoader.ts";
import { lazy } from "react";
import ErrorPage from "./pages/ErrorPage.tsx";
import App from "./App.tsx";

const LazyCountry = lazy(() => import("./pages/Country.tsx"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10 * 60,
    },
  },
});

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
            loader: countriesLoader(queryClient),
          },
          {
            path: "countries/:countryName",
            element: <LazyCountry />,
            loader: countryLoader(queryClient),
          },
        ],
      },
    ],
  },
];

const router = createHashRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <App router={router} />
      </ThemeProvider>
      <ReactQueryDevtools buttonPosition="bottom-right" />
    </QueryClientProvider>
  </StrictMode>,
);
