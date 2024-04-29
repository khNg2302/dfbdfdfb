"use client";
import CustomPanel from "@/components/Tabs/CustomPanel";
import {
  OptionPanelSelection,
  Panels,
} from "@/consts/features/custom-report/functions/option-panel";
import {
  HandleChangePanel,
  OptionPanelProps,
} from "@/types/features/custom-report/functions/option-panel";
import { AppBar, Box, Tab, Tabs } from "@mui/material";
import { FC, useCallback, useState } from "react";

const OptionPanel: FC<OptionPanelProps> = ({ handleFunctions }) => {
  const [panelIndex, setPanelIndex] = useState(0);

  const handleChangePanel: HandleChangePanel = useCallback(
    (_, newPanelIndex) => {
      setPanelIndex(newPanelIndex);
    },
    []
  );
  return (
    <Box>
      <AppBar position="static">
        <Tabs
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
          value={panelIndex}
          onChange={handleChangePanel}
        >
          {OptionPanelSelection.map((item, index) => {
            const { key, ...tabProps } = item.props({ index });
            return <Tab className="text-white" key={key} {...tabProps} />;
          })}
        </Tabs>
      </AppBar>
      {Panels.map((panel, index) => {
        let { key, ...panelprops } = panel.props();
        if (panel.fetchedProps && panel.fetchFunction)
          panelprops = { ...panelprops, ...panel.fetchFunction() };
        const Panel = panel.comp;
        const panelHandleFunctions = panel.handleFunctionsName?.reduce(
          (handleFunc, funcName) => ({
            ...handleFunc,
            [funcName]: handleFunctions[funcName],
          }),
          {}
        );
        return (
          <CustomPanel
            key={key}
            activePanelIndex={panelIndex}
            panelIndex={index}
          >
            <Panel
              {...panelprops}
              handlePanelFunctions={panelHandleFunctions}
            />
          </CustomPanel>
        );
      })}
    </Box>
  );
};

export default OptionPanel;
