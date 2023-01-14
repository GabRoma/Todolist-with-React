import React, { useState, useEffect } from "react";

const Home = () => {

  useEffect(() => {
    fetch('https://assets.breatheco.de/apis/fake/todos/user/theuser',{
      method: "GET",
    })
    .then(response => response.text())
    .then(result => console.log(result))
  });

  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const tasksList = tasks.map((item)=>{
    return {
       "label": item,
       "done": false
   }
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== "") {
        setTasks([...tasks, input])
        setInput("");
    }
    fetch('https://assets.breatheco.de/apis/fake/todos/user/todouser', {
        method: "PUT",
        body: JSON.stringify(tasksList),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        // .then(response => response.text())
        // .then(result => console.log(result))
        // .catch(error => console.log('error', error));

};
  const deleting = () => {
    setTasks([]);
  };

  return (
    <>
      <div className="card mx-auto mt-4" style={{ width: 500, height: 600 }}>
	  <div class="card-header">
    Things to do
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
			{tasks.map((item, index) => (
				<div key={index} className="row d-flex p-1 mt-2 border border-light rounded">
					<div className="col-6">{item}{""}</div>
					<div className="col-6 text-end">
					<i className="fas fa-check"
                                onClick={
                                    () => setTasks(tasks.filter((_, currentIndex) => {
                                      return index != currentIndex}))
                            }></i>
					</div>
				</div>
			))}
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
          onClick={deleting}
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
