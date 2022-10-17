import logo from './logo.svg';
import logo1 from './logo1.svg';
import logo2 from './logo2.svg';
import './App.css';
import { useState } from 'react';


let w = 400;
let h = 400;

let data = [
  {
    id: 1,
    item: logo
  },
  {
    id: 2,
    item: logo1
  },
  {
    id: 3,
    item: logo2
  },

]


function App() {
  const [rAnim, setRAnim] = useState(false);
  const [lAnim, setLAnim] = useState(false);


  const animateLeft = (e) => {
    if (!lAnim && !rAnim) {
      setLAnim(true);
      setTimeout(() => {
        setLAnim(false);
        data.push(data.shift());
      }, 1000);
    }
  }

  const animateRight = (e) => {
    if (!rAnim && !lAnim) {
      setRAnim(true);
      data.splice(0, 0, data.pop())
      setTimeout(() => {
        setRAnim(false);
      }, 1000);
    }
  }

  return (
    <div className="App">
      <header className={"App-header"}>
        <div
          style={{
            position: "relative", height: h, width: h, overflow: "hidden"
          }}>


          <div
            style={{
              position: "aboslute",
              display: "flex", flexDirection: "row", height: h, width: h,
            }}
            className={`slider ${lAnim && "animateLeft"} ${rAnim && "animateRight"}`}>
            {data.map((i) =>
              <img key={i.id} src={i.item} style={{ width: w, height: h }} alt="logo" />

            )}
          </div>
          <div className="left arrow" onClick={animateLeft} >
          </div>
          <div className="right arrow" onClick={animateRight} />

        </div>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header >
    </div >
  );
}

export default App;

