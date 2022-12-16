import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountBanner from "../../../components/account/AccountBanner";
import AccountButton from "../../../components/account/AccountButton";
import Loading from "../../../components/Loading";
import Logo from "../../../components/Logo";
import Title from "../../../components/Title";
import { useDispatch } from "react-redux";
import signupUser from "../../../redux/thunk/user/signupUser";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState({});
  const dispatch = useDispatch();

  function handleSignupForm(event) {
    event.preventDefault();
    const phone = event.target.phone.value;

    const userInformation = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      confirmPassword: event.target.confirmPassword.value,
      avatar: avatar,
      phone: phone.length === 11 ? "+88" + phone : "+880" + phone,
    };

    dispatch(signupUser(userInformation));
  }

  function handleUserAvatar(event) {
    const formData = new FormData();
    formData.append("avatar", event.target.files[0]);

    const uploadAvatar = async () => {
      setLoading(true);
      const request = await fetch(`https://canim.onrender.com/user/avatar`, {
        method: "POST",
        body: formData,
      });
      const response = await request.json();
      if (response.acknowledgement) {
        setLoading(false);
        setAvatar({
          url: response.data.path,
          public_id: response.data.filename,
        });
        console.log(response.description);
      } else {
        console.log(response.description);
      }
    };
    uploadAvatar();
  }

  return (
    <section className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <Title>Sign up</Title>
      <div className="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="w-fit mx-auto">
            <Logo />
          </div>
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Sign up to your account
            </h1>
            <div className="w-full flex-1">
              <div className="mx-auto max-w-xs mt-8">
                <form
                  className="flex flex-col gap-y-4"
                  onSubmit={handleSignupForm}
                >
                  {/* name field */}
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    required
                  />

                  {/* email field */}
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />

                  {/* password field */}
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />

                  {/* confirm password field */}
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    required
                  />

                  {/* phone number field */}
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="number"
                    name="phone"
                    placeholder="Phone"
                    required
                  />

                  {/* avatar upload field */}
                  {loading ? (
                    <Loading size={8} />
                  ) : (
                    <div className="flex items-center justify-center w-full">
                      <input
                        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                        id="file_input"
                        type="file"
                        onChange={handleUserAvatar}
                      />
                    </div>
                  )}

                  {/* submit button */}
                  <AccountButton>Sign up</AccountButton>
                </form>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  Already have an account?
                  <Link
                    to="/account/sign-in"
                    className="border-b border-gray-500 border-dotted font-medium"
                  >
                    {" "}
                    Login here
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

export default Signup;
