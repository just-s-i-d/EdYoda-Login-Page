import { createContext, useState } from "react";
export const UserContext=createContext({
    price:null,
    setPrice:()=>null
})

export const UserProvider=({children})=>{
    const [price,setPrice] =useState("179")
    const value={
        price,setPrice
    }
return(
    <UserContext.Provider value={value}>{children}</UserContext.Provider>
)
}