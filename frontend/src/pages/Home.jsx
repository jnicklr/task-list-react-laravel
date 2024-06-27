import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import TaskList from '../components/TaskList'

function Home() {
  return (
    <>
        <Title title={"List of Tasks"}/>
        <Navbar>
          <Link to='/task/create' className='font-medium text-gray-700 underline decoration-pink-500'>Add Task</Link>
        </Navbar>
        <TaskList/>
    </>
  )
}

export default Home