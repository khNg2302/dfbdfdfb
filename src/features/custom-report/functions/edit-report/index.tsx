"use client";
import { FC, useCallback, useState } from "react";
import EditDefinitionReportProps from "./EditDefinitionReportProps";
import {
  DefinitionReport,
  EditReportProps,
  HandleChangeDefinitionReportProps,
  ReportDocumentColumn,
} from "@/types/features/custom-report/functions/edit-report";
import ReportActions from "./ReportActions";
import EditReportItems from "./EditReportItems";
import { Grid } from "@mui/material";
import { HandleDrop } from "@/types/components/DnD/custom-droppable";
import { v4 as uuidv4 } from "uuid";

const EditReport: FC<EditReportProps> = ({}) => {
  const [reportDefinitions, setReportDifinition] = useState<DefinitionReport>({
    name: "",
  });
  const [reportDocument, setReportDocument] = useState<ReportDocumentColumn[]>(
    []
  );

  const handleAddRowReport: HandleDrop = ({ item }) => {
    const itemDefinitions = Array.from({ length: item.column_number }).map(
      () => ({})
    );
    setReportDocument((prev)=>[
      ...prev,
      {
        uuid: uuidv4(),
        layout: item,
        itemDefinitions,
      },
    ]);
  };

  const handleChangeReportDefinition: HandleChangeDefinitionReportProps =
    useCallback((e) => {
      setReportDifinition((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }, []);

  const handleSave = () => {
    console.log("saved");
  };

  const handlePreview = () => {
    console.log("previewed");
  };

  return (
    <>
      <Grid item md={2}>
        <EditDefinitionReportProps
          values={reportDefinitions}
          handleChange={handleChangeReportDefinition}
        />
      </Grid>
      <Grid item md={2}>
        <ReportActions handleSave={handleSave} handlePreview={handlePreview} />
        <EditReportItems
        handleChangeReportDocument={setReportDocument}
          changeReportDocumentFuncs={{ handleAddRowReport }}
          reportDocument={reportDocument}
        />
      </Grid>
    </>
  );
};

export default EditReport;
