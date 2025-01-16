import { useEffect, useState } from "react";
import { Router } from "@remix-run/router";
import { RouterProvider } from "react-router-dom";
import InitialLoading from "./components/InitialLoading";

export default function App({ router }: { router: Router }) {
  const [showInitialLoading, setShowInitialLoading] = useState(true);

  useEffect(() => {
    const intervalID = setInterval(() => {
      const navState = router.state.navigation.state;
      if (navState === "idle") {
        setShowInitialLoading(false);
        clearInterval(intervalID);
      }
    }, 750);

    return () => clearInterval(intervalID);
  }, [router]);

  return (
    <>
      {showInitialLoading ? (
        <InitialLoading />
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
}
