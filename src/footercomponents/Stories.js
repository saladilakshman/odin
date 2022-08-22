import React from "react";
import "./foot.css";
function Stories() {
  const stories = [
    {
      id: 1,
      img:
        "https://www.theodinproject.com/assets/success_stories/rob_pando-80b6e689b7a116d8f5e261492fb86bfbe0656a590e5b57882f9e5cd0a409026a.jpg",
      name: "Rob pando",
      role: "Full-stack-developer",
      desc: `TOP was a perfect match for my learning style. Not walking me through an entire project but actually forcing me to figure it out on my own, by pointing me in all the right directions in order to complete them. That helped me dig deeper into various important topics, which then gave me the necessary knowledge and confidence to start applying for jobs and landing that dream job. The community was part of it too, first getting help and then helping, it was a great way to learn and make it stick.`
    },
    {
      id: 2,
      img:
        "https://www.theodinproject.com/assets/success_stories/cody_loyd-9b2bf141f7979560765b8f5329a7abd2c33f186215588a10d2dcfe1d7fa3472b.jpg",
      name: "Cody Lyod",
      role: "Software Developer",
      desc: `Before I started the Odin Project I had literally ZERO programming experience. After almost exactly a year of working through the program, I was offered a job as a front end web developer. Odin taught me all the most crucial skills in webdev and gave me an incredibly strong foundation for branching out and learning other pieces of the web-dev puzzle along the way.`
    },
    {
      id: 3,
      img:
        "https://www.theodinproject.com/assets/success_stories/andrej_dragojevic-57224d408ceeaca29c563980d665741e0cb7e164ffcb53fd599dc64a237ceaf0.jpg",
      name: "Andrej Dragojevic",
      role: "Full Stack Ruby on Rails",
      desc: `An incredible self-paced curriculum that consists of the best resources for learning programming on the web! It was an invaluable resource on my path to a becoming a software developer. Thanks to The Odin Project I was able to get a job half way through the curriculum, and the projects completed as part of the curriculum gave me an edge compared to other junior developers with no experience.`
    },
    {
      id: 4,
      img:
        "https://www.theodinproject.com/assets/success_stories/skip-7e8f1ace398497358c8b23a567586cf7bb9a64e8f0e04ebc81ca175eec03fad8.jpg",
      name: "Skip Gibson",
      role: "Software Developer",
      desc: `Before I found The Odin Project I had very little direction with my learning, jumping from topic to topic then trying to piece things together as I went. Having this online curriculum to follow was a massive help and took my understanding of programming to the next level. Being self taught and going into a job interview with no professional experience is incredibly daunting, but being able to point to my GitHub which had all of the projects I'd completed while going through the curriculum, I was able to demonstrate that I was committed to learning and improving myself, ultimately that’s exactly what they were after in an employee. If you're considering using The Odin Project I really cannot recommend it enough, I owe my career to this site.`
    },
    {
      id: 5,
      img:
        "https://www.theodinproject.com/assets/success_stories/mazin-a8cc046f9e4c81a80bb266e4954423e79ae7b95f175eed7a1c1a5a03bf6e81e4.jpg",
      name: "Mazin power Elferied",
      role: "Software Engineer",
      desc: `In 2014 I wanted to learn how to program, but I had no idea where to start. Odin solved that problem for me - it mapped out a series of lesson plans that showed me what to study, without holding my hand or spoon-feeding me information. The curriculum requires hard work and perseverance, but it's worth it. I walked into my first job and felt instantly comfortable with the tools and technologies my employer required. Yes, there was a lot that I didn't know yet, but having done Odin also gave me the confidence to pick up new skills as needed.`
    },
    {
      id: 6,
      img:
        "https://www.theodinproject.com/assets/success_stories/sean-b3026f2790e9210d290930a44670061568678c15ee5a062d2438c472775b30ba.jpg",
      name: "Sean Zurko",
      role: "Mid-level Rail developer",
      desc: `TOP smoothed out the steep learning curve in web development, allowing me to confidently learn at my own pace and taught me how to approach and solve real-life programming problems. The projects in TOP were a perfect mix of difficulty, allowing me to gain exposure to different technologies and feel challenged without feeling overwhelmed. Because of the foundation TOP provided, I was able to easily transition into freelancing and then into a junior level Rails developer position.`
    },
    {
      id: 7,
      img:
        "https://www.theodinproject.com/assets/success_stories/william_kennedy-e9bc2ad5bd23aebee279ad75a077a529d6e2b4a55edb930ccf836e6f047b9a70.jpg",
      name: "William Kennedy",
      role: "Software Engineer",
      desc: `The Odin Project changed my life and that is not an understatement. In November 2013, I made a commitment to myself to become a self-taught developer so I threw myself head first into Google trying to learn everything I could. Originally, I wanted to be a Java Web Developer then a week later I wanted to be an Android developer. I was reading blog post after blog post, and pretty soon I started to get overwhelmed. I had no structure and no plan of attack about how to get a development job. I was desperate to change career and then suddenly I stumbled across The Odin Project, and it had exactly what I needed. `
    },
    {
      id: 8,
      img:
        "https://www.theodinproject.com/assets/success_stories/olivia-9c3d069b14e8a6d0fb0594432938b66ba0e260e43da630816a0704264b891666.jpg",
      name: "Olivia",
      role: "Information Security Engineer",
      desc: `Before I found TOP, I was jumping from course to course without really any guidance or community. I wanted to get a real development job and not operating an IT help desk, and I wanted to do it for free. After reading people’s success stories on Reddit on how they found a development job, many people praised the curriculum at TOP and how they got a job even before they finished it. I couldn’t believe it! So I decided to give it a shot. The self-paced structure, reading materials, and challenges was easy to understand and made me feel I was in control. I was even able to find a community to help guide and mentor me through the process. About eight months after I started, I got my first development gig - and I didn’t even finish the curriculum! Because of TOP, I can call myself a developer.`
    }
  ];
  return (
    <>
      <div className="row d-flex justify-content-center align-tems-center mt-5">
        <div className="col-sm-8">
          {stories.map(({ img, name, role, desc }) => {
            return <Story img={img} name={name} role={role} desc={desc} />;
          })}
        </div>
      </div>
    </>
  );
}
const Story = ({ img, name, role, desc }) => {
  return (
    <>
      <div className="card" id="pea">
        <span>
          <img src={img} alt="" id="rat" />
        </span>
        <span>
          <h6 className="text-warning" id="name">
            {name}
          </h6>
        </span>
        <span>
          <h6 id="role">{role}</h6>
        </span>
        <p className="text-break text-secondary m-2" id="desc">
          {desc}
        </p>
      </div>
      <br />
    </>
  );
};
export default Stories;
