import type { Area, Categoria, Modalidade } from '../data/courses'
import { ArrowLeftIcon, ChevronDownIcon, SearchIcon } from './icons'

interface CourseFiltersProps {
  search: string
  onSearchChange: (value: string) => void
  categoria: Categoria | ''
  onCategoriaChange: (value: Categoria | '') => void
  modalidade: Modalidade | ''
  onModalidadeChange: (value: Modalidade | '') => void
  area: Area | ''
  onAreaChange: (value: Area | '') => void
  categorias: Categoria[]
  modalidades: Modalidade[]
  areas: Area[]
}

export function CourseFilters({
  search,
  onSearchChange,
  categoria,
  onCategoriaChange,
  modalidade,
  onModalidadeChange,
  area,
  onAreaChange,
  categorias,
  modalidades,
  areas,
}: CourseFiltersProps) {
  return (
    <section className="filters">
      <button type="button" className="filters__back" aria-label="Voltar">
        <ArrowLeftIcon />
      </button>

      <h1 className="filters__title">
        Busque pelo curso desejado e acesse todas as informações
      </h1>

      <div className="filters__search">
        <SearchIcon className="filters__search-icon" />
        <input
          type="text"
          placeholder="Busque por um Curso"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          aria-label="Busque por um curso"
        />
      </div>

      <div className="filters__selects">
        <label className="filters__select">
          <select
            value={categoria}
            onChange={(event) => onCategoriaChange(event.target.value as Categoria | '')}
            aria-label="Categoria"
          >
            <option value="">Categoria</option>
            {categorias.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <ChevronDownIcon />
        </label>

        <label className="filters__select">
          <select
            value={modalidade}
            onChange={(event) => onModalidadeChange(event.target.value as Modalidade | '')}
            aria-label="Modalidade"
          >
            <option value="">Modalidade</option>
            {modalidades.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <ChevronDownIcon />
        </label>

        <label className="filters__select">
          <select
            value={area}
            onChange={(event) => onAreaChange(event.target.value as Area | '')}
            aria-label="Área"
          >
            <option value="">Área</option>
            {areas.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <ChevronDownIcon />
        </label>
      </div>
    </section>
  )
}
