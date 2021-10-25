import {
  FaAngular,
  FaInfinity,
  FaJava,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiSpring, SiGraphql } from "react-icons/si";
import { Route, Skill } from "./types";

export const routes: Route[] = [
  {
    name: "home",
    path: "/home",
  },
  {
    name: "projects",
    path: "/projects",
  },
  {
    name: "courses",
    path: "/courses",
  },
  {
    name: "blog",
    path: "/blog",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export const skills: Skill[] = [
  {
    name: "Node",
    Icon: FaNodeJs,
    progress: 80,
    color: "#3c873a",
  },
  {
    name: "Java",
    Icon: FaJava,
    progress: 80,
    color: "#f89820",
  },
  {
    name: "DevOps",
    Icon: FaInfinity,
    progress: 80,
    color: "#fff",
  },
  {
    name: "React",
    Icon: FaReact,
    progress: 80,
    color: "#61DBFB",
  },
  {
    name: "GraphQL",
    Icon: SiGraphql,
    progress: 80,
    color: "#E10098",
  },
  {
    name: "Angular",
    Icon: FaAngular,
    progress: 75,
    color: "#dd1b16",
  },
  {
    name: "MySQL",
    Icon: SiMysql,
    progress: 70,
    color: "#00758F",
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
    progress: 60,
    color: "#4DB33D",
  },
  {
    name: "Spring",
    Icon: SiSpring,
    progress: 45,
    color: "#6eff61",
  },
];
