import style from './index.module.scss';
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import StaticComponent from "../../component/StaticComponents";
import { CloseCircleOutlined, LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { setFullscreen } from "../../store/fullscreen";

function ShowingSlide() {
  const dispatch = useAppDispatch();
  const {contents} = useAppSelector(state => state.editingSlide);

  return (
    <div className={style.editingSlide}>
      {contents.map((ele, index) => {
        const {type, style, x, y} = ele;
        // react-draggable的原理是利用transform：translate(x,y)做相对初始DOM文档流位置的位移。
        // 拖拽中收集translate(x,y)值，放映时候利用relative，top,left还原
        const newStyle = {...style, left:x, top:y}
        return <StaticComponent key={index} {...{type, style: newStyle}}/>
      })}
      <div className={style.navBar}>
        <LeftCircleOutlined />
        <RightCircleOutlined />
        <CloseCircleOutlined onClick={() => dispatch(setFullscreen(false))}/>
      </div>
    </div>
  );
}

export default ShowingSlide;
