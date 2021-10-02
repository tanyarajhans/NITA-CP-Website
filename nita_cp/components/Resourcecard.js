import React from "react";
import Image from "next/image";
function Resourcecard(props) {
  return (
    <div className="flex flex-col w-80 justify-center items-center z-0 m-4 p-3">
      <Image
        src={props.Image}
        alt="Picture of the author"
        width={300}
        height={170}
        className="rounded-xl "
      />
      <div className="flex flex-col items-center w-50 -mt-9 z-10 p-2 rounded-md  bg-white">
          <h1 className=" text-xl font-bold ">{props.name}</h1>
        <div className="flex w-60 justify-between rounded-md p-2 bg-gray-300  ">
            <h1>
                {props.author}
            </h1>
            <h1>
                {props.difficulty}
            </h1>
        </div>
      </div>
    </div>
  );
}

export default Resourcecard;
