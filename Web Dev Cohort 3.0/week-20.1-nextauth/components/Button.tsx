
interface ButtonInterface{
  title : string;
  size : "sm" | "md" |"lg";
  variant : 'branding'|'secondary',
  className : string,
  onClick?: () => void
}

const sizeStyles = {
  "md" :"rounded-md  px-4 py-2 h-9  ",
  "lg" :"rounded-md h-12 px-6 py-2  ",
}

const ButtonVariants = {
  "branding" : ' bg-gradient-to-b from-blue-400 to-blue-700 text-white font-medium hover:opacity-80 transition-all duration-300',
  "secondary" : " hover:bg-white/10 backdrop-blur-sm text-white border-1 border-white/30 ",
}

export  function Button(props : ButtonInterface){ 
  return (
    <button  onClick={props.onClick} className={`flex  items-center justify-center ${ButtonVariants[props.variant]}  ${sizeStyles[props.size]}`}>
      <span  className="pl-2 pr-2">
          {props.title}
      </span>
     
    </button>
  )
}