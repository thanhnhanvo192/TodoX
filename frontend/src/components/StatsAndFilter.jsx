import { FilterType } from "@/lib/data";
import { Badge, Filter } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const StatsAndFilter = ({
  completedTasksCount = 0,
  activeTasksCount = 0,
  filter = "all",
  setFilter,
}) => {
  return (
    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
      {/* Phần thống kê */}
      <div className="flex gap-3">
        <div className="flex gap-3">
          <span className="px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 rounded-full">
            {activeTasksCount} {FilterType.active}
          </span>
          <span className="px-3 py-1 text-xs font-medium text-green-700 bg-green-100 rounded-full">
            {completedTasksCount} {FilterType.completed}
          </span>
        </div>
      </div>

      {/* Phần filter */}
      <div className="flex flex-col gap-2 sm:flex-row">
        {Object.keys(FilterType).map((type) => (
          <Button
            key={type}
            variant={filter === type ? "gradient" : "ghost"}
            size="sm"
            className="capitalize"
            onClick={() => setFilter(type)}
          >
            <Filter className="size-4" />
            {FilterType[type]}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default StatsAndFilter;
