import { Button } from 'antd';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { setFullscreen } from '../../store/fullscreen';
import style from './index.module.scss';

const PreviewArea = () => {
    const dispatch = useAppDispatch();

    return (
        <div className={style.container}>
        <div className={style.toolbar} >
            <Button size='middle' type='text'>新建幻灯片</Button>
            <Button size='middle' type='text' onClick={() => dispatch(setFullscreen(true))}>放映幻灯片</Button>
        </div>
        <div className={style.preview}>
            
        </div>
        </div>
    );
}

export default PreviewArea;