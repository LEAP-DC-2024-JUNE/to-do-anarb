import { Button } from "./ui/button";

type TaskType = {
  id: number;
  text: string;
  isCompleted: boolean;
};

type SummaryPropsType = {
  taskListValue: TaskType[];
  handleClearCompletedTasks: () => void;
};

const Summary = ({
  taskListValue,
  handleClearCompletedTasks,
}: SummaryPropsType) => {
  const totalTaskCount = taskListValue.length;
  const completedTaskCount = taskListValue.filter(
    (task) => task.isCompleted
  ).length;
  return (
    <div className="pt-4 flex items-center justify-between border-t pb-5">
      <p className="text-sm">
        {completedTaskCount} of {totalTaskCount} tasks completed
      </p>
      <Button
        className="text-[#ef4444] text-sm"
        onClick={handleClearCompletedTasks}
      >
        Clear Completed
      </Button>
    </div>
  );
};
export default Summary;
