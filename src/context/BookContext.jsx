import { createContext,useState } from "react";
export const BookContext=createContext();
const BookContextProvider=(props)=>{
    const [book,setBook]=useState([
        {title:"ikigai",id:1},
        {title:"power",id:2},
        {title:"richdad",id:3},
        {title:"cant hurt me",id:4},
    ])
return (
    <BookContext.Provider value={{book}}>
        {props.children}
    </BookContext.Provider>
)
}
export default BookContextProvider