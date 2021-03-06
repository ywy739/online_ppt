import { useState } from "react";
import Draggable from "react-draggable";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { moveEle, selectEle } from "../store/editingSlide";
import StaticComponent from "./StaticComponents";
import styles from './index.module.scss';
import { useAppSelector } from "../hooks/useAppSelector";

type Props = {
    type: string;
    style?: React.CSSProperties;
    index: number;
    x?: number;
    y?: number;
}

const DraggableComponent = (props: Props) => {
    const {index, style, x, y, ...rest } = props;
    const {activeEle} = useAppSelector(state => state.editingSlide);
    const dispatch = useAppDispatch();
    console.log(2,'dragcomponent rerender')
    // react-draggable的原理是利用transform：translate(x,y)做相对初始DOM文档流位置的位移。
    // 拖拽中收集translate(x,y)值
    const [position, setPosition] = useState({x: x||0, y: y||0});
    const handleMove = (data:any) => {   
        console.log('handleMove')
        const {x,y} = data;
        if(x === position.x && y === position.y) return;
        if(x < 0 || y < 0) return;
        setPosition({x,y});
        dispatch(moveEle({index,x,y}))
    }
    const selected = activeEle === index? {border: '2px solid #49bd96' } : {};
    return (
        <div className={styles.dragable}>
            <Draggable  key={index} position={position} onMouseDown={() => dispatch(selectEle(index))} onDrag={(e,data) => handleMove(data)} onStop={(e,data) => handleMove(data)}>
           {/* <StaticComponent {...{...rest, style}}/> */}
           {StaticComponent({style: {...selected, ...style, pointerEvents: 'auto'}, ...rest})}
            </Draggable>
        </div>
    );
}

export default  DraggableComponent;