import { LayoutBoxProps } from "@/types/features/custom-report/functions/option-panel";
import { FC } from "react";

const LayoutBox: FC<LayoutBoxProps> = ({
  itemLayout,
  itemLayoutProps,
  layout,
}) => {
  return (
    <>
      {layout.template_columns.map((column, index) => {
        const Item = itemLayout;
        let props = {};

        if (itemLayoutProps) {
          props = { ...props, ...itemLayoutProps({ indexTemplate: index }) };
        }

        const widthLayout = `${(column / layout.column_number) * 100}%`;

        return (
          <div
            key={index}
            style={{
              flexBasis: widthLayout,
              maxWidth: widthLayout,
            }}
          >
            <Item {...props} />
          </div>
        );
      })}
    </>
  );
};

export default LayoutBox;
