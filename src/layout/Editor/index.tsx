import { Button } from "antd";
import Draggable from "react-draggable";
import style from './index.module.scss';

function Editor() {
  return (
    <div className={style.container} >
        <div className='toolbar' style={{height: '32px', }} ></div>
        <div className={style.draggableContainer}>
          <div className={style.editingSlide}>
          <Draggable allowAnyClick bounds='parent' onStop={(e: any)=>console.log(e.path[1].style.transform)} >
              <Button size='middle' style={{height:'32px'}}>文本</Button>
            </Draggable>
          </div>
        </div>
    </div>
  );
}

export default Editor;
