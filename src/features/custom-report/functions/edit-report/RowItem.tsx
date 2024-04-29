import { FC } from "react";
import LayoutBox from "../option-panel/LayoutBox";
import CellEditReportItem from "./CellEditReportItem";
import {
  ReportDocumentColumn,
  ReportItemsRow,
} from "@/types/features/custom-report/functions/edit-report";

const RowItem: FC<ReportItemsRow> = ({
  row,
  index,
  handleChangeReportDocument,
}) => {
  const handleChangeRowObject = () => {
    const handleChangeRow = (newRow: ReportDocumentColumn) => {
      handleChangeReportDocument((prev) => {
        const newReportDocument = prev;
        newReportDocument[index] = {
          ...newReportDocument[index],
          ...newRow,
        };

        return [...newReportDocument];
      });
    };
    return {
      row,
      handleChangeRow,
    };
  };

  const getItemProps = ({ indexTemplate }: { indexTemplate: number }) => {
    return {
      itemDefinition: row.itemDefinitions[indexTemplate],
      handleChangeReportDocument,
      handleChangeRow: handleChangeRowObject,
      indexTemplate,
      indexRow: index,
    };
  };

  return (
    <div className="flex px-20 py-1 gap-1 mb-3 border border-transparent hover:border-[#F6995C]">
      <LayoutBox
        key={row.uuid}
        layout={row.layout}
        itemLayout={CellEditReportItem}
        itemLayoutProps={getItemProps}
      />
    </div>
  );
};

export default RowItem;
