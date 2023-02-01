import { ClipboardText } from 'phosphor-react';
import styles from './NoTasks.module.css';

export function NoTasks() {
    return (
        <div>
            <main className={styles.noTasksContainer} >
                <ClipboardText size={56} className={styles.clipboardIcon} />
                <strong>
                    Você ainda não tem tarefas cadastradas
                </strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </main>
        </div>
    )
}