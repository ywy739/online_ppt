import { Button } from "antd";
import { addEle } from "../../store/editingSlide";
import style from './index.module.scss';
import { useAppSelector } from "../../hooks/useAppSelector";
import DraggableComponent from "../../component/DraggableComponent";
import { useAppDispatch } from "../../hooks/useAppDispatch";

function Editor() {
  const dispatch = useAppDispatch();
  const {contents} = useAppSelector(state => state.editingSlide);

  return (
    <div className={style.container}>
      <div className={style.toolbar} >
        <Button size='middle' onClick={() => dispatch(addEle({type: 'text'}))}>文本</Button>
        <Button size='middle' onClick={() => dispatch(addEle({type: 'img'}))}>图片</Button>
      </div>
      <div className={style.draggableContainer}>
        <div className={style.editingSlide}>
          {contents.map((ele, index) => {
            return DraggableComponent({...ele, key: index})
          })}
        </div>
      </div>
    </div>
  );
}

export default Editor;
