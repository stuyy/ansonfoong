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
  title: string;
  description: string;
  image: string;
  pathname: string;
  technologies: string[];
  github?: string;
  website?: string;
};
