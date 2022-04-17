import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, Input, Radio } from "antd";
import style from './index.module.scss';
import ColorPicker from "../../../component/ColorPicker";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { changeEleLayer, changeEleStyle, setSlideBackground } from "../../../store/editingSlide";
import { useAppSelector } from "../../../hooks/useAppSelector";

const { Panel } = Collapse;

const OrderSetting = () => {
    console.log(2,' style setting rerender');
    const dispatch = useAppDispatch();
    const {index, activeEle} = useAppSelector(state => state.editingSlide);

    const handleLayerChange = (e: any) => {
        const value = e.target.value;
        dispatch(changeEleLayer(value));
    }

    return (
        <>
        <div className={style.row}>
            <div>幻灯片顺序</div>
                <Radio.Group onChange={handleLayerChange} defaultValue="">
                    <Radio.Button value="up">前移一片</Radio.Button>
                    <Radio.Button value="top">首页</Radio.Button>
                    <Radio.Button value="down">后移一片</Radio.Button>
                    <Radio.Button value="bottom">结束页</Radio.Button>
                </Radio.Group>  
            </div> 
        <div className={style.row}>
            <div>元素图层</div>
            <Radio.Group onChange={handleLayerChange} defaultValue="" key={`${index}-${activeEle}`}>
                <Radio.Button value="up">上移一层</Radio.Button>
                <Radio.Button value="top">置顶</Radio.Button>
                <Radio.Button value="down">下移一层</Radio.Button>
                <Radio.Button value="bottom">置底</Radio.Button>
            </Radio.Group>  
        </div>       
        </>
    );
}

export default OrderSetting;