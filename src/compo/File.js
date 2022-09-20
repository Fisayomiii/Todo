// import './App.css';
// import { useState, useEffect } from "react";
// function App() {
//   useEffect(() => {
//     if (!localStorage.userName) {
//       setName("Anonymous")
//     }
//     else {
//       setName(localStorage.userName)
//     }
//     if (localStorage.todos) {
//       var smth = JSON.parse(localStorage.getItem('todos'))

//       setList(smth)
//     }
//     else {
//       localStorage.todos = []
//     }
//   }, [])


//   const [New, setNew] = useState('')
//   const [newName, setName] = useState("Anonymous")
//   const [toDo, setList] = useState([])
//   const events = () => {
//     if (New === '') {
//       alert(`You need to add something, ${newName}!`)
//     }
//     else {
// let newList = {
//   New
// }
// setList([...toDo, newList])
// console.log(toDo)
// localStorage.setItem('todos', JSON.stringify([...toDo, newList]))
// var smth = JSON.parse(localStorage.getItem('todos'))
// console.log(smth)
// setNew("")
//     }
//   }
//   const del = (index) => {
//     toDo.splice(index, 1)
//     setList([...toDo])
//     localStorage.setItem('todos', JSON.stringify([...toDo]))
//     alert("Wait! " + newName + ", did you just give up on a task? Oh..oh! Listo hopes it is for a tangible reason though.")
//   }

//   const edit = (index) => {
//     var change = prompt("Change from " + "'" + toDo[index].New + "'" + " to..?")

//     if (change === "") {
//       alert("Error 404")
//     }
//     else {
//       toDo[index].New = change;
//       setList([...toDo])
//       localStorage.setItem('todos', JSON.stringify([...toDo]))

//     }
//   }
//   const done = (index) => {
//     toDo.splice(index, 1)
//     setList([...toDo])
//     localStorage.setItem('todos', JSON.stringify([...toDo]))
//     if (toDo.length === 0) {
//       alert(newName + ", you see? That was a pretty cool and fast one. Tell me if there are other things to keep for you. You can do it! (Always).");
//     }
//     else if (toDo.length === 1) {
//       alert("You have always been an hardworking friend, " + newName + ". You have just a thing left to do! Hooray!")
//     }
//     else {
//       alert(newName + ", you are way close to achievements! You have " + toDo.length + " things left to do.")
//     }

//   }
//   const addUser = () => {
//     var newId = prompt("Listo: Oh! Sorry I referred to you as " + newName + ", What is your name, new friend?")
//     if (newId === "") {
//       alert("Dear you, you do not have a name?")
//     }
//     else {
//       setName(newId)
//       localStorage.userName = newId;
//       alert("Dear " + newId + ", welcome. I am Listo. I will be here to remind you of all you have to do. Okay? Put in what you want to do e.g 'eat', 'go to club', then you have it all here for yourself. Enjoy!")
//     }
//   }
//   return (
//     <div className="bg-neutral-700 h-screen">
//       <div className="bg-neutral-700 h-fit">
//         <center>
//           <div className="p-6 text-2lg italic text-slate-100">
//             Welcome,  {newName}!
//             What's up? 🥰<br /> <br /><button className="p-2 rounded w-60 bg-blue-500" onClick={() => addUser()}>Change name</button>
//             <br /><br />
//             <div className="flex justify-center">
//               <input className="p-3 w-48 h-12 outline-0 bg-slate-100 text-black" placeholder="Task to add?" type="text" onChange={(e) => setNew(e.target.value)} value={New} />

//               <button className="bg-blue-500 p-3 text-center w-12 h-12" onClick={events}>+</button>

//             </div>
//           </div>
//         </center>
//         <div>
//           {toDo.map((val, index) => (
//             <div className="mx-auto p-3 bg-blue-500 w-60 text-center text-lg italic my-1 rounded" key={index}>
//               {index + 1}. I'll like to {val.New}.
//               <br />
//               <button className="p-3 mx-2" onClick={() => del(index)}>❌</button>

//               <button className="p-3 mx-2" onClick={() => edit(index)}>✒</button>

//               <button className="p-3 mx-2" onClick={() => done(index)}>✔</button>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div>
//       </div>
//     </div>
//   );
// }
// export default App;