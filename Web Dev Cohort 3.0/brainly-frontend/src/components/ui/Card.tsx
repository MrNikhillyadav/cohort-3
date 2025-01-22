import { DeleteIcon } from "../../icons/DeleteIcon"
import { ShareIcon } from "../../icons/ShareIcon"
import { TwitterIcon } from "../../icons/Twittter"
import { YoutubeIcon } from "../../icons/YoutubeIcon"

interface CardInterface{
        type: string,
        title?: string,
        link: string,
      
}



export function Card( {type, title, link}: CardInterface ) {
        return (
        <div>
                <div className="w-[22vw] flex-col p-4 rounded-md shadow-sm bg-white items-center justify-center flex">
                        {/* top-icons and heading */}
                        <div className="flex  gap-4 items-center justify-between">
                                <div className="flex gap-2 justify-start items-center">
                                        {type === 'youtube'? <YoutubeIcon size={'md'}/> : <TwitterIcon size={'md'}/>}
                                        <div className="px-2 text-md font-semibold  text-start">{title}</div>
                                </div>
                                <div className="flex gap-2 justify-end items-center">
                                        <div><ShareIcon size="md"/></div>
                                        <div><DeleteIcon size="md"/></div>
                                </div>  
                        </div> 

                           {/*video  */}
                        <div className=" w-full rounded-sm  p-2">
                               {type === 'youtube' &&  <iframe className="w-full h-[20vh]" src={link.replace('watch','embed').replace('?v=','/')} 
                                        title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                                        gyroscope; picture-in-picture; web-share" 
                                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>               
                                </iframe>}

                                {type === 'twitter' &&  <blockquote 
                                                className="twitter-tweet min-h-[19rem]">
                                                <a href={link.replace('x.com', 'twitter.com')}></a>
                                        </blockquote>}
                        </div>
                </div>
        </div>
        )
}
