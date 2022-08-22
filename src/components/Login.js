import React from "react";
import "./module.css";
import { FaEnvelope, FaLock, FaGithub, FaGoogle } from "react-icons/fa";
function Login() {
  return (
    <div className="cot">
      <h2>Login</h2>
      <br />

      <form>
        <div className="input-group m-2" id="cox">
          <span className="input-group-text" id="fox">
            {<FaEnvelope />}
          </span>
          <input
            type="email"
            class="form-control"
            placeholder="EMAIL ADDRESS"
          />
        </div>
        <div className="input-group m-2" id="cox">
          <span className="input-group-text" id="fox">
            {<FaLock />}
          </span>
          <input type="password" class="form-control" placeholder="PASSWORD" />
        </div>
        <div class="form-check ms-2">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" name="remember" />{" "}
            Remember me
          </label>
        </div>
        <a href="efr" className="text-end text-secondary " id="leg">
          Forget Password ?
        </a>
        <button className="btn btn-primary w-100 p-2 ms-1 mt-3" id="siri">
          Log In
        </button>
        <p className="text-center text-secondary mt-2" id="lax">
          OR LOGIN WITH
        </p>
        <button className="btn btn-dark w-100 p-2 ms-1 mt-2">
          {<FaGithub id="doc" />} GITHUB
        </button>
        <button className="btn btn-primary w-100 p-2 ms-1 mt-3">
          {<FaGoogle id="doc" />} GOOGLE
        </button>
      </form>

      <p className="text-center text-secondary mt-5">Have Not Signed Yet?</p>
      <button className="btn btn-secondary">Create new account</button>
    </div>
  );
}
export default Login;
