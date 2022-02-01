import Draggable from "react-draggable";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { selectEle } from "../store/editingSlide";
import StaticComponent from "./StaticComponents";

type Props = {
    type: string;
    style?: React.CSSProperties;
    index: number;
}

const DraggableComponent = (props: Props) => {
    const {index, type, style} = props;
    const dispatch = useAppDispatch();
    console.log('props', props)
    return (
        <Draggable bounds='parent' key={index}  onMouseDown={() => dispatch(selectEle(index))}>
           {/* <StaticComponent {...{type, style}}/> */}
           {StaticComponent({type, style})}
        </Draggable>
    );
}

export default  DraggableComponent;