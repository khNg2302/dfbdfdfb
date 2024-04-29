import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { LayoutDefinitionProps } from "./option-panel";

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
  itemDefinition: any;
};

interface EditReportItemsProps {
  reportDocument: ReportDocumentColumn[];
}
type HandleChangeDefinitionReportProps = (e: ChangeEvent<any>) => void;

interface CellEditReportItemProps {
  itemDefinition:any
}

interface ReportItemsRow {
  row: ReportDocumentColumn;
}

interface EditReportProps {
  reportDocument: ReportDocumentColumn[];
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
  EditReportProps
};
