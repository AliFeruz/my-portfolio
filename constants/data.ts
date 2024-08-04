import pokedex from "@/public/assets/projectsimg/pokedex.png";

import rakhudu from "@/public/assets/projectsimg/rakhudu/first.png";
import rakhudu3 from "@/public/assets/projectsimg/rakhudu/third.png";
import rakhudu4 from "@/public/assets/projectsimg/rakhudu/fourth.png";

import gabriela from "@/public/assets/projectsimg/gabriela/main.png";
import gabr1 from '@/public/assets/projectsimg/gabriela/example.png'
import gabr2 from '@/public/assets/projectsimg/gabriela/contactpage.png'

import crud from '@/public/assets/projectsimg/crud/main.png'
import note from '@/public/assets/projectsimg/crud/note.png'
import notebutton from '@/public/assets/projectsimg/crud/notebutton.png'
import crudprofile from '@/public/assets/projectsimg/crud/profile.png'

import fakestore from '@/public/assets/projectsimg/fakestore/main.png'
import fakestoresales from '@/public/assets/projectsimg/fakestore/sales.png'
import fakestoresub from '@/public/assets/projectsimg/fakestore/subsrcibtion.png'
import fakestoretest from '@/public/assets/projectsimg/fakestore/testimonials.png'
import fakestoreprod from '@/public/assets/projectsimg/fakestore/productcard.png'
import fakestoresel from '@/public/assets/projectsimg/fakestore/select.png'



import { ProjectType } from "@/types";

import Html from "@/public/assets/skills/html.png";
import Css from "@/public/assets/skills/css.png";
import Javascript from "@/public/assets/skills/javascript.png";
import TS from "@/public/assets/skills/typescript-icon.png";
import ReactImg from "@/public/assets/skills/react.png";
import NextJS from "@/public/assets/skills/LogoNext.png";
import Tailwind from "@/public/assets/skills/tailwind.png";
import NodeJs from "@/public/assets/skills/node.png";
import MongoDb from "@/public/assets/skills/mongo.png";
import Firebase from "@/public/assets/skills/firebase.png";
import GraphQL from "@/public/assets/skills/graphql-icon.svg";
import Git from "@/public/assets/skills/Git-Icon-1788C.png";
import Github from "@/public/assets/skills/github_dark.png";
import AWS from "@/public/assets/skills/aws.png";
import FM from '@/public/assets/skills/fm.svg'

export const Techs = [
  { name: "HTML", img: Html, level: "Advanced" },
  { name: "CSS", img: Css, level: "Advanced" },
  { name: "JavaScript", img: Javascript, level: "Advanced" },
  { name: "TypeScript", img: TS, level: "Advanced" },
  { name: "React", img: ReactImg, level: "Advanced" },
  { name: "Next", img: NextJS, level: "Advanced" },
  { name: "Tailwind", img: Tailwind, level: "Advanced" },
  { name: "NodeJS", img: NodeJs, level: "Advanced" },
  { name: "MongoDB", img: MongoDb, level: "Advanced" },
  { name: "Firebase", img: Firebase, level: "Basic" },
  { name: "AWS", img: AWS, level: "Advanced" },
  { name: "GraphQL", img: GraphQL, level: "Basic" },
  { name: "Git", img: Git, level: "Basic" },
  { name: "Github", img: Github, level: "Basic" },
  { name: "FM", img: FM, level: "Basic" },
];

export const projects: Array<ProjectType> = [
  {
    id: 1,
    img: crud,
    title: "CRUD",
    des: "Full Stack project. To build this project I used technologies like TS, JS, TailwindCSS, Express, NodeJS, Mongoose, MongoDB and more",
    iconLists: [ReactImg, Tailwind, TS, Html, Css, MongoDb, NodeJs],
    github: "https://github.com/AliFeruz/crud",
    link: "https://crud-notes-app.vercel.app/",
    details: {
      text: 'Welcome to our beautifully crafted Notes WebApp, designed to streamline your note-taking experience. This application is built with a modern tech stack including Next.js, NextAuth for authentication, Tailwind CSS for stunning and responsive design, and Shadcn for rich UI components. Our data management is powered by Mongoose and MongoDB, ensuring efficient and scalable data handling.',
      images: [
        {
          des: "Note modal",
          img: note,
        },
        {
          des: "Note cards",
          img: crud,
        },
        {
          des: "Note settings",
          img: notebutton,
        },
        {
          des: "Profile modal",
          img: crudprofile,
        },
      ],
    },
  },
  {
    id: 2,
    img: gabriela,
    title: "Portfolio",
    des: "The website showcases Gabriela's data visualizations using a bento grid layout, providing a clean and organized display of her work.",
    iconLists: [ReactImg, Tailwind, TS, Html, Css],
    github: "https://github.com/AliFeruz/Gabriela-Arlt",
    link: "https://gabriela-arlt.vercel.app/",
    details: {
      text: 'I built this portfolio website for Gabriela Arlt, a data visualization expert. The project is developed using React and styled with Tailwind CSS, ensuring a responsive and modern user interface.',
      images: [
        {
          des: "Data card",
          img: gabr1,
        },
        {
          des: "Contact form",
          img: gabr2,
        },
      ],
    },
  },
  {
    id: 3,
    img: fakestore,
    title: "FakeStore",
    des: "The main goal of this project is to create a web application that fetches data from the Fakestore API and displays products dynamically.",
    iconLists: [ReactImg, Tailwind, TS, Html, Css, FM, NextJS],
    github: "https://github.com/AliFeruz/fake-store-next",
    link: "https://fakestore-next.vercel.app/",
    details: {
      text: 'This project is built using Next.js, a React framework that enables Server-Side Rendering (SSR) and Static Site Generation (SSG). The main goal of this project is to create a web application that fetches data from the Fakestore API and displays products dynamically.',
      images: [
        {
          des: "Sales section",
          img: fakestoresales,
        },
        {
          des: "Testimonials section",
          img: fakestoretest,
        },
        {
          des: "Subscription section",
          img: fakestoresub,
        },
        {
          des: "Product",
          img: fakestoreprod,
        },
        {
          des: "Product sorting",
          img: fakestoresel,
        },
      ],
    },
  },
  {
    id: 4,
    img: rakhudu3,
    title: "Rakhudu",
    des: "This is the React project on which Im still working with young artist Rakhudu",
    iconLists: [ReactImg, Tailwind, TS, Html, Css, FM],
    github: "https://github.com/AliFeruz/Rakhudu",
    link: "https://marggraff.vercel.app/",
    details: {
      text: 'I developed this portfolio website for Marggraff using a combination of modern web technologies, including React, TypeScript, Tailwind CSS, and Framer Motion. The website showcases Marggraff`s projects and professional experience in a visually appealing and interactive manner.',
      images: [
        {
          des: "About section",
          img: rakhudu,
        },
        {
          des: "Card",
          img: rakhudu3,
        },
        {
          des: "Contact me section",
          img: rakhudu4,
        },
      ],
    },
  },
  {
    id: 5,
    img: pokedex,
    title: "Pokemon",
    des: "This project builded with HTML, CSS and JS during the learning process",
    iconLists: [Html, Css, Javascript],
    github: "https://github.com/AliFeruz/pokedex",
    link: "https://pokedex1gen.vercel.app/index.html",
  },
];
