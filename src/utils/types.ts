import { IconType } from "react-icons";

export type ButtonVariant = "primary" | "secondary";
export type Size = "sm" | "md" | "lg";

export type SocialMediaLinkType = "discord" | "github" | "linkedin" | "youtube";

export type Route = {
  name: string;
  path: string;
};

export type Skill = {
  name: string;
  Icon: IconType;
  progress: number;
  color: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  src: string;
  pathname: string;
  technologies: string[];
  reverse?: boolean;
  github?: string;
  website?: string;
};
