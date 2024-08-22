'use client'

import { useEffect, useState } from "react";

const Contador = () => {
  const [cliques, setCliques] = useState(0)
  const [renderizacao, setRenderizacao] = useState(0)

  useEffect(() => {
    setRenderizacao(renderizacao +1)
  }, [])

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-zinc-200">
      <div className="border rounded-lg bg-zinc-100 px-24 py-12">
        <p>Clikes: {cliques}</p>
        <p>Renderizações: {renderizacao}</p>
        <button
          className="bg-zinc-300 px-4 py-2 rounded-lg mt-4 hover:bg-zinc-400"
          onClick={() => setCliques(cliques + 1)}
          >
          Clicar
        </button>
      </div>
    </main>
  );
}

export default Contador;