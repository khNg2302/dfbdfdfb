import { CustomPanelProps } from "@/types/components/Tabs/custom-panel";
import { FC } from "react";

const CustomPanel: FC<CustomPanelProps> = ({
  activePanelIndex,
  panelIndex,
  children,
}) => {
  return <>{activePanelIndex === panelIndex && <>{children}</>}</>;
};

export default CustomPanel;
