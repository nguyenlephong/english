'use client';
import React, {useState} from 'react';
import { Badge, TabBar } from 'antd-mobile';
import {Gear, House, File, Student, Notebook} from "phosphor-react"
type TabBarPropType = {}
const TabBarCustomization = (props: TabBarPropType) => {
  const tabs = [
    {
      key: 'home',
      title: 'Home',
      icon: <House size={32} />,
      badge: Badge.dot,
    },
    {
      key: 'words',
      title: 'words',
      icon: <File size={32} />,
      badge: '5',
    },
    {
      key: 'study',
      title: 'Study',
      icon: (active: boolean) =>
        active ? <Student size={32} /> : <Notebook size={32} />,
      badge: '99+',
    },
    {
      key: 'settings',
      title: 'Settings',
      icon: <Gear size={32} />,
    },
  ]
  
  const [activeKey, setActiveKey] = useState('todo')
  return (
    <div>
      <TabBar activeKey={activeKey} onChange={setActiveKey}>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
};

export default TabBarCustomization;
