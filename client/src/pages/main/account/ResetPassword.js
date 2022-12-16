import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import AccountBanner from "../../../components/account/AccountBanner";
import AccountButton from "../../../components/account/AccountButton";
import Logo from "../../../components/Logo";
import Title from "../../../components/Title";
import resetPassword from "../../../redux/thunk/user/resetPassword";

const ResetPassword = () => {
  const dispatch = useDispatch();

  function handleResetPassword(event) {
    event.preventDefault();

    const userInformation = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    dispatch(resetPassword(userInformation));
  }

  return (
    <section className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <Title>Forgot password</Title>
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="w-fit mx-auto">
            <Logo />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Forgot account password
            </h1>
            <div className="w-full flex-1">
              <div className="mx-auto max-w-xs mt-8">
                <form
                  className="flex flex-col gap-y-4"
                  onSubmit={handleResetPassword}
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
                    placeholder="New Password"
                  />

                  {/* submit button */}
                  <AccountButton>Forgot password</AccountButton>
                </form>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Remember your account password?
                  <Link
                    to="/account/sign-in"
                    className="border-b border-gray-500 border-dotted font-medium"
                  >
                    {" "}
                    Login here!
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

export default ResetPassword;
