import React from "react";
import { useRouter } from "next/router";
import { Header } from "./Header";

export const Layout = ({ children }) => {
  const router = useRouter();
  const { asPath } = router;

  return (
    <div>
      {asPath === "/" ? <Header /> : null}
      {children}
    </div>
  );
};
