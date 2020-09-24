import React, { Fragment } from 'react';

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }
const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;

    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Fragment>{children}</Fragment>}
      </div>
    )
}
export default TabPanel;