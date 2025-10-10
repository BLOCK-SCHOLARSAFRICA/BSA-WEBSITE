

const Button = (props) => {
  return (
    <button
      className=" px-16 py-3 rounded-full bg-[#791EEB] text-white font-semibold shadow-lg 
            
             transition-all duration-300 
             hover:bg-[#00DEEF] "
    >
      {props.text}
    </button>
  );
}

export default Button;
