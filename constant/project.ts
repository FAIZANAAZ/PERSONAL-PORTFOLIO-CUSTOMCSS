import { IconType } from 'react-icons';
import { FaCss3, FaReact, FaNpm } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssLine, RiNextjsFill } from "react-icons/ri";

 interface Project {
  id: number;
  name: string;
  deploymentLink: string;
  sourceLink: string;
  icon1?: IconType;
  icon2?: IconType;
  icon3?: IconType;
  icon4?: IconType;
  image: string;
}

export const dataProjects: Project[] = [
  {
    id: 1,
    name: "Resume Builder",
    deploymentLink: "https://resume-theta-hazel.vercel.app/",
    sourceLink: "https://github.com/FAIZANAAZ/RESUME_BUILDER",
    icon1: RiTailwindCssLine,
    icon2: SiTypescript,
    image: "/Images/p3.jpg",
  },
  {
    id: 2,
    name: "MULTI PAGE WEBSITE",
    deploymentLink: "https://multipage-web-seven.vercel.app/",
    sourceLink: "https://github.com/FAIZANAAZ/MULTIPAGE_WEB",
    icon1: RiTailwindCssLine,
    icon2: SiTypescript,
    icon3: RiNextjsFill,
    icon4: FaReact,
    image: "/Images/p5.jpg",
  },
  {
    id: 3,
    name: "Pana Cloude Website",
    deploymentLink: "https://panacloud-web-khaki.vercel.app/",
    sourceLink: "https://github.com/FAIZANAAZ/PANACLOUD_WEB",
    icon1: RiTailwindCssLine,
    image: "/Images/p1.jpg",
  },
  {
    id: 4,
    name: "Portfolio Website",
    deploymentLink: "https://portfolio-web-html-css.vercel.app/",
    sourceLink: "https://github.com/FAIZANAAZ/PORTFOLIO_WEB_HTML_CSS",
    icon1: FaCss3,
    icon2: SiTypescript,
    image: "/Images/p2.jpg",
  },
  {
    id: 5,
    name: "Todo List",
    deploymentLink: "https://todo-list-six-zeta-10.vercel.app/",
    sourceLink: "https://github.com/FAIZANAAZ/Todo-list",
    icon1: FaCss3,
    icon2: SiTypescript,
    image: "/Images/p4.jpg",
  },
];