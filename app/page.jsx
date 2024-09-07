"use client";
import CodeEditor from "@/components/CodeEditor";
import { useState } from "react";

function HomePage() {
  const [showReport, setShowReport] = useState(false);

  return (
    <>
      <div className="flex flex-row  mx-2 gap-2 max-h-screen">
        <div
          className={`flex-1 ${
            !showReport ? "w-full" : "w-1/2"
          } rounded-lg border border-white overflow-hidden`}
        >
          <CodeEditor setShowReport={setShowReport} />
        </div>
        <div
          className={`${
            !showReport ? "hidden" : "w-1/2"
          } flex-1 border bg-reportBg border-white rounded-lg text-white`}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          veniam nesciunt? Facere, placeat. Culpa distinctio doloribus sunt,
          aliquid aspernatur libero illum reiciendis, commodi repudiandae
          adipisci voluptas fuga enim corporis fugiat.
        </div>
      </div>
    </>
  );
}

export default HomePage;
