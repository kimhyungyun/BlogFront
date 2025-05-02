"use client";

import { motion } from "framer-motion";
import "../../../styles/Video.css";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video z-0"
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="sectionvideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 opacity-5"></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4 mt-24 md:mt-20">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block px-6 py-2 bg-slate-200 text-slate-600 rounded-full text-sm font-bold tracking-wider uppercase"
              >
                Full Stack Developer
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-7xl font-black tracking-tight leading-tight"
              >
                <span className="block text-slate-900">안녕하세요,</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700">
                  김현균입니다.
                </span>
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-slate-600 max-w-md leading-relaxed"
            >
              사용자의 행동을 이해하고, 기술로 해답을 제시하는
              <br />
              풀스택 개발자 입니다
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-slate-900 text-white rounded-lg font-bold text-lg tracking-wider uppercase overflow-hidden hover:bg-slate-800 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span className="relative z-10">프로젝트</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-transparent text-slate-900 border-2 border-slate-900 rounded-lg font-bold text-lg tracking-wider uppercase overflow-hidden hover:bg-slate-900 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span className="relative z-10">연락하기</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl transform rotate-3"></div>
            <div className="relative bg-white rounded-3xl p-8 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-full"></div>
                  <div>
                    <h3 className="font-bold text-slate-900">김현균</h3>
                    <p className="text-sm text-slate-600">
                      Full Stack Developer
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <p className="text-sm text-slate-600">경력</p>
                    <p className="font-bold text-slate-900">신입</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <p className="text-sm text-slate-600">기술</p>
                    <p className="font-bold text-slate-900">React, Next.js</p>
                  </div>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg">
                  <p className="text-sm text-slate-600">주요 스킬</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {[
                      "HTML",
                      "CSS",
                      "JavaScript",
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Tailwind CSS",
                      "Node.js",
                      "Express",
                      "MySQL",
                      "Git",
                      "GitHub",
                      "Nest.js",
                    ].map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white text-slate-900 rounded-full text-sm font-bold tracking-wider uppercase border border-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-1 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-1 bg-gray-400 rounded-full"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
