
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from "../../assets/images/login/login.svg";
import { AuthContext } from '../../provider/AuthProvider';


const SignUp = () => {
  const {createUser} = useContext(AuthContext)
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name=form.name.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,email,password);
        createUser(email,password)
        .then(result=>{
             const user = result.user;
             console.log(user)
        })
        .catch((error)=>{
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
              Sign Up
            </h1>

            {/* This is form........ */}
            <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
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
                  value="Sign Up"
                  className="btn btn-error text-white"
                />
              </div>
            </form>
            <p className="my-4 text-center">
              Already Have an account? 
              <span className="font-bold text-[#FF3811]">
              
                <Link to='/login'>Sign in</Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignUp;