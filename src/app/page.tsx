"use client";
import EditReport from "@/features/custom-report/functions/edit-report";
import OptionPanel from "@/features/custom-report/functions/option-panel";
import { ReportDocumentColumn } from "@/types/features/custom-report/functions/edit-report";
import { LayoutDefinitionProps } from "@/types/features/custom-report/functions/option-panel";
import { Grid } from "@mui/material";
import { useState } from "react";
import { DndProvider, DragSourceMonitor } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


export default function Home() {
  return (
    <main>
      <DndProvider backend={HTML5Backend}>
        <Grid spacing={1} container columns={{ sm: 1, md: 3 }}>
          <EditReport />
          <Grid item md={1}>
            <OptionPanel />
          </Grid>
        </Grid>
      </DndProvider>
    </main>
  );
}
