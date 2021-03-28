import { Tab, Tabs } from '@material-ui/core';
import React from 'react';
import { tabItemStyles, tabsStyles } from './style';
import './index.css';
import ChatPanel from '../ChatPanel';
import TabPanel from './TabPanel';
const Sidebar = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  const tabs = tabsStyles();
  const tabi = tabItemStyles();
  function a11yProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  return (
    <div className="sidebar">
      <Tabs
        classes={tabs}
        value={tabIndex}
        onChange={(e, index) => {
          setTabIndex(index);
          console.log(index);
        }}
      >
        <Tab classes={tabi} disableRipple label={'Chat'} {...a11yProps(0)} />
        <Tab
          classes={tabi}
          disableRipple
          label={'Attendee'}
          {...a11yProps(1)}
        />
      </Tabs>
      <TabPanel value={tabIndex} index={0}>
        <ChatPanel />
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        At
      </TabPanel>
    </div>
  );
};

export default Sidebar;
