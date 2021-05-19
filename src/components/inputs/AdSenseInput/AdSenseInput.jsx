import React, { Component } from "react";
import { Select } from "antd";

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

export default class AdSenseInput extends Component {
  render() {
    return (
      <Select
        showSearch
        style={{ width: 400 }}
        placeholder="Source"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="google-adsense">Google AdSense</Option>
        <Option value="facebookadsense">Facebook AdSense</Option>
        <Option value="twiteradsense">Twiter AdSense</Option>
      </Select>
    );
  }
}
