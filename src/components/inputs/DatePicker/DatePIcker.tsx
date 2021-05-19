import React from "react";
import { DatePicker, Space } from "antd";
import { DatePickerWrapper } from "./DatePicker.styled";

const DatePIcker = () => {
  return (
    <>
      <DatePickerWrapper>
        <Space direction="horizontal" size={12}>
          <DatePicker bordered={true} />
          <DatePicker picker="month" bordered={true} />
          <DatePicker picker="year" bordered={true} />
        </Space>
      </DatePickerWrapper>
    </>
  );
};

export default DatePIcker;
