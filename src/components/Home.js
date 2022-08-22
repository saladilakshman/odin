import React from "react";
import "./module.css";
function Home() {
  const oneRow = {
    img:
      "https://www.theodinproject.com/assets/img-learn-7f69020a563b2631283ca49bfc9a8898cda89673b184fd5becc13afec16cc784.svg",
    title: "Learn",
    desc:
      "Learn from a curriculum with the best curated online tutorials, blogs, and courses."
  };
  const twoRow = {
    img:
      "https://www.theodinproject.com/assets/img-build-4e9c3482971d09bc1e15535d71deb68e12462dacc4442d6a6a997df01330287a.svg",
    title: "Build",
    desc:
      "Build dozens of portfolio-worthy projects along the way, from simple scripts to full programs and deployed websites."
  };
  const threeRow = {
    img:
      "https://www.theodinproject.com/assets/img-connect-3d9999fbdc6a4d65329f0add107893b63ce5a277064631419aa6fcbb16893195.svg",
    title: "Connect",
    desc:
      "You’re not alone. Learn and get help from our friendly community of beginner and experienced developers."
  };
  const cardOne = [
    {
      id: 1,
      img:
        "https://www.theodinproject.com/assets/badge-html-css-2337ff8e484e1eeda0693d331efe7d91100a5f4899b3273b454743ee5c40e271.svg",
      desc: "INTERMEDIATE HTML+CSS"
    },
    {
      id: 2,
      img:
        "https://www.theodinproject.com/assets/badge-html-css-2337ff8e484e1eeda0693d331efe7d91100a5f4899b3273b454743ee5c40e271.svg",
      desc: "ADVANCED HTML+CSS"
    },
    {
      id: 3,
      img:
        "https://www.theodinproject.com/assets/badge-javascript-069c5eaf6d697e8704865294fd5660c7f63c6010c4c3e729540464d6acf5d769.svg",
      desc: "JAVASCRIPT"
    }
  ];
  const firstProfile = [
    {
      id: 1,
      img:
        "https://www.theodinproject.com/assets/success_stories/rob_pando-80b6e689b7a116d8f5e261492fb86bfbe0656a590e5b57882f9e5cd0a409026a.jpg",
      name: "Rob pando",
      review:
        "TOP was a perfect match for my learning style. Not walking me through an entire project but actually forcing me to figure it out on my own, by pointing me..."
    },
    {
      id: 2,
      img:
        "https://www.theodinproject.com/assets/success_stories/andrej_dragojevic-57224d408ceeaca29c563980d665741e0cb7e164ffcb53fd599dc64a237ceaf0.jpg",
      name: "Andrew Drejovic",
      review:
        "An incredible self-paced curriculum that consists of the best resources for learning programming on the web! It was an invaluable resource on my path to a becoming a software developer...."
    },

    {
      id: 3,
      img:
        "https://www.theodinproject.com/assets/success_stories/cody_loyd-9b2bf141f7979560765b8f5329a7abd2c33f186215588a10d2dcfe1d7fa3472b.jpg",
      name: "Cody Lyod",
      review:
        "Before I started the Odin Project I had literally ZERO programming experience. After almost exactly a year of working through the program, I was offered a job as a front.."
    },
    {
      id: 4,
      img:
        "https://www.theodinproject.com/assets/success_stories/skip-7e8f1ace398497358c8b23a567586cf7bb9a64e8f0e04ebc81ca175eec03fad8.jpg",
      name: "Skip Gibson",
      review:
        "Before I found The Odin Project I had very little direction with my learning, jumping from topic to topic then trying to piece things together as I went. Having this..."
    }
  ];
  return (
    <>
      <div className="container">
        <div className="cos">
          <h1 className="text-warning opacity-75 ">
            Your Career in Web Development Starts Here
          </h1>
          <h5 className="text-secondary opacity-75">
            Our full stack curriculum is free and supported by a passionate open
            source community.
          </h5>
          <br />
          <button className="btn-primary" id="btn">
            View Full Curriculum
          </button>
          <img
            src="https://www.theodinproject.com/assets/home-isometric-eebc110218cbdb1460dd2dfc662a4e96ae94747667dc81da422804ef55cfd2d8.svg"
            alt=""
          />
        </div>
        <h3 className="text-center m-5">How it Works</h3>
        <p className="text-center text-secondary m-5" id="para">
          This is the website we wish we had when we were learning on our
          <br /> own. We scour the internet looking for only the best resources
          to
          <br /> supplement your learning and present them in a logical order.
        </p>
        <div className="row m-5">
          <div className="col sm-4 ">
            <img src={oneRow.img} alt="" />
            <br />
            <h5>{oneRow.title}</h5>
            <p>{oneRow.desc}</p>
          </div>
          <div className="col sm-4 ">
            <img src={twoRow.img} alt="" />
            <br />
            <h5>{twoRow.title}</h5>
            <p>{twoRow.desc}</p>
          </div>
          <div className="col sm-4 ">
            <img src={threeRow.img} alt="" />
            <br />
            <h5>{threeRow.title}</h5>
            <p>{threeRow.desc}</p>
          </div>
        </div>

        <section className="mt-5 bg-light opacity-100">
          <h2 className="text-center">
            Learn everything you need to know to become Web developer
          </h2>
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            {cardOne.map((item) => {
              const { id, img, desc } = item;
              return (
                <div className="d-flex p-2">
                  <div className="avatar" key={id}>
                    <img src={img} alt="" className="w-25" />
                    <p>{desc}</p>
                  </div>
                </div>
              );
            })}
            {cardOne.map((item) => {
              const { id, img, desc } = item;
              return (
                <div className="d-flex p-2">
                  <div className="avatar" key={id}>
                    <img src={img} alt="" className="w-25" />
                    <p>{desc}</p>
                  </div>
                </div>
              );
            })}
            {cardOne.map((item) => {
              const { id, img, desc } = item;
              return (
                <div className="d-flex p-2">
                  <div className="avatar" key={id}>
                    <img src={img} alt="" className="w-25" />
                    <p>{desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <h5 className="text-center mt-5">Success Stories</h5>
        <div className="row mt-5">
          <div className="col-sm-4 ms-5">
            <span>
              <img src={firstProfile[0].img} alt="" className="ant" />
            </span>
            <p className="text-warning" id="span">
              {firstProfile[0].name}
            </p>
            <p id="pat">{firstProfile[0].review}</p>
            <span>
              <img src={firstProfile[1].img} alt="" className="ant" />
            </span>
            <p className="text-warning" id="span">
              {firstProfile[1].name}
            </p>
            <p id="pat">{firstProfile[1].review}</p>
          </div>
          <div className="col-sm-4 ms-auto">
            <span>
              <img src={firstProfile[2].img} alt="" className="ant" />
            </span>
            <p className="text-warning" id="span">
              {firstProfile[2].name}
            </p>
            <p id="pat">{firstProfile[2].review}</p>
            <span>
              <img src={firstProfile[3].img} alt="" className="ant" />
            </span>
            <p className="text-warning" id="span">
              {firstProfile[3].name}
            </p>
            <p id="pat">{firstProfile[3].review}</p>
          </div>
        </div>
        <div className="sin">
          <a href="#ee" id="anchor">
            Read More Success Stories
          </a>
          <br />
          <h3 className="text-secondary font-light">Start Learnig for free</h3>
          <br />
          <button className="btn" id="ctn">
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}
export default Home;
