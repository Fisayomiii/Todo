import React, { useEffect, useState } from 'react'
import celebration from '../src/images/celebration.svg'
// import autoAnimate from '@formkit/auto-animate'
function App() {
  const [loading, setloading] = useState(true)
  // errormessageusestate
  const [err, seterr] = useState()
  const [newtodo, setnewtodo] = useState("")
  const [list, setList] = useState([])
  const [display, setdisplay] = useState(true)

  useEffect(() => {
    setloading(false)
  }, [])

  // adding
  const addtodo = () => {
    if (newtodo === '') {
      seterr('Input field is required!')
    }
    else {
      setdisplay(false)
      let newList = {
        newtodo
      }
      setList([...list, newList])
      console.log(list)
      // localStorage.setItem('todos', JSON.stringify([...list, newList]))
      // var variablelist = JSON.parse(localStorage.getItem('todos'))
      // console.log(variablelist)
      setnewtodo("")
    }
  }

  // delete
  const del = (index) => {
    setdisplay(true)
    list.splice(index, 1)
    setList([...list])
    // localStorage.removeItem('todos', JSON.stringify([...list]))
  }

  const edit = (index) => {
    var edit = prompt("edit from " + "" + list[index].newtodo + "" + " to..?")

    if (edit === "") {
      alert("the field is required")
    }
    else {
      list[index].newtodo = edit;
      setList([...list])
      // localStorage.setItem('todos', JSON.stringify([...list]))
    }
  }

  return (
    <>
      {loading ?
        <div class="loader-wrapper">
          <div class="progress-loader">
            <div class="progress"></div>
          </div>
        </div>
        :
        <main id="todolist">
          <h1>
            Todo
            <span>Get things done, One item at a time.</span>
          </h1>

          {display ?
            <div className='ifelsedisplay'>
              <img src={celebration} height={80} alt="" />
              <p>You have no todo's , Time to Chill <br /> Or you could add a todo.</p>
            </div> :

            <ul>
              {list.map((val, index) => (
                <li key={val} >
                  <span class="label" key={index}>
                    {index + 1}. {val.newtodo}</span>
                  <div class="actions">
                    <button class="btn-picto" type="button"><i class='bx bxs-edit-alt' onClick={() => edit(index)}></i></button>
                    <button class="btn-picto" type="button">
                      <lord-icon src="https://cdn.lordicon.com/qsloqzpf.json" trigger="morph" colors="primary:#4d4d4d" state="morph-fill" style={{ width: "25px", height: "30px" }} onClick={() => del(index)}></lord-icon>
                    </button>
                  </div>
                </li>
              ))}
            </ul>}

          <div className='form'>
            <label for="newitem" className='newitem'>Add a todo</label>
            <input type="text" placeholder='Take the garbage out' value={newtodo} onChange={(e) => setnewtodo(e.target.value)} />
            <button type="submit" onClick={addtodo}><i class='bx bx-plus'></i></button>
          </div><br />
          <div className='text-danger'>{err}</div>
        </main>}
    </>
  )
}

export default App

















// import React, { useState } from 'react'

// function App() {
//   // errormessageusestate
//   const [err, seterr] = useState()
//   //
//   const [newtodo, setnewtodo] = useState("")
//   // const [list, setList] = useState([])
//   const addtodo = () => {
//     if (newtodo === '') {
//       seterr('Input field is required!')
//     }
//     else {
//     }
//   }
//   return (
//     <>
//       <main id="todolist">
//         <h1>
//           Todo
//           <span>Get things done, One item at a time.</span>
//         </h1>

//         <ul>
//           <li >
//             <span class="label"></span>
//             <div class="actions">
//               <button class="btn-picto" type="button">
//                 <lord-icon src="https://cdn.lordicon.com/qsloqzpf.json" trigger="morph" colors="primary:#ffffff" state="morph-fill" style={{ width: "25px", height: "30px" }}></lord-icon>
//               </button>
//             </div>
//           </li>
//         </ul>

//         <div className='form'>
//           <label for="newitem" className='newitem'>Add to the list of todos</label>
//           <input type="text" placeholder='Take the garbage out' value={newtodo} onChange={(e) => setnewtodo(e.target.value)} />
//           <button type="submit" onClick={addtodo}><i class='bx bx-plus'></i></button>
//         </div><br />
//         <div className='text-danger transtion'>{err}</div>
//       </main>
//     </>
//   )
// }

// export default App