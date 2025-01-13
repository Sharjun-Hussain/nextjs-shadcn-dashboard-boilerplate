"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ArrowBigRight, ChevronRight, Home, SlashIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Separator } from "./ui/separator";
import { SidebarInset, SidebarTrigger } from "./ui/sidebar";

const Breadcrumbs = () => {
  const path = usePathname();
  const pathArray = path.split("/").filter(Boolean); // To avoid empty string for the root path

  return (
    <div>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />

            <Breadcrumb className="hidden md:flex">
              <BreadcrumbList>
                {pathArray.map((item, index) => (
                  <div
                    key={item}
                    className="flex space-x-1 items-center font-semibold"
                  >
                    <BreadcrumbItem>
                      <BreadcrumbLink
                        href={`/${pathArray.slice(0, index + 1).join("/")}`}
                      >
                        {item == "app" ? (
                          <Home size={16} />
                        ) : (
                          item.charAt(0).toUpperCase() + item.slice(1)
                        )}
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    {index < pathArray.length - 1 && (
                      <BreadcrumbSeparator className="hidden md:block" />
                    )}
                  </div>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
      </SidebarInset>
    </div>
  );
};

export default Breadcrumbs;
