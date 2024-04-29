import { ReportActionsProps } from "@/types/features/custom-report/functions/edit-report";
import { Button } from "@mui/material";
import { FC, memo } from "react";

const ReportActions: FC<ReportActionsProps> = ({
  handleSave,
  handlePreview,
}) => {
  return (
    <>
      <Button variant="contained" onClick={handleSave}>
        Preview
      </Button>
      <Button variant="contained" onClick={handlePreview}>
        Save
      </Button>
    </>
  );
};

export default memo(ReportActions);
