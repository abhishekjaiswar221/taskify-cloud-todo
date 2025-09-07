import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import HeaderNavigation from "@/components/navigation/HeaderNavigation";
import FooterNavigation from "@/components/navigation/FooterNavigation";
import { Plus, Tag } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const UserDashboard = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("Personal");

  const handleAddNote = () => {
    if (title.trim() && content.trim()) {
      setNotes([
        {
          id: Date.now(),
          title,
          content,
          date: new Date().toLocaleDateString(),
          tag,
        },
        ...notes,
      ]);
      setTitle("");
      setContent("");
      setTag("Personal");
    }
  };

  const getTagStyles = (tag) => {
    switch (tag) {
      case "Work":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "Urgent":
        return "bg-red-100 text-red-800 border-red-200";
      case "Personal":
        return "bg-green-100 text-green-800 border-green-200";
      case "Other":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <>
      <HeaderNavigation />
      <div className="relative flex flex-col h-screen overflow-hidden lg:flex-row bg-gradient-to-br from-gray-100 to-gray-50 text-zinc-800">
        {/* Background Blobs */}
        <div className="absolute -top-32 -left-32 w-[300px] h-[300px] bg-green-100 rounded-full blur-[100px] opacity-30 z-0" />
        <div className="absolute -bottom-32 -right-32 w-[300px] h-[300px] bg-green-100 rounded-full blur-[100px] opacity-30 z-0" />

        {/* Left Side: Add Note Form */}
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

            <Input
              placeholder="Note Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-base py-2.5 h-10 px-4 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none"
            />
            <Textarea
              placeholder="Write your thoughts..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="min-h-[160px] text-base py-2.5 px-4 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none"
            />

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Select Tag
              </label>
              <Select value={tag} onValueChange={setTag}>
                <SelectTrigger className="w-full rounded-xl border border-gray-300 shadow-sm bg-white text-base py-2.5 px-4 h-10">
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
              onClick={handleAddNote}
              className="w-full h-10 flex items-center justify-center gap-2 text-white text-base font-medium shadow-md rounded-xl bg-[#3b5d22] hover:bg-[#35511f]"
            >
              <Plus className="w-5 h-5" />
              Add Note
            </Button>
          </div>
        </div>

        {/* Right Side: Notes Preview */}
        <div className="relative z-10 w-full p-4 overflow-y-auto h-1/2 lg:h-full sm:p-6 lg:w-1/2">
          <div className="max-w-md mx-auto space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#3b5d22]">
              Your Notes
            </h2>
            {notes.length === 0 ? (
              <p className="text-gray-500">
                No notes yet. Start by adding one!
              </p>
            ) : (
              notes.map((note) => (
                <div
                  key={note.id}
                  className="p-4 transition bg-white border border-gray-200 shadow-sm rounded-xl hover:shadow-md"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-800 break-words max-w-[70%]">
                      {note.title}
                    </h3>
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                      {note.date}
                    </span>
                  </div>
                  <p className="mb-2 text-sm leading-relaxed text-gray-700 break-words whitespace-pre-wrap">
                    {note.content}
                  </p>
                  <div
                    className={`flex items-center gap-2 px-2 py-1 text-xs border rounded-full w-fit ${getTagStyles(
                      note.tag
                    )}`}
                  >
                    <Tag className="w-4 h-4" />
                    {note.tag}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <FooterNavigation />
    </>
  );
};

export default UserDashboard;
