import { ChildFC } from './Child';

const Parent = () => {
  return (
    <ChildFC color="red" onClick={() => { console.log("clicked") }}>
      aslkdjaskdj
    </ChildFC>
  )
}

export default Parent;