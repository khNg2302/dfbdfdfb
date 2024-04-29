import { ReactNode } from "react";
import { DropTargetMonitor } from "react-dnd";

type HandleDrop = ({
  item,
  monitor,
}: {
  item: any;
  monitor: DropTargetMonitor<unknown, unknown>;
}) => void;

type HandleDragOver = (isDragOver:boolean) => any

interface CustomDroppableProps {
  accept: string[];
  isDisplayed: boolean;
  handleDrop: HandleDrop;
  handleDragOver?: HandleDragOver
  label?:string
}

export type { CustomDroppableProps, HandleDrop, HandleDragOver };
