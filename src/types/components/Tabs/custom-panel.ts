import { ReactNode } from "react";

interface CustomPanelProps {
  activePanelIndex: number;
  panelIndex: number;
  children: ReactNode;
}

export type { CustomPanelProps };
