import { memo } from "preact/compat";

const ReactKeys = () => {
  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Understanding React Keys</h2>
      <div className="flex flex-col gap-3">
        <p>Let's explore a potential issue in the following code:</p>
        <p>We have a simple counter app that adds count to a name.</p>
        <div className="overflow-scroll">
          <pre className="p-2 rounded">
          {`import React, { useState } from 'react';`}
          <br />
          {`import Counter from './Counter';`}
          <br />
          <br />
          {`export default function App() {`}
          <br />
          {`  const [isHarsh, setIsHarsh] = useState(true);`}
          <br />
          <br />
          {`  return (`}
          <br />
          {`    <div>`}
          <br />
          {`      {isHarsh ? (`}
          <br />
          {`        <Counter name="Harsh" />`}
          <br />
          {`      ) : (`}
          <br />
          {`        <Counter name="Patel" />`}
          <br />
          {`      )}`}
          <br />
          {`      <button onClick={() => setIsHarsh((prevIsHarsh) => !prevIsHarsh)}>`}
          <br />
          {`        Toggle`}
          <br />
          {`      </button>`}
          <br />
          {`    </div>`}
          <br />
          {`  );`}
          <br />
          {`}`}
        </pre>
          </div>
        <p>
          In this app, when you increase the count for "Harsh" and then toggle
          to "Patel," you will notice that the count remains the same for First example below.
          This is an unexpected behavior.
        </p>
        <p>
          React re-renders components when something inside them changes, except
          for props. React doesn't automatically re-render a component if only
          the props change. This is where "keys" come into play.
        </p>
        <p>
          "Keys" help React identify that two components with different keys are
          different instances, even if they look similar. By providing unique
          keys, we ensure that React properly handles component updates and
          re-renders. See below second example
        </p>
        <p>
          I've provided an example below using a counter. However, this issue
          becomes even more critical when dealing with other elements specially input elements.
        </p>
        <section className="w-full h-72 flex flex-col justify-center items-center">
          <iframe
            src={
              window.location.href.includes("https")
                ? "https://react-keys-example.vercel.app/"
                : "http://react-keys-example.vercel.app/"
            }
            className="w-full bg-teal-car h-72 border-none"
            title="Harsh Car"
          />
        </section>
      </div>
    </>
  );
};

export default memo(ReactKeys);
