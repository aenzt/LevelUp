import React from 'react';
import MainMenuItem from './MainMenuItem';

export default ({ className }) => {
  return (
    <div className={className}>
      <MainMenuItem text="Dashboard" link="dashboard" icon="dashboard" />
      <MainMenuItem text="User" link="user" icon="users" />
      <MainMenuItem text="Post" link='post' icon="post"/>
      <div className='fixed bottom-0'>
        <MainMenuItem text="Home" as="button" link="home" icon="dashboard" method='get'></MainMenuItem>
        <MainMenuItem text="Log Out" as="button" link="logout" icon="logout" method='post'></MainMenuItem>
      </div>
      {/* <MainMenuItem text="Contacts" link="contacts" icon="users" />
      <MainMenuItem text="Reports" link="reports" icon="printer" /> */}
    </div>
  );
};
