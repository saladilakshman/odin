import "./module.css";
import { FaGithub } from "react-icons/fa";
function About() {
  const atoms = [
    {
      id: 1,
      img:
        "https://www.theodinproject.com/assets/about_page/img-education-3f1a17d42e99b380255630762ebf45e337334ddd84dcb148b4264b2aa255e367.svg",
      main: "Education should be free and accessible",
      small:
        "This curriculum itself is free and we tried to link to resources that are themselves free so anyone in the world can use them"
    },
    {
      id: 2,
      img:
        "https://www.theodinproject.com/assets/about_page/img-build-5fbb3c713ab68cafe0b1e5fa925ff7773c6f5add5cddd831e11a9b48687d2e79.svg",
      main: "You learn best by actually building",
      small:
        "The Odin Project curriculum is full of projects that will help you build a strong portfolio of work on GitHub to fill out your resume."
    },
    {
      id: 3,
      img:
        "https://www.theodinproject.com/assets/about_page/img-people-904242ae4367e34bc45bea350a7c85f6fada90f42df0eaf040467779aeebc213.svg",
      main: "Motivation is fueled by working with others",
      small:
        "We are committed to connecting students together so they can stay motivated and learn faster."
    },
    {
      id: 4,
      img:
        "https://www.theodinproject.com/assets/about_page/img-opensource-1d57cab197cab2f555d2808b34e4b2f1824f5bef80157d114fbb150fc2e51cb2.svg",
      main: "Open source is best",
      small:
        "Our curriculum and website are available on GitHub and we encourage students to actually contribute to the project itself!"
    }
  ];
  const avatar = {
    heading: "Origin of the Odin Project",
    paragraph: `The Odin Project provides a free open source coding curriculum that can be taken entirely online. Since its inception, it has helped many students get hired as developers and has assisted countless others in learning enough programming to work on their own personal projects. Founded in 2013 by Erik Trautman, The Odin Project is now sponsored by Thinkful, a new type of technology school that provides 1-on-1 learning through its network of industry experts, hiring partners, and online platform to deliver a structured and flexible education The Odin Project is maintained and continually improved by a team of volunteers, many of whom learned to code with us. Many find success from Odin Project curriculum because of its hands-on approach with learning and emphasis on building projects. The curriculum is meticulously curated to ensure the content is up-to-date.`
  };
  return (
    <>
      <div className="cos">
        <h2>About the Odin Project</h2>
        <br />
        <p className="text-secondary" id="tax">
          The Odin Project is one of those "What I wish I had when I was
          learning"
          <br /> resources. Not everyone has access to a computer science
          education or the
          <br /> funds to attend an intensive coding school and neither of those
          is right for
          <br /> everyone anyway. This project is designed to fill in the gap
          for people who are
          <br /> trying to hack it on their own but still want a high quality
          education.
        </p>
        <h3 className="mt-5">Our Beliefs</h3>
        <br />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-7 " id="rod">
            <img src={atoms[0].img} alt="" />
            <h5 id="atos">{atoms[0].main}</h5>
            <p className="text-dark text-break" id="hip">
              {atoms[0].small}
            </p>
            <br />
          </div>
          <div className="col-sm-7 " id="rod">
            <img src={atoms[1].img} alt="" />
            <h5 id="atos">{atoms[1].main}</h5>
            <p className="text-dark text-break" id="hip">
              {atoms[1].small}
            </p>
            <br />
          </div>
          <div className="col-sm-7 " id="rod">
            <img src={atoms[2].img} alt="" />
            <h5 id="atos">{atoms[2].main}</h5>
            <p className="text-dark text-break" id="hip">
              {atoms[2].small}
            </p>
            <br />
          </div>

          <div className="col-sm-7 " id="rod">
            <img src={atoms[3].img} alt="" />
            <h5 id="atos">{atoms[3].main}</h5>
            <p className="text-dark text-break" id="hip">
              {atoms[3].small}
            </p>
            <br />
          </div>
        </div>

        <div className="row bg-light mt-5">
          <h3 className="text-center text-warning mt-3">
            Overview of the Odin Project
          </h3>
          <div className="d-flex justify-content-around align-items-center mt-4">
            <div className="avatar p-1 w-auto">
              <h2 className="text-secondary">650616</h2>
              <p className="text-secondary">Learners</p>
            </div>
            <div className="avatar p-1">
              <h2 className="text-secondary">5000+</h2>
              <p className="text-secondary">Contributors</p>
            </div>

            <div className="avatar p-1">
              <h2 className="text-secondary">2013</h2>
              <p className="text-secondary">Founded</p>
            </div>
          </div>
          <div className="col-sm-7  mt-3">
            <div className="avatar">
              <h2 className="text-start ms-2">{avatar.heading}</h2>
              <p className="p-5 text-secondary">{avatar.paragraph}</p>
            </div>
          </div>
          <div className="col-sm-4  mt-3">
            <div className="avatar">
              <h2 className="text-center text-secondary">
                {<FaGithub id="git" />} Open Source
              </h2>
              <p className="text-center text-secondary p-3">
                This website and the curriculum it
                <br /> hosts are completely open source.
                <br /> That means anyone can work on new features or fix
                existing bugs on the website. This also extends to
                <br /> the curriculum itself, anyone can work on new lessons,
                add new resources and improve existing
                <br /> lessons.
                <br />
                The Odin project would not be
                <br /> possible without the hard work of <br />
                contributors from all across the
                <br /> world. If you're interested in
                <br /> helping us make Odin better please
                <br /> find out how to contribute.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="d-flex justify-content-around align-items-center">
            <div className="col-sm-4  mt-5">
              <img
                src="https://www.theodinproject.com/assets/about_page/odin-mascot-09612759a92b4a900c836a951e0b7becb7ceac47a5e2bf2225c13732cb99aa09.svg"
                className="w-50"
                alt=""
              />
            </div>
            <div className="col-sm-4  mt-5 ">
              <h5 className="text-center">Want to contact us?</h5>
              <p className="text-center text-secondary p-3">
                Connect with our friendly community on discord, a chat and
                networking platform or send us an email.
              </p>
              <button className="btn btn-warning text-white" id="discord">
                View on Discord
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="sinus">
        <p className="text-center text-secondary mt-5">
          Help the Odin Project stay current and meaningful to all future
          students, please contribute!
        </p>
        <button className="btn btn-primary opacity-75 text-center">
          Contribute
        </button>
      </div>
    </>
  );
}
export default About;
