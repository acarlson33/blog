"use client";

import Link from "next/link";
import { SparklesCore } from "~/components/ui/sparkles";

export default function HomePage() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <div className="w-full absolute inset-0 h-full">
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

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 animate-fade-in">
          Hey, I&apos;m{" "}
          <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            August
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
          Developer, creator, and perpetual learner.
          <br />
          Building cool stuff and sharing the journey.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/blog"
            className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold text-white shadow-lg hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">Read the Blog</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>

          <Link
            href="/projects"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            View Projects
          </Link>

          <Link
            href="/about"
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            About Me
          </Link>
        </div>
      </div>
    </div>
  );
}
