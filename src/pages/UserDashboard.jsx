import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

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
      <div className="flex flex-col gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:grid">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Note Item</CardTitle>
              <CardDescription>Date</CardDescription>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
              explicabo?
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Note Item</CardTitle>
              <CardDescription>Date</CardDescription>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
              explicabo?
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Note Item</CardTitle>
              <CardDescription>Date</CardDescription>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
              explicabo?
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Note Item</CardTitle>
              <CardDescription>Date</CardDescription>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
              explicabo?
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Note Item</CardTitle>
              <CardDescription>Date</CardDescription>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
              explicabo?
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Note Item</CardTitle>
              <CardDescription>Date</CardDescription>
            </CardHeader>
            <CardContent>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum,
              explicabo?
            </CardContent>
          </Card>
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
