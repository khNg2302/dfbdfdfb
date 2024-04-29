import { CustomDroppableProps } from "@/types/components/DnD/custom-droppable";
import { Box } from "@mui/material";
import { FC, useCallback } from "react";
import { useDrop } from "react-dnd";

const CustomDroppable: FC<CustomDroppableProps> = ({
  accept,
  isDisplayed,
  handleDrop,
  label,
  handleDragOver,
}) => {
  const [{ isDragOver }, drop] = useDrop(() => ({
    accept,
    drop: (item, monitor) => handleDrop({ item, monitor }),
    collect: (monitor) => ({
      isDragOver: monitor.isOver(),
    }),
  }));

  const overEffect = () => {
    return handleDragOver ? handleDragOver(isDragOver) : {};
  };
  return (
    <>
      {isDisplayed && (
        <Box
          ref={drop}
          height={50}
          display="flex"
          justifyContent="center"
          alignItems="center"
          border="1px dashed grey"
          {...overEffect()}
        >
          {label ? label : "Drop here"}
        </Box>
      )}
    </>
  );
};

export default CustomDroppable;
