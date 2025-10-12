import React, { useContext, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import noteContext from "@/context/noteContext.js";

const AddNote = () => {
  const { addNote } = useContext(noteContext);

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
  };

  return (
    <div className="relative z-10 w-full p-4 overflow-y-auto border-b border-gray-200 h-1/2 lg:h-full lg:border-b-0 lg:border-r sm:p-6 lg:w-1/2">
      <div className="max-w-md mx-auto space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#3b5d22]">
            Create a New Note
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Capture your ideas and thoughts in a clean and simple interface.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Note Title"
            id="title"
            name="title"
            // value={title}
            // onChange={(e) => setTitle(e.target.value)}
            className="text-base py-2.5 h-10 px-4 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none"
          />
          <Textarea
            placeholder="Write your thoughts..."
            id="description"
            name="description"
            // value={content}
            // onChange={(e) => setContent(e.target.value)}
            className="min-h-[160px] text-base py-2.5 px-4 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none"
          />

          <div>
            <label
              className="block mb-1 text-sm font-medium text-gray-700"
              htmlFor="tag"
            >
              Select Tag
            </label>
            <Select id="tag" name="tag">
              <SelectTrigger
                className="w-full rounded-xl border border-gray-300 shadow-sm bg-white text-base py-2.5 px-4
            h-10"
              >
                <SelectValue placeholder="Select Tag" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Personal">Personal</SelectItem>
                <SelectItem value="Work">Work</SelectItem>
                <SelectItem value="Urgent">Urgent</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            // onClick={handleAddNote}
            className="w-full h-10 flex items-center justify-center gap-2 text-white text-base font-medium shadow-md rounded-xl bg-[#3b5d22] hover:bg-[#35511f]"
          >
            <Plus className="w-5 h-5" />
            Add Note
          </Button>
        </form>
      </div>
    </div>
  );
};
export default AddNote;
