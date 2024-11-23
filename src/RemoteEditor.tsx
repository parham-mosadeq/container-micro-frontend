import { lazy, Suspense } from "react";
const Editor = lazy(() => import("subContainer/Editor"));

export default function RemoteEditor() {
  return (
    <div>
      <h2>remote:</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Editor />
      </Suspense>
    </div>
  );
}
