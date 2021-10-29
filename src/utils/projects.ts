import { Project } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Dogwrench",
    description:
      "Dogwrench is an on-going project started in late 2020. The idea originated from a simple Shop Management system for a client that owns a car repair shop, but then evolved into an enterprise application for customers and shop owners. Dogwrench aims to connect customers with shop owners and promote automotive services with discounts.",
    src: "/projects/dogwrench.png",
    reverse: true,
    pathname: "dogwrench",
    technologies: ["React", "Angular", "Nest.js", "MySQL"],
  },
  {
    id: 2,
    title: "Image Upload",
    description:
      "A fun project built live on my YouTube channel to replicate an image uploading platform. Includes features such as protected-mode, where users require a password to view the content, set by the uploader. Spoiler mode, drag-and-drop, and image upload preview with an overlay.",
    src: "/me.png",
    pathname: "image-upload",
    technologies: ["React", "NestJS", "MySQL"],
  },
  {
    id: 3,
    title: "codering.io",
    description:
      "A platform built using GitHub’s API to create mini-hackathon events for my YouTube community. Participants are all given a repository where they can raise pull requests, issues, and comments related to the scope of the event.  Each action tallies a number of points for a participant. Uses a leaderboard system to track leading participants. Built with Angular and Express.",
    src: "/me.png",
    pathname: "codering.io",
    technologies: ["Angular", "Express.js", "MongoDB"],
  },
  {
    id: 4,
    title: "AMEX Growth Hack",
    description:
      "A mobile app built with Flutter to promote minority-owned businesses & small businesses to bring more competition for AMEX merchants. The project was inspired by AMEX's company theme to promote social equity by designing & building a platform promoting AMEX merchants that fell into a minority-owned business, or a small business. Features push notifications from Google Firebase to notify consumers.",
    src: "/me.png",
    pathname: "amex-growth-hack",
    technologies: ["Flutter", "Express"],
    reverse: true,
  },
  {
    id: 2,
    title: "UAlbany Laundry",
    description:
      "Tracks the status of a washer or dryer, all over campus, allowing users to know when a laundry machine is available. Data is fetched from the Service Works API, in XML format. My back-end API was written in Flask, which fetches the laundry machine data and parses it to JSON, and sends it to the front-end, which was built with Ionic 4 & Angular.",
    src: "/projects/laundry.png",
    pathname: "ualbany-laundry",
    technologies: ["Ionic", "Python", "Flask"],
  },
];
