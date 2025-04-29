// class-based component
class Students extends React.component{
    render(){
        return  (
            <h2> 
                {`Hello ${this.props.message}`}
            </h2>
        )
    }
}

// functional component
export  function Student(){
    return (
        <h2>
            {`Hello, ${this.props.message}`}
        </h2>
    )
}

//props
export default function Greeting( prop ){
    return <h1> {`Good morning, ${prop.name}` }</h1>
}

<Greeting prop={'Rajneesh'} />


//state in class-based component
class Welcome extends React.component{
    constructor(props){
        super(props)
            this.state = {
                message : 'Welcome to React'
            }

    }
    render(){
        return (
            <div>
                <h1>{this.state.message``} </h1>
            </div>
        )
    }
}


//iterating on object
<div>
    {items.map((items) => (
        <h1>items.name</h1>
    ))}
</div>


//useMemo
const memoizedValue = useMemo(() => (
    ExpensiveValue(a,b)
))


//controlled components
export default function UserProfile(){
    const [username,setUsername] = useState("")
    return (
        <div>
            <input type="text" value={username} onChange={(e) => e.target.value} />
        </div>
    )
}

//uncontrolled components
export default function UserProfile1(){
    const inputRef = useRef('')

    function handleSubmit(){
        const name = inputRef.current.value;
        console.log(`username :${name}`)
    }
    return  (
        <h1>
            <input ref={inputRef} type="text" />
            <button onClick={handleSubmit}>submit</button>
        </h1>
    )
}