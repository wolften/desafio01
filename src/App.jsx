
import { Header } from './components/Header';
import { NewTaskBar } from './components/NewTaskBar';
import './global.css';
import styles from './App.module.css';

export function App() {


  return (
    <div>
      <Header />
      <div>
        <NewTaskBar />
      </div>
    </div>
  )
}

