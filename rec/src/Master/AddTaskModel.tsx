import React from 'react'

function AddTaskModal({ isOpen, onClose }) {
  if (!isOpen) return null; // Don't render if the modal is closed

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative p-6 bg-white rounded-lg shadow-lg w-100">
        <h2 className="mb-4 text-xl font-semibold">Add Task</h2>
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
        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
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
