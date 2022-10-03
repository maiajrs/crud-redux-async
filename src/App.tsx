import "./App.css";
import { AddPostForm } from "./fetures/posts/AddPostForm";
import { PostList } from "./fetures/posts/PostList";

function App() {

  return (
    <main className="App">
      <h1>Blog posts:</h1>
      <AddPostForm />
      <PostList />
    </main>
  )
}

export default App
