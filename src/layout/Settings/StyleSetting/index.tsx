import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, Input, Radio } from "antd";
import style from './index.module.scss';
import ColorPicker from "../../../component/ColorPicker";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { changeEleStyle, setSlideBackground } from "../../../store/editingSlide";

const { Panel } = Collapse;

const StyleSetting = () => {
    console.log(2,' style setting rerender');
    const dispatch = useAppDispatch();

    return (
        <Collapse  className={style.container} bordered={false} defaultActiveKey={[1, 2]} expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}>
            <Panel header="幻灯片" key="1">
                <div className={style.row}>
                    <div>初始化模版</div>
                </div>  
                <div className={style.row}>
                    <div>背景颜色</div>
                    <ColorPicker onChange={(color) => dispatch(setSlideBackground(color))}/>
                </div>  
            </Panel>
            <Panel header="组件" key="2">
                <div className={style.row}>
                    <div>宽度</div>
                    <Input suffix="PX" onChange={(e)=> {
                        const value = e.target.value;
                        dispatch(changeEleStyle({width: `${value}px`}));
                    }}></Input>
                </div>  
                <div className={style.row}>
                    <div>高度</div>
                    <Input suffix="PX" onChange={(e)=> {
                        const value = e.target.value;
                        dispatch(changeEleStyle({height: `${value}px`}));
                    }}></Input>
                </div>                 
            </Panel>
        </Collapse>
    );
}

export default StyleSetting;