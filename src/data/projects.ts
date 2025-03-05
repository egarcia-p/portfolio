export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "CoupleCents App",
    techs: ["NextJS", "TailwindCSS", "PostgreSQL", "Drizzle ORM", "Vercel"],
    link: "https://github.com/egarcia-p/couple-cents/",
    isComingSoon: false,
  },
  {
    title: "Javamex",
    techs: ["Astro", "TailwindCSS"],
    link: "https://javamex.com.mx/",
    isComingSoon: false,
  },
  {
    title: "Recipe App",
    techs: ["NextJS", "TailwindCSS", "Ruby on Rails", "Auth0"],
    link: "https://github.com",
    isComingSoon: true,
  },
];

export default projects;
