import TaskRow from "./TaskRow";

type TaskType = {
  id: number;
  text: string;
  isCompleted: boolean;
};

type TaskListPropsType = {
  taskListValue: TaskType[];
  onToggleTaskStatus: (taskId: number) => void;
  onRemoveTask: (taskId: number) => void;
};

const TaskList = ({
  taskListValue,
  onToggleTaskStatus,
  onRemoveTask,
}: TaskListPropsType) => {
  return (
    <div>
      {taskListValue.map((task, index) => (
        <TaskRow
          key={index}
          onRemoveTask={onRemoveTask}
          onToggleTaskStatus={onToggleTaskStatus}
          task={task}
        />
      ))}
    </div>
  );
};
export default TaskList;
