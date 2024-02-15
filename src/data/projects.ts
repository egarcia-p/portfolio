export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Recipe App",
    techs: ["ReactJS", "Ruby on Rails", "zod"],
    link: "https://github.com",
    isComingSoon: true,
  },
  {
    title: "Expense App",
    techs: ["ReactJS", "NodeJS"],
    link: "https://",
    isComingSoon: true,
  },
  {
    title: "Portfolio",
    techs: ["Astro"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
