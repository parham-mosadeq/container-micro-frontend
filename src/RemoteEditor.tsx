import { lazy, Suspense, useEffect } from "react";
const Editor = lazy(() => import("subContainer/Editor"));
import messageBroker from "subContainer/EditorMessageBroker";

export default function RemoteEditor() {
  useEffect(() => {
    messageBroker
      .subscribeToMessages()
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .subscribe((msg: Record<string, any>) => {
        if (msg.event === "get_token") {
          console.log(msg, "hooorayyy");
          msg.callback(true);
        }
      });
  }, []);

  return (
    <div>
      <h2>remote:</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Editor />
      </Suspense>
    </div>
  );
}
