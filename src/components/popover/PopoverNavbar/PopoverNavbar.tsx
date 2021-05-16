import React from 'react';
import { PopWrapper, UserName, PopContent, PopLink } from './PopoverNavbar.styled';
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
      <PopLink>Profile</PopLink>
      <PopLink>Settings</PopLink>
      <PopLink onClick={() => signoutHandler()}>Sign out</PopLink>
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