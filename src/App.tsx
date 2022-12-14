import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import WickRick from "./wikiRick";
import WickRickReactQuery from "./wikiRickReactQuery";

import { useRoutes, BrowserRouter, Navigate } from "react-router-dom";
import NavigationBarButton from "./components/NavigateBarButtons";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const Router = () => {
  const element = useRoutes([
    {
      path: "/without-react-query",
      element: (
        <>
          <NavigationBarButton />
          <WickRick />
        </>
      ),
    },
    {
      path: "/react-query",
      element: (
        <>
          <NavigationBarButton />

          <WickRickReactQuery />
        </>
      ),
    },
    {
      path: "*",
      element: <Navigate to="/without-react-query" />,
    },
  ]);
  return element;
};

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default App;
