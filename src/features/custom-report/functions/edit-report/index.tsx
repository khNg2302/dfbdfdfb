"use client";
import { FC, useCallback, useState } from "react";
import EditDefinitionReportProps from "./EditDefinitionReportProps";
import {
  DefinitionReport,
  EditReportProps,
  HandleChangeDefinitionReportProps,
} from "@/types/features/custom-report/functions/edit-report";
import ReportActions from "./ReportActions";
import EditReportItems from "./EditReportItems";
import { Grid } from "@mui/material";

const EditReport: FC<EditReportProps> = ({ reportDocument }) => {
  const [reportDefinitions, setReportDifinition] = useState<DefinitionReport>({
    name: "",
  });

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
        <EditReportItems reportDocument={reportDocument} />
      </Grid>
    </>
  );
};

export default EditReport;
