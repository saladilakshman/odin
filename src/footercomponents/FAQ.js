import React, { useState } from "react";
//import Question from "./path";
import "./foot.css";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
export default function Questions() {
  const accordionData = [
    {
      id: 1,
      question: `Who is the odin project for?`,
      answer: `The Odin Project is for absolute beginners in the world of web development and those who have tried other resources without success. In reality, The Odin Project is for anyone who wants to work as a web developer, do freelancing work, build a startup, or just hack together a homepage for yourself. All the tools you need are here. You should consider yourself fairly competent with personal computers and open to using a non-Windows based Operating System.

We've built an in-depth curriculum designed to take you 100% of the way to becoming a web developer. Many other resources out there teach you just the basics of programming. With The Odin Project, you'll create your own websites, games, and social media sites.

The curriculum has also been designed in a modular fashion, making skimming through lessons a breeze.`
    },
    {
      id: 2,
      question: `What is the goal of the din project?`,
      answer: `The goal of The Odin Project is to provide a complete path for students to go from zero programming knowledge to employed as web developers while working with other students and picking up the skills to become self sufficient along the way.`
    },
    {
      id: 3,
      question: `How long does Odin Project take?`,
      answer: `We won't have any of this 'Learn it all in two days!' BS. You can't start from scratch and learn true web development in such a short period of time and you know it. It's highly unlikely that you'll be employable after a weekend workshop or a one-month part-time course.

  On the other hand, you don't necessarily need to put in 4 years getting a computer science degree. 80% of what they cover won't be used during a typical web developer's early career and it's not necessary to get hired. So why not learn the 20% and learn the rest while you're getting paid on the job?`
    },
    {
      id: 4,
      question: `Which technologies can one expect to learn from Odin?`,
      answer: `All students are initially enrolled into the Foundations Course. This will give you a chance to explore several of the languages and technologies you'll need to know on your journey to becoming a web developer. Foundations introduces HTML, CSS, JavaScript, Git and more. We've also created mini-projects that give you a chance to test your new knowledge by building your own applications and websites! Once Foundations is complete, students have two paths to choose from: Fullstack Ruby on Rails and Fullstack JavaScript`
    },
    {
      id: 5,
      question: `How is Odin Porject different from others?`,
      answer: `The Odin Project is different from other online programs in that it pulls the best resources from around the web and compiles them to create a complete curriculum. In many other programs the material is formatted to meet their specific curriculum. This means that not all of the lessons are top-notch. The Odin Project sidesteps this downfall by pulling various free resources from around the web and compiles them in one place.`
    },
    {
      id: 6,
      question: `Who is odin?`,
      answer: `Odin is a figure from Norse mythology, the allfather of the gods. He is portrayed as powerful and fickle (as they often are) but also wise and cunning. His search for knowledge is a thing of legends - he gave his eye for the wisdom of ages and hung from the world tree, pierced by his own spear, for nine days and nights to gain the knowledge of runes.`
    },
    {
      id: 7,
      question: `Where do i sign up?`,
      answer: `You don't have to! Dive right in, the content is free and available. It'd be best if you started at the beginning and went through in order but everyone's goals are different so we made the full curriculum available if you want to cherry-pick lessons or projects.

  However, by signing up you are able to check off completed projects and lessons, easily keeping track of your progress. We don't collect any user data and keep emails to a minimum.`
    },
    {
      id: 8,
      question: `Is the odin project free?`,
      answer: `Yes! The Odin Project is an open-source project created and maintained by hard working volunteers. To find out how you can help us, please visit our how to contribute page.`
    },
    {
      id: 9,
      question: `Will i get a certificate on the completion of course?`,
      answer: `We don't provide a certificate for course completion. Employers will be much more impressed with your amazing personal portfolio of projects, many of which you'll hopefully have built with inspiration from The Odin Project.`
    },
    {
      id: 10,
      question: `Do you have a code of conduct?`,
      answer: `You can read our code of conduct here`
    },
    {
      id: 11,
      question: `Can i use this curriculum to teach?`,
      answer: `The Odin Project is licensed under two pieces: the curriculum and the main website. The main website is a fully open-source project under an MIT license, so you can use the code for whatever you want. The curriculum is currently licensed under a Creative Commons license which restricts it to noncommercial use without prior authorization.`
    }
  ];
  return (
    <>
      <div className="row d-flex justify-content-center align-items-center mt-5">
        <div className="col-sm-6">
          {accordionData.map(({ question, answer }) => (
            <Arama question={question} answer={answer} />
          ))}
        </div>
      </div>
    </>
  );
}
const Arama = ({ question, answer }) => {
  const [close, setClose] = useState("");
  const iconChange = () => {
    setClose((preState) => !preState);
  };
  return (
    <>
      <div className="flask">
        <h5 onClick={iconChange}>
          {question}
          <span id="angle">{close ? <FaAngleDown /> : <FaAngleUp />}</span>
        </h5>
      </div>
      <p id="perth">{close && answer}</p>
      <hr id="hi" />
    </>
  );
};
