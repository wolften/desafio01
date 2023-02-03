
import { Header } from './components/Header';
import './global.css';
import styles from './App.module.css';
import { Tasks } from './components/Tasks';

export function App() {


  return (
    <div>
      <Header />
      <main className={styles.wrapper}>
        <Tasks />
      </main>

    </div>
  )
}


