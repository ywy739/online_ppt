import { Button } from "antd";
import { addEle, addImg } from "../../store/editingSlide";
import style from './index.module.scss';
import { useAppSelector } from "../../hooks/useAppSelector";
import DraggableComponent from "../../component/DraggableComponent";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { Ele } from "../../constants/slide";
import UploadCompoent from "../../component/UploadCompoent";
import React from "react";

const  Editor = () => { 
  const dispatch = useAppDispatch();
  const {contents, index} = useAppSelector(state => state.editingSlide);
  //const [contents, index] = [[], 8]
  console.log(1,'editor rerender')
  const handleAddImg = React.useCallback((src: string) => dispatch(addImg(src)),[]);
  
  return (
    <div className={style.container}>
      <div className={style.toolbar} >
        <Button size='middle' onClick={() => dispatch(addEle(Ele.Text))}>文本</Button>
        <UploadCompoent addImg={handleAddImg}/>
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
