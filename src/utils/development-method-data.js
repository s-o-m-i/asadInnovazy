import React from 'react'
import { FaEdit } from "react-icons/fa";

import { FaBuilding } from "react-icons/fa";
import { IoAnalyticsSharp } from "react-icons/io5";
import { GiAutoRepair } from "react-icons/gi";
import { FaBuildingColumns } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";

export const developmentMethodData = [
    {
        title:"Discussion and Planning",
        description:"We prioritize Discussion and Planning listening to our customers so their needs and ideas are discussed and a plan is formulated to give it a tech life.",
        icon:<FaEdit />,
    },
    {
        title:"Designing Architecture",
        description:"An effective and seamless design is architected to connect all the required components together for a smooth and modern software solution.",
        icon:<FaBuilding />,
    },
    {
        title:"Analysis",
        description:"The expectations of the clients are analyzed and integrated with the technological market needs to come up with an effective strategy.",
        icon:<IoAnalyticsSharp />,
    },
    {
        title:"Building",
        description:"Our engineers and developers get to the desk for coding and programming with the appropriate language and techniques to build the software.",
        icon:<FaBuildingColumns />,
    },
    {
        title:"Assuring Quality",
        description:"Our experts experiment the product for quality assurance by doing several tests to ensure that it will provide a smooth and bug free user interface.",
        icon:<SlBadge />,
    },
    {
        title:"Maintenance",
        description:"Our team is responsible for its maintenance with a life time support to help you like a family and ensure that it continues to work as per your requirements.",
        icon:<GiAutoRepair />,
    },
]