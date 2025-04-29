"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Night view",
    description: "기본 HTML과 CSS를 기반을 중심으로 구성한 개인 프로젝트",
    link: "https://kimhyungyun.github.io/miniProject/",
    gitlink: "https://github.com/kimhyungyun/miniProject/tree/master",
    boardlink: "/dashboard",
    category: "Web Development",
    image: "/나이트뷰프로젝트.png",
    tech: ["HTML", "CSS"],
  },
  {
    title: "Pokemon",
    description:
      "HTML과 CSS을 사용하여 JavaScript를 활용해 카드관리 및 반응형 TEAM 프로젝트",
    link: "https://asom0160.github.io/pokemon_JS_TeamProject/",
    gitlink: "https://github.com/asom0160/pokemon_JS_TeamProject",
    boardlink: "/dashboard",
    category: "Web / MOBILE Development",
    image: "/포켓몬프로젝트.png",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "KDmomnet",
    description:
      "HTML과 CSS을 사용하여 JavaScript와 Gsap을 활용한 미니 개인 프로젝트",
    link: "https://kimhyungyun.github.io/kdmoment/",
    gitlink: "https://github.com/kimhyungyun/kdmoment",
    boardlink: "/dashboard",
    category: "Web Development",
    image: "/경동제약프로젝트.png",
    tech: ["HTML", "CSS", "JavaScript", "Gsap"],
  },
  {
    title: "Twosome",
    description:
      "React기반 TypeScript를 활용하여 Gsap, Swiper, Next.js, Firebase, Tailwinds를 통해 관리자 페이지 등 다양한 기능을 구현한 반응형 TEAM 프로젝트",
    link: "https://project-twosome2.vercel.app/",
    gitlink: "https://github.com/juntae-123/project_twosome2",
    boardlink: "/dashboard",
    category: "Web / MOBILE Development",
    image: "/투썸프로젝트.png",
    tech: [
      "React",
      "Tailwinds",
      "TypeScript",
      "Next.js",
      "Gsap",
      "Swiper",
      "Firebase",
    ],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 bg-gradient-to-b from-slate-50 to-slate-100"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="text-6xl md:text-8xl font-black tracking-tight mb-4 text-slate-900">
            PROJECT
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            주요 프로젝트들을 소개합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="flex flex-col md:flex-row gap-16 items-start">
                <div className="w-full md:w-1/2 order-2 md:order-1">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <span className="text-sm font-bold text-slate-400 block tracking-widest uppercase">
                        {project.category}
                      </span>
                      <h3 className="text-4xl md:text-5xl font-black group-hover:text-slate-900 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-xl text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-bold tracking-wider uppercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-6">
                      <a
                        href={project.gitlink}
                        className="group relative px-8 py-4 bg-slate-900 text-white rounded-lg font-bold text-lg tracking-wider uppercase overflow-hidden hover:bg-slate-800 transition-all duration-300 flex items-center gap-2"
                      >
                        <span className="relative z-10">코드 보기</span>
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
                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                          />
                        </svg>
                      </a>
                      <a
                        href={project.link}
                        className="group relative px-8 py-4 bg-transparent text-slate-900 border-2 border-slate-900 rounded-lg font-bold text-lg tracking-wider uppercase overflow-hidden hover:bg-slate-900 hover:text-white transition-all duration-300 flex items-center gap-2"
                      >
                        <span className="relative z-10">사이트 보기</span>
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
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                      <a
                        href={project.boardlink}
                        className="group relative px-8 py-4 bg-transparent text-slate-900 border-2 border-slate-900 rounded-lg font-bold text-lg tracking-wider uppercase overflow-hidden hover:bg-slate-900 hover:text-white transition-all duration-300 flex items-center gap-2"
                      >
                        <span className="relative z-10">댓글 달기</span>
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
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2 order-1 md:order-2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl transform rotate-3"></div>
                    <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                      <div className="aspect-video bg-slate-100 rounded-lg overflow-hidden flex justify-center items-center ">
                        <img
                          src={project.image}
                          alt=""
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-slate-900/10 group-hover:opacity-0 transition-opacity rounded-3xl"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
