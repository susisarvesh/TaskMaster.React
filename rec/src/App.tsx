import { Button } from "@/components/ui/button"
import Layout from "./Master/Layout"
import TasksPage from "./Master/Task"
import Main from "./Master/Main/Main"

function App() {
  return (
    <div className='w-full '>
      <Layout>
        {<>
        <Main></Main>
        </>}
        </Layout>
    </div>
  )
}

export default App