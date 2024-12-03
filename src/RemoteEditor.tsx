import { lazy, Suspense, useEffect, useState } from "react";
const Editor = lazy(() => import("subContainer/Editor"));
import messageBroker from "subContainer/NewMb";

export default function RemoteEditor() {
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const setupSubscription = async () => {
      const unsubscribe = await messageBroker.subscribe((msg) => {
        console.log("Inside subscription:", msg);
      });
      return () => unsubscribe();
    };

    setupSubscription();
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
