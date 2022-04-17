import { CopyOutlined, DeleteOutlined, DiffOutlined, FolderAddOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import StaticComponent from '../../component/StaticComponents';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { addSlide, changeSlide, copySlide, deleteSlide } from '../../store/allSlides';
import { setEditingSlide } from '../../store/editingSlide';
import { setFullscreen } from '../../store/fullscreen';
import style from './index.module.scss';

// 1.开始编辑，初始化editingSlide数据
// 从allSlides中读取slide: editingSlide.content= allSlides.slides[index];
// 2.编辑中, slide的状态暂时保存在editingSlide中
// 3.结束编辑时（即切换editingSlide）同步到allSlides对应slide

// 切换editingSlide的操作都是在这个组件触发的：新建、选中、放映
const PreviewArea = () => {
    const dispatch = useAppDispatch();
    const editingSlide = useAppSelector(state => state.editingSlide);
    const {contents, index: editingSlideIndex, background} = editingSlide;
    const {slides} = useAppSelector(state => state.allSlides);
    console.log(1,'preview rerender')
    // 新建幻灯片
    const newSlide = () => {
        // 保存editingSlide至allSlide 
        dispatch(changeSlide({index: editingSlideIndex, contents, background}))
        // allSlide中新建
        dispatch(addSlide());
        // 切换新幻灯片至编辑区
        dispatch(setEditingSlide({index:slides.length,contents:[]}));
    }

    // 放映幻灯片
    const showSlide = () => {
        //保存editingSlide至allSlide 
        dispatch(changeSlide({index: editingSlideIndex, contents, background}))
        dispatch(setFullscreen(true));
    }
    
    // 切换编辑的幻灯片
    const changeEditingSlide = (slideIndex: number) => {
        if(slideIndex === editingSlideIndex) {
            return;
        }
        // 保存editingSlide至allSlide 
        dispatch(changeSlide({index: editingSlideIndex, contents, background}))
        // 切换新幻灯片至编辑区
        dispatch(setEditingSlide(slides[slideIndex]));
    }

    const deleteS = () => {
        dispatch(deleteSlide(editingSlideIndex));
        dispatch(setEditingSlide({index: 0,contents:slides[0].contents}));
    }

    const copyS = () => {
        dispatch(changeSlide({index: editingSlideIndex, contents, background}));
        dispatch(copySlide(editingSlideIndex))
    }

    return (
        <div className={style.container}>
        <div className={style.toolbar} >
            <FolderAddOutlined className={style.icon} onClick={newSlide}/>
            <DeleteOutlined className={style.icon} onClick={deleteS}/>
            <CopyOutlined className={style.icon} onClick={copyS}/>
            <PlayCircleOutlined className={style.icon} onClick={showSlide}/>
        </div>
        <div className={style.preview}>
            {slides.map((ele,slideIndex)=>{
                const {contents} = ele;
                const slideContent = contents.map((ele, index) => {
                    const {style, x, y, ...rest} = ele;
                    // react-draggable的原理是利用transform：translate(x,y)做相对初始DOM文档流位置的位移。
                    // 拖拽中收集translate(x,y)值，放映时候利用relative，top,left还原
                    const newStyle = {...style, left:x, top:y}
                    
                    return <StaticComponent key={index} {...{style: newStyle, ...rest}}/>
                    });
                const slideStyle = (slideIndex === editingSlideIndex )?  style.slide+ ' ' +style.selectSlide : style.slide;
                return (
                    <div key={slideIndex} className={slideStyle}  onClick={() => changeEditingSlide(slideIndex)}>
                        {/* {slideContent} */}
                    </div>
                );
            })}
        </div>
        </div>
    );
}

export default PreviewArea;