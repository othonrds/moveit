import { Button } from './components/Button'
import { Word } from './components/Word'


import './styles/global.css';


const App = () => (
  <div>
    <Button color="lightgreen">
      Start
      </Button>

    <Button color="lightblue">
      Pause
      </Button>

    <Button color="lightgray">
      Restart
      </Button>

    <Word color="black">
      Jogo do Othim
    </Word>
  </div>
);


export default App;
