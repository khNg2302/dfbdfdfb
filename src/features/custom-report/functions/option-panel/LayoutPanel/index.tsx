import CustomDraggable from "@/components/DnD/CustomDraggable";
import { LayoutPanelProps } from "@/types/features/custom-report/functions/option-panel";
import { Box } from "@mui/material";
import { FC } from "react";
import LayoutBox from "../LayoutBox";

const LayoutPanel: FC<LayoutPanelProps> = ({
  layouts,
  handlePanelFunctions,
}) => {
  const TemplateColumn = () => {
    return <div className="w-full h-[50px] border bg-gray-300"></div>;
  };
  return (
    <Box display="flex" flexDirection="column" gap={1} marginTop={1}>
      {layouts?.map((layout, index) => {
        const { key, type, ...layoutProps } = layout.props({});

        return (
          <CustomDraggable
            type={type}
            key={key}
            itemProps={layoutProps}
     
          >
            <div className="flex gap-1 p-2 shadow-md">
              <LayoutBox
                layout={{ key, type, ...layoutProps }}
                itemLayout={TemplateColumn}
              />
            </div>
          </CustomDraggable>
        );
      })}
    </Box>
  );
};

export default LayoutPanel;
