import styles from './NewTaskBar.module.css';

export function NewTaskBar() {
    return (
        <div className={styles.newTask}>
            <input
                className={styles.newTaskInput}
                placeholder="Adicione uma nova tarefa"
            />
            <button
                className={styles.newTaskButton}>Criar</button>
        </div>
    )
}