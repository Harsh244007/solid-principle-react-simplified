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
      case 2:
        return <ReactKeys />;
      case 3:
        return <SolidPrinciple1 />;
      case 4:
        return <SolidPrinciple2 />;
      case 5:
        return <SolidPrinciple3 />;
      case 6:
        return <SolidPrinciple4 />;
      case 7:
        return <SolidPrinciple5 />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-5">
      <Navbar setActiveComponent={setActiveComponent} />
      <div className="py-4 w-auto overflow-auto px-6 max-w-3xl m-auto">
        <Suspense fallback={<Loading />}>{renderActiveComponent()}</Suspense>
      </div>
      <p>Made by Harsh with ❤️</p>
    </div>
  );
};
render(<App />, document.body);
