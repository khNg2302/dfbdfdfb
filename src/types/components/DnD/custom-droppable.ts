import { ReactNode } from "react";
import { DropTargetMonitor } from "react-dnd";

interface CustomDroppableProps {
  accept: string;
  isDisplayed: boolean;
  handleDrop: (item: any, minitor: DropTargetMonitor<unknown, unknown>) => void;
}

export type { CustomDroppableProps };
