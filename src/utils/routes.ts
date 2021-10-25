export type Route = {
  name: string;
  path: string;
};

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
