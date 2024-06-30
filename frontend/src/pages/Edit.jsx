import Title from '../components/Title'
import Form from '../components/Form'

function Edit() {

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
        <Title title={"Edit Task"}/>
        <Form text="Edit Task" item={item}/>
    </>
  )
}

export default Edit