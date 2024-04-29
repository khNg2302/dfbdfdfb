import CustomDroppable from "@/components/DnD/CustomDroppable";
import { HandleDrop } from "@/types/components/DnD/custom-droppable";
import { v4 as uuidv4 } from "uuid";
import { CellEditReportItemProps } from "@/types/features/custom-report/functions/edit-report";
import { FC } from "react";
import EdittedReportItems from "@/consts/features/custom-report/functions/edit-report";
import EdittedItem from "./EdittedIReportItems/EdittedItem";

const CellEditReportItem: FC<CellEditReportItemProps> = ({
  itemDefinition,
  indexTemplate,
  indexRow,
  handleChangeReportDocument,
  handleChangeRow,
}) => {
  const notHasItem = itemDefinition.uuid === undefined;

  const handleChangeItemOfRow = (newItemDefinition: any) => {
    const { row, handleChangeRow: handleChangeItemDefinenitions } =
      handleChangeRow();

    const newItemDefinitions = row.itemDefinitions;
    newItemDefinitions[indexTemplate] = newItemDefinition;

    const newRow = { ...row, itemDefinitions: newItemDefinitions };

    handleChangeItemDefinenitions(newRow);
  };

  const handleAddItem: HandleDrop = ({ item, monitor }) => {
    handleChangeItemOfRow({ uuid: uuidv4(), ...item });
  };

  const handleChangeItem = (changeProps: any) => {
    handleChangeItemOfRow({
      ...itemDefinition,
      props: { ...itemDefinition.props, ...changeProps },
    });
  };

  const renderReportItem = () => {
    const Item = EdittedReportItems[itemDefinition.type];
    const props = {
      ...itemDefinition,
      handleChangeRow,
      handleChangeItem
    };

    return (
      <EdittedItem handleChangeItem={handleChangeItem}>
        {({ onOpen }) => <Item {...props} onOpen={onOpen} />}
      </EdittedItem>
    );
  };

  return (
    <div
      className={`${
        notHasItem ? "" : "border border-transparent hover:border-[#9BB0C1]"
      } `}
    >
      {notHasItem && (
        <CustomDroppable
          accept={["tool"]}
          handleDrop={handleAddItem}
          isDisplayed={notHasItem}
          label="Drop tool here"
        />
      )}

      {!notHasItem && renderReportItem()}
    </div>
  );
};
export default CellEditReportItem;
