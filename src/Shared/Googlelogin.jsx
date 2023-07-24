import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const GoogleLogin = () => {
  const { googleSignIn, facebookSignIn } = useAuth();
  const navigate = useNavigate();

  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const googleLogIn = () => {
    googleSignIn().then((result) => {
      const loggedUser = result.user;
      console.log("loggedUser", loggedUser);
      const saveUser = {
        name: loggedUser.displayName,
        email: loggedUser.email,
        photoURL: loggedUser.photoURL,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          {
            navigate(from, { replace: true });
          }
        });
    });
  };

  const facebookLogin = () => {
    facebookSignIn().then((result) => {
      const loggedUser = result.user;
      console.log("loggedUser", loggedUser);
      const saveUser = {
        name: loggedUser.displayName,
        email: loggedUser.email,
        photoURL: loggedUser.photoURL,
      };
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(saveUser),
      })
        .then((res) => res.json())
        .then(() => {
          {
            navigate(from, { replace: true });
          }
        });
    });
  };
  return (
    <div className="form-control flex justify-center items-center">
      
      <p className="flex justify-around">
        <FcGoogle className="p-2 text-5xl btn  btn-2xl" onClick={googleLogIn} />
      </p>
    </div>
  );
};

export default GoogleLogin;
