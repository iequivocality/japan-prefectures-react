import { SiGithub } from "@icons-pack/react-simple-icons";
import { Link } from "@tanstack/react-router";
import { Bug, HomeIcon, LucideFlag } from "lucide-react";
import React from "react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, navigationMenuTriggerStyle } from "./navigation-menu";

export const AppNav = () => {
  return (
    <NavigationMenu className="px-20 py-4 flex items-center justify-between w-full max-w-full">
      <NavigationMenuList className="flex gap-x-6">
        <NavigationMenuItem>
          <Link to="/" className={navigationMenuTriggerStyle()}>
            <HomeIcon size={24}/>
            Home
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/flags" className={navigationMenuTriggerStyle()}>
            <LucideFlag size={24}/>
            Flags
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <div className="flex items-center gap-x-6">
        <a
          href="https://github.com/iequivocality/japan-prefectures-react/issues"
          target="_blank"
          rel="noreferrer"
          title="File a issue here"
        >
          <Bug size={24} />
        </a>
        <a
          href="https://github.com/iequivocality/japan-prefectures-react"
          target="_blank"
          rel="noreferrer"
          title="Go to Github"
        >
          <SiGithub size={24} />
        </a>
      </div>
    </NavigationMenu>
  );
}