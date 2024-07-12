import logo from './logo.svg';
import './App.css';
import Customcard from './card/card';
import Details, { Navlist } from './listdata/listdata';
import Custonbuttom from './button/button';
import Heading1,{ Heading2 } from './heading/heading';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <div className="nav">
        {
          Navlist.map((eachdata,index) => {
            return (
              <Custonbuttom key={index} text={eachdata}></Custonbuttom>
            );
          })
        }
      </div>
      <div className="App">

        {
          Details.map((eachdata,index) => {
            return (
              <Customcard key={index} data={eachdata}></Customcard>
            );
          })
        }
      </div>
      <div className="foot">
        <Heading1 data="Krishna Bhargav"></Heading1>
      </div>
    </div>
  );
}

export default App;
