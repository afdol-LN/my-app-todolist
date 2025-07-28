'use client'
import { useState } from "react";

function  Todolist() {
    const [alltask, setAlltask] = useState(["take a shawor", "eat brakefast", "drink coffe", "play game"])
    const [task, setTask] = useState("")

    function changeTask(event) {

        setTask(event.target.value)

        // setAlltask("")

    }
    function insertTask() {
        setAlltask([...alltask, task])
        console.log("insert complete")
        console.log(alltask)
        setTask("")
    }
    function deleteTask(index) {
        console.log("deleting")
        const updateTask = alltask.filter(i => i != alltask[index])
        setAlltask(updateTask)
        console.log(alltask)
        console.log("delete complete")
    }
     function upTask(index) {
        if (index > 0) {
            const updateTask = [...alltask] 
            try{
                const temp = updateTask[index-1]
                updateTask[index-1] = updateTask[index]
                updateTask[index] = temp
            }catch(err){
                console.log(err)
            }
            
            // [updateTask[index], updateTask[index - 1]] 
            // = [updateTask[index - 1], updateTask[index]]
            console.log("after sort")
            setAlltask(updateTask)
            console.log(alltask)
        }


    }
    function downTask(index) {
        if(index<alltask.length-1){
            const updateTask = [...alltask]
            const temp = updateTask[index]
            updateTask[index] = updateTask[index+1]
            updateTask[index+1] =temp
            setAlltask(updateTask)
        }
        
        
    }
    return (
        <div className="text-center">
            <h1 className="text-4xl px-5 py-4">Todolist</h1>
            <div>
                <input

                    type="text"
                    placeholder="Enter todolist...."
                    value={task}
                    onChange={(e) => changeTask(e)}
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

            <ol className="mt-[20px]">
                {alltask.map((item, index) => (
                    // Corrected: Wrap the entire item structure inside an <li>
                    <li key={index} className="mb-[10px]"> {/* Apply margin to the li if needed, or keep it on the inner div */}
                        <div className="flex items-center justify-between
                      bg-gray-400 w-[80%] mx-auto rounded-lg py-[10px] pl-[10%] pr-[2%]">
                            <span className="text-lg font-bold">{item}</span> {/* Use span for the text content */}
                            <div >
                                <button
                                    className="delete-button bg-red-500 ml-3 font-semibold
                                cursor-pointer hover:bg-red-600 transition-all duration-500"
                                    onClick={() => deleteTask(index)}
                                >
                                    Delete
                                </button>
                                <button
                                    className="move-button bg-blue-500 ml-3 font-semibold
                                cursor-pointer hover:bg-blue-600 transition-all duration-500"
                                    onClick={() => upTask(index)}
                                >
                                    Up
                                </button>
                                <button
                                    className="move-button bg-blue-500 ml-3 font-semibold
                                cursor-pointer hover:bg-blue-600 transition-all duration-500"
                                    onClick={()=>downTask(index)}
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