import { ModeToggle } from "./ToggleTheme";

function Navbar() {
  return (
    <nav className="p-3 xl:py-4 xl:flex justify-between xl:px-20 relative    items-center">
      <div className="brand">
        <h1 className="text-2xl lg:text-3xl py-1 font-bold">
          Social Media Dashboard
        </h1>
        <h3 className="pb-3 text-[rgb(99,104,126)] font-semibold">
          Total Followers : 23,004
        </h3>
        <hr className="xl:hidden" />
      </div>
      <div className="my-3 flex gap-3  justify-between items-center">
        <h2 className="font-semibold text-[rgb(99,104,126)]">DarkMode</h2>
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
