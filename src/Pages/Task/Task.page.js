import React from "react";
import avatar from "../../Images/Frame 546.png"

import { Settings } from "../../Components/icons/Settings";
import { ActiveIcon } from "../../Components/icons/ActiveIcon"; 

import { HouseIcon } from "../../Components/icons/MainIcons/HouseIcon";
import { EncyclopediaIcon } from "../../Components/icons/MainIcons/EncyclopediaIcon"
import { FriendsIcon } from "../../Components/icons/MainIcons/FriendsIcon";
import { GroupsIcon } from "../../Components/icons/MainIcons/GroupsIcon";
import { MapIcon } from "../../Components/icons/MainIcons/MapIcon";
import { MessagesIcon } from "../../Components/icons/MainIcons/MessagesIcon";
import { NewsIcon } from "../../Components/icons/MainIcons/NewsIcon";
import { WPIcon } from "../../Components/icons/MainIcons/WPIcon";

import { PetShelterIcon } from "../../Components/icons/AnimalServicesIcons/PetSheltersIcon";
import { OtherIcon } from "../../Components/icons/AnimalServicesIcons/OtherIcon";
import { PetStoreIcon } from "../../Components/icons/AnimalServicesIcons/PetStoreIcon";
import { VetHelpIcon } from "../../Components/icons/AnimalServicesIcons/VetHelpIcon";
import { VolounteerIcon } from "../../Components/icons/AnimalServicesIcons/VolounteerIcon";


const sidebarData = [
    {title:"Profile",link:"google.com",icon:<HouseIcon/>},
    {title:"New",link:"google.com",icon:<NewsIcon/>,counter: 1000},
    {title:"Map",link:"google.com",icon:<MapIcon/>,counter: 1000},
    {title:"Wanted Pets",link:"google.com",icon:<WPIcon/>,counter: 100},
    {title:"Encyclopedia",link:"google.com",icon:<EncyclopediaIcon/>},
    {title:"Messages",link:"google.com",icon:<MessagesIcon/>,counter: 4},
    {title:"Friends",link:"google.com",icon:<FriendsIcon/>,counter: 98},
    {title:"Groups",link:"google.com",icon:<GroupsIcon/>}]

const animalSideBar = [
    {title:"Vet Help",link:"google.com",icon:<VetHelpIcon/>},
    {title:"Pet Store",link:"google.com",icon:<PetStoreIcon/>,},
    {title:"Pet Shelters",link:"google.com",icon:<PetShelterIcon/>,},
    {title:"Volounteer teams",link:"google.com",icon:<VolounteerIcon/>},
    {title:"Other services",link:"google.com",icon:<OtherIcon/>}]

export const TaskPage = () => {

    return <div className="p-[10px] flex flex-col align-center items-center self-stretch rounded-2xl bg-green-700 h-[702px] w-[220px] "> 
        <div className="">
        
                <div className="flex py-[10px] px-[5px] items-start gap-[100px] self-stretch">
                    <p>My account</p>
                   <button><Settings className="w-[15px] h-[15px] "/></button>
                </div>
    
                    <div className="relative ">
                        <div>
                                <img src={avatar} alt="Avatar" className=" w-[40px] h-[40px] "/>
                        </div>
                                <ActiveIcon/>
                    </div>
                    
                    <div className="relative py-[10px] items-center gap-[10px] self-stretch">
                        <div className="absolute  bottom-[30px] items-start gap-[10px] left-[50px] self-stretch ">
                             <p className="text-[14px]">Dorothy Kovalsky Parker</p>
                             <p className="text-[#8A8A8A] text-[12px]">Pet Owner</p>
                         </div>
                    </div>
                
                <div>
                <hr className="w-[170px] pb-[10px]"/>
                
                    <p className="py-[10px] px-[5px] flex gap-[10px] items-center  self-stretch">Main</p>
                    {sidebarData.map(data => (<button className=" px-[15px] py-[5px] flex w-[220px] h-[30px] rounded-xl align-center fill-black stroke-black gap-[10px] hover:bg-[#FF855F]  hover:text-white group hover:fill-white hover:stroke-white">{data.icon} {data.title} 
                    <span className="bg-[#FF855F] w-[50px] ml-auto text-white group-hover:bg-white group-hover:text-[#FF855F] rounded-[99px] ">{data.counter}</span>
                    </button>))}
                </div>
                <div>
                    <p className=" py-[10px] px-[5px] items-center flex gap-[10px] self-stretch">Animal Services</p>
                    {animalSideBar.map(data => (<button className=" px-[15px] py-[5px] rounded-xl w-[200px] h-[30px] hover:bg-[#FF855F] hover:text-white flex align-center gap-[10px] hover:fill-white fill-black stroke-black hover:stroke-white">{data.icon} {data.title} <span>{data.counter}</span></button>))}
                </div>
            
        </div>
    </div>
    
}
