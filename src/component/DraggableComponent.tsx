import Draggable from "react-draggable";
import getDOM from "./staticComponents";

type Props = {
    type: string;
    style?: React.CSSProperties;
    key?: string|number;
}

const DraggableComponent = (props: Props) => {
    return (
        <Draggable bounds='parent' key={props.key}>
           {getDOM({type: props.type})}
        </Draggable>
    );
}

export default  DraggableComponent;