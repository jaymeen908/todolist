"use client"
import Input from 'postcss/lib/input'
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [MainTask, setMainTask] = useState([])

  const SubmitHandler = (e)=>{
    e.preventDefault()
    setMainTask([...MainTask, { title, desc }]);
    settitle("")
    setdesc("")
    console.log(MainTask)
  };

  const deleteHandler = (i)=>{
    let copyTask = [...MainTask]
    copyTask.splice(i,1)
    setMainTask(copyTask)

  }

  let renderTask = <h2 className=' text-center text-4xl font-extrabold items-center justify-between'>No Task Available</h2>

  if(MainTask.length>0) {

    renderTask = MainTask.map((t,i)=>{
      return (
        <li key={i} className='flex mb-5 justify-between items-center'>
          <div className='flex items-center justify-between mb-5 w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-lg font-medium'>{t.desc}</h6>      
          </div>
          <button 
          onClick={()=>{
            deleteHandler(i)}
          }
          className='bg-red-400 text-white px-4 font-bold rounded-lg py-2'>Delete</button>
        </li>
        );
    });

  }



   
  return (
    <>
    <h1 className='bg-black p-5 text-5xl font-bold text-center text-white'>Jaymeen's Todo List</h1>
    <form onSubmit={SubmitHandler}>
      <input type="text" className='
       border-zinc-800 border-4 m-5 px-4 py-2 text-2xl'
      placeholder="Enter Title Here"
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />
    
      <input type="text" className='
      px-4 py-2 text-2xl border-4 border-zinc-800 m-5'
      placeholder="Enter Description Here"
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      />
    
      <button className='bg-black px-4 py-2 text-2xl font-bold rounded-md text-white'>Add Task</button>

    </form>

    <hr  />
    <div className='p-8 bg-slate-200'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>  
  )
}

export default page