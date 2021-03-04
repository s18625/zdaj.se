import React from 'react'
import * as IconsAi from 'react-icons/ai'
import * as IconsGi from 'react-icons/gi'
import { BiAccessibility } from 'react-icons/bi'


export const pagesData = [
    {
        path : "/",
        text : "Home",
        icon : <IconsAi.AiOutlineHome/>
    },
    {
        path : "/shop",
        text : "Shop",
        icon : <IconsGi.GiReceiveMoney/>

    },
    {
        path : "/reports",
        text : "Reports",
        icon : <BiAccessibility/>
    },
    {
        path : "/contact",
        text : "Contact us",
        icon : <IconsAi.AiOutlinePhone/>
    }
]