"use client"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle, } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import Link from "next/link";

import {
    Home, Users,
    LeafyGreen,
    ArrowDownToLine,
    BookText,
    Pyramid,
    Wrench,
    FolderClock,
    MessageCircleWarning,
    Braces,
    Menu,
} from "lucide-react"



export function Sidebar() {
    return (
        <div className="flex w-full flex-col bg-muted/40">

            <div className="flex flex-col">
                <header className="sticky top-0 z-30 flex h-14 items-center px-4 
                 border-b border-gray-300 bg-background gap-4 ">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button size='icon' variant="outline">
                                <Menu className="w-5 h-5" />
                                <span className="sr-only">Sidebar menu</span>
                            </Button>
                        </SheetTrigger>

                        <SheetContent side={"left"} className="sm:max-w-x">
                            <DialogTitle>
                                <VisuallyHidden>Robok Engine</VisuallyHidden>

                            </DialogTitle>
                            <nav className="grid gap-6 text-lg font-medium">

                                <div className="flex items-center  gap-4">
                                    <Link
                                        href="#"
                                        className="flex h-10 w-10 bg-primary rounded-xl text-lg 
                                        items-center justify-center text-primary-foreground md:text-base"
                                        prefetch={false} >
                                        <LeafyGreen className="h-5 w-5 transition-all" />
                                        <span className="sr-only">Logo</span>
                                    </Link>
                                    <h1>Robok Engine</h1>
                                </div>

                                <Link
                                    href="/app/index.tsx"
                                    className="flex items-center gap-4 px-2.5 
                                    text-muted-foreground hover:text-foreground"
                                    prefetch={false} >
                                    <Home className="h-5 w-5 transition-all" />
                                    Home
                                </Link>

                                <Link
                                    href="/versions"
                                    className="flex items-center gap-4 px-2.5
                                     text-muted-foreground hover:text-foreground"
                                    prefetch={false} >
                                    <ArrowDownToLine className="h-5 w-5 transition-all" />
                                    Installation
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 
                                    text-muted-foreground hover:text-foreground"
                                    prefetch={false} >
                                    <BookText className="h-5 w-5 transition-all" />
                                    Docs
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 
                                    text-muted-foreground hover:text-foreground"
                                    prefetch={false} >
                                    <Pyramid className="h-5 w-5 transition-all" />
                                    Structure
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 
                                    text-muted-foreground hover:text-foreground"
                                    prefetch={false} >
                                    <Wrench className="h-5 w-5 transition-all" />
                                    Build
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 
                                    text-muted-foreground hover:text-foreground"
                                    prefetch={false} >
                                    <FolderClock className="h-5 w-5 transition-all" />
                                    Versions
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 
                                    text-muted-foreground hover:text-foreground"
                                    prefetch={false} >
                                    <MessageCircleWarning className="h-5 w-5 transition-all" />
                                    About
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 
                                    text-muted-foreground hover:text-foreground"
                                    prefetch={false} >
                                    <Users className="h-5 w-5 transition-all" />
                                    Collabs
                                </Link>

                                <Link
                                    href="#"
                                    className="flex items-center gap-4 px-2.5 
                                    text-muted-foreground hover:text-foreground"
                                    prefetch={false} >
                                    <Braces className="h-5 w-5 transition-all" />
                                    Projects
                                </Link>
                            </nav>
                        </SheetContent>
                    </Sheet>


                    <div className="flex items-center w-full ">
                        <div className="flex items-center w-full justify-around">

                            <div className="flex items-center w-full mx-auto">
                                <h1 className="font-bold text-xl text-gray-900">Robok Engine</h1>
                            </div>

                        </div>
                    </div>
                </header>
            </div>

        </div>
    );
}
