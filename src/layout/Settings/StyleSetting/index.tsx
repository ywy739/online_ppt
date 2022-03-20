import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse } from "antd";
import style from './index.module.scss';
import ColorPicker from "../../../component/ColorPicker";

const { Panel } = Collapse;

const StyleSetting = () => {
    console.log(2,' style setting rerender');
    return (
        <Collapse  className={style.container} bordered={false} defaultActiveKey={[1, 2]} expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}>
            <Panel header="全局幻灯片样式" key="1">
            <p>全局幻灯片样式</p>
            </Panel>
            <Panel header="组件样式" key="2">
                <div className={style.row}>
                  <ColorPicker/>
                </div>          
            </Panel>
        </Collapse>
    );
}

export default StyleSetting;