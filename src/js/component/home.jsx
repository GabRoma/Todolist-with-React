import React, { useState } from "react";

const Home = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    if (input.length === 0) {
      alert("Please add a task");
    } else {
      setTasks(tasks.concat([input]));
	  setInput("");
    }
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
        <form className="d-flex" role="input">
          <input
            className="form-control me-2"
            type="text"
			value={input}
            placeholder="Add Task"
            aria-label="Input"
            onChange={handleInput}
          />
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={handleClick}
          >
            +
          </button>
        </form>
        <div>
			{tasks.map((item, index) => (
				<div className="row d-flex p-1 mt-2 border border-light rounded">
					<div className="col-6">{item}{""}</div>
					<div className="col-6 text-end">
					<i class="fas fa-check"
                                onClick={
                                    () => setTasks(tasks.filter((divElem,currentIndex) => index != currentIndex))
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
