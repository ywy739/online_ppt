import { ReactElement } from "react";
import Draggable from "react-draggable";

type Props = {
    children : ReactElement;
}

const DraggableWrap = (props: Props) => {
    return (
        <Draggable>
            {props.children}
        </Draggable>
    );
}

export default  DraggableWrap;