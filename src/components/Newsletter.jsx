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
      className="bg-[#720034] py-16 px-6 text-white text-center"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Stay Ahead of the Curve!</h1>
        <p className="text-lg mb-4 leading-relaxed">
          <b>Be the first to know about our:</b>
        </p>

        {/* LIST FIXED TO DISPLAY BULLETS */}
        <ul className="text-lg mb-6 list-disc list-inside text-left max-w-md mx-auto space-y-2">
          <li>Exclusive Bootcamps</li>
          <li>Expert-led Trainings and Programs</li>
          <li>Insightful Webinars</li>
          <li>Latest Tech Updates</li>
        </ul>

        <h2 className="text-2xl font-bold mb-6 animate-pulse">
          Get the inside scoop and reserve your spot!
        </h2>

        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="px-4 py-3 w-full sm:w-2/3 md:w-1/2 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-[#720034] rounded-lg font-semibold hover:bg-[#f5f5f5] transition-all duration-300 animate-bounce"
            >
              Shoot Now
            </button>
          </form>
        ) : (
          <p className="text-lg font-semibold mt-6">
            Thank you for subscribing! 🎉
          </p>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
