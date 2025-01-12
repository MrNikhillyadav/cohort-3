import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Profile(){
    const session = await getServerSession()
    
    if(!session){
       redirect('/signin')
    }

    return (
        <div className="text-center">
            Your Profile <br />
            <p>Username: {session.user?.name}</p>
        </div>
    )
}