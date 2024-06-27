import React from 'react'
import { Link } from 'react-router-dom'

function TaskList() {

    const list = [
        {
            "id": 1,
            "title": "tarefa 1",
            "status": true
        },
        {
            "id": 2,
            "title": "tarefa 2",
            "status": false
        },
    ]

  return (
    <ul>
        {list ? (list.map((item) => (
            <li key={item.id}>
                <Link to={`/task/${item.id}`} className={item.status && 'line-through'} >{item.title}</Link>
            </li>
        ))) : (<li>There are no tasks!</li>)}
    </ul>
  )
}

export default TaskList