import CustomDraggable from "@/components/DnD/CustomDraggable";
import { ToolSelectorProps } from "@/types/features/custom-report/functions/option-panel";
import { FC } from "react";

const ToolSelector: FC<ToolSelectorProps> = ({ itemProps }) => {
  return (
    <div className="w-[50%]">
      <CustomDraggable type="tool" itemProps={itemProps}>
        <div className="flex p-2">
          <div className="shadow flex items-center justify-center w-full py-2">{itemProps.name}</div>
        </div>
      </CustomDraggable>
    </div>
  );
};

export default ToolSelector;
