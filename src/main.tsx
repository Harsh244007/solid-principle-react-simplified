import { render } from "preact";
import { useState } from "preact/hooks";
import { Suspense } from "preact/compat";
import {
  ReactKeys,
  SolidPrinciple1,
  SolidPrinciple2,
  SolidPrinciple3,
  SolidPrinciple4,
  SolidPrinciple5,
  Home,
  Navbar,
  Loading,
} from "./components";
import "./index.css";

const App = () => {
  const [activeComponent, setActiveComponent] = useState<number | null>(null);

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 1:
        return <ReactKeys />;
      case 2:
        return <SolidPrinciple1 />;
      case 3:
        return <SolidPrinciple2 />;
      case 4:
        return <SolidPrinciple3 />;
      case 5:
        return <SolidPrinciple4 />;
      case 6:
        return <SolidPrinciple5 />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Suspense fallback={<Loading/>}>
        <Navbar setActiveComponent={setActiveComponent} />
      </Suspense>
      <main className="py-4 px-6">
        <Suspense fallback={<Loading/>}>
          {renderActiveComponent()}
        </Suspense>
      </main>
    </div>
  );
};

render(<App />, document.body!);
