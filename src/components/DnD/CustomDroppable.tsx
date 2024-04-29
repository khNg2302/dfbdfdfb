import { CustomDroppableProps } from "@/types/components/DnD/custom-droppable";
import { Box } from "@mui/material";
import { FC } from "react";
import { useDrop } from "react-dnd";

const CustomDroppable: FC<CustomDroppableProps> = ({
  accept,
  isDisplayed,
  handleDrop,
}) => {
  const [, drop] = useDrop(() => ({
    accept,
    drop: handleDrop,
    collect: (monitor) => ({}),
  }));
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
        >
          Drop here
        </Box>
      )}
    </>
  );
};

export default CustomDroppable;
