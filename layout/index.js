import { useRouter } from "next/router";
import React from "react";
import { AppRoutes } from "../utils/routes";
import { Header } from "./Header";

export const Layout = ({ children }) => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <div>
      {asPath === AppRoutes?.home ? <Header /> : null}
      {children}
    </div>
  );
};
