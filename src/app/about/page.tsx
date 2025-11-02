import React from "react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            About Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
        </header>

        {/* Content Card */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10">
          <div className="space-y-6 text-lg text-slate-200 leading-relaxed">
            <p>
              Welcome to my personal website! I&apos;m{" "}
              <span className="text-pink-300 font-semibold">August</span>, a
              software engineer and gamer who loves to learn and explore new
              things. I&apos;m passionate about creating innovative and engaging
              digital experiences that make a difference in people&apos;s lives.
            </p>

            <p>
              I&apos;m currently learning how to code web applications using
              Next.js. I hope you&apos;ll find my blog and projects interesting
              and informative.
            </p>

            <p>
              Whether you&apos;re here to learn something new, find inspiration,
              or simply enjoy a good read, I hope you find value in what I
              share. Thank you for being a part of my journey!
            </p>

            <div className="pt-6 border-t border-white/10">
              <p className="text-slate-300 italic">
                I&apos;m going to update this soon, I just need to get an MVP
                off the ground lol.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-wrap gap-4 justify-center">
            <Link
              href="/blog"
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold text-white shadow-lg hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
            >
              Read My Blog
            </Link>
            <Link
              href="/projects"
              className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              View My Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
