export type Project = {
  title: string;
  description: string;
  src: string;
  reverse?: boolean;
  github?: {
    url: string;
  };
  website?: {
    url: string;
  };
};

export const projects: Project[] = [
  {
    title: "UAlbany Laundry",
    description:
      "Tracks the status of a washer or dryer, all over campus, allowing users to know when a laundry machine is available. Data is fetched from the Service Works API, in XML format. My back-end API was written in Flask, which fetches the laundry machine data and parses it to JSON, and sends it to the front-end, which was built with Ionic 4 & Angular.",
    src: "/me.png",
  },
  {
    title: "Dogwrench",
    description:
      "Dogwrench is an on-going project started in late 2020. The idea originated from a simple Shop Management system for a client that owns a car repair shop, but then evolved into an enterprise application for customers and shop owners. Dogwrench aims to connect customers with shop owners and promote automotive services with discounts.",
    src: "/me.png",
    reverse: true,
  },
  {
    title: "codering.io",
    description:
      "A platform built using GitHub’s API to create mini-hackathon events for my YouTube community. Participants are all given a repository where they can raise pull requests, issues, and comments related to the scope of the event.  Each action tallies a number of points for a participant. Uses a leaderboard system to track leading participants. Built with Angular and Express.",
    src: "/me.png",
  },
];