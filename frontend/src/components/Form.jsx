import { Link } from 'react-router-dom'

function Form({item, text, action}) {

  return (
    <form onSubmit={action}>
        <div className='mb-4'>
            <label htmlFor="title"></label>
            <input type="text" name="title" id="title" value={item.title}/>
        </div>

        <div className='mb-4'>
            <label htmlFor="description"></label>
            <textarea type="text" rows="5" name="description" id="description">{item.description}</textarea>
        </div>

        <div className='mb-4'>
            <label htmlFor="long_description"></label>
            <textarea type="text" rows="10" name="long_description" id="long_description">{item.long_description}</textarea>
        </div>

        <div className='flex items-center gap-2'>
            <button type='submit' className='btn'>{text}</button>
            <Link to="/" className="link">Cancel</Link>
        </div>
    </form>
  )
}

export default Form