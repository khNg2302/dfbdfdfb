"use client";
import EditReport from "@/features/custom-report/functions/edit-report";
import OptionPanel from "@/features/custom-report/functions/option-panel";
import { ReportDocumentColumn } from "@/types/features/custom-report/functions/edit-report";
import { Grid } from "@mui/material";
import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { v4 as uuidv4 } from "uuid";

export default function Home() {
  const [reportDocument, setReportDocument] = useState<ReportDocumentColumn[]>(
    []
  );

  const handleAddRowReport = ({ item }: any) => {
    setReportDocument([
      ...reportDocument,
      {
        uuid: uuidv4(),
        layout: item,
        itemDefinition: {},
      },
    ]);
  };

  const panelHandleFunctions = {
    handleAddRowReport,
  };
  return (
    <main>
      <DndProvider backend={HTML5Backend}>
        <Grid spacing={1} container columns={{ sm: 1, md: 3 }}>
          <EditReport reportDocument={reportDocument} />
          <Grid item md={1}>
            <OptionPanel handleFunctions={panelHandleFunctions} />
          </Grid>
        </Grid>
      </DndProvider>
    </main>
  );
}
