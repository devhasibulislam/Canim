import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AccountBanner from "../../../components/account/AccountBanner";
import AccountButton from "../../../components/account/AccountButton";
import Logo from "../../../components/Logo";
import Title from "../../../components/Title";
import persistMyAccount from "../../../redux/thunk/user/persistMyAccount";
import signinUser from "../../../redux/thunk/user/signinUser";

const Signin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(persistMyAccount());
  }, [dispatch]);

  function handleSigninForm(event) {
    event.preventDefault();

    const userInformation = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    dispatch(signinUser(userInformation));
  }

  return (
    <section className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <Title>Sign in</Title>
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="w-fit mx-auto">
            <Logo />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Sign in to your account
            </h1>
            <div className="w-full flex-1">
              <div className="mx-auto max-w-xs mt-8">
                <form
                  className="flex flex-col gap-y-4"
                  onSubmit={handleSigninForm}
                >
                  {/* email field */}
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />

                  {/* password field */}
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />

                  {/* submit button */}
                  <AccountButton>Sign in</AccountButton>
                </form>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Don't have an account?
                  <Link
                    to="/account/sign-up"
                    className="border-b border-gray-500 border-dotted font-medium"
                  >
                    {" "}
                    Create one{" "}
                  </Link>
                  or if you forget password then
                  <Link
                    to="/account/reset-password"
                    className="border-b border-gray-500 border-dotted font-medium"
                  >
                    {" "}
                    Reset password
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <AccountBanner />
      </div>
    </section>
  );
};

export default Signin;
