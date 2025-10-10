import React from "react";
import Button from "../../components/Ui/Button";

import sponsor1 from "../../assets/images/sponsor1.png";
import sponsor2 from "../../assets/images/sponsor2.png";
import sponsor3 from "../../assets/images/sponsor3.png";
import sponsor4 from "../../assets/images/sponsor4.png";

import partner1 from "../../assets/images/partners/kether-logo.png";
import partner2 from "../../assets/images/partners/theGenesis-logo.png";
import partner3 from "../../assets/images/partners/block-logo.png";
import partner4 from "../../assets/images/partners/teen-logo.PNG";
import partner5 from "../../assets/images/partners/syncthesis-logo.png";
import partner6 from "../../assets/images/partners/ibom.png";
import partner7 from "../../assets/images/partners/velopay-logo.png";
import partner8 from "../../assets/images/partners/log1.png";




const Sponsors = () => {
  const sponsorLogos = [
    {
      src: sponsor1,
      alt: "Sponsor 1",
      width: "136px",
      height: "134px",
    },
    {
      src: sponsor2,
      alt: "Droom Logo",
      width: "264px",
      height: "74px",
      margin: "30px 0",
    },
    {
      src: sponsor3,
      alt: "Sponsor 3",
      width: "134px",
      height: "134px",
    },
    {
      src: sponsor4,
      alt: "Sponsor 4",
      width: "146px",
      height: "134px",
    },
  ];

  const partnerLogos = [
    {
      src: partner1,
      alt: "Partner 1",
      width: "136px",
      height: "134px",
    },
    {
      src: partner2,
      alt: "Droom Logo",
      width: "264px",
      height: "74px",
      margin: "30px 0",
    },
    {
      src: partner3,
      alt: "Partner 3",
      width: "134px",
      height: "134px",
    },
    {
      src: partner4,
      alt: "Partner 4",
      width: "146px",
      height: "134px",
    },

    {
      src: partner5,
      alt: "Partner 4",
      width: "146px",
      height: "134px",
    },

    {
      src: partner6,
      alt: "Partner 4",
      width: "146px",
      height: "134px",
    },

    {
      src: partner7,
      alt: "Partner 4",
      width: "146px",
      height: "134px",
    },

    {
      src: partner8,
      alt: "Partner 4",
      width: "146px",
      height: "134px",
    },
  ];

  return (
    <section className="w-full bg-background-primary">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-14 py-16 md:py-24 lg:py-[96px]">
        {/* Main Content Container */}
        <div className="flex flex-col gap-16 md:gap-20 lg:gap-[92px] justify-start items-center">
          {/* Sponsors Section Title */}
          {/* <h2
            className="text-[32px] sm:text-[40px] md:text-[45px] lg:text-[50px] font-medium leading-[48px] sm:leading-[60px] md:leading-[67px] lg:leading-[75px] text-text-primary text-center"
            style={{ fontFamily: "Poppins" }}
          >
            Sponsors
          </h2> */}

          {/* Sponsors and Partners Container */}
          <div className="flex flex-col gap-16 md:gap-20 lg:gap-[220px] justify-start items-center w-full max-w-[952px]">
            {/* Sponsors Logos */}
            {/* <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-[90px] w-full">
              {sponsorLogos?.map((logo, index) => (
                <img
                  key={index}
                  src={logo?.src}
                  alt={logo?.alt}
                  className="object-contain hover:scale-105 transition-transform duration-200"
                  style={{
                    width: logo?.width,
                    height: logo?.height,
                    margin: logo?.margin || "0",
                  }}
                />
              ))}
            </div> */}

            {/* Partners Section */}
            <div className="flex flex-col gap-12 md:gap-16 lg:gap-[98px] justify-start items-center w-full">
              {/* Partners Title */}
              <h3
                className="text-[32px] sm:text-[40px] md:text-[45px] lg:text-[50px] font-medium leading-[48px] sm:leading-[60px] md:leading-[67px] lg:leading-[75px] text-text-primary text-center"
                style={{ fontFamily: "Poppins" }}
              >
                Partners
              </h3>

              {/* Partners Logos */}
              <div className="flex flex-wrap justify-center items-center gap-8 animate-slideInRight sm:gap-2 md:gap-16 lg:gap-[9px] w-full md:justify-between">
                {partnerLogos?.map((logo, index) => (
                  <img
                    key={index}
                    src={logo?.src}
                    alt={logo?.alt}
                    className="object-contain hover:scale-105 transition-transform duration-200 w-[300px] h-[150px] "
                  />
                ))}
              </div>

              {/* CTA Button */}
              <Button text="Become A Sponsor" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
