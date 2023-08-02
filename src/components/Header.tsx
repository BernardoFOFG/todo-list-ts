export const Header = () => {
  return (
    <header className="flex gap-3 justify-center items-center bg-gray-700 h-52 w-full">
     <img src="/rocket.svg" alt="Rocket Logo" className="mt-2" />
      <h1 className="text-3xl font-bold">
        <span className="text-blue">to</span>
        <span className="text-purpleDark">do</span>
      </h1>
    </header>
  );
};
