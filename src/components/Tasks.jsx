import { useState, useEffect } from 'react';
import styles from './Tasks.module.css';
import { TaskItem } from './TaskItem';
import { NewTaskBar } from './NewTaskBar';
import { NoTasks } from './NoTasks';


export function Tasks() {
    const [tasks, setTasks] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
      const total = tasks.filter(t => t.status === 0).length;
      setCount(total);
    }, [tasks])

    function deleteTask(taskToDelete) {
        const tasksWithoutDeleteOne = tasks.filter(t => {
            return t.id != taskToDelete.id;
        })
        setTasks(tasksWithoutDeleteOne);
    }

    function updateTask(taskToUpdate) {
        const taskIndex = tasks.findIndex(i => i.id === taskToUpdate.id);
        const newTasks = [...tasks];
        const status = newTasks[taskIndex].status === 1 ? 0 : 1;
        newTasks[taskIndex] = {
            ...newTasks[taskIndex],
            status
        };
        setTasks(newTasks);
    }

    return (
        <div className={styles.tasksContainer}>
            <div>
                <NewTaskBar tasks={tasks} setTasks={setTasks} />
            </div>
            <div className={styles.tasksCountContainer}>
                <strong className={styles.createdTasksCount}>Tarefas criadas <span>{tasks.length}</span></strong>
                <strong className={styles.finishedTasksCount}>Concluídas <span>{count} de {tasks.length}</span></strong>
            </div>
            <div>
                {tasks.length > 0 ?
                    tasks.map((task) => {
                        return <TaskItem key={task.id} task={task} onDeleteTask={deleteTask} onUpdateTask={updateTask}/>
                    })
                    :
                    <NoTasks />
                }

            </div>
        </div>
    )
}