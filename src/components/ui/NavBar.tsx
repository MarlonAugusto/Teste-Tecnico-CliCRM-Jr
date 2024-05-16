export default function Navbar() {
  return (
    <nav className="bg-gray-500">
      <div className="mx-auto px-6">
        <div className=" flex h-20 items-center">
            <a href="/" className="flex text-white text-2xl font-medium">
              ClinCRM
            </a>
          <div className="flex flex-1 items-stretch justify-start">
            <div className="ml-6 block">
              <div className="flex space-x-4 text-lg">
                <a href="/" className="text-white hover:bg-gray-700 rounded-md px-3 py-2 font-2xl">
                  Home
                </a>
                <a href="/Grafico" className="text-white hover:bg-gray-700 rounded-md px-3 py-2">
                  Gráficos
                </a>
                <a href="/Transacoes" className="text-white hover:bg-gray-700 rounded-md px-3 py-2">
                  Transações
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
