"use client"

import { useScrollTop } from "@/hooks/use-scroll-top";
import { SignInButton,UserButton } from "@clerk/clerk-react";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

export const Navbar = () => {
    const { isAuthenticated, isLoading} = useConvexAuth();
    return (
        <div className={cn("z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6",useScrollTop() && "border-b shadow-sm")}>
            <Logo/>
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                {isLoading && (<p><Spinner></Spinner></p>)}
                {!isAuthenticated && !isLoading && (
                    <>
                        <SignInButton mode="modal">
                            <Button variant="ghost" size="sm">
                                Log in
                            </Button>
                        </SignInButton>

                        <SignInButton mode="modal">
                            <Button size="sm">
                                Get Notion Free
                            </Button>
                        </SignInButton>
                    </>)}
                {isAuthenticated && !isLoading && (
                    <>
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/documents">
                                Enter Notion
                            </Link>
                        </Button>
                        <UserButton>
                            afterSignOutUrl = "/"
                        </UserButton>
                    </>
                )}
                <ModeToggle/>
            </div>

        </div>
    );
}
