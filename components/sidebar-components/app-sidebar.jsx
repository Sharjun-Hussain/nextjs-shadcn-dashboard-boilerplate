"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { TeamSwitcher } from "./team-switcher";
import { NavMain } from "./nav-main";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";

// This is sample data.
const data = {
  user: {
    name: "Sharjun Hussain",
    email: "sharjunhussain@outlook.com",
    avatar: "/avatars/joon.jpg",
  },
  teams: [
    {
      name: "Inzeedo",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "HashCore",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "SoftXpertz",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Accounting",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Chart of Accounts",
          url: "#",
        },
        {
          title: "General Ledger",
          url: "#",
        },
        {
          title: "Expense Management",
          url: "#",
        },
        {
          title: "Budgeting",
          url: "#",
        },
        {
          title: "Financial Reports",
          url: "#",
        },
        {
          title: "Audit Logs",
          url: "#",
        },
        {
          title: "Payroll Integration",
          url: "#",
        },
        {
          title: "Tax Management",
          url: "#",
        },
        {
          title: "Bank Reconciliation",
          url: "#",
        },
      ],
    },
    {
      title: "Sales",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Sales Orders",
          url: "#",
        },
        {
          title: "Clients",
          url: "#",
        },
        {
          title: "Invoices",
          url: "#",
        },
      ],
    },
    {
      title: "Inventory Management",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Stock Levels",
          url: "#",
        },
        {
          title: "Incoming Shipments",
          url: "#",
        },
        {
          title: "Inventory Categories",
          url: "#",
        },
        {
          title: "Reorder Management",
          url: "#",
        },
        {
          title: "Outdated Inventory",
          url: "#",
        },
      ],
    },
    {
      title: "Supplier Management",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Manage Suppliers",
          url: "#",
        },
        {
          title: "Purchase Orders",
          url: "#",
        },
      ],
    },
    {
      title: "HR Management",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Employee Management",
          url: "#",
        },
        {
          title: "Payroll",
          url: "#",
        },
        {
          title: "Leave Management",
          url: "#",
        },
        {
          title: "Performance Reviews",
          url: "#",
        },
      ],
    },
    {
      title: "Tender Management",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Active Tenders",
          url: "#",
        },
        {
          title: "Upcoming Tenders",
          url: "#",
        },
        {
          title: "Pending Submissions",
          url: "#",
        },
        {
          title: "Manage Tenders",
          url: "#",
        },
      ],
    },
  ],
  common: [
    {
      name: "Reports & Analytics",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Help & Support",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent className="!overflow-x-hidden">
        <NavMain items={data.navMain} />
        <NavProjects projects={data.common} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
