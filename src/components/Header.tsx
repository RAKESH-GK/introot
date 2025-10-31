export default function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-indigo-600">Introot</h1>
      <nav className="space-x-4">
        <button className="text-gray-700 hover:text-indigo-600">Home</button>
        <button className="text-gray-700 hover:text-indigo-600">About</button>
        <button className="text-gray-700 hover:text-indigo-600">Contact</button>
      </nav>
    </header>
  );
}
