import { ReactElement } from "react";

interface ButtonInterface{
  title : string;
  size : "sm" | "md" |"lg";
  startIcon?: ReactElement,
  endIcon?: ReactElement,
  variant : 'primary'|'secondary'

}

const sizeStyles = {
  "sm" :"rounded-sm px-2 py-1 text-sm",
  "md" :"rounded-md px-4 py-2 text-md",
  "lg" :"rounded-lg px-8 py-4 text-xl",
}

const ButtonVariants = {
  "primary" : 'bg-blue-600 text-white',
  "secondary" : "bg-blue-200 text-blue-600"
}

export  function Button(props : ButtonInterface){ 
  return (
    <button className={`flex items-center justify-center ${ButtonVariants[props.variant]}   bg-red-200 ${sizeStyles[props.size]}`}>
      {props.startIcon}
      <span  className="pl-2 pr-2">
          {props.title}
      </span>
      {props.endIcon}
    </button>
  )
}
