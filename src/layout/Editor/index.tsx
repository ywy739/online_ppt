import { Button } from "antd";
import { addEle } from "../../store/editingSlide";
import style from './index.module.scss';
import { useAppSelector } from "../../hooks/useAppSelector";
import DraggableComponent from "../../component/DraggableComponent";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { Ele } from "../../constants/slide";

const  Editor = () => { 
  const dispatch = useAppDispatch();
  const {contents, index} = useAppSelector(state => state.editingSlide);
  
  return (
    <div className={style.container}>
      <div className={style.toolbar} >
        <Button size='middle' onClick={() => dispatch(addEle(Ele.Text))}>文本</Button>
        <Button size='middle' onClick={() => dispatch(addEle(Ele.Img))}>图片</Button>
      </div>
      <div className={style.draggableContainer}>
        <div className={style.editingSlide}>
          {contents.map((ele, cIndex) => {
            return <DraggableComponent key={`${index}-${cIndex}`} {...{...ele,index:cIndex}}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default Editor;
