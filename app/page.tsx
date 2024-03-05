"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setTimeout } from "timers";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        setLoginFailed(true);
        throw new Error("Failed to login");
      }
      const data = await response.json();
      console.log(data.accessToken);
      document.cookie = `accessToken=${data.accessToken};path=/;`;
      // Redirect to patient-list page upon successful login
      router.push("/patient-list");
    } catch (error) {
      setError("Invalid email or password");
      setLoginFailed(true);
    }
    setTimeout(() => {
      setLoginFailed(false);
      setError("");
    }, 2000);
  };

  return (
    <main className="flex flex-col md:flex-row items-center justify-center h-screen w-full relative">
      <div className="bg-[#007C85] w-1/3 h-full flex flex-col hidden md:block justify-center items-center relative ">
        <div className="flex flex-col items-center mt-44">
          <img
            src="/icons/colinahealthlogowithtext.png"
            alt="ColinaHealthLogo"
            width="300"
            className="mb-2 -ml-24"
          />
          <p className="text-white text-lg break-words max-w-[400px]">
            The art of medicine lies in listening to what the patient's body and
            spirit are trying to say.
          </p>
        </div>
        <div className="flex justify-center w-full absolute bottom-0">
          <img src="/icons/loginHero.svg" alt="loginHero" width="500" />
        </div>
      </div>

      <div className="flex justify-center items-center md:hidden bg-[#007C85] py-5 w-full">
        <img
          src="/icons/colinahealthlogowithtext.png"
          alt="ColinaHealthLogo"
          width="300"
          className=""
        />
      </div>
      <div className="flex flex-col justify-center items-center flex-grow h-[544px]">
        <div className="md:w-[642.27px] w-96">
          <h1 className="text-[#007C85] text-[28.08px] font-[500]">
            WELCOME TO,
          </h1>
          <h1 className="font-[500] text-[46.8px] text-[#007C85] ">
            COLINA HEALTH
          </h1>
          <form className="mt-8 ">
            <div className="mb-5">
              <Input
                type="text"
                value={username}
                className="bg-[#D9D9D90D] text-md h-[60px] placeholder-gray-400 text-black px-4 py-2 rounded-md border focus:border-gray-200"
                placeholder="input email or username"
                onChange={(e) => setUsername(e?.target.value)}
                required
              />
            </div>
            <div className="mb-5">
              <Input
                type="password"
                value={password}
                className="bg-[#D9D9D90D] text-md h-[60px] placeholder-gray-400 text-black px-4 py-2 rounded-md border focus:border-gray-200"
                placeholder="input password"
                onChange={(e) => setPassword(e?.target.value)}
                required
              />
            </div>
            <p
              className={`text-red-500 ${
                loginFailed ? "shake block " : "hidden"
              }`}
            >
              {error}
            </p>
            <div className="flex justify-between mb-5">
              <div className="flex items-center">
                <Checkbox className="mr-3" />
                <span className="text-md">Remember me</span>
              </div>
              <a href="" className="text-[#071437] text-md">
                Forgot Password?
              </a>
            </div>
            <Button
              className="w-full h-[60px] bg-[#007C85] hover:bg-[#114447]"
              onClick={handleSubmit}
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Login;
