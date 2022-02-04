import { Button } from 'antd';
import StaticComponent from '../../component/StaticComponents';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { addSlide, changeSlide } from '../../store/allSlides';
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
    const {contents, index: editingSlideIndex} = useAppSelector(state => state.editingSlide);
    const {slides} = useAppSelector(state => state.allSlides);
    
    // 新建幻灯片
    const newSlide = () => {
        // 保存editingSlide至allSlide 
        dispatch(changeSlide({index: editingSlideIndex, contents}))
        // allSlide中新建
        dispatch(addSlide());
        // 切换新幻灯片至编辑区
        dispatch(setEditingSlide({index:slides.length,contents:[]}));
    }

    // 放映幻灯片
    const showSlide = () => {
        //保存editingSlide至allSlide 
        dispatch(changeSlide({index: editingSlideIndex, contents}))
        dispatch(setFullscreen(true));
    }
    
    // 切换编辑的幻灯片
    const changeEditingSlide = (slideIndex: number) => {
        // 保存editingSlide至allSlide 
        dispatch(changeSlide({index: editingSlideIndex, contents}))
        // 切换新幻灯片至编辑区
        dispatch(setEditingSlide({index: slideIndex,contents:slides[slideIndex].contents}));
    }

    return (
        <div className={style.container}>
        <div className={style.toolbar} >
            <Button size='middle' type='text' onClick={newSlide}>新建幻灯片</Button>
            <Button size='middle' type='text' onClick={showSlide}>放映幻灯片</Button>
        </div>
        <div className={style.preview}>
            {slides.map((ele,slideIndex)=>{
                const {contents} = ele;
                const slideContent = contents.map((ele, index) => {
                    const {type, style, x, y} = ele;
                    // react-draggable的原理是利用transform：translate(x,y)做相对初始DOM文档流位置的位移。
                    // 拖拽中收集translate(x,y)值，放映时候利用relative，top,left还原
                    const newStyle = {...style, left:x, top:y}
                    return <StaticComponent key={index} {...{type, style: newStyle}}/>
                    });
                const slideStyle = (slideIndex === editingSlideIndex )?  style.slide+ ' ' +style.selectSlide:style.slide;
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