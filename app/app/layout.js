import Breadcrumbs from "@/components/Breadcrumb";
import { AppSidebar } from "@/components/sidebar-components/app-sidebar";

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import React from "react";

const layout = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSidebar />

      <main>{children}</main>
    </SidebarProvider>
  );
};

export default layout;
