

const Button = (props) => {
  return (
    <button
      className=" px-16 py-3 rounded-full bg-[#FE6906] text-white font-semibold shadow-lg 
             border-2 border-white 
             transition-all duration-300 
             hover:bg-[#e45c05]"
    >
     {props.text}
    </button>
  );
}

export default Button;
