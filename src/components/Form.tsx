"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ChangeEvent, FormEvent, useState } from "react";

type TaskType = {
  id: number;
  text: string;
  isCompleted: boolean;
};

type FormPropsType = {
  updateTaskList: (taskList: TaskType[]) => void;
  taskListValue: TaskType[];
};

const Form = ({ updateTaskList, taskListValue }: FormPropsType) => {
  const [inputData, setInputData] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value);
  };

  const handleAddTask = (event: FormEvent) => {
    event.preventDefault();

    if (!inputData) {
      alert("Please enter a task!");
      return;
    }

    const newTask: TaskType = {
      id: Date.now(),
      text: inputData,
      isCompleted: false,
    };

    updateTaskList([newTask, ...taskListValue]);
    setInputData("");
  };

  return (
    <div className="flex gap-1.5">
      <Input
        id="name"
        placeholder="Add a new task..."
        className="border-[1px] border-[#e4e4e7] text-sm rounded-xl w-[280px]"
        onChange={handleInputChange}
        value={inputData}
      />
      <Button
        className="bg-[#3c82f6] rounded-xl text-[#f9f9f9] w-[59px] hover:bg-[#3c82f6] px-4"
        onClick={handleAddTask}
      >
        Add
      </Button>
    </div>
  );
};
export default Form;
