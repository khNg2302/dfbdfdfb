import { FC } from "react";
import LayoutBox from "../option-panel/LayoutBox";
import CellEditReportItem from "./CellEditReportItem";
import { ReportItemsRow } from "@/types/features/custom-report/functions/edit-report";

const RowItem: FC<ReportItemsRow> = ({ row }) => {
  return (
    <div className="flex px-20">
      <LayoutBox
        key={row.uuid}
        layout={row.layout}
        itemLayout={CellEditReportItem}
        itemLayoutProps={}
      />
    </div>
  );
};

export default RowItem;
