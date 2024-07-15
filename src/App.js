// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Customcard from './Components/card/card';
import List from './datalist/datalist';


function App() {
  return (
    <div className='App'>
      <div className='flex'>
        {
          List.length?(List.map((eachItem) => {
            return(
              <Customcard key={eachItem.id} item={eachItem}></Customcard>
            );
          })):
              <h6>Content not found</h6>
        }
      </div>
    </div>
  );
}

export default App;
