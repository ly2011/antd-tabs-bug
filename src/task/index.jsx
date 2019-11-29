import React from "react";
import { Tabs } from "antd";
// import TodoList from './todo';
// import DoneList from './done';

const { TabPane } = Tabs;

const tabs = [
  { id: 1, title: "cest1", children: "文本1" },
  { id: 2, title: "cest2", children: "文本2" }
];

class TabTable extends React.Component {
  state = {};

  render() {
    return (
      <Tabs defaultActiveKey="1">
        {tabs.map(item => (
          <TabPane tab={item.title} key={item.id}>
            {item.children}
          </TabPane>
        ))}
      </Tabs>
    );
  }
}

export default TabTable;
