import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AddTaskModal from "../AddTaskModel";

function Nav() {
  const [search, setSearch] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const handleValue = (value: string) => {
    setValue(value);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md ">
    
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
    
        <div className="flex items-center w-full sm:w-auto">
          <label htmlFor="task-search" className="sr-only">
            Search Tasks
          </label>
          <input
            id="task-search"
            type="text"
            className="w-full p-2 border border-black rounded-md sm:w-64"
            placeholder="Search Tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

    
        <button
          className="flex items-center px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800"
          aria-label="Add Task"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-[18px]">+</span>
          <span className="ml-1">Add Task</span>
        </button>

        
        <div className="w-full sm:w-auto">
          <Select onValueChange={handleValue}>
            <SelectTrigger className="w-full sm:w-[140px]">
              <SelectValue placeholder="Select Task" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="alltask">All Task</SelectItem>
              <SelectItem value="todo">To Do</SelectItem>
              <SelectItem value="inprogress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <AddTaskModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export default Nav;
