import CustomDroppable from "@/components/DnD/CustomDroppable";
import { DnDReportTypes } from "@/consts/features/custom-report/functions/option-panel";
import { EditReportItemsProps } from "@/types/features/custom-report/functions/edit-report";
import { FC, memo, useCallback } from "react";
import LayoutBox from "../option-panel/LayoutBox";
import CellEditReportItem from "./CellEditReportItem";
import RowItem from "./RowItem";
import { LayoutDefinitionProps } from "@/types/features/custom-report/functions/option-panel";

const EditReportItems: FC<EditReportItemsProps> = ({ reportDocument }) => {
  const handleDrop = useCallback((item: LayoutDefinitionProps) => {
    // console.log(item);
  }, []);
  return (
    <div>
      {reportDocument.map((row) => (
        <RowItem key={row.uuid} row={row} />
      ))}
      <div className=" px-20">
        <CustomDroppable
          isDisplayed
          accept={DnDReportTypes.layout}
          handleDrop={handleDrop}
        />
      </div>
    </div>
  );
};

export default memo(EditReportItems);
