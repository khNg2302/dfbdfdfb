import { EditDefinitionReportPropsP } from "@/types/features/custom-report/functions/edit-report";
import { TextField } from "@mui/material";
import { FC, memo } from "react";

const EditDefinitionReportProps: FC<EditDefinitionReportPropsP> = ({
  values,
  handleChange,
}) => {
  return (
    <>
      <TextField
        fullWidth
        value={values.name}
        name="name"
        label="Document name"
        onChange={handleChange}
      />
    </>
  );
};

export default memo(EditDefinitionReportProps);
