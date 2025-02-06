import TaskList from "./TaskList";

type TaskType = {
  id: number;
  text: string;
  isCompleted: boolean;
};

type TasksContainerPropsType = {
  filteredTaskValue: TaskType[];
  taskListValue: TaskType[];
  updateTaskList: (updatedTasks: TaskType[]) => void;
};

const TasksContainer = ({
  filteredTaskValue,
  taskListValue,
  updateTaskList,
}: TasksContainerPropsType) => {
  const toggleTaskCompletionStatus = (taskId: number) => {
    const updatedTasks = taskListValue.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    updateTaskList(updatedTasks);
  };

  const removeTaskById = (taskId: number) => {
    const userConfirmed = window.confirm(
      "Are you sure you want to delete this task?"
    );
    if (!userConfirmed) return;

    const remainingTasks = taskListValue.filter((task) => task.id !== taskId);
    updateTaskList(remainingTasks);
  };
  if (filteredTaskValue.length) {
    return (
      <TaskList
        taskListValue={filteredTaskValue}
        onToggleTaskStatus={toggleTaskCompletionStatus}
        onRemoveTask={removeTaskById}
      />
    );
  }
  return (
    <div className="">
      <p className=" text-center text-sm text-[#6b7280] pt-3 pb-[40px]">
        No tasks yet. Add one above!
      </p>
    </div>
  );
};
export default TasksContainer;
