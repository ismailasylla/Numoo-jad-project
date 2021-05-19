import React from "react";
import { Menu, Dropdown, message, Space, Button } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";

function DropDown(): JSX.Element {
  const data = [
    { label: "1st item", value: "try 1", icon: <UserOutlined /> },
    { label: "2nd item", value: "try 2", icon: <UserOutlined /> },
    { label: "3rd item", value: "try 3", icon: <UserOutlined /> },
  ];
  const labelDay = "Day";
  const labelMonth = "Month";
  const labelYear = "Year";

  const options = () => (
    <Menu onClick={(e) => optionClicked(e)}>
      {data.map((item, key) => (
        <Menu.Item key={key} icon={item.icon}>
          {item.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  const dropDownClicked = () => {
    message.info("Click on left button.");
  };

  const optionClicked = (e: any) => {
    message.info("Click on menu item.");
  };

  return (
    <Space wrap>
      <Dropdown overlay={options()} min-width={100}>
        <Button>
          {labelDay} <DownOutlined />
        </Button>
      </Dropdown>
      <Dropdown overlay={options()}>
        <Button>
          {labelMonth} <DownOutlined />
        </Button>
      </Dropdown>
      <Dropdown overlay={options()}>
        <Button>
          {labelYear} <DownOutlined />
        </Button>
      </Dropdown>

      {/* <Dropdown.Button onClick={() => dropDownClicked()} overlay={options()}>
        {labelYear}
      </Dropdown.Button> */}
    </Space>
  );
}

export default DropDown;
