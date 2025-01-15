import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import Root from "./layouts/Root.tsx";
import Index from "./pages/Index.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";
import { ThemeProvider } from "./contexts/ThemeContext/ThemeProvider.tsx";
import { countryLoader } from "./utils/countryLoader.ts";
import { countriesLoader } from "./utils/countriesLoader.ts";
import { lazy } from "react";

const LazyCountry = lazy(() => import("./pages/Country.tsx"));
const LazyError = lazy(() => import("./pages/ErrorPage.tsx"));

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
    errorElement: <LazyError />,
    children: [
      {
        index: true,
        loader: countriesLoader(queryClient),
        element: <Index />,
      },
      {
        path: "countries/:countryName",
        element: <LazyCountry />,
        loader: countryLoader(queryClient),
        errorElement: <LazyError />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
      <ReactQueryDevtools buttonPosition="bottom-right" />
    </QueryClientProvider>
  </StrictMode>,
);
