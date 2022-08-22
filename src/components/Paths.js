import React from "react";
import "./module.css";
function AllPaths() {
  return (
    <>
      <div className="cos">
        <h2>All Paths</h2>
      </div>
      <div className="truck">
        <div className="header">
          <h3 className="text-dark">Foundations</h3>
          <h6>Start here</h6>
        </div>
        <button className="btn btn-warning" id="ltn">
          View Paths
        </button>

        <hr />
        <p className="ms-3 text-secondary">
          This is all where it begins! A hands on introduction to all of the
          working tools that required to build real world websites.You'll learn
          what web developers actually do and you will learn the courses
        </p>
      </div>
      <hr id="hr" />
      <div className="container">
        <div
          className="d-flex justify-content-around align-items-start gap-4"
          id="grum"
        >
          <div>
            <div className="avatar p-2">
              <h3 className="text-center">Full Stack Ruby on Rials</h3>
              <button className="btn btn-warning w-25" id="log">
                View Path
              </button>
              <p className="text-center mt-3">Prerequisites:Foundations</p>
              <br />
              <p className="text-secondary text-center">
                This Path is intended to be taken after you have completed the
                foundations.This path takes you to our entire ruby on rails
                curriculum.The course should be taken in the order that thet are
                displayed.You'll will learn everything you need to know to build
                beautiful responsive websites using ruby on rails
              </p>
            </div>
          </div>
          <div>
            <div className="avatar p-2">
              <h3 className="text-center">JAVASCRIPT</h3>
              <button className="btn btn-warning w-25" id="log">
                View Path
              </button>
              <p className="text-center mt-3">Prerequisites:Foundations</p>
              <br />
              <p className="text-secondary text-center">
                This Path is intended to be taken after you have completed the
                foundations.This path takes you to our entire ruby on rails
                curriculum.The course should be taken in the order that thet are
                displayed.You'll will learn everything you need to know to build
                beautiful responsive websites using ruby on rails
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://www.theodinproject.com/assets/home-isometric-eebc110218cbdb1460dd2dfc662a4e96ae94747667dc81da422804ef55cfd2d8.svg"
        alt=""
        id="drum"
      />
    </>
  );
}
export default AllPaths;
