"use client";
import { useState } from "react";
import Image from "next/image";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [nickname, setNickname] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (
      !email ||
      !password ||
      (!isLogin && (!firstName || !lastName || !dob))
    ) {
      setError("Please fill in all required fields");
      return;
    }

    const endpoint = isLogin ? "/api/login" : "/api/signup";
    const payload = {
      email,
      password,
      firstName,
      lastName,
      dob,
      avatar,
      nickname,
      aboutMe,
    };

    // Call your login API here
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(isLogin ? { email, password } : payload),
      });

      if (!res.ok) {
        throw new Error(isLogin ? "Login failed" : "Registration failed");
      }

      // Handle successful login/signup here (e.g., redirect, set user context)
    } catch (error) {
      setError(error.message);
    }
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.files[0]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 bg-gray-200 shadow-md">
        <Image
          src="/logo.png"
          width={50}
          height={50} 
        />
      </header>
      <div className="flex flex-1 items-center justify-center bg-gray-100 p-4">
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl space-y-4 md:space-y-0 md:space-x-8  border-2 border-solid border-black drop-shadow-2xl">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-1/2">
            <h2 className="text-center text-2xl font-bold mb-4 font-keania">
              {isLogin ? "Login" : "Sign Up"}
            </h2>
            <form onSubmit={handleSubmit}>
              {isLogin ? (
                <>
                  <p className="mb-4 text-center">
                    Enter your email and password to access your account
                  </p>
                  {error && <p className="text-red-500 mb-4">{error}</p>}
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <input
                      className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-4">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First Name
                      </label>
                      <input
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last Name
                      </label>
                      <input
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="dob"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Date of Birth
                      </label>
                      <input
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        type="date"
                        id="dob"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="avatar"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Avatar/Image (Optional)
                      </label>
                      <input
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        type="file"
                        id="avatar"
                        onChange={handleAvatarChange}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="nickname"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nickname (Optional)
                      </label>
                      <input
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        type="text"
                        id="nickname"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="aboutMe"
                        className="block text-sm font-medium text-gray-700"
                      >
                        About Me (Optional)
                      </label>
                      <textarea
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        id="aboutMe"
                        value={aboutMe}
                        onChange={(e) => setAboutMe(e.target.value)}
                      ></textarea>
                    </div>
                  </div>
                </>
              )}
              <button
                type="submit"
                className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
              >
                {isLogin ? "Login" : "Sign Up"}
              </button>
            </form>
            <p className="mt-4 text-center">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                className="text-black hover:text-gray-700"
                type="button"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <Image
              src="/network.png"
              alt="Network Image"
              width={500} // Add the actual width of your image
              height={500} // Add the actual height of your image
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <footer className="w-full bg-black text-white flex items-center justify-end p-4">
        <p className="text-lg">Social Network</p>
      </footer>
    </div>
  );
};

export default AuthForm;
