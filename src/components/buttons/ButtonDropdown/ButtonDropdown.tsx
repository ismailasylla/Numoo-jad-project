import React, { FC, useState } from 'react';
import { BtnLink, DropdownItems, DropdownItem } from './ButtonDropdown.styled';
import { Dropdown } from "antd";
import { DownOutlined } from '@ant-design/icons';

interface Props {
  items: string[]; 
  label: string | React.ReactNode;
  parentCallback: (itemKey: string | number) => void;
}

const ButtonDropdown: FC<Props> = ({ label, items, parentCallback }) => {
  const menu = (
    <DropdownItems onClick={handleMenuClick}>
        {items.map((item) => 
         <DropdownItem key={item}>
          {item}
        </DropdownItem>
        )}
    </DropdownItems>
  );

  function handleMenuClick(e: any) {
    setDropdownLabel(e.key);
    parentCallback(e.key);
  }

  const [dropdownLabel, setDropdownLabel ] = useState(label);
  
  return (
    <Dropdown overlay={menu}>
      <BtnLink size="large">
      {dropdownLabel} <DownOutlined />
      </BtnLink>
    </Dropdown>
  )
}

export default ButtonDropdown;