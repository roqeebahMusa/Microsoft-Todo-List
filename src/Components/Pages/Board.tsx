import styled from "@emotion/styled"
import { useState } from "react";
// import { DragDropContext, DropResult} from "react-beautiful-dnd"


const Column = styled.div<{isDragging: any}>`
  border: 1px solid #6CA6C1;
  height: 500px;
  width: 300px;
  padding: 10px;
  margin-right: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;
  background-color: ${(props) => (props?.isDragging ? "#87B6CC" : "")};
  transition: background-color 1s;
` 

const Title = styled.div``

const Content = styled.div`` 


const Card = styled.div<{isDragging: any}>`
 flex: 1;
 padding: 10px;
 background-color: #6CA6C1;
 /* width: 100%; */
 min-height: 90px;
 color: white;
 border-radius: 3px;
 margin-bottom: 10px;
 transition: all 0.3s;
 cursor: ${(props) => (props?.isDragging ? "grab" : "")};
`

const Hold = styled.div`
  display: flex;
  margin-top: 30px;
`;

const Scales = styled.div`
  width: 80%;
  height: 30%;


  button {
      width: 25%;
      height: 70px;
      border: 0;
      border-radius: 5px;
      background-color: #6CA6C1;
      color: white;
      font-size: 18px;
    }
`

const Input = styled.input`
  width: 40%;
  height: 70px;
  border-radius: 5px;
  border: 2px solid #6CA6C1;
  outline-color: #56cbf9;
  padding-left: 20px;
`

const TextsField = styled.div`
  display: flex;
  gap: 10px;
  width: 90%;
  align-items: center;
`

type Status = "TODO" | "IN-PROGRESS" | "COMPLETED";

const Board = () => {

  const ColumnStatus: Status[] = ["TODO", "IN-PROGRESS", "COMPLETED"];


  const [data, setData] = useState([
    {
			id: 1,
			title: "signup page ",
			status: "TODO",
		},

    {
			id: 2,
			title: "signup page ",
			status: "TODO",
		},

    {
			id: 2,
			title: "signup page ",
			status: "TODO",
		},

  ]);

  // const Ratings = {
  //   todo: {
  //     id: 1,
  //     title: ['item 1', 'item 2', 'item 3'] 
  //   },
  //   progress: {
  //     id: 2,
  //     title: []
  //   },
  //   completed: {
  //     id: 3,
  //     title: []
  //   }

  // }


  // const [columns, setColumns] = useState(Ratings);

  // const onDragEnd = ({source, destination} : DropResult) => {
  //   if (destination === undefined || destination === null) return null

  //   if (
  //     source.droppableId === destination.droppableId && destination.index === source.index
  //   )
  //     return null

  //     const start = columns[source.droppableId]
  //     const end = columns[destination.droppableId]

  //     if (start === end) {
  //       const newList = start.list.filter(
  //         (id: number) => id !== source.index
  //       );

  //       newList.splice(destination.index, 0, start.list[source.index]);

  //       const newCol = {
  //         id: start.id,
  //         list: newList
  //       };

  //       setColumns(state => ({...state, [newCol.id]: newCol }))
  //       return null
  //     } else {
  //       const newStartList = start.list.filter(
  //         (id: number) => id !== source.index
  //       )

  //       const newStartCol = {
  //         id: start.id,
  //         list: newStartList
  //       }
        
  //       const newEndList = end.list

  //       newEndList.splice(destination.index, 0, start.list [source.index])

  //       const newEndCol = {
  //         id: end.id,
  //         list: newEndList
  //       };

  //       setColumns(state => ({
  //         ...state,
  //         [newStartCol.id]: newStartCol,
  //         [newEndCol.id]: newEndCol
  //       }))
  //       return null
  //     }
  // }



  const [isDragging, setIsDragging] = useState(null);

      const HandleOnDrop = (e) => {
        e.preventDefault();
      };

      const HandleUpdateOnDrop = (id: number, status: Status) => {
        const card = data.find((el) => el.id === id);

        if (card && card.status !== status) {
          card.status = status;

          if (Array.isArray(data)) {
            setData((prev) => [card, ...prev.filter((el) => el.id !== id)])
          }
        
     }

        console.log(card);
      }



  return (
    <div>
     <Scales>
     <h3>Board</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem inventore corporis, excepturi minus molestiae veritatis ea a repellendus, dolor perspiciatis consectetur tenetur ullam quo rerum necessitatibus reiciendis quae incidunt sint.</p>

      <TextsField>
          <Input
          required placeholder="Add a Todo"/>

      <button>Add</button>
      </TextsField>
    
     </Scales>

    <Hold>
      
      {
        ColumnStatus?.map((props) => (
          <div>
        <Title>{props}</Title>

         


    <Column
   
      isDragging={isDragging === props}
    
      onDrop={(e) => {
        HandleUpdateOnDrop(+e.dataTransfer.getData("draggable"), props);
        setIsDragging(null);
      }}  
        onDragOver={HandleOnDrop}>


        {
          data?.map((item) => (
            <div>
                {
                  item.status === props ? (
                    <Card 
                      isDragging={true}
                    onDragStart={(e) => {
                      e.dataTransfer.setData("draggable", `${item.id}`);
                      setIsDragging(props);

                      console.log(item.id);
                    }}
                  draggable>
                    <Content>{item.title}</Content>
          
                  </Card>
                  ) : null}
            </div>
    ))
  }

    </Column>
     
      </div>
        ))}
    
    </Hold>


    </div>
  )
}

export default Board