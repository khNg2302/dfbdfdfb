import CustomDroppable from "@/components/DnD/CustomDroppable";
import { DnDReportTypes } from "@/consts/features/custom-report/functions/option-panel";
import { EditReportItemsProps } from "@/types/features/custom-report/functions/edit-report";
import { FC, memo } from "react";
import RowItem from "./RowItem";
import {
  HandleDragOver,
  HandleDrop,
} from "@/types/components/DnD/custom-droppable";

const EditReportItems: FC<EditReportItemsProps> = ({
  reportDocument,
  changeReportDocumentFuncs,
  handleChangeReportDocument
}) => {

  
  const handleDrop: HandleDrop = ({ item, monitor }) => {
    changeReportDocumentFuncs.handleAddRowReport({ item, monitor });
  };

  const handleDragOver: HandleDragOver = (isDragOver) => {
    if (!isDragOver)
      return {
        sx: { opacity: reportDocument.length ? 0 : 1 },
      };
    return {
      bgcolor: "#EADFB4",
      border: "1px solid #EADFB4",
      sx: { opacity: 1 },
    };
  };

  return (
    <div>
      {reportDocument.map((row, index) => (
        <RowItem key={row.uuid} index={index} row={row} handleChangeReportDocument={handleChangeReportDocument} />
      ))}

      <CustomDroppable
        isDisplayed
        accept={[DnDReportTypes.layout]}
        handleDrop={handleDrop}
        handleDragOver={handleDragOver}
        label="Drop layout here"
      />
    </div>
  );
};

export default memo(EditReportItems);
