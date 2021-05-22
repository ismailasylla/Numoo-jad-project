import React, { forwardRef } from "react";
import { DatePicker, Space } from "antd";
import { Container, PickerLabel } from "./DatePickerSelect.styled";

interface Props {
  type: string;
  label?: string;
  placeholder?: string;
  name?: string;
}

const DatePickerInput = (
  { type, label, placeholder, name }: Props,
  ref: any
) => {
  return (
    <>
      <Container>
        {label && <PickerLabel>{label}</PickerLabel>}
        <Space direction="horizontal" size={12}>
          <DatePicker bordered={true} size={"large"} style={{ width: 400 }} />
        </Space>
      </Container>
    </>
  );
};

export default forwardRef(DatePickerInput);
