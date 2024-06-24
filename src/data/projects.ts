export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "CoupleCents App",
    techs: ["NextJS", "TailwindCSS", "PostgreSQL","Drizzle ORM", "Vercel"],
    link: "https://github.com/egarcia-p/couple-cents",
    isComingSoon: false,
  },
  {
    title: "Recipe App",
    techs: ["ReactJS", "Ruby on Rails", "zod"],
    link: "https://github.com",
    isComingSoon: true,
  },
  {
    title: "Javamex",
    techs: ["Astro", "TailwindCSS"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
