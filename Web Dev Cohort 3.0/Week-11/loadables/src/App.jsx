import './App.css'
import { RecoilRoot, useRecoilStateLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';

function App() {
  return <RecoilRoot>
    <Todo id={1}/>
    <Todo id={2} />
    <Todo id={3} />
  </RecoilRoot>
}

function Todo({id}) {
  // Suspense,Error Boundary
   const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));

   console.log('todo: ', todo);
  //  todo = {
  //   contents : "",
  //   state : ''
  //  }
  
   if (todo.state === "loading") {
      return <div>loading</div>
   }
   if(todo.state === 'hasError'){
      return <div>Error fetching todo from server</div>
   }
   
   return (
    <>
      {todo.contents.title}
      {todo.contents.description}
      <br />
    </>
  )
}

export default App