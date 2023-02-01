import styles from './TaskItem.module.css';
import { Circle, CheckCircle, Trash } from 'phosphor-react';
import { useState } from 'react';


export function TaskItem({ task, onDeleteTask }) {

  const [isTaskFinished, setIsTaskFinished] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(task.content)
  }

  function handleFinishTask() {
    setIsTaskFinished(!isTaskFinished);
  }

  return (
    <div>
      <div className={styles.taskItem}>
        <button title="Finalizar tarefa">
          {isTaskFinished ? <CheckCircle weight="duotone" onClick={handleFinishTask} className={styles.checkCircle} /> : <Circle onClick={handleFinishTask} className={styles.circle} />}
        </button>
        <p className>{task.content}</p>
        <button title="Deletar tarefa">
          <Trash size={24} onClick={handleDeleteTask} />
        </button>
      </div>
    </div>
  )
}