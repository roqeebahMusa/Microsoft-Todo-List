// import styled from "@emotion/styled"
// import { useState } from "react"
// import {DropResult, DragDropContext, Draggable, Droppable} from "react-beautiful-dnd"
// const Container = styled.div`
//   width: 90%;
//   height: 90vh;
//   background-color: tan;
// `

// const listItems = [
//   {
//     id: "1",
//     name: "Study Spanish"
//   },

//   {
//     id: "2",
//     name: "Workout"
//   },

//   {
//     id: "3",
//     name: "Grocery Shop"
//   },

//   {
//     id: "4",
//     name: "Sleep"
//   },
// ]

// const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
//   padding: 10,
//   margin: `0 50px 15px 50px`,
//   background: isDragging ? "#4a2975" : "white",
//   color: isDragging ? "white" : "black",
//   border: `1px solid black`,
//   fontSize: `20px`,
//   borderRadius: `5px`,

//   ...draggableStyle 
// })

// const BoardTwo = () => {

// const [todo, setTodo] = useState(listItems);

// const onDragEnd = (result: DropResult) => {
//   const {source, destination} = result
//   if(!destination) return

//   const items = Array.from(todo)
//   const [newOrder] = items.splice(source.index, 1)
//   items.splice(destination.index, 0, newOrder)

//   setTodo(items);
// }


//   return (
//     <Container>
//       <h2>Board Two</h2>
//       <DragDropContext onDragEnd={onDragEnd}>
//         <Droppable droppableId="todo">
//           {(provided) => (
//             <div className="todo" {...provided.droppableProps} ref={provided.innerRef}>
//               {
//                 todo?.map(({id, name}, index) => {
//                   return (
//                     <Draggable key={id} draggableId={id} index={index}>
//                       {
//                         (provided, snapshot) => (
//                           <div ref={provided.innerRef}
//                           {...provided.draggableProps}
//                           {...provided.dragHandleProps}
//                 style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}>
//                 {name}
//                 </div>                        )
//                       }
//                     </Draggable>
//                   )
//                 })
//               }
//             </div>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </Container>
//   )
// }

// export default BoardTwo