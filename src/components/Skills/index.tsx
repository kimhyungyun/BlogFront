"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  {
    title: "REACT",
    description:
      "React를 사용 컴포넌트 기반 UI를 개발, 상태 관리, 라우팅을 통해 효율적인 웹을 구축",
    icon: <Image src="/REACT_logo.png" alt="" width={50} height={50} />,
    level: 60,
  },
  {
    title: "NODE.JS",
    description:
      "Node.js와 Express를 활용해 빠르고 확장 가능한 API 서버를 개발",
    icon: <Image src="/NODEJS_logo.png" alt="" width={50} height={50} />,
    level: 50,
  },
  {
    title: "TYPE SCRIPT",
    description:
      "TypeScript로 타입 안전성을 강화하고, 코드의 안정성을 높여 협업 효율을 개선",
    icon: <Image src="/TYPESCRIPT_logo.png" alt="" width={50} height={50} />,
    level: 80,
  },
  {
    title: "NEST.JS",
    description:
      "NestJS로 모듈화된 서버를 개발, MYSQL 기능을 활용해 효율적인 서버 환경을 구축",
    icon: <Image src="/nestjs_logo.png" alt="" width={50} height={50} />,
    level: 70,
  },
];

const additionalTech = [
  "HTML",
  "CSS",
  "JavaScript",
  "Next.JS",
  "Tailwind CSS",
  "Git",
  "MYSQL",
  "Express",
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <h2 className="text-6xl md:text-8xl font-black tracking-tight mb-4 text-slate-900">
            SKILLS
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl">
            제가 가지고 있는 주요 기술 스택들을 소개합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-slate-50 rounded-3xl p-8 shadow-xl"
            >
              <div className="flex items-start gap-6">
                <div className="p-2 bg-white rounded-xl shadow-lg">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black text-slate-900 mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-slate-600 mb-6">{skill.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-bold tracking-wider uppercase">
                      <span className="text-slate-600">
                        Project Utilization
                      </span>
                      <span className="text-slate-900">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="h-full bg-gradient-to-r from-slate-900 to-slate-700"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32"
        >
          <h3 className="text-2xl font-black text-slate-900 mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap gap-4">
            {additionalTech.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-6 py-3 bg-slate-100 text-slate-900 rounded-full text-lg font-bold tracking-wider uppercase hover:bg-slate-200 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
