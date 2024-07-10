// import { BsFillBootstrapFill, BsRobot } from 'react-icons/bs';
import { Icon } from "@iconify-icon/react";
import {
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJquery,
  SiMui,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostman,
  SiPrisma,
  SiPwa,
  SiPython,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWebpack,
  SiWordpress,
  SiFigma,
} from "@icons-pack/react-simple-icons";

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 24;

const customIconStyle = {
  width: `${iconSize}px`,
  height: `${iconSize}px`,
};

export const STACKS: stacksProps = {
  Python: <Icon icon="logos:python" width="30" height="30" color="default" />,
  Java: <Icon icon="devicon:java" width="30" height="30" color="default" />,
  JavaScript: <SiJavascript size={iconSize} color="default" />,
  TypeScript: <SiTypescript size={iconSize} color="default" />,
  "Next.js": <SiNextdotjs size={iconSize} color="default" />,
  "React.js": <SiReact size={iconSize} color="default" />,
  TailwindCSS: <SiTailwindcss size={iconSize} color="default" />,
  "Material UI": <SiMui size={iconSize} color="default" />,
  Vite: <Icon icon="devicon:vitejs" width="30" height="30" color="default" />,
  Firebase: (
    <Icon icon="devicon:firebase" width="30" height="30" color="default" />
  ),
  "Node.js": <SiNodedotjs size={iconSize} color="default" />,
  HTML5: <SiHtml5 size={iconSize} color="default" />,
  CSS: <SiCss3 size={iconSize} color="default" />,
  Bootstrap: <SiBootstrap size={iconSize} color="default" />,
  Express: <SiExpress size={iconSize} color="default" />,
  Git: <SiGit size={iconSize} color="default" />,
  Github: (
    <Icon
      icon="skill-icons:github-dark"
      width="30"
      height="30"
      color="default"
    />
  ),
  Figma: <Icon icon="logos:figma" width="30" height="30" color="default" />,
  Netlify: (
    <Icon
      icon="vscode-icons:file-type-light-netlify"
      width="30"
      height="30"
      color="default"
    />
  ),
  // GithubPages: (
  //   <Icon
  //     icon="simple-icons:githubpages"
  //     width="30"
  //     height="30"
  //     color="default"
  //   />
  // ),
};
