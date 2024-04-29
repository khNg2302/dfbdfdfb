import CustomDroppable from "@/components/DnD/CustomDroppable";
import { CellEditReportItemProps } from "@/types/features/custom-report/functions/edit-report";
import { FC } from "react";

const CellEditReportItem: FC<CellEditReportItemProps> = ({itemDefinition}) => {
  const hasItem = itemDefinition.uuid !== ''
  return (
    <div>
      <CustomDroppable accept="item" handleDrop={() => {}} isDisplayed={hasItem} />
    </div>
  );
};
export default CellEditReportItem;
