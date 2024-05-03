import ReactDOM from "react-dom/client";
import './index.css'

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
]

export default function App() {
  return (
    <div>
      {notes.map(note => (
        <div hey={note.id}>
          <p>{note.content}</p>
      </div>
      ))}
    </div>
  )
}







  ReactDOM.createRoot(document.getElementById('root')).render(  
    <App  />
  );


