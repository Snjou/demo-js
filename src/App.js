
import './App.css';
const axios = require('axios').default;

function click (){
  axios.get('https://asd-asd-asd.herokuapp.com')
  .then(function (response) {
    console.log(response);
  })
}

function App() {
  return (
    <div>
      <form>
        <input type = "submit" onClick= {click()}/>

      </form>
    </div>
  );
}

export default App;
