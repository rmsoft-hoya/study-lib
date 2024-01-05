"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

import React from "react";
import Link from "next/link";

// const components: { title: string; description: string }[] = [
//   {
//     title: "Alert Dialog",
//     description: "A modal dialog that interrupts the user with important content and expects a response.",
//   },
//   {
//     title: "Hover Card",
//     description: "For sighted users to preview content available behind a link.",
//   },
//   {
//     title: "Progress",
//     description: "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
//   },
//   {
//     title: "Scroll-area",
//     description: "Visually or semantically separates content.",
//   },
//   {
//     title: "Tabs",
//     description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
//   },
//   {
//     title: "Tooltip",
//     description: "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
//   },
// ];

export function Header() {
  const onClickScroll1 = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const onClickScroll2 = () => {
    window.scrollTo({ top: 1230, left: 0, behavior: "smooth" });
  };
  const onClickScroll3 = () => {
    window.scrollTo({ top: 18000, left: 0, behavior: "smooth" });
  };

  return (
    <header className="h-[70px] w-full z-10 fixed bg-white flex items-center shadow-md ">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-bold text-xl">shadcn/ui</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white">
              <ul className="grid gap-3 p-6 md:w-[300px] cursor-pointer">
                <li className="">
                  <div
                    onClick={onClickScroll1}
                    className="items-center space-y-1 rounded-md p-3 leading-none no-underline outline-none hover:bg-slate-400 hover:text-white focus:bg-accent focus:text-accent-foreground flex"
                  >
                    <Image src={"/img/etc-img/spider_black_logo.png"} alt="amazing" width={50} height={50} className="w-[70px] h-[70px] mr-2" />
                    <div className="flex flex-col justify-center">
                      <h2 className="mb-2">Introduction</h2>
                      <p>Re-usable components built using Radix UI and Tailwind CSS</p>
                    </div>
                  </div>
                </li>
                <li className="">
                  <div
                    onClick={onClickScroll2}
                    className="space-y-1  rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-400 hover:text-white focus:bg-accent focus:text-accent-foreground flex"
                  >
                    <Image src={"/img/etc-img/amazing_spider_black_logo.png"} alt="amazing" width={50} height={50} className="w-[70px] h-[70px] mr-2" />
                    <div className="flex flex-col justify-center">
                      <h2 className="mb-2">Introduction</h2>
                      <p>Re-usable components built using Radix UI and Tailwind CSS</p>
                    </div>
                  </div>
                </li>
                <li className="">
                  <div
                    onClick={onClickScroll3}
                    className="space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-400 hover:text-white focus:bg-accent focus:text-accent-foreground flex"
                  >
                    <Image src={"/img/etc-img/tom_spider_black_logo.png"} alt="amazing" width={50} height={50} className="w-[70px] h-[70px] mr-2" />
                    <div className="flex flex-col justify-center">
                      <h2 className="mb-2">Introduction</h2>
                      <p>Re-usable components built using Radix UI and Tailwind CSS</p>
                    </div>
                  </div>
                </li>
                <li></li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-bold text-xl">
              <Link href="/reactquery">React-Query</Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white"></NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-bold text-xl">
              <Link href="/">Home</Link>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
