export type ButtonVariant = "primary" | "secondary";
export type Size = "sm" | "md" | "lg";

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
