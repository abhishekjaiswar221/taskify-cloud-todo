import React from "react";
import { Trash, ArrowLeft, Check } from "lucide-react";
import { Button } from "./ui/button";

const NoteItem = () => {
  return (
    <div className="relative flex flex-col w-full h-screen gap-5 px-4 py-8 bg-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <ArrowLeft />
        </div>
        <div>
          <Trash />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold tracking-tight scroll-m-20">
          Note Heading
        </h3>
        <p className="text-sm">Date</p>
      </div>
      <div>
        Note Description Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Totam in ex numquam, velit sequi libero dolore, nulla, fuga
        eveniet sit tempora laboriosam aspernatur eum minus!
      </div>
      <div className="absolute bottom-5 right-5">
        <Button className="box-content w-6 rounded-full h-9">
          <Check />
        </Button>
      </div>
    </div>
  );
};

export default NoteItem;
