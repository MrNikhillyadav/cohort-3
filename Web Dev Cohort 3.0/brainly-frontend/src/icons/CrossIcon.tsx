interface CrossIconInterface {
        size : "sm" | "md" | "lg" ;
        onClick:() => void,
}

const sizeVariants = {
        sm : "size-4",
        md : "size-5",
        lg : "size-6",
}


export function CrossIcon(props:CrossIconInterface){
        return (
                <svg onClick={props.onClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={sizeVariants[props.size]}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

        )
}