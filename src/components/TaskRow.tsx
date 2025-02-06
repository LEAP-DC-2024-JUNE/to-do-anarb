import { Checkbox } from "./ui/checkbox";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ChangeEvent, useState } from "react";

type TaskType = {
  id: number;
  text: string;
  isCompleted: boolean;
};

type TaskRowPropsType = {
  task: TaskType;
  onToggleTaskStatus: (taskId: number) => void;
  onRemoveTask: (taskId: number) => void;
};

const TaskRow = ({
  onToggleTaskStatus,
  onRemoveTask,
  task,
}: TaskRowPropsType) => {
  const { id, isCompleted, text } = task;
  const [editTask, setEditTask] = useState("");

  const handleTaskRemoval = () => onRemoveTask(id);
  const handleTaskStatusToggle = () => onToggleTaskStatus(id);

  const changeEditTask = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEditTask(e.target.value);
  };

  //   const handleEditTask = (index: number) => {
  //     setTaskList((prevState) => {
  //       const newState = prevState.map((task, i) => {
  //         return i === index ? { ...task, name: editTask } : task;
  //       });

  //       return newState;
  //     });
  //   };

  return (
    <div className="flex justify-between bg-[#f9fafb] p-4 mb-5 rounded ease-in-out">
      <div className="flex items-center gap-2.5">
        <Checkbox
          checked={isCompleted}
          onCheckedChange={handleTaskStatusToggle}
        />
        <p className={isCompleted ? "line-through" : ""}>{text}</p>
      </div>
      <div>
        {/* <Dialog>
          <DialogTrigger onClick={() => setEditTask(task.name)}>
            <Button className="bg-orange-50 hover:bg-orange-50 shadow-none fill-orange-500 px-3">
              Edit
            </Button>
          </DialogTrigger>
          <DialogContent onOpenAutoFocus={(e) => e.preventDefault()}>
            <DialogHeader>
              <DialogTitle>Edit Task</DialogTitle>
            </DialogHeader>
            <Input value={editTask} onChange={changeEditTask} />
            <DialogFooter>
              <DialogClose asChild>
                <Button
                  type="submit"
                  onClick={() => handleEditTask(index)}
                  disabled={editTask === ""}
                >
                  Save changes
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog> */}
        <button
          className="bg-[#fef2f2] text-[#ef4444] rounded px-3 text-sm"
          onClick={handleTaskRemoval}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default TaskRow;
