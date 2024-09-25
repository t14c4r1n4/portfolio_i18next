import { DiMysql } from "react-icons/di";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiPython } from "react-icons/di";
import { DiBootstrap } from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoGit } from "react-icons/bi";
import { BsUbuntu, BsWindows } from "react-icons/bs";
import { BiLogoSass } from "react-icons/bi";
import { BiLogoWordpress } from "react-icons/bi";
import { FaShopware } from "react-icons/fa";
import { BiLogoReact } from "react-icons/bi";

const iconProps = {
  className:
    "size-10 transition-transform duration-300 group-hover:scale-115 group-hover:opacity-100 opacity-50 fill-purple-500 rounded-2xl",
};



const technologies = [
  {
    name: "ubuntu",
    icon: <BsUbuntu {...iconProps}/>
  },
  {
    name: "windows",
    icon: <BsWindows {...iconProps}/>
  },
  {
    name: "git",
    icon: <BiLogoGit {...iconProps}/>
  },
  {
    name: "html",
    icon: <DiHtml5 {...iconProps}/>
  },
  {
    name: "css",
    icon: <DiCss3 {...iconProps}/>
  },
  {
    name: "javascript",
    icon: <BiLogoJavascript {...iconProps}/>
  },
  {
    name: "react",
    icon: <BiLogoReact {...iconProps}/>
  },
  {
    name: "python",
    icon: <DiPython {...iconProps}/>
  },
  {
    name: "mysql",
    icon: <DiMysql {...iconProps}/>
  },
  {
    name: "wordpress",
    icon: <BiLogoWordpress {...iconProps}/>
  },
  {
    name: "shopware",
    icon: <FaShopware {...iconProps}/>
  },
  {
    name: "tailwind",
    icon: <BiLogoTailwindCss {...iconProps}/>
  },
  {
    name: "bootstrap",
    icon: <DiBootstrap {...iconProps}/>
  },
  {
    name: "sass",
    icon: <BiLogoSass {...iconProps}/>
  }

];

export { technologies, iconProps };