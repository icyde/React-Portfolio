import rentomaticImg from "../assets/projects/rentomatic.png";
import resicoImg from "../assets/projects/resicothumbnail.jpg";
import sentimentImg from "../assets/projects/sentiment-analysis.svg";

const projects = [
  {
    title: "Rentomatic",
    description:
      "Rentomatic is a MERN stack Tenant/Landlord portal web application project.",
    img: rentomaticImg,
    videoURL: "https://youtu.be/FDqKiP3M9Ps",
    sourceURL: "https://github.com/icyde/Rentomatic",
  },
  {
    title: "ResiCo",
    description: "Resico is a Java Android Housing application project.",
    img: resicoImg,
    videoURL: "https://youtu.be/4vdS9eLX1i4",
    sourceURL: "https://github.com/icyde/ResiCo",
  },
  {
    title: "ML:Sentiment Analysis",
    description:
      "Machine Learning - Implementation of a sequence labelling model for informal texts using Hidden Markov Models",
    img: sentimentImg,
    videoURL: null,
    sourceURL: "https://github.com/icyde/Sentiment-Analysis",
  },
];

export default projects;
