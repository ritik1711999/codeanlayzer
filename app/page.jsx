"use client";
import CodeEditor from "@/components/CodeEditor";
import { useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { GripVertical } from "lucide-react";
import Report from "@/components/Report";

function HomePage() {
  const [showReport, setShowReport] = useState(false);
  const [isCodeEditorCollapsed, setIsCodeEditorCollapsed] = useState(false);
  const [isReportCollapsed, setIsReportCollapsed] = useState(false);

  const handleResizeCodeEditor = (size) => {
    console.log(size);
    console.log(isCodeEditorCollapsed);
    if (size < 3) {
      setIsCodeEditorCollapsed(true);
    } else {
      setIsCodeEditorCollapsed(false);
    }
  };

  const handleResizeReport = (size) => {
    if (size < 3) {
      setIsReportCollapsed(true);
    } else {
      setIsReportCollapsed(false);
    }
  };

  return (
    <PanelGroup direction="horizontal">
      <Panel
        minSize={2.5}
        order={1}
        defaultSize={50}
        className="rounded-lg border border-white overflow-hidden"
        onResize={handleResizeCodeEditor}
      >
        <CodeEditor
          setShowReport={setShowReport}
          isCodeEditorCollapsed={isCodeEditorCollapsed}
        />
      </Panel>
      {showReport && (
        <>
          <PanelResizeHandle className="w-2 cursor-grab active:cursor-grabbing flex flex-col items-center justify-center">
            <GripVertical className="w-2 h-8 text-white" />
          </PanelResizeHandle>
          <Panel
            id="report"
            minSize={2.5}
            order={2}
            defaultSize={50}
            className={`border bg-reportBg border-white rounded-lg text-white`}
            onResize={handleResizeReport}
          >
            <Report isReportCollapsed={isReportCollapsed} />
          </Panel>
        </>
      )}
    </PanelGroup>
  );
}

export default HomePage;
