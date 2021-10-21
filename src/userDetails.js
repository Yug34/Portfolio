import allbotImg from "./images/Projects/discord-small.png";
import covidImg from "./images/Projects/coronavirus.png";
import seamlessImg from "./images/Projects/volume.png";
import portfolioGenImg from "./images/Projects/portfolioGen.png";
import csvqlImg from "./images/Projects/csvql.png";

import jsSkillImage from "./images/Skills/javascript.png";
import typescriptSkillImage from "./images/Skills/typescript.png";
import reactSkillImage from "./images/Skills/react.png";
import expressSkillImage from "./images/Skills/express.png";
import cppSkillImage from "./images/Skills/cpp-small.png";
import pythonSkillImage from "./images/Skills/py.png";
import djangoSkillImage from "./images/Skills/django.png";

const userDetails = {
  projectList: [
    {
      name: "AllBOT",
      keywords: ["All", "BOT"],
      image: allbotImg,
      imageScale: "1",
      description: [
        "Discord bot written in Node.js",
        "Stream music from YouTube",
        "Currency system with Mongoose",
        "..and a shop too!",
        "Snarky.",
        "Kanye quotes in case you need them",
        "Aren't you sold already?",
      ],
      link: "https://github.com/Yug34/allBOT",
    },
    {
      name: "CovDetect",
      keywords: ["COV", "Detect"],
      image: covidImg,
      imageScale: "1",
      description: [
        "Made a DNN off ResNet50v2 to classify X-rays of human lungs into normal, pneumonia and covid cases.",
        "~94.5% accuracy on the validation set",
        "... and ~96.6 on the test set!",
        "Oh and only 0.78% false negatives.",
        "And hey, this project also won our team the IBM innovation camp 2021.",
      ],
      link: "https://github.com/Yug34/cov-detect",
    },
    {
      name: "Seamless",
      keywords: ["Music", "Player"],
      image: seamlessImg,
      imageScale: "1",
      description: ["Soon ^-^"],
      link: "https://github.com/SeamlessOrg/seamless-backend",
    },
    {
      name: "PortfolioGen",
      keywords: ["site", "gen"],
      image: portfolioGenImg,
      imageScale: "1",
      description: [
        "React.js web application that takes user data as input",
        "Stores data as a JSON object",
        "Produces a website as output from the JSON",
        "Output website is a react app, hostable on gh pages",
        "...which basically this site, just less personalised.",
      ],
    },
    {
      name: "CSVQL",
      keywords: ["get da", "dayta"],
      image: csvqlImg,
      imageScale: "0.6",
      description: [
        "React.js web application to make SQL queries against CSV (and other) files.",
        "Used AlaSQL.js to download, store, and operate on data stored in client's memory.",
        "Has functionality to upload CSV files directly from client's system",
        "..or fetch through an external link",
        "..or even just type in data as input and operate on that.",
        "Ability to download data and the queried results directly to PC as a CSV file, neat!",
        "And the best part, this is all client-side, magic! :)",
      ],
      link: "https://github.com/Yug34/sql-csv-editor",
    },
  ],
  nameTitles: [
    "Software Engineer",
    "Student Researcher",
    "<i class='greentext'>Future colleague of yours maybe?</i>",
    "Machine Learning guy",
    "Open sourcerer",
  ],
  seeVee: {
    cvLink: "https://raw.githubusercontent.com/Yug34/SeeVee/master/Yug_CV.pdf",
    cvText: [
      "Is that you? Finally! I've been waiting here, where have you been? How are you?",
      "It's been ages, I feel like we don't know each other anymore.",
      "We were really close, weren't we? Or maybe I'm getting you mixed up, it really has been that long.",
      "Well, that's all behind us now, I'm just glad that you have come found me here.",
      "I've been so preoccupied lately that I must have forgotten to call.",
      "I'm sorry. The energy lies in learning, anyway, I'll learn to be better. For you, to you.",
      "I've been thinking a lot about us. What we could be... it sounds silly.",
    ],
  },
  skills: [
    {
      title: "JavaScript",
      symbol: [
        jsSkillImage,
        typescriptSkillImage,
        reactSkillImage,
        expressSkillImage,
      ],
      scale: 0.9,
      description: [
        'Don\'t really need to say much about JS, this is my "main" language, which is use virtually ' +
          "everyday to build software and the language which's landscape I know the most about.",
        "Currently I work on the Front-End with React.js, I also like to think I am good at optimizing web applications on the Front-End, " +
          "<a class='greenLink' target='_blank' rel='noopener noreferrer' href='https://drive.google.com/file/d/1CzE0ZgvGVz5feIMMeqUxgLfLRoCYVoTU/view'>here's</a> my research paper about it.",
        "I work on the Back-End with Express, a sample of my work is <a class='greenLink' target='_blank' rel='noopener noreferrer' href='https://github.com/Yug34/gravity-backend'>Gravity</a>. " +
          "I recently decided to shift to TypeScript for the Back-End, so I suppose you will some TS projects here soon.",
      ],
    },
    {
      title: "C++",
      symbol: [cppSkillImage],
      scale: 0.6,
      description: [
        "I use C++ to work on scientific software (like <a class='greenLink' target='_blank' rel='noopener noreferrer' href='https://github.com/JeffersonLab/remoll/tree/develop'>remoll</a>) and to do some competitive programming for fun.",
      ],
    },
    {
      title: "Python for Machine Learning",
      symbol: [pythonSkillImage],
      scale: 0.6,
      description: [
        "I use C++ to work on scientific software (like <a class='greenLink' target='_blank' rel='noopener noreferrer' href='https://github.com/JeffersonLab/remoll/tree/develop'>remoll</a>) and to do some competitive programming for fun.",
      ],
    },
    {
      title: "Python for Web Development",
      symbol: [pythonSkillImage, djangoSkillImage],
      scale: 0.6,
      description: [
        "The language I started my Web Development journey with! I used Django to make <a class='greenLink' target='_blank' rel='noopener noreferrer' href='https://github.com/Yug34/stupid-blog'>a blog</a>",
      ],
    },
  ],
};

export default userDetails;
