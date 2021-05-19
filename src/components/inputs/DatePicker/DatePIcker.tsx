import React from "react";
import { DatePicker, Space } from "antd";
import { DatePickerWrapper } from "./DatePicker.styled";

const DatePIcker = () => {
  return (
    <>
      <DatePickerWrapper>
        <Space direction="horizontal" size={12}>
          <DatePicker bordered={false} />
          <DatePicker picker="month" bordered={false} />
          <DatePicker picker="year" bordered={false} />
        </Space>
      </DatePickerWrapper>
    </>
  );
};

export default DatePIcker;
