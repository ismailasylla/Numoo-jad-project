import React from 'react';
import { PopWrapper, UserName, PopContent, PopLink, PopDivider } from './PopoverNavbar.styled';
import { Popover, Avatar, notification } from 'antd';
import { useAuth } from "context/AuthContext";
import { capitalizeFirstLetter } from "utils";
import { useHistory } from "react-router-dom";

function PopoverNavbar() {
  const { currentUser, signout } = useAuth();
  const history = useHistory();

  const signoutHandler = async () => {
    try {
      await signout();
      history.push("/app");
    } catch (error) {
      notification.open({
        message: 'Something went wrong',
        description: `${error.message}`,
      });
    }
  }

  const content =
    <PopContent>
      <PopLink>Dashboard</PopLink>
      <PopLink>Settings</PopLink>
      <PopDivider />
      <PopLink onClick={() => signoutHandler()}>Log out</PopLink>
    </PopContent>

  return (
    <PopWrapper>
      {currentUser &&
        <Popover placement="bottomRight" content={content} trigger="click">
          <UserName>{currentUser.email}</UserName>
          <Avatar>{capitalizeFirstLetter(currentUser.email)}</Avatar>
        </Popover>
      }
    </PopWrapper>
  )
}

export default PopoverNavbar;