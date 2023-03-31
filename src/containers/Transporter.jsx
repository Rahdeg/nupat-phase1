import Profile from "@/components/Profile";
import Title from "@/components/Title";
import React from "react";
import { Profiles } from "../data/data";

const Transporter = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <div className="">
        <Title text="The Transpoters" />
      </div>
      <h1 className=" text-heading text-xl font-bold mb-5 mt-2">
        Meet Expert Team
      </h1>
      <div className=" flex items-center justify-center gap-8">
        {Profiles && Profiles.map((profile) => <Profile profile={profile} />)}
      </div>
    </div>
  );
};

export default Transporter;
