import { Radio, Tabs } from 'antd';
import FontSetting from './FontSetting';
import style from './index.module.scss';
import OrderSetting from './OrderSetting';
import StyleSetting from './StyleSetting';

const { TabPane } = Tabs;

function callback(key: any) {
  // console.log(key);
}



const Settings = () => {
  console.log(1,'setting rerender');
  return (
    <Tabs defaultActiveKey="1" onChange={callback} className={style.container}>
      <TabPane tab="样式" key="1" className={style.t}>
        <StyleSetting/>
      </TabPane>
      <TabPane tab="文本" key="2">
        <FontSetting/>
      </TabPane>
      <TabPane tab="排列" key="3">
        <OrderSetting/>
      </TabPane>
    </Tabs>
  );
}

export default Settings;