import React from "react";
import UserProfileComponent from "@/components/molecules/user-profile-component";
import { icons } from "@/public/assets/icons";

function Header() {
  return (
    // <div className="h-[82px] flex items-center bg-white px-8 justify-between w-full">
    //   <div className="">
    //     <h1 className="text-text font-semibold text-2xl">Dashboard</h1>
    //     {/*<p className="text-dark-gray font-normal">Welcome Back, Emmanuel! </p>*/}
    //   </div>
    //
    //   <div className="flex gap-8 items-center">
    //     <UserProfileComponent />
    //     <button className="w-8 h-8 flex items-center justify-center">
    //       {icons.notification_bell}
    //     </button>
    //   </div>
    // </div>

     <div className="h-[82px] flex items-center bg-green-50 px-8 justify-between w-full shadow-lg">
    {/* Left side - only visible on md and up */}
    <div className="hidden md:block">
      <h1 className="text-text font-semibold text-2xl">Dashboard</h1>
      <p className="text-dark-gray font-normal">Welcome Back, Emmanuel!</p>
    </div>

    {/* Right side - always visible */}
    <div className="flex gap-3 items-center ml-auto">
      <UserProfileComponent />
      <button className="w-8 h-8 flex items-center justify-center">
        {icons.notification_bell}
      </button>
    </div>
  </div>

 );
}

export default Header;
