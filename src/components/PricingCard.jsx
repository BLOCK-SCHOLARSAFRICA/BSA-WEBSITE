
import { Check, ArrowRight } from "lucide-react";
import checkIcon from "../assets/checkmark.png";


const PricingCard = ({ title, price, nairaPrice, features,cardId, isHighlighted = false, buttonText = "GET INVOLVED", setHighlightedCard }) => {
    return (
      <div className={`relative p-8 rounded-lg ${isHighlighted ? 'border-4 border-[#D50866] scale-105' : ''} text-white`} onClick={() => setHighlightedCard(cardId)}>
        <h3 className="text-3xl font-semibold mb-8">{title}</h3>
        
        <div className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
                <img src={checkIcon} alt="check" className="w-5 h-5 mt-0.5 flex-shrink-0" />
              <span className="text-gray-300 text-lg font-medium leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <div className="text-4xl font-bold mb-2">
            ${price} <span className="text-2xl text-gray-400">({nairaPrice})</span>
          </div>
          <div className="text-gray-400">Per Month</div>
        </div>

        <button className="w-fit bg-customBrown hover:bg-customBrown/80 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200 flex items-center justify-center space-x-2">
          <span>{buttonText}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  };

export default PricingCard;