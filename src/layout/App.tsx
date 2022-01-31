import style from './App.module.scss';
import Editor from './Editor';
import Settings from './Settings';


function App() {
  return (
    <div className={style.container}>
      <div className={style.main}>
        <Editor/>
      </div>
      <div className={style.left}></div>
      <div className={style.right}>
        <Settings/>
      </div>
    </div>
  );
}

export default App;
