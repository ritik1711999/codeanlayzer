import { TbReport } from "react-icons/tb";
import Spinner from "./Spinner";

function Report({ isReportCollapsed, report, isReportLoading }) {
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
      {isReportLoading ? (
        <Spinner loading={true} />
      ) : (
        <div className="px-1 py-1 bg-reportBg">{report}</div>
      )}
    </>
  );
}

export default Report;
