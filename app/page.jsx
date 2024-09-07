"use client";
import CodeEditor from "@/components/CodeEditor";
import { useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { GripVertical } from "lucide-react";

function HomePage() {
  const [showReport, setShowReport] = useState(false);

  return (
    <PanelGroup direction="horizontal">
      <Panel
        minSize={25}
        order={1}
        defaultSize={50}
        className="rounded-lg border border-white overflow-hidden"
      >
        <CodeEditor setShowReport={setShowReport} />
      </Panel>
      {showReport && (
        <>
          <PanelResizeHandle className="w-2 cursor-grab active:cursor-grabbing flex flex-col items-center justify-center">
            {/* <MdOutlineDragIndicator className="w-4 h-4 text-white" /> */}
            <GripVertical className="w-2 h-8 text-white" />
          </PanelResizeHandle>
          <Panel
            id="report"
            minSize={25}
            order={2}
            defaultSize={50}
            className={`border bg-reportBg border-white rounded-lg text-white`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            veniam nesciunt? Facere, placeat. Culpa distinctio doloribus sunt,
            aliquid aspernatur libero illum reiciendis, commodi repudiandae
            adipisci voluptas fuga enim corporis fugiat.
          </Panel>
        </>
      )}
    </PanelGroup>
  );
}

export default HomePage;
