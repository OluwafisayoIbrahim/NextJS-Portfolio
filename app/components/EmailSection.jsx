"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import TwitterIcon from "../../public/twitter-icon.svg";
import InstagramIcon from "../../public/instagram-icon.svg";
import IndeedIcon from "../../public/indeed-icon.svg";
import Link from "next/link";
import Image from "next/image";

export const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
          email: e.target.email.value,
          subject: e.target.subject.value,
          message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";
    
        // Form the request for sending data to the server.
        const options = {
          // The method is POST because we are sending data.
          method: "POST",
          // Tell the server we're sending JSON.
          headers: {
            "Content-Type": "application/json",
          },
          // Body of the request is the JSON data we created above.
          body: JSONdata,
        };
    
        const response = await fetch(endpoint, options);
        const resData = await response.json();
    
        if (response.status === 200) {
          console.log("Message sent.");
          setEmailSubmitted(true);
        }
      };
    return (
      <section
        id="email-section"
        className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      >
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div>
          <h5 className="text-xl font-bold text-white my2">Lets Connect</h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md ">
            {""}I am currently looking for opportunities, my inbox is always
            open, Whether you have a question or you just want to say hi, I will
            try my best to get back to you!
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href="https://github.com/Oluwafisayoibrahim">
              <Image src={GithubIcon} alt="GitHub Icon" />
            </Link>
            <Link href="https://twitter.com/whoisfisayo">
              <Image src={TwitterIcon} alt="Twitter Icon" />
            </Link>
            <Link href="https://instagram.com/whoisfisayo">
              <Image src={InstagramIcon} alt="Twitter Icon" />
            </Link>
            <Link href="https://profile.indeed.com/p/oluwafisayoi-w6d5777">
              <Image src={IndeedIcon} alt="Twitter Icon" />
            </Link>
          </div>
        </div>
        <div>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block text-sm mb-2 font-medium"
              >
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="youremail@example.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hello!"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk..."
              />
              <div>
                <button
                  type="submit"
                  className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full mt-4"
                >
                  <Link href="https://emailto:oluwafisayoibrahim2@gmail.com">
                    Send Message
                  </Link>
                </button>
                {emailSubmitted && (
                  <p className="text-green-500 text-sm mt-2">
                    Email sent successfully!
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
    );
};


