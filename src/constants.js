// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import zgenLogo from './assets/company_logo/zgen_logo.png';
import gfgLogo from './assets/company_logo/gfg_logo.png';

// Education Section Logo's
import lloydLogo from './assets/education_logo/lloyd_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind', logo: tailwindcssLogo },
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node Js', logo: nodejsLogo },
      { name: 'Express Js', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: zgenLogo,
      role: "MERN Stack Developer",
      company: "Zgen Studio",
      date: "Feburary 2025 - March 2025",
      desc: "My role included fixing bugs, optimizing performance, and implementing new features to enhance user experience and ensure seamless functionality.I collaborated closely with the design and development teams to align web solutions with the studio’s creative goals and technical requirements.  ",
      skills: [
        "React JS",
        " Next Js",
        "MongoDB",
        "Express Js",
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
         "Tailwind CSS",
         "Redux",
      ],
    },
    {
      id: 1,
      img: gfgLogo,
      role: "Technical Content Writer Intern",
      company: "Geeks For Geeks",
      date: "January 2023 - July 2023",
      desc: "Contributed to 150+ DSA Articles,Writing articles on GeeksforGeeks helps in improving a lot of skills, including your writing skills and how you make others understand your thoughts. Apart from it, you also come to know various other approaches which can be used to solve the same problem, and ways to optimize your code.",
      skills: [
        "Data Structures",
        "Critical Thinking",
        "Problem Solving",
        "Algorithmic Thinking",
   
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: lloydLogo,
      school: "Lloyd Institute of Engineering & Technology, Gr.Noida",
      date: "Sept 2022 - July 2024",
      grade: "7.81 CGPA",
      desc: "I hold a B.Tech degree from Lloyd Institute of Engineering & Technology with an overall CGPA of 7.7. During my academic journey, I gained a strong foundation in core electronics subjects while also expanding my expertise in software development. I have hands-on experience in programming, Data Structures and Algorithms (DSA), and full-stack web development using the MERN stack.",
      degree: "Bachelor Of Technology",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Blog.Ai-Blogging Platform",
      image: githubdetLogo,
      tags: ["ReactJs","JavaScript","TailwindCSS", "Expressjs", "MongoDB"],
      github: "https://github.com/karankumarece19/Blog.AI",
      webapp: "https://blog-aii.vercel.app/",
    },
    {
      id: 1,
      title: "Ai-Chat Assistant",
      image: movierecLogo,
      tags: ["React JS", "Gemini-AI", "TailwindCSS", "JavaScript"],
      github: "https://github.com/karankumarece19/Ai-Chatbot-using-React",
      webapp: "https://ai-chatbot-using-react.vercel.app/",

    },
    {
      id: 2,
      title: "Fantasy 11 – Sports Web App",
      image: csprepLogo,
      tags: ["JavaScript", "JQuery", "Node.js", "Express.js", "Sequelize (ORM)"],
      github: " https://github.com/karankumarece19/Fantasy11",
      webapp: "https://fantasy11-khaki.vercel.app/",
    },
  ];  