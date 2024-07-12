import React, { useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import TwitterIcon from "../../public/xicon.svg";
import InstagramIcon from "../../public/instagram-icon.svg";
import LinkedIcon from "../../public/LinkedInicon.svg";
import Link from "next/link";
import Image from "next/image";

export const EmailSection = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: ""
  });
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendMail = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch('/api/send/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setEmailSent(true);
        setFormData({ email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      setError("Failed to send email");
    } finally {
      setIsLoading(false); 
    }
  };
  
  return (
      <section
        id="email-section"
        className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      >
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div>
          <h5 className="font-bold text-white my2 text-4xl mb-4">Contact Me</h5>
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
              <Image src={InstagramIcon} alt="Instagram Icon" />
            </Link>
            <Link href="https://linkedin.com/in/oluwafisayo-ibrahim">
              <Image src={LinkedIcon} alt="LinkedIn Icon" />
            </Link>
          </div>
        </div>
        <div>
          <form className="flex flex-col" onSubmit={sendMail}>
            <div className="mb-6">
              <label htmlFor="email" className="text-white block text-sm mb-2 font-medium">
                Your Email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="youremail@example.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hello!"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk..."
              />
            </div>
            <div>
              <button type="submit" className={`bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full mt-4 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
              {emailSent && <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>}
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
          </form>
        </div>
      </section>
  );
};
