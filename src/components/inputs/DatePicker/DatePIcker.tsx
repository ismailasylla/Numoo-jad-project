import React from "react";
import { DatePicker, Space } from "antd";
import { DatePickerWrapper } from "./DatePicker.styled";
import PickerTitleSelect from "components/forms/PickerTitleSelect/PickerTitleSelect";

const DatePIcker = () => {
  return (
    <>
      <DatePickerWrapper>
        <PickerTitleSelect title={"Date of birth"} />
        <Space direction="horizontal" size={12}>
          <DatePicker bordered={true} size={"large"} style={{ width: 400 }} />
        </Space>
      </DatePickerWrapper>
    </>
  );
};

export default DatePIcker;
