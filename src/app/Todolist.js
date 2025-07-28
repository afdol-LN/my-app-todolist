'use client'
import { useState } from "react";

function Todolist() {
    const [alltask, setAlltask] = useState(["take a shawor", "eat brakefast", "drink coffe"])
    const [task, setTask] = useState("")

    function changeTask(event) {
        setTask(event.target.value)
        setAlltask("")

    }
    function insertTask() {

    }
    function deleteTask(index) {

    }
    function upTask(index) {

    }
    function downTask(index) {

    }
    return (
        <div className="text-center">
            <h1 className="text-4xl px-5 py-4">Todolist</h1>
            <div>
                <input

                    type="text"
                    placeholder="Enter todolist...."
                    value={task}
                    onChange={(event)=>changeTask}
                    className="bg-gray-300 rounded-[8px] 
                                py-[5px] px-[7px] text-2xl 
                                hover:bg-gray-200 transition-all duration-500"
                />
                <button onClick={insertTask}
                    className="bg-green-600 ml-2 text-2xl font-bold
                         hover:bg-green-700 transition-all duration-300 cursor-pointer">
                    insert
                </button>
            </div>

            <ol>
                {alltask.map((item, index) => (
                    // Corrected: Wrap the entire item structure inside an <li>
                    <li key={index} className="mb-[10px]"> {/* Apply margin to the li if needed, or keep it on the inner div */}
                        <div className="flex items-center justify-evenly
                      bg-gray-400 w-[80%] mx-auto rounded-lg py-[10px]">
                            <span className="text-lg font-bold">{item}</span> {/* Use span for the text content */}
                            <div>
                                <button
                                    className="delete-button bg-red-500 ml-3 font-semibold
                                cursor-pointer hover:bg-red-600 transition-all duration-500"
                                    onClick={deleteTask}
                                >
                                    Delete
                                </button>
                                <button
                                    className="move-button bg-blue-500 ml-3 font-semibold
                                cursor-pointer hover:bg-blue-600 transition-all duration-500"
                                    onClick={upTask}
                                >
                                    Up
                                </button>
                                <button
                                    className="move-button bg-blue-500 ml-3 font-semibold
                                cursor-pointer hover:bg-blue-600 transition-all duration-500"
                                    onClick={downTask}
                                >
                                    down
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ol>


        </div>
    )

}
export default Todolist;