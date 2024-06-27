import Title from '../components/Title'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function Task() {
    const {id} = useParams();

    const item = {
          "id": 1,
          "title": "tarefa 1",
          "description": "descrição da tarefa 1",
          "long_description": "descrição da tarefa 1",
          "created_at": "25/06/2024",
          "updated_at": "27/06/2024",
          "status": true
      }

  return (
    <>
        <Title title={item.title}/>
        <div className='mb-4'>
          <Link to='/' className='link' >Go back to task list!</Link>
        </div>

        <p className="mb-4 text-slate-700">{item.title}</p>

        {item.long_description && (<p className="mb-4 text-slate-700">{item.long_description}</p>)}

        <p className="mb-4 text-sm text-slate-500">Created {item.created_at} | Updated {item.updated_at}</p>

        <p className="mb-4">
          {item.status ? 
          ( <span className="font-medium text-green-500">Completed!</span> ) 
          : 
          ( <span className="font-medium text-green-500">Not Completed!</span> )}
        </p>
    </>
  )
}

export default Task