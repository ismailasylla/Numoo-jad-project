import React from 'react';
import { Menu, Dropdown, message, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";

function DropDown(): JSX.Element {
  const data = [
    { label: '1st item', value: 'try 1', icon: <UserOutlined /> },
    { label: '2nd item', value: 'try 2', icon: <UserOutlined /> },
    { label: '3rd item', value: 'try 3', icon: <UserOutlined /> }
  ];
  const label = 'Dropdown';

  const options = () =>
    <Menu onClick={(e) => optionClicked(e)}>
      {data.map((item, key) =>
        <Menu.Item key={key} icon={item.icon}>{item.label}</Menu.Item>
      )}
    </Menu>

  const dropDownClicked = () => {
    message.info("Click on left button.");
  }

  const optionClicked = (e: any) => {
    message.info("Click on menu item.");
  }

  return (
    <Space wrap>
      <Dropdown.Button 
        onClick={() => dropDownClicked()} 
        overlay={options()}
      >
        {label}
      </Dropdown.Button>
    </Space>
  )
}

export default DropDown;