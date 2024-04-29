import { EdittedItemProps } from "@/types/features/custom-report/functions/edit-report";
import { FC, useState } from "react";
import EdittedItemPanel from "./EdittedItemPanel";

const EdittedItem: FC<EdittedItemProps> = ({ children, handleChangeItem }) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const onOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="relative">
      {isOpen && <EdittedItemPanel handleChangeItem={handleChangeItem} />}

      {children({ onOpen })}
    </div>
  );
};

export default EdittedItem;
