'use client';
import React, {useState} from 'react';
import {Badge, TabBar} from 'antd-mobile';
import {File, Gear, House, Notebook, Student} from "phosphor-react"
import {useRouter} from 'next/navigation'

type TabBarPropType = {
  active: string;
}
const TabBarCustomization = (props: TabBarPropType) => {
  const router = useRouter()
  const tabs = [
    {
      key: 'home',
      title: 'Home',
      url: '/',
      icon: <House size={32}/>,
      badge: Badge.dot,
    },
    {
      key: 'words',
      title: 'words',
      url: '/words',
      icon: <File size={32}/>,
      badge: '5',
    },
    {
      key: 'study',
      title: 'Study',
      url: '/words',
      icon: (active: boolean) =>
        active ? <Student size={32}/> : <Notebook size={32}/>,
      badge: '99+',
    },
    {
      key: 'settings',
      url: '/words',
      title: 'Settings',
      icon: <Gear size={32}/>,
    },
  ]
  
  const [activeKey, setActiveKey] = useState(props.active)
  
  return (
    <div>
      <TabBar activeKey={activeKey} onChange={(keyActive) => {
        setActiveKey(keyActive)
        const menu = tabs.find(x => x.key === keyActive);
        if (menu) router.push(menu.url)
      }}>
        {tabs.map(item => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title}/>
        ))}
      </TabBar>
    </div>
  );
};

export default TabBarCustomization;
