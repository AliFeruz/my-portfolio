import { StaticImageData } from "next/image";

export enum SelectedPage {
    Home = "home",
    About = "about", 
    Projects = "projects",
    Contact = "contact",
  }

export interface ProjectType {
  id: number;
  img: StaticImageData;
  title: string;
  des: string;
  github: string;
  link: string;
  iconLists: Array<StaticImageData>;
  details?: {
    text: string;
    images: Array<{
      des: string;
      img: StaticImageData;
    }>;
  }
}