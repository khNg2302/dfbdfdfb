import { CustomDraggableProps } from "@/types/components/DnD/custom-draggable";
import { Box } from "@mui/material";
import { FC } from "react";
import { useDrag } from "react-dnd";

const CustomDraggable: FC<CustomDraggableProps> = ({
  type,
  itemProps,
  children,

}) => {
  const [, drag] = useDrag(() => ({
    type,
    item: { ...itemProps },
    // end: (item, monitor) => handleDragEnd({ item, monitor }),
    collect: (monitor) => ({}),
  }));
  return <Box ref={drag} width='full'>{children}</Box>;
};

export default CustomDraggable;
