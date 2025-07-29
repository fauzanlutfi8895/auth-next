"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components/ui/button";
// flex-1 untuk mengisi flex dari induknya
export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button className="flex-1" size="lg" variant="outline" onClick={() => {}}>
        <FcGoogle />
      </Button>
      <Button className="flex-1" size="lg" variant="outline" onClick={() => {}}>
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};
