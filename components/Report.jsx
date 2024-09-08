import React from "react";
import { TbReport } from "react-icons/tb";

function Report({ isReportCollapsed }) {
  if (isReportCollapsed) {
    return (
      <div className="flex flex-col items-start bg-bgGray h-[600px]">
        <div className="flex flex-row gap-1 ml-1 pt-8 mt-5 transform rotate-90 items-center">
          <TbReport />
          <span>Report</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-row items-start bg-bgGray">
        <div className="flex flex-row items-center gap-1 ml-1 py-1">
          <TbReport />
          <span>Report</span>
        </div>
      </div>
      <div className="px-1 py-1 bg-reportBg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, eum
        commodi repellat illo libero alias doloribus, labore quas minima enim
        asperiores natus eveniet voluptatem corrupti officia ipsum sit
        consequuntur. Voluptatibus?
      </div>
    </>
  );
}

export default Report;
