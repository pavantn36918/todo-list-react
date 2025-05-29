import { useState } from 'react'
import './App.css';

function App() {


  const [task, settask] = useState("");
  const [data, setData] = useState([]);

  function getInput(event) {
    console.log(event.target.value);
    settask(event.target.value);
  }

  function getData() {

    if (task === "") {
      alert("Please Enter the task");
    }
    else {
      const newTask = { text: task, completed: false };
      let store = [...data, newTask];
      setData(store);
      settask("");
    }
  }

  function deletetask(index) {
    let changedata = data.filter((elem, i) => {
      return i !== index
    })
    setData(changedata);
  }

  const toggleTask = (id) => {
    const updatedTasks = data.map((tas, index) => {

      if (index === id) {
        return { ...tas, completed: !tas.completed };
      }
      return tas;
    });

    setData(updatedTasks);
  };


  return (
    <div className='body'>
      <h1>TASK MANAGEMENT APPLICATION </h1>
      <hr className='line' />
      <div className='container'>
        <input type="text" placeholder='Enter the task' value={task} onChange={getInput} />
        <button className='addtask' onClick={getData}>ADD TASK</button>
      </div>
      <hr className='line' />
      <div className='taskslist'>
        <h2>LISTS OF TASKS</h2>
        {data.map((tas, index) => (
          <div className="taskcol">
            <div className="box" key={index}
              style={{
                "background-color": tas.completed ? "#0daf79" : "aquamarine",
              }}>
              <b> {index + 1}. {tas.text} </b> <input type="checkbox" checked={tas.completed} onChange={() => toggleTask(index)} />
              <button onClick={() => deletetask(index)}>Delete</button>
            </div>


          </div>

        ))}

      </div>
    </div >
  )

}



export default App;
