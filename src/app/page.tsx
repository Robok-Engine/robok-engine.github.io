"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileBox, Github } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-transparent">
      <section className="grid gap-2 bg-gradient-to-b from-[#94b5fc]">

        <Card className="w-full bg-transparent bg-opacity-40 min-h-screen">

          <div className="flex items-center mt-7 justify-center sm:ml-14 max-sm:flex max-sm:flex-col">
            <div className="flex items-center flex-col">
              <CardHeader>
                <div className="flex items-center justify-center w-full ">
                  <CardTitle className="flex items-center justify-center select-none">
                    <h1 className="text-3xl my-2 sm:text-6xl font-bold"> Robok Engine </h1>
                  </CardTitle>
                </div>
                <CardDescription className="flex items-center  w-full">
                  <p className="flex items-center justify-center text-center text-2xl text-foreground  select-none">
                    Code and build mobile apps & games, with Robok Engine
                  </p>
                </CardDescription>
              </CardHeader>
              <CardContent>

                <div className="flex items-center w-full gap-6">
                  <a href="/versions">
                    <Button>
                      <div className="flex items-center justify-center gap-4">
                        <span className="text-md">Get Started</span>
                        <FileBox />
                      </div>
                    </Button>
                  </a>

                  <a href="https://github.com/Robok-Engine/Robok-Engine">
                    <Button variant={"outline"}>
                      <div className="flex items-center justify-center gap-4">
                        <span className="text-md">Github</span>
                        <Github />
                      </div>
                    </Button>
                  </a>

                </div>
              </CardContent>
            </div>


            <div className="flex items-center justify-center">
              <img
                src="/img/app-robok-black.png"
                alt="App robok"
                className="mt-4 w-2/5 h-auto max-sm:w-3/4  max-md:w-3/4 select-none"
              />
            </div>
          </div>


        </Card>

      </section>
    </main>
  );
}
