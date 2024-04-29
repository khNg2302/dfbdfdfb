import DesignPanel from "@/features/custom-report/functions/option-panel/DesignPanel";
import LayoutPanel from "@/features/custom-report/functions/option-panel/LayoutPanel";
import ToolsPanel from "@/features/custom-report/functions/option-panel/ToolsPanel";
import {
  DefinePanelProps,
  DefineTabProps,
  DefinitionLayoutPanel,
  LayoutPanelProps,
  OptionPanelLabel,
  Panel,
} from "@/types/features/custom-report/functions/option-panel";
import { v4 as uuidv4 } from "uuid";

const DnDReportTypes = {
  layout: "layout",
};

const TabProps: DefineTabProps = (label, paramProps) => {
  return {
    key: uuidv4(),
    label,
    id: `full-width-tab-${paramProps.index}`,
    "aria-controls": `full-width-tabpanel-${paramProps.index}`,
  };
};

const PanelProps: DefinePanelProps = (props) => {
  return {
    key: uuidv4(),
    ...props,
  };
};

const fetchLayoutSelection = (): { layouts: DefinitionLayoutPanel[] } => ({
  layouts: [
    {
      uuid: uuidv4(),
      name: "1",
      props: ({ ...paramsProps }) => ({
        column_number: 1,
        template_columns: [1],
        key: uuidv4(),
        type: DnDReportTypes.layout,
      }),
    },
    {
      uuid: uuidv4(),
      name: "2",
      props: ({ ...paramsProps }) => ({
        column_number: 2,
        template_columns: [1, 1],
        key: uuidv4(),
        type: DnDReportTypes.layout,
      }),
    },
    {
      uuid: uuidv4(),
      name: "3",
      props: ({ ...paramsProps }) => ({
        column_number: 3,
        template_columns: [1, 1, 1],
        key: uuidv4(),
        type: DnDReportTypes.layout,
      }),
    },
    {
      uuid: uuidv4(),
      name: "22",
      props: ({ ...paramsProps }) => ({
        column_number: 2,
        template_columns: [2, 1],
        key: uuidv4(),
        type: DnDReportTypes.layout,
      }),
    },
    {
      uuid: uuidv4(),
      name: "21",
      props: ({ ...paramsProps }) => ({
        column_number: 2,
        template_columns: [1, 2],
        key: uuidv4(),
        type: DnDReportTypes.layout,
      }),
    },
  ],
});

const OptionPanelSelection: OptionPanelLabel[] = [
  {
    name: "Design",
    props: ({ index }) => TabProps("Design", { index }),
  },
  {
    name: "Tools",
    props: ({ index }) => TabProps("Tools", { index }),
  },
  {
    name: "Layout",
    props: ({ index }) => TabProps("Layout", { index }),
  },
];

const Panels: Panel[] = [
  {
    name: "Design",
    comp: DesignPanel,
    props: () => PanelProps(),
  },
  {
    name: "Tools",
    comp: ToolsPanel,
    props: () => PanelProps(),
  },
  {
    name: "Layout",
    fetchedProps: true,
    fetchFunction: fetchLayoutSelection,
    comp: LayoutPanel,
    props: () => PanelProps(),
    handleFunctionsName: ["handleAddRowReport"],
  },
];



export { OptionPanelSelection, Panels, DnDReportTypes };
