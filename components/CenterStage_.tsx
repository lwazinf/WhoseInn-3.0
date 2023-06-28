import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";

interface Props {}

const SignIn: NextPage = (props): JSX.Element => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    // validate your userinfo
    e.preventDefault();

    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

    console.log(res);
  };
  return (
    <div className="sign-in-form">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          value={userInfo.email}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
          type="email"
          placeholder="john@email.com"
        />
        <input
          value={userInfo.password}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
          type="password"
          placeholder="********"
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};






interface CenterStage_Props {}

const CenterStage_ = ({}: CenterStage_Props) => {
  return (
    <div
      className={`w-full h-screen flex flex-col justify-center items-center relative mb-12`}
    >
      {/* <SignIn/> */}
      
    </div>
  );
};

export default CenterStage_;
