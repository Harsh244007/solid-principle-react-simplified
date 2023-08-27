import { memo } from "preact/compat";

interface NavbarProps {
  setActiveComponent: (index: number) => void;
}

const Navbar = ({ setActiveComponent }: NavbarProps) => {
  return (
    <nav className="flex gap-2 flex-wrap justify-around  py-2 px-4">
      <button onClick={() => setActiveComponent(1)} className="nav-button">
        React Keys
      </button>
      <button onClick={() => setActiveComponent(2)} className="nav-button">
        Solid Principle 1
      </button>
      <button onClick={() => setActiveComponent(3)} className="nav-button">
        Solid Principle 2
      </button>
      <button onClick={() => setActiveComponent(4)} className="nav-button">
        Solid Principle 3
      </button>
      <button onClick={() => setActiveComponent(5)} className="nav-button">
        Solid Principle 4
      </button>
      <button onClick={() => setActiveComponent(6)} className="nav-button">
        Solid Principle 5
      </button>
    </nav>
  );
};

export default memo(Navbar);
