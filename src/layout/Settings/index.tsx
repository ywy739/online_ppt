import { Tabs } from 'antd';
import FontSetting from './FontSetting';
import style from './index.module.scss';

const { TabPane } = Tabs;

function callback(key: any) {
  console.log(key);
}

const Settings = () => (
  <Tabs defaultActiveKey="1" onChange={callback} className={style.container}>
    <TabPane tab="样式" key="1" className={style.t}>
      Content of Tab Pane 1
    </TabPane>
    <TabPane tab="文本" key="2">
      <FontSetting/>
    </TabPane>
    <TabPane tab="排列" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>
);

export default Settings;