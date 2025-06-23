
interface SidebarItemInterface{
        title : string,
        icon : JSX.Element,
}

function SidebarItem({title,icon}:SidebarItemInterface) {
  return (
                <div className="cursor-pointer  hover:text-white  flex justify-start pl-10 items-center gap-4 p-4 rounded-md hover:bg-blue-600  hover:bg-opacity-90 ">
                       {icon} 
                        {title}
                </div>
  );
}

export default SidebarItem;