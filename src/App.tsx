// import { lazy, Suspense } from "react";
import "./App.css";
import RemoteEditor from "./RemoteEditor";
// const Editor = lazy(() => import("subContainer/Editor"));

function App() {
  return (
    <div>
      <h1>Container App: </h1>
      <RemoteEditor />
      {/* <h2>remote:</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Editor />
      </Suspense> */}
    </div>
  );
}

export default App;
