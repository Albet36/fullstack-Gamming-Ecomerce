import { getCookies } from "cookies-next";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/auth.slice";

const profile = () => {
    const { user } = useSelector((state) => ({ ...state.auth }));
    const dispatch = useDispatch();
    console.log(user); 
    useEffect(() => {
      const users = JSON.parse(localStorage.getItem("Profile"));
      dispatch(setUser(users));
    },[]);
console.log(user);
    return(
        <div>
        <h1 className="text-center text-4xl my-10">Thông tin người dùng</h1>
       <div className="flex flex-row justify-center">
       <div>
       <img className="w-44 h-44 rounded-full" src={user?.result?.avatar} />
      <div className="my-10">
     <div className="flex gap-1 my-2"><p>Họ và tên :</p> <p>{user?.result?.name}</p></div>
     <div className="flex gap-1 my-2"><p>Tuổi :</p> <p>{user?.result?.age}</p></div>
     <div className="flex gap-1 my-2"><p>Địa chỉ :</p> <p>{user?.result?.address}</p></div>
      </div>
       </div>
       </div>
    </div>
    )
}
export default profile;