import { ReactElement } from "react";

interface ButtonInterface{
  title : string;
  size : "sm" | "md" |"lg";
  startIcon?: ReactElement,
  endIcon?: ReactElement,
  variant : 'primary'|'secondary'|'submit',
  onClick?: () => void;

}

const sizeStyles = {
  "sm" :"rounded-sm px-2 py-2 text-sm",
  "md" :" rounded-md px-4 py-2 text-md",
  "lg" :"rounded-lg px-8 py-4 text-xl",
}

const ButtonVariants = {
  "primary" : ' hover:bg-opacity-90 bg-blue-600 text-white',
  "secondary" : " hover:bg-opacity-80 bg-blue-200 text-blue-600",
  "submit" :  'w-full hover:bg-opacity-90 bg-blue-600 text-white',
}

export  function Button(props : ButtonInterface){ 
  return (
    <button  onClick={props.onClick} className={`flex  items-center justify-center ${ButtonVariants[props.variant]}   ${sizeStyles[props.size]}`}>
      {props.startIcon}
      <span  className="pl-2 pr-2">
          {props.title}
      </span>
      {props.endIcon}
    </button>
  )
}
