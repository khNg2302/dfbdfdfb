import { ReactNode } from "react";

interface OptionPanelLabel {
  name: string;
  props: ({ ...paramProps }?: any) => any;
}

type HandleChangePanel = (
  event: React.SyntheticEvent,
  newPanelIndex: number
) => void;

type DefineTabProps = (label: string, { ...paramProps }: any) => any;

type PanelHandleFunctions = {
  [funcName: string]: ({ ...params }: any) => void;
};

interface Panel {
  name: string;
  fetchedProps?: boolean;
  fetchFunction?: ({ ...params }?: any) => any;
  comp: ({ ...props }?: any) => ReactNode;
  props: ({ ...paramProps }?: any) => any;
  handleFunctionsName?: string[];
}

type DefinePanelProps = ({ ...props }?: any) => any;

type LayoutDefinitionProps = {
  column_number: number;
  template_columns: number[];
  key: string;
  type: string;
};

interface DefinitionLayoutPanel {
  uuid: string;
  name: string;
  props: ({ ...paramProps }?: any) => LayoutDefinitionProps;
}

interface LayoutPanelProps {
  layouts: DefinitionLayoutPanel[];
  handlePanelFunctions: PanelHandleFunctions;
}

interface LayoutBoxProps {
  layout: LayoutDefinitionProps;
  itemLayout: ({ ...itemLayoutProps }: any) => ReactNode;
  itemLayoutProps?: ({...params}:any)=>any;
}

interface OptionPanelProps {
  
}

interface ToolSelectorProps {
  itemProps: any
}

export type {
  OptionPanelLabel,
  HandleChangePanel,
  DefineTabProps,
  Panel,
  DefinePanelProps,
  LayoutPanelProps,
  DefinitionLayoutPanel,
  LayoutBoxProps,
  LayoutDefinitionProps,
  OptionPanelProps,
  ToolSelectorProps
};
