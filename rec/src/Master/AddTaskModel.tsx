import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
function AddTaskModal({ isOpen, onClose }) {
  if (!isOpen) return null; 
  const [date, setDate] = useState<Date | undefined>(new Date())






  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative p-6 bg-white rounded-lg shadow-lg w-100">
        <h2 className="mb-4 text-xl font-semibold">Add New Task</h2>
        <div className='flex'>
        <input
          type="text"
          placeholder="Task title"
          className="w-full h-[50px] px-3 mr-2 py-2 mb-4 border rounded"
          />
          <textarea
          type="text"
          placeholder="Add Description"
          className="w-full px-3 py-2 mb-4 border rounded h-[80px]"
          />
        </div>
         <div className="flex w-full mb-3 sm:w-auto">
          <Select>
            <SelectTrigger className="w-full sm:w-[190px]">
              <SelectValue placeholder="Medium" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="alltask">All Task</SelectItem>
              <SelectItem value="todo">To Do</SelectItem>
              <SelectItem value="inprogress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-full sm:w-[190px]">
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
        <div className="flex flex-col">
            <Calendar
    mode="single"
    selected={date}
    onSelect={setDate}
    className="border rounded-md"
          />
          <input type="text" placeholder="Assignee" className="w-full h-[50px] px-3 mr-2 py-2 mt-2 mb-4 border rounded" />
          <input type="text" placeholder="Tags(Comma Seperated ',')" className="w-full h-[50px] px-3 mr-2 py-2 mb-4 border rounded" />
        </div>
        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 text-white bg-black rounded hover:bg-gray-900"
            onClick={onClose}
          >
            Add Task
          </button>
          <button
            className="px-4 py-2 text-gray-700 bg-gray-300 rounded hover:bg-gray-400"
            onClick={onClose}
          >
          
            
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTaskModal;
