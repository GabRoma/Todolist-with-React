//a
import React, { useState, useEffect } from "react";

const Home = () => {

useEffect(() =>
fetch('https://assets.breatheco.de/apis/fake/todos/user/theuser')
    .then((response)=>response.json())
    .then((data) => setTasks(data.map(a => a.label)))
,[])   

useEffect(() =>
fetch('https://assets.breatheco.de/apis/fake/todos/user/theuser', {
   method: "PUT",
   body: JSON.stringify(tasks.map(task => ({ label: task, done: false }))),
   headers: {
     "Content-Type": "application/json"
   }
 }, [tasks]))

  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState(["sample task (you can delete me!)"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== "") {
        setTasks(tasks.concat(input))
        setInput("");
    }else if (input===""){
      alert("Ready to add some tasks!")
    }
};


  return (
    <>
      <div className="card mx-auto mt-4" style={{ width: 500, height: 600 }}>
	  <div className="card-header">
    <i class="far fa-sticky-note"></i><strong>  Things to do</strong>
  </div>
		<div className="card-body">
        <form onSubmit={handleSubmit} className="d-flex" role="input">
          <input
            onChange={(e) => { setInput(e.target.value) }}
            className="form-control me-2"
            type="text"
			      value={input}
            placeholder="Add Task"
          />
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={handleSubmit}
          >
            +
          </button>
        </form>
        <div>
        <ul className="list-group mt-2" id="taskslist">
                    {tasks.map((item, index) => (
                        <li key={index} className="list-group-item d-flex justify-content-between">
                                {item}
                            <button
                                type="button"
                                className="btn-close btn btn-outline-danger"
                                onClick={
                                  () => setTasks(tasks.filter((_, currentIndex) => {
                                    return index != currentIndex}))
                          }
                            >
                            </button>
                        </li>
                    ))}
                </ul>
			</div>
			</div>
		<div className="card-footer">
		<div id="tasksCounter">
            <p className="m-0">Uncompleted tasks: {tasks.length}</p>
        </div>
		<div className="text-end">
		<button
          className="btn btn-outline-warning"
          type="button"
          onClick={() =>setTasks(["sample task (you can delete me!)"])}
        >
          Delete all
        </button>
		</div>
		</div>
      </div>
    </>
  );
};

export default Home;
