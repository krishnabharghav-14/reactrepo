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
              <h6>Content not found or List is empty</h6>
        }
      </div>

      <div>
        {
          List.map((eachItem) => {
            var c="";
            var c = eachItem.id%2==0?"d1":"d2"; 
            var status = eachItem.id%2==0?"even":"odd"; 

            return(

              <>
              <div className={c} style={{width:'80px' , height:'50px', display:"inline-block" , margin:"10px"}}>
              </div>
              <div style={{display:"inline-block"}}>This is {status}</div><br/>
              </>
            );
          })
        }
      </div>
    </div>
  );
}

export default App;
