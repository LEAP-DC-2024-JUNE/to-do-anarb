"use client";

import Filter from "@/components/Filter";
import Form from "@/components/Form";
import Summary from "@/components/Summary";
import TasksContainer from "@/components/TasksContainer";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";

type TaskType = {
  id: number;
  text: string;
  isCompleted: boolean;
};

export default function Home() {
  const [taskList, setTaskList] = useState<TaskType[]>([]);
  const [currentFilter, setCurrentFilter] = useState<
    "All" | "Active" | "Completed"
  >("All");
  const filteredTasks = taskList.filter((task) => {
    if (currentFilter === "Active") return !task.isCompleted;
    if (currentFilter === "Completed") return task.isCompleted;

    return true;
  });

  const clearCompletedTasks = () => {
    const confirmClear = window.confirm(
      "Are you sure you want to clear all completed tasks?"
    );

    if (!confirmClear) return;

    const remainingTasks = taskList.filter((task) => !task.isCompleted);
    setTaskList(remainingTasks);
  };

  return (
    <div className="pt-[60px]">
      <Card className="w-[377px] mx-auto bg-white rounded-xl py-6 px-4 shadow-lg">
        <CardHeader className="p-0">
          <CardTitle className="text-center text-xl font-semibold mb-5">
            To-Do List
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Form updateTaskList={setTaskList} taskListValue={taskList} />
          <Filter
            activeFilterValue={currentFilter}
            updateCurrentFilter={setCurrentFilter}
          />
          <TasksContainer
            filteredTaskValue={filteredTasks}
            taskListValue={taskList}
            updateTaskList={setTaskList}
          />
          {Boolean(taskList.length) && (
            <Summary
              handleClearCompletedTasks={clearCompletedTasks}
              taskListValue={taskList}
            />
          )}
        </CardContent>
        <CardFooter className="flex justify-center gap-1">
          <p className="text-sm">Created by</p>
          <Link
            href={"https://github.com/LEAP-DC-2024-JUNE/to-do-anarb"}
            className="text-[#3b73ed] text-sm"
          >
            ANAR B
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
