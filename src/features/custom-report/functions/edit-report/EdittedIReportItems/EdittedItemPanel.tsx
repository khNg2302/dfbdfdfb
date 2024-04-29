import { EdittedItemPanelProps } from "@/types/features/custom-report/functions/edit-report";
import { FC } from "react";
import EdittedTextPanel from "./EdittedPanelTypes/EdittedTextPanel";

const EdittedItemPanel: FC<EdittedItemPanelProps> = ({ handleChangeItem }) => {
  return (
    <>
      <div className="absolute bottom-[100%] bg-white py-2 px-1 shadow">
        <EdittedTextPanel handleChangeItem={handleChangeItem} />
      </div>
    </>
  );
};

export default EdittedItemPanel;
