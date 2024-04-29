import { ReactNode } from "react";

interface CustomDraggableProps {
  type: string;
  itemProps: any;
  children: ReactNode;
  handleDragEnd: ({item,monitor}:any) => void;
}

export type { CustomDraggableProps };
