import React , {useState} from 'react';
const useToggle = (active=false)=>{
    const [isActive,setIsActive]=useState(active);
    console.log({active});
    return[isActive,setIsActive];
}
export default useToggle;