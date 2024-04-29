import { LayoutBoxProps } from "@/types/features/custom-report/functions/option-panel";
import { FC } from "react";

const LayoutBox: FC<LayoutBoxProps> = ({
  itemLayout,
  itemLayoutProps,
  layout,
}) => {
  return (
    <>
      {layout.template_columns.map((column,index) => {
        const Item = itemLayout;

        return (
          <div
            key={index}
            style={{ flexBasis: `${(column / layout.column_number) * 100}%` }}
          >
            <Item {...itemLayoutProps} />
          </div>
        );
      })}
    </>
  );
};

export default LayoutBox;
