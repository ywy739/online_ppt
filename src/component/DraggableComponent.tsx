import Draggable from "react-draggable";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { selectEle } from "../store/editingSlide";
import getDOM from "./staticComponents";

type Props = {
    type: string;
    style?: React.CSSProperties;
    key: number;
}

const DraggableComponent = (props: Props) => {
    const {key, type, style} = props;
    const dispatch = useAppDispatch();
    return (
        <Draggable bounds='parent' key={props.key} onMouseDown={() => dispatch(selectEle(key))}>
           {getDOM({type, style})}
        </Draggable>
    );
}

export default  DraggableComponent;