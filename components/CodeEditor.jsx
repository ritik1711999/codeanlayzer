"use client";
import React from "react";
import Editor from "@monaco-editor/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { TbAnalyze } from "react-icons/tb";
import { FaCode } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function CodeEditor({ setShowReport }) {
  const handleAnalysis = () => {
    setShowReport((prev) => !prev);
  };

  return (
    <>
      <div className="flex flex-row w-full text-white bg-bgGray justify-between px-[10px]">
        <div className="flex flex-row items-center gap-1">
          <FaCode />
          <span>Code</span>
        </div>
        <div className="flex  text-white bg-bgGray py-2 justify-center gap-[1px]">
          <DropdownMenu>
            <DropdownMenuTrigger className="px-3 py-1 flex items-center bg-darkGray rounded-l-lg hover:bg-lightGray focus:outline-none">
              <div>language</div>
              <IoMdArrowDropdown className="ml-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-bgGray text-white hover:border-none focus:border-none active:border-none">
              <DropdownMenuItem>javascript</DropdownMenuItem>
              <DropdownMenuItem>java</DropdownMenuItem>
              <DropdownMenuItem>python</DropdownMenuItem>
              <DropdownMenuItem>c++</DropdownMenuItem>
              <DropdownMenuItem>go</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button
            onClick={handleAnalysis}
            className="bg-darkGray px-3 py-1 rounded-r-lg hover:bg-lightGray inline-flex items-center"
          >
            <div>Analyze</div>
            <TbAnalyze className="ml-1 h-5 w-5" />
          </button>
        </div>
      </div>
      <Editor
        height="90vh"
        defaultLanguage="javascript"
        defaultValue="// some comment"
        theme="vs-dark"
      />
    </>
  );
}

export default CodeEditor;
