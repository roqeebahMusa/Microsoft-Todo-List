import styled from "@emotion/styled"
import {useState, useEffect} from "react"
import {useRef} from "react"
import audi from "../../assets/audi.mp3"
import {WiDaySunny} from "react-icons/wi"
import {SlOptions} from "react-icons/sl"
import {AiFillDelete} from 'react-icons/ai'


const Container = styled.div`
  width: 100%;
  
`

const Input = styled.input`
  width: 50%;
  height: 70px;
  border-radius: 5px;
  border: 2px solid #6CA6C1;
  outline-color: #56cbf9;
`
const Holder = styled.div`
  height: 80px;
  display: flex;
  gap: 30px;
  align-items: center;

    button {
      width: 17%;
      height: 70px;
      border: 0;
      border-radius: 5px;
      background-color: #6CA6C1;
      color: white;
      font-size: 18px;
    }
`
const RadioInp = styled.input``;

const Call = styled.div`
	display: flex;
	justify-content: space-between;
	gap: calc();
	align-items: center;
	min-height: 100%;
`
const Box = styled.div`
  display: flex;
  align-items: center;
  background-color: #6CA6C1;
  padding: 25px;
  border-radius: 5px;
  width: 70%;
  border: 2px solid white;
  height: 50%;
`
const IconText = styled.div`
	width: 25%;
	height: 70%;
	display: flex;
	justify-content: flex-start;
	gap: 15px;
	align-items: center;
	font-size: 30px;
	color: #6CA6C1;

	p {
		font-size: 25px;
		color: #6CA6C1;
	}
`

const Del = styled.div`
  position: absolute;
  left: 1100px;
  color: red;
  font-size: 15px;
  cursor: pointer;
`

const MyDay = () => {

  const myRef = useRef(null);
	const [title, setTitle] = useState("");
	const [taskData, setTaskData] = useState([
		{
			title: "fetch water",
			id: 1,
			status: false,
		},

		{
			title: "Go to the market",
			id: 2,
			status: false,
		},

		{
			title: "laundary",
			id: 3,
			status: false,
		},
	]);

	const HandleChecked = (id: number) => {
		const iterate = taskData?.map((el) => {
			return el.id === id
				? {
						...el,
						status: !el.status,
           }
				: el;
		});

		taskData?.some((el) => {
			if (el.status === true) {
				myRef?.current?.play();
			}
		});

		// taskData?.map((el) => {
		// if (el.status === true) {
		// myRef?.current?.play();
		// }
		// });

		setTaskData(iterate);
	};

        const AddTodo = () => {
          const newData = [
            ...taskData,
            {
              id: taskData.length + 1,
              title: title,
              status: false,
            },
          ];


        localStorage.setItem("myDay", JSON.stringify(newData));
        setTaskData(newData);

        };

        

        useEffect(() => {
          const retrieveMyDay = JSON.parse(localStorage.getItem("myDay") || "");

            setTaskData(retrieveMyDay);
        }, []);


		const RemoveUser = (id: number) => {
			const deleting = taskData.filter((el) => el.id !== id);

			setTaskData(deleting);
		}


  return (
    <Container>
		<IconText>
		<WiDaySunny />
		<p>Important</p>
		<SlOptions />
		</IconText>

         <Holder>
         <Input onChange={(e) => {
        setTitle(e.target.value)
      }} />
      <button onClick={AddTodo}>Add</button>
         </Holder>
      <br />
      <br />

      <div>All Task</div>
			{taskData?.map((props) => (
				<Call key={props.id}>
					{props.status === false ? (
						<Box>
							<RadioInp
								onClick={() => {
									HandleChecked(props.id);
								}}
								type='radio'
							/>
							<span>{props.title}</span>

							<Del 
						onClick={() => {
								RemoveUser(props.id)
							}}>
								{" "}
						<AiFillDelete />
                         </Del>

						</Box>
					) : null}
				</Call>
			))}

      <br />
      <br />
      <br />


      <div>Completed</div>
    {taskData?.map((props) => (
				<div key={props.id}>
					{props.status === true ? (
						<Box>
							<RadioInp
								onClick={() => {
									HandleChecked(props.id);
								}}
								checked={true}
								type='radio'
							/>
							<span
								style={{
									textDecoration: "line-through",
								}}>
								{props.title}
							</span>

						<Del 
						onClick={() => {
								RemoveUser(props.id)
							}}>
								{" "}
						<AiFillDelete />
                         </Del>


						</Box>
					) : null}
				</div>
			))}

			<audio ref={myRef} src={audi} />




    </Container>
  )
}

export default MyDay