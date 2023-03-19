import './App.css';
import Comp2 from './Components/Comp2'
import Comp from './Components/Comp'
import PureComp from './Components/PureComp';
function App() {
  return (<>
    <div className="App">
      <div>
      <h2>Example of Higher Order Function</h2>
      {/* <Comp1/> */}
      <Comp2 data={Comp}/>     
      </div>
      <hr/>
      <div>
        <h2>Example of Pure Component</h2>
        <PureComp/>
      </div>
      </div>
      </>
      
  );
}

export default App;
