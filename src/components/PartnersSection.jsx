
import Slider from "react-slick";
import MIBT from "../assets/partnerLogo1.png";
import Optimus from "../assets/partnerLogo2.png";
import Bravpuls from "../assets/partnerLogo4.png";
import Turbo from "../assets/partnerLogo3.png";
import BlockBridge from "../assets/partnerLogo5.png";
import ActuateLogo from "../assets/partnerLogo6.png";

const PartnersSection = () => {
  const partners = [
    { src: MIBT, alt: "MIBT", hasWhiteBg: false },
    { src: Optimus, alt: "Optimus", hasWhiteBg: false },
    { src: Bravpuls, alt: "Bravpuls", hasWhiteBg: true },
    { src: Turbo, alt: "Turbo", hasWhiteBg: false },
    { src: BlockBridge, alt: "BlockBridge", hasWhiteBg: false },
    { src: ActuateLogo, alt: "ActuateLogo", hasWhiteBg: false },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <section id="partners">
      <div className="text-center bg-[#720034] py-20 w-full px-4">
        <h1 className="text-3xl md:text-4xl text-white font-bold mb-10">
          Partners
        </h1>

        {/* Partners Logos Slider */}
        <div className="w-full max-w-6xl mx-auto">
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <div key={index} className="px-2 flex justify-center items-center">
                <div className={`w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-lg shadow-md flex items-center justify-center ${
                  partner.hasWhiteBg ? 'bg-[#1a1a1a]' : 'bg-gray-50'
                }`}>
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="max-w-full max-h-full object-contain p-2"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;