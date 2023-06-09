import { Result } from "postcss";
import { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "../../provider/AuthProvider";
const Login = () => {

  const {signIn}=useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
        
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);
        signIn(email,password)
        .then(result=>{
          const user =result.user;
          console.log(user)
        })
        .catch(error=>{
          console.log(error)
        })

  };
  return (
    <div className="hero min-h-screen bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="mr-12 w-1/2">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl lg:text-5xl  font-bold text-center">
              Login
            </h1>

            {/* This is form........ */}
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                {/* <button className="btn btn-primary">Login</button> */}
                <input
                  type="submit"
                  value="Sign In"
                  className="btn btn-error text-white"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              New to Car Doctor{" "}
              <span className="font-bold text-[#FF3811]">
              
                <Link to='/signup'>Sign Up</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
