import { Button } from './components/Button'
import { Word } from './components/Word'


import './styles/global.css';


const App = () => (
  <div>
    <Button color="red">
      Botão 1
      </Button>

    <Button color="blue">
      Botão 2
      </Button>

    <Button color="green">
      Botão 3
      </Button>

    <Word color="gray">
      Test number 2
    </Word>
  </div>
);


export default App;
