import { SiGithub } from "@icons-pack/react-simple-icons";
import { Link } from "@tanstack/react-router";
import { Bug, HomeIcon, LucideFlag, MapIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const AppNav = () => {
  return (
    <NavigationMenu className="px-2 md:px-20 py-4 flex items-center justify-between w-full max-w-full">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/" className={navigationMenuTriggerStyle()}>
            <HomeIcon size={24} />
            <span className="hidden md:inline">Home</span>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/maps" className={navigationMenuTriggerStyle()}>
            <MapIcon size={24} />
            <span className="hidden md:inline">Maps</span>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="/flags" className={navigationMenuTriggerStyle()}>
            <LucideFlag size={24} />
            <span className="hidden md:inline">Flags</span>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <div className="flex items-center">
        <a
          href="https://github.com/iequivocality/japan-prefectures-react/issues"
          target="_blank"
          rel="noreferrer"
          title="File a issue here"
          className="px-4"
        >
          <Bug size={24} />
        </a>
        <a
          href="https://github.com/iequivocality/japan-prefectures-react"
          target="_blank"
          rel="noreferrer"
          title="Go to Github"
          className="px-4"
        >
          <SiGithub size={24} />
        </a>
      </div>
    </NavigationMenu>
  );
};
