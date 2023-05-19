import './App.css'
import axios from 'axios'

//fetch the localhost:3000
axios.get('http://localhost:3001/').then((res) => {
  console.log(res.data)
})

function searchByID(event) {
  // fetch the localhost:3000/api/users
  let searchQuery = event.target.value
  axios.get(`http://localhost:3001/api/users${searchQuery}`).then((res) => {
    console.log(res.data)
  })
}

function searchByName(event) {
  // fetch the localhost:3000/api/users
  let searchQuery = event.target.value
  axios.get(`http://localhost:3001/api/users${searchQuery}`).then((res) => {
    console.log(res.data)
  })
}

function App() {
  return (
    <div className="App">
      <h2>Welcome to the Frontend App</h2>

      {/* search bar to search for user by name */}
      {/* connect this to send http get requests to server localhost 30001 */}
      <input
        type="text"
        placeholder="Search for user"
        onChange={searchByName}
      />
      <button>Search</button>
    </div>
  )
}

export default App
