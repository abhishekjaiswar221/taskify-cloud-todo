import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
const AddNote = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="text-center">
        <h1 className="text-lg font-medium text-semibold">Add Note</h1>
      </div>
      <div>
        <Input
          className="text-lg font-medium"
          type="text"
          placeholder="Title"
        />
      </div>
      <div>
        <Textarea className="h-96 text-md" />
      </div>
      <div className="flex justify-end">
        <Button>Add Note</Button>
      </div>
    </div>
  );
};
export default AddNote;
