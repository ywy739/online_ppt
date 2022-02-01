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
        return <StaticComponent {...{...ele, key: index}}/>
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
