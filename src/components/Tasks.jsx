import { useState } from 'react';
import styles from './Tasks.module.css';
import { TaskItem } from './TaskItem';
import { NewTaskBar } from './NewTaskBar';
import { NoTasks } from './NoTasks';


export function Tasks() {
    const [tasks, setTasks] = useState([
       ]);

    function deleteTask(taskToDelete) {
        const tasksWithoutDeleteOne = tasks.filter(t => {
            return t.content != taskToDelete;
        })
        setTasks(tasksWithoutDeleteOne);
    }
    return (
        <div className={styles.tasksContainer}>
            <div>
                <NewTaskBar tasks={tasks} setTasks={setTasks} />
            </div>
            <div className={styles.tasksCountContainer}>
                <strong className={styles.createdTasksCount}>Tarefas criadas <span>{tasks.length}</span></strong>
                <strong className={styles.finishedTasksCount}>Concluídas <span>{tasks.length}</span></strong>
            </div>
            <div>
                {tasks.length > 0 ?
                    tasks.map((task, index) => {
                        return <TaskItem task={task} onDeleteTask={deleteTask} />
                    })
                    :
                    <NoTasks />
                }

            </div>
        </div>
    )
}