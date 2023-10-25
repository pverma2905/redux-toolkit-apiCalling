import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData } from './feature/gitUserSlice';
function App() {
  const datas = useSelector(state => state.app);
  // console.log("state", datas)
  const dispatch = useDispatch();

  if (datas.error != null) {
    return <h2>{data.error}</h2>
  }

  if (datas.loading) {
    return (<h2>Loading...</h2>)
  } else {
    // console.log("usersss", datas)
    if (datas.users.message) {
      return (<h2>Something Went Wrong..</h2>);
    } else {
      return (
        <>
          <button onClick={() => dispatch(getAllData())}>Get Github User</button>
          {datas.users.map((ele) => (
            <li key={ele.id}>{ele.login}</li>
          ))}

        </>
      )
    }

  }

}

export default App
