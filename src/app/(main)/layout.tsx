import MainLayout from "@/components/layout/main";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default Layout;
