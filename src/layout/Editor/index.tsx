import { Button } from "antd";
import { addEle, deleteEle,  addImg, copyEle } from "../../store/editingSlide";
import style from './index.module.scss';
import { useAppSelector } from "../../hooks/useAppSelector";
import DraggableComponent from "../../component/DraggableComponent";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { Ele } from "../../constants/slide";
import UploadCompoent from "../../component/UploadCompoent";
import React from "react";

const  Editor = () => { 
  const dispatch = useAppDispatch();
  const {contents, index, background} = useAppSelector(state => state.editingSlide);
  //const [contents, index] = [[], 8]
  console.log(1,'editor rerender')
  const handleAddImg = React.useCallback((src: string) => dispatch(addImg(src)),[]);
  console.log(333, background)
  return (
    <div className={style.container}>
      <div className={style.toolbar} >
        <Button size='middle' onClick={() => dispatch(addEle(Ele.Text))}>文本</Button>
        <UploadCompoent addImg={handleAddImg}/>
        <div className={style.free} ></div>
        <Button size='middle' onClick={() => dispatch(deleteEle())} danger>删除</Button>
        <Button size='middle' onClick={() => dispatch(copyEle())} danger>拷贝</Button>

      </div>
      <div className={style.draggableContainer}>
        <div className={style.editingSlide} style={{background}}>
          {contents.map((ele, cIndex) => {
            return <DraggableComponent key={`${index}-${cIndex}`} {...{...ele,index:cIndex}}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default Editor;
