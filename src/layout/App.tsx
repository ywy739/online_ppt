import { useAppSelector } from '../hooks/useAppSelector';
import style from './App.module.scss';
import Editor from './Editor';
import PreviewArea from './Preview';
import Settings from './Settings';
import ShowingSlide from './ShowingSlide';


function App() { 
  const {isShowSlide} = useAppSelector(state => state.fullscreen);
  console.log(0,'app rerender')
  if(isShowSlide) {
    return <ShowingSlide/>
  }

  return (
    <div className={style.container}>
      <div className={style.main}>
        <Editor/>
      </div>
      <div className={style.left}>
        <PreviewArea/>
      </div>
      <div className={style.right}>
        <Settings/>
      </div>
    </div>
  );
}

export default App;
