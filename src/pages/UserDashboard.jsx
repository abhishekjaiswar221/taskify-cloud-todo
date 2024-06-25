import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="flex flex-col w-full gap-3 px-4 py-8 bg-gray-100">
      <div className="p-2">
        <h3 className="text-2xl font-semibold tracking-tight scroll-m-20">
          My Notes
        </h3>
      </div>
      <div className="relative pb-2">
        <div className="absolute top-2 left-2">
          <Search size={20} strokeWidth={1.5} />
        </div>
        <div>
          <Input
            className="px-8 bg-gray-200 border border-gray-300"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="p-2 border border-gray-200 rounded-lg shadow-md bg-gray-50">
        <div className="pb-3 border-b border-gray-200 heading">
          <p className="text-lg font-medium">Note Heading</p>
          <p className="text-sm">Date</p>
        </div>
        <div className="py-4">
          Note Description Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Deleniti molestiae incidunt ut ratione enim tempora omnis
          placeat in laborum vero, quis harum voluptates adipisci quam.
        </div>
      </div>
      <div className="p-2 border border-gray-200 rounded-lg shadow-md bg-gray-50">
        <div className="pb-3 border-b border-gray-200 heading">
          <p className="text-lg font-medium">Note Heading</p>
          <p className="text-sm">Date</p>
        </div>
        <div className="py-4">
          Note Description Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Deleniti molestiae incidunt ut ratione enim tempora omnis
          placeat in laborum vero, quis harum voluptates adipisci quam.
        </div>
      </div>
      <div className="p-2 border border-gray-200 rounded-lg shadow-md bg-gray-50">
        <div className="pb-3 border-b border-gray-200 heading">
          <p className="text-lg font-medium">Note Heading</p>
          <p className="text-sm">Date</p>
        </div>
        <div className="py-4">
          Note Description Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Deleniti molestiae incidunt ut ratione enim tempora omnis
          placeat in laborum vero, quis harum voluptates adipisci quam.
        </div>
      </div>
      <div className="p-2 border border-gray-200 rounded-lg shadow-md bg-gray-50">
        <div className="pb-3 border-b border-gray-200 heading">
          <p className="text-lg font-medium">Note Heading</p>
          <p className="text-sm">Date</p>
        </div>
        <div className="py-4">
          Note Description Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Deleniti molestiae incidunt ut ratione enim tempora omnis
          placeat in laborum vero, quis harum voluptates adipisci quam.
        </div>
      </div>
      <div className="p-2 border border-gray-200 rounded-lg shadow-md bg-gray-50">
        <div className="pb-3 border-b border-gray-200 heading">
          <p className="text-lg font-medium">Note Heading</p>
          <p className="text-sm">Date</p>
        </div>
        <div className="py-4">
          Note Description Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Deleniti molestiae incidunt ut ratione enim tempora omnis
          placeat in laborum vero, quis harum voluptates adipisci quam.
        </div>
      </div>
      <div className="p-2 border border-gray-200 rounded-lg shadow-md bg-gray-50">
        <div className="pb-3 border-b border-gray-200 heading">
          <p className="text-lg font-medium">Note Heading</p>
          <p className="text-sm">Date</p>
        </div>
        <div className="py-4">
          Note Description Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Deleniti molestiae incidunt ut ratione enim tempora omnis
          placeat in laborum vero, quis harum voluptates adipisci quam.
        </div>
      </div>
      <div className="sticky bottom-5">
        <Button className="flex h-12 gap-1 rounded-full">
          <Plus />
          <Link>Add Note</Link>
        </Button>
      </div>
    </div>
  );
};

export default UserDashboard;
