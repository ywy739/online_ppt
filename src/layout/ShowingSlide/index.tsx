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
  const contents = slides[index].contents;

  return (
    <div className={style.editingSlide}>
      {contents.map((ele, index) => {
        const {type, style, x, y, ...rest} = ele;
        // react-draggable的原理是利用transform：translate(x,y)做相对初始DOM文档流位置的位移。
        // 拖拽中收集translate(x,y)值，放映时候利用relative，top,left还原
        
        return (
          <div style={{position: 'relative', left:x, top:y}}>
            <StaticComponent key={index} {...{type, style, ...rest}}/>
          </div> 
        );
      })}
      <div className={style.navBar}>
        {index !==0 && <LeftCircleOutlined onClick={() => dispatch(forward())}/>}
        {index !== (slides.length-1) && <RightCircleOutlined onClick={() => dispatch(backward())}/>}
        <CloseCircleOutlined onClick={() => dispatch(setFullscreen(false))}/>
      </div>
    </div>
  );
}

export default ShowingSlide;
