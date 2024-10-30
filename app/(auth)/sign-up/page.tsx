import React from "react";
import AuthForm from "@/components/AuthForm";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const SignUp = async () => {
  // made change here
  // const loggedInUser = await getLoggedInUser();
  // console.log("loggedInUser", loggedInUser);

  return (
    <section className={"flex-center size-full max-sm:px-6"}>
      <AuthForm type={"sign-up"} />
    </section>
  );
};

export default SignUp;