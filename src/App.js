import React, {useState} from "react";

function App() {
  const [task, setTask]= useState('')
  const [newTask, setNewTask] = useState('')
  const [arr, setArr] = useState([
    {id:1, title: 'vahe'},
    {id:2, title: 'tiko'}
  ])

  function add () {
    setArr([
      ...arr,
      {id: Math.random(), title: task}
    ])
  }

  function onDelete(id){
    setArr(arr.filter((item)=> id !== item.id))
  }

  function onEdit(id){
    setArr(arr.map((item)=> {
      if(item.id === id){
        item.title = newTask
      }
      return item
    }))

  }
  return (
    <div>
      <p>todo list</p>
      <input onChange={(e)=>setTask(e.target.value)}/>
      <button onClick={add}>add</button>
      {
        arr.map((item)=>(
          <div key={item.id}>
            <input onChange={(e)=>setNewTask(e.target.value)} defaultValue={item.title}/>
            <button onClick={()=>onDelete(item.id)}>delete</button>
            <button onClick={()=>onEdit(item.id)}>edit</button>
          </div>
        ))
      }
      
    </div>
  );
}

export default App;
