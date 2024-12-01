import { lazy, Suspense, useEffect } from "react";
const Editor = lazy(() => import("subContainer/Editor"));
import messageBroker from "subContainer/EditorMessageBroker";

export default function RemoteEditor() {
  useEffect(() => {
    console.log("start use effect - host app");

    const subscription = messageBroker
      .subscribeToMessages()
      .subscribe(({ event, callback }: any) => {
        console.log("use effect - host app");

        if (event === "getToken") {
          (async () => {
            const authData = "authenticated";
            callback(authData);
          })();
        }
      });
    console.log("after");
    return () => {
      subscription.unsubscribe();
    };
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
