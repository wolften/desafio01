import { PlusCircle } from 'phosphor-react';
import { useState } from 'react';
import styles from './NewTaskBar.module.css';

export function NewTaskBar({ tasks, setTasks }) {

    const [newTaskText, setNewTaskText] = useState('');

    function handleCreateNewTask() {
        event.preventDefault();

        const isTasksLengthZero = tasks.length === 0;
        var newTaskId = isTasksLengthZero ? 1 : tasks[tasks.length - 1].id + 1;

        setTasks(taskState => [...taskState, {
            id: newTaskId,
            content: newTaskText,
            status: 1
        }]);
        setNewTaskText('');
    }

    function handleNewTaskChange() {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Este campo é obrigatório!')
    }
    const isNewTaskInputEmpty = newTaskText.length === 0;

    return (
        <form onSubmit={handleCreateNewTask} className={styles.newTask}>
            <input
                type="text"
                className={styles.newTaskInput}
                name="task"
                placeholder="Adicione uma nova tarefa"
                onChange={handleNewTaskChange}
                onInvalid={handleNewCommentInvalid}
                value={newTaskText}
                required
            />
            <button
                disabled={isNewTaskInputEmpty}
                className={styles.newTaskButton}
                type="submit"
            >
                Criar

                <PlusCircle />
            </button>
        </form>
    )
}