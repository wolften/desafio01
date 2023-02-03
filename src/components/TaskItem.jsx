import styles from './TaskItem.module.css';
import { Circle, CheckCircle, Trash } from 'phosphor-react';


export function TaskItem({ task, onDeleteTask, onUpdateTask }) {

  function handleDeleteTask() {
    onDeleteTask(task)
  }

  function handleFinishTask() {
    onUpdateTask(task)
  }

  return (
      <div className={styles.taskItem}>
        <div>
          <button title="Finalizar tarefa" onClick={handleFinishTask}>
            {task.status === 0 ? <CheckCircle weight="duotone" className={styles.checkCircle} /> : <Circle className={styles.circle} />}
          </button>
        </div>
        <div>
          <p className={task.status === 0 && styles.taskItemFinishedText}>{task.content}</p>
        </div>
        <div>
          <button title="Deletar tarefa" onClick={handleDeleteTask}>
            <Trash size={24} />
          </button>
        </div>
      </div>
  )
}