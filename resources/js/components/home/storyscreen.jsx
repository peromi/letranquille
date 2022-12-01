import React from "react";
import HomeContainer from "./HomeContainer";

import aman from "../../assets/images/aman.png";
import { stories } from "../../constants";

function StoryScreen() {
    return (
        <HomeContainer>
            <div className="h-[354px] bg-red-600 flex flex-col justify-center items-center ">
                <h1 className="md:text-6xl lg:text-6xl text-xl font-bold text-white tracking-tighter">
                    Our Story
                </h1>
                <p className="text-white">Journey of our users love stories</p>
            </div>
            <div className=" md:w-8/12 lg:w-8/12 w-full sm:px-12 py-12 mx-auto flex flex-col">
                {stories.map((story, index) =><div className="gap-4 rounded-md my-[12px] flex flex-row items-center shadow-xl bg-white p-3">
                    <img src={story.image} width={120} className="rounded-full" />
                    <div className="mx-4">
                        <h1 className="font-bold text-xl tracking-tighter font-['Inter-black']">
                            {story.title}
                        </h1>
                        <p>{story.message}</p>
                    </div>
                </div>)}
               
                 
            </div>
        </HomeContainer>
    );
}

export default StoryScreen;
