"use client";

import Link from "next/link";
import { Button } from "~/components/ui/button";
import { SparklesCore } from "~/components/ui/sparkles";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={1.5}
          maxSize={1.9}
          particleDensity={150}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="flex-col text-3xl">
          <h1 className="mb-0.5">Hai, I&apos;m August...</h1>
          <p>I&apos;m a software engineer, a gamer, and a learner.</p>
        </div>
      </div>
      <div className="flex-1 flex items-center absolute bottom-20">
        <div className="flex-col text-2xl justify-center items-center">
          <p>You can find my stuff here:</p>
          <Link href="/blog" className="p-0 m-0">
            <Button>My blog</Button>
          </Link>
          <Link href="/projects" className="p-0 m-0 ml-1">
            <Button>My projects</Button>
          </Link>
          <Link href="/about" className="p-0 m-0 ml-1">
            <Button>About me</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
