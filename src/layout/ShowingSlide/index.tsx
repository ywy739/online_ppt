import style from './index.module.scss';
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import StaticComponent from "../../component/StaticComponents";
import { CloseCircleOutlined, LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { backward, forward, setFullscreen } from "../../store/fullscreen";

function ShowingSlide() {
  const dispatch = useAppDispatch();
  const {index} = useAppSelector(state => state.fullscreen);
  const {slides} = useAppSelector(state => state.allSlides);
  const {contents, background} = slides[index];
  console.log(333, background)

  return (
    <div className={style.container} style={{background}}>
      <div className={style.editingSlide}>
        {contents.map((ele, index) => {
          const {type, style: oldstyle, x, y, ...rest} = ele;
          // react-draggable的原理是利用transform：translate(x,y)做相对初始DOM文档流位置的位移。
          // 拖拽中收集translate(x,y)值，放映时候利用relative，top,left还原
          
          return (
            <div style={{position: 'absolute', left:0, width: 'fit-content'}}>
              <StaticComponent key={index} {...{type, ...rest}} style={{...oldstyle, position: 'relative', left:x, top:y}}/>
            </div> 
          );
        })}
      </div>
    <div className={style.navBar}>
      {index !==0 && <LeftCircleOutlined onClick={() => dispatch(forward())}/>}
      {index !== (slides.length-1) && <RightCircleOutlined onClick={() => dispatch(backward())}/>}
      <CloseCircleOutlined onClick={() => dispatch(setFullscreen(false))}/>
    </div>
  </div>
  );
}

export default ShowingSlide;
