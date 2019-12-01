import React from "react";
import { Tabs } from "antd";
// import TodoList from './todo';
// import DoneList from './done';

const { TabPane } = Tabs;

const tabs = [
  { id: "1", title: "cest1", children: "文本1" },
  { id: "2", title: "cest2", children: "文本2" }
];

class TabTable extends React.Component {
  state = {
    activeKey: tabs[0].id
  };

  onChange = activeKey => {
    this.setState({ activeKey });
  };

  render() {
    return (
      <>
        <Tabs
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          animated={false}
        >
          {tabs.map(item => (
            <TabPane tab={item.title} key={item.id} forceRender>
              {item.children}
            </TabPane>
          ))}
        </Tabs>
        {/* <div className="btns">
          <Button onClick={() => this.onChange(tabs[0].id)}>
            {tabs[0].title}
          </Button>
          <Button
            onClick={() => this.onChange(tabs[1].id)}
            style={{ marginLeft: "8px" }}
          >
            {tabs[1].title}
          </Button>
        </div> */}
        {/* <div className="tab-content">
          {tabs.map(item => (
            <div
              className="tab-item"
              key={item.id}
              style={{
                display: item.id === this.state.activeKey ? "block" : "none"
              }}
            >
              {item.children}
            </div>
          ))}
        </div> */}
      </>
    );
  }
}

export default TabTable;
