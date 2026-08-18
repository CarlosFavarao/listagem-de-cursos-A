import { useMemo, useState } from 'react'
import './App.css'
import { CourseFilters } from './components/CourseFilters'
import { CourseGrid } from './components/CourseGrid'
import { Header } from './components/Header'
import type { Area, Categoria, Modalidade } from './data/courses'
import { areas, categorias, courses, modalidades } from './data/courses'

function App() {
  const [search, setSearch] = useState('')
  const [categoria, setCategoria] = useState<Categoria | ''>('')
  const [modalidade, setModalidade] = useState<Modalidade | ''>('')
  const [area, setArea] = useState<Area | ''>('')
  const [favoritos, setFavoritos] = useState<Set<string>>(new Set())

  const cursosFiltrados = useMemo(() => {
    const termo = search.trim().toLowerCase()

    return courses.filter((course) => {
      const combinaBusca = termo === '' || course.nome.toLowerCase().includes(termo)
      const combinaCategoria = categoria === '' || course.categoria === categoria
      const combinaModalidade = modalidade === '' || course.modalidades.includes(modalidade)
      const combinaArea = area === '' || course.area === area

      return combinaBusca && combinaCategoria && combinaModalidade && combinaArea
    })
  }, [search, categoria, modalidade, area])

  function handleToggleFavorito(id: string) {
    setFavoritos((atual) => {
      const proximo = new Set(atual)
      if (proximo.has(id)) {
        proximo.delete(id)
      } else {
        proximo.add(id)
      }
      return proximo
    })
  }

  return (
    <div className="page">
      <Header />

      <main>
        <CourseFilters
          search={search}
          onSearchChange={setSearch}
          categoria={categoria}
          onCategoriaChange={setCategoria}
          modalidade={modalidade}
          onModalidadeChange={setModalidade}
          area={area}
          onAreaChange={setArea}
          categorias={categorias}
          modalidades={modalidades}
          areas={areas}
        />

        <section className="results">
          <CourseGrid
            courses={cursosFiltrados}
            favoritos={favoritos}
            onToggleFavorito={handleToggleFavorito}
          />
        </section>
      </main>
    </div>
  )
}

export default App
