type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "eugenio5039@gmail.com",
  title: "👋 Hi, I’m Eugenio(eyoo-heh-nyoh 🔈)",
  description:
    "I'm a skilled software developer with experience in multiple programming languages. With over a decade of experience, I have a strong background in back end development, including database development with SQL. <br><br> I thrive in collaborative environments, I have successfully worked with teams across different countries. I am known for being supportive, friendly, and hardworking, always striving for continuous learning through coaching, on-the-job learning and training. <br><br>  I am well-versed in Agile processes and have experience with the full software development lifecycle. Outside of work, I enjoy taking my dog to the park for walks and have a passion for cooking, especially barbecuing.",
  socials: [
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/ergarciag/",
    },
    {
      label: "Github",
      link: "https://github.com/egarcia-p",
    },
  ],
};

export default presentation;
