import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      window.location.href = `mailto:blockscholarsafrica@gmail.com?subject=Newsletter Subscription&body=Please add ${email} to the subscription list.`;
    }
  };

  return (
    <section
      id="newsletter"
      className="bg-[#720034] py-10 px-6 text-white text-center"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Stay Ahead of the Curve!</h1>
        <p className="text-lg mb-6 text-center mx-auto leading-relaxed">
          <b>Be the first to know about our:</b>
        </p>
        <ul className="text-lg mb-6 text-center  mx-auto leading-relaxed list-disc list-inside">
          <li>Exclusive Bootcamps</li>
          <li>Expert-led Trainings and Programs</li>
          <li>Insightful Webinars</li>
          <li>Latest Tech Updates</li>
        </ul>

        <h1 className="text-2xl font-bold mb-4 animate-pulse">
          Get the inside scoop and reserve your spot!
        </h1>
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-2 w-full sm:w-2/3 md:w-1/2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-white text-[#720034] rounded-lg font-semibold hover:bg-[#f5f5f5] transition-all duration-300 animate-bounce"
            >
              Shoot Now
            </button>
          </form>
        ) : (
          <p className="text-lg font-semibold mt-4">
            Thank you for subscribing! 🎉
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
