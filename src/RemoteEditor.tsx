import { lazy, Suspense, useEffect } from "react";
import { Observable } from "windowed-observable";
const Editor = lazy(() => import("subContainer/Editor"));

export default function RemoteEditor() {
  const observable = new Observable("auth");

  const handleObserv = (msg: Record<string, any>) => {
    console.log("host app", msg);
    const { event, loginUser } = msg;
    if (event === "getToken") {
      loginUser("gotToken");
    } else {
      loginUser("notAllowed");
    }
  };

  useEffect(() => {
    observable.subscribe(handleObserv);

    return () => observable.unsubscribe(handleObserv);
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
