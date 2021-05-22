import React, { forwardRef } from "react";
import { Select } from "antd";

import { Container, AdSenseLabel } from "./AdSenseInput.styled";

interface Props {
  type: string;
  label?: string;
  placeholder?: string;
  name?: string;
}

const { Option } = Select;

function onChange(value: any) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val: any) {
  console.log("search:", val);
}

const AdSenseInput = ({ type, label, placeholder, name }: Props, ref: any) => {
  return (
    <>
      <Container>
        <>
          {label && <AdSenseLabel>{label}</AdSenseLabel>}
          <Select
            showSearch
            style={{ width: 400 }}
            placeholder="Source"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
          >
            <Option value="google-adsense">Google AdSense</Option>
            <Option value="facebookadsense">Facebook AdSense</Option>
            <Option value="twiteradsense">Twiter AdSense</Option>
          </Select>
        </>
      </Container>
    </>
  );
};

export default forwardRef(AdSenseInput);
