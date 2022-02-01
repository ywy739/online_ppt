import { Button } from "antd";
import { addEle } from "../../store/editingSlide";
import style from './index.module.scss';
import { useAppSelector } from "../../hooks/useAppSelector";
import DraggableComponent from "../../component/DraggableComponent";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useEffect, useRef } from "react";
import { Ele } from "../../constants/slide";

const  Editor = () => { 
  const dispatch = useAppDispatch();
  const {contents, index} = useAppSelector(state => state.editingSlide);
  const editingSlideRef = useRef<HTMLDivElement | null>(null);
  const ref = editingSlideRef.current;  

  useEffect( () => {
    if(ref){
      console.log('refc', ref.children)
      const positions = 
      Array.prototype.map.call(ref.children, (ele) => {
        //React.Children.map(ref.children, (ele) => {
          const {style:{transform}} = ele;
          // transform:'translate(0px, 0px)'
          const xy = transform.split('(')[1]; // '0px,0px)'
          const [x, paddingY]= xy.split(',');
          const temp = paddingY.split('');
          temp.pop();//丢掉) 
          const y = temp.join('');
          return {x,y}
      });
      console.log(positions);// todo:位置信息无效
    }
  }, [ref?.children.length])
  
  return (
    <div className={style.container}>
      <div className={style.toolbar} >
        <Button size='middle' onClick={() => dispatch(addEle(Ele.Text))}>文本</Button>
        <Button size='middle' onClick={() => dispatch(addEle(Ele.Img))}>图片</Button>
      </div>
      <div className={style.draggableContainer}>
        <div className={style.editingSlide} ref={editingSlideRef} >
          {contents.map((ele, cIndex) => {
            console.log('index', index,cIndex)
            return <DraggableComponent key={`${index}-${cIndex}`} {...{...ele,index:index}}/>
          })}
        </div>
      </div>
    </div>
  );
}

export default Editor;
