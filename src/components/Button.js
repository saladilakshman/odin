import "./module.css";
import { FaEnvelope, FaLock, FaGithub, FaGoogle, FaUser } from "react-icons/fa";
function Button() {
  return (
    <div className="cot">
      <h2>Login</h2>
      <br />

      <form>
        <div className="input-group m-2" id="cox">
          <span className="input-group-text" id="fox">
            {<FaUser />}
          </span>
          <input type="text" class="form-control" placeholder="USERNAME" />
        </div>
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

        <div className="input-group m-2" id="cox">
          <span className="input-group-text" id="fox">
            {<FaLock />}
          </span>
          <input
            type="password"
            class="form-control"
            placeholder=" CONFIRM PASSWORD"
          />
        </div>
        <a href="efr" className="text-center text-secondary ms-5">
          by signing up you agree to our terms of use
        </a>
        <button className="btn btn-primary w-100 p-2 ms-1 mt-3" id="siri">
          Sign Up
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

      <p className="text-center text-secondary mt-5">Have An Account ?</p>
      <button className="btn btn-secondary ">Login</button>
    </div>
  );
}
export default Button;
