import { EdittedItemPanelProps } from "@/types/features/custom-report/functions/edit-report";
import { FC } from "react";

const EdittedTextPanel: FC<EdittedItemPanelProps> = ({ handleChangeItem }) => {
  return (
    <div className="flex">
      <p onClick={() => handleChangeItem({ text_align: "text-center" })}>
        center
      </p>
      <p onClick={() => handleChangeItem({ text_align: "text-left" })}>left</p>
      <p onClick={() => handleChangeItem({ text_align: "text-right" })}>
        right
      </p>
    </div>
  );
};

export default EdittedTextPanel;
