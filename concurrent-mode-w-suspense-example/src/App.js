import React, { Suspense, useState, useDeferredValue } from "react";
import { wrapPromise } from "./PersonApi";
import { createResource } from "./PersonApi";
import PostResult from "./PostResult";
import ErrorBoundary from "./ErrorBoundary";
import Person from "./Person";
import Num from "./Num";
import { MyButton } from "./MyButton";
import BigPrime from "./BigPrime.jsx";

const initialResource = createResource();

function App() {
  // const [resource, setResource] = useState(() => createResource())
  const [resource, setResource] = useState(initialResource);
  const deferredResource = useDeferredValue(resource, {
    timeoutMs: 5000
  });
  const [n, setN] = useState(10);
  const [postResource, setPostResource] = useState({
    result: {
      read() {
        return null;
      }
    }
  });
  const isStale = deferredResource !== resource;

  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
        <ErrorBoundary>
          <Person resource={resource}></Person>
          <PostResult resource={postResource}></PostResult>
        </ErrorBoundary>
      </Suspense>

      <Suspense fallback={<h2>Number loading...</h2>}>
        <div style={{ color: isStale ? "crimson" : "black" }}>
          <Num resource={deferredResource}></Num>
        </div>
      </Suspense>
      <MyButton onClick={() => setResource(createResource())}>
        Refresh Data
      </MyButton>
      <BigPrime n={n}></BigPrime>
      <input value={"" + n} onChange={e => setN(parseInt(e.target.value))} />

      <button
        onClick={() => {
          const promise = fetch("https://enrdixyyuxes.x.pipedream.net/", {
            method: "POST",
            body: JSON.stringify({ hello: "World" })
          })
            .then(x => x.json())
            .then(res => {
              console.log(res);
              return res;
            });

          setPostResource({ result: wrapPromise(promise) });
        }}
      >
        Post request!
      </button>
    </div>
  );
}

export default App;
