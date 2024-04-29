import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from "react";
import { LayoutDefinitionProps } from "./option-panel";
import { HandleDrop } from "@/types/components/DnD/custom-droppable";

type DefinitionReport = {
  name: string;
};

interface EditDefinitionReportPropsP {
  values: DefinitionReport;
  handleChange: HandleChangeDefinitionReportProps;
}

interface ReportActionsProps {
  handleSave: () => any;
  handlePreview: () => any;
}

type ReportDocumentColumn = {
  uuid: string;
  layout: LayoutDefinitionProps;
  itemDefinitions: any[];
};

type HandleChangeReportDocument = Dispatch<
  SetStateAction<ReportDocumentColumn[]>
>;

interface EditReportItemsProps {
  reportDocument: ReportDocumentColumn[];
  handleChangeReportDocument: HandleChangeReportDocument;
  changeReportDocumentFuncs: {
    [funcName: string]: ({ ...params }?: any) => void;
  };
}
type HandleChangeDefinitionReportProps = (e: ChangeEvent<any>) => void;

interface CellEditReportItemProps {
  itemDefinition: any;
  indexTemplate: number;
  indexRow: number;
  handleChangeReportDocument: HandleChangeReportDocument;
  handleChangeRow: () => any;
}

interface ReportItemsRow {
  index: number;
  row: ReportDocumentColumn;
  handleChangeReportDocument: HandleChangeReportDocument;
}

interface EditReportProps {}

interface EdittedItemPanelProps {
  handleChangeItem: ({ ...params }: any) => any;
}

interface EdittedItemProps {
  children: ({ onOpen }: any) => ReactNode;
  handleChangeItem: ({...changeProps}:any) => any;
}

export type {
  EditDefinitionReportPropsP,
  HandleChangeDefinitionReportProps,
  DefinitionReport,
  ReportActionsProps,
  EditReportItemsProps,
  ReportDocumentColumn,
  CellEditReportItemProps,
  ReportItemsRow,
  EditReportProps,
  EdittedItemPanelProps,
  EdittedItemProps,
};
