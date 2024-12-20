export default function Navbar(){
        return (
                <div className="flex justify-center  my-8 items-center">
                        <ul className="flex justify-center gap-20 px-8 rounded-full items-center">
                                <li className="cursor-pointer p-2 hover:bg-white/20 px-2 rounded-sm">Home</li>
                                <li className="cursor-pointer p-2 hover:bg-white/20 px-2 rounded-sm">Projects</li>
                                <li className="cursor-pointer p-2 hover:bg-white/20 px-2 rounded-sm">Blogs</li>
                                <li className="cursor-pointer p-2 hover:bg-white/20 px-2 rounded-sm">Contact us</li>
                        </ul>
                </div>
        )
}