import type { Course } from '../data/courses'
import { ChevronRightIcon, CourseIcon, HeartIcon } from './icons'

interface CourseCardProps {
  course: Course
  favorito: boolean
  onToggleFavorito: (id: string) => void
}

export function CourseCard({ course, favorito, onToggleFavorito }: CourseCardProps) {
  return (
    <article className="course-card">
      <div className="course-card__top">
        <div className="course-card__thumb">
          <CourseIcon iconKey={course.iconKey} className="course-card__thumb-icon" />
        </div>

        <div className="course-card__info">
          <div className="course-card__heading">
            <h2>{course.nome}</h2>
            <button
              type="button"
              className={`course-card__favorite${favorito ? ' is-active' : ''}`}
              onClick={() => onToggleFavorito(course.id)}
              aria-pressed={favorito}
              aria-label={favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
            >
              <HeartIcon filled={favorito} />
            </button>
          </div>

          <div className="course-card__badges">
            <span className="badge badge--solid">{course.categoria}</span>
            {course.modalidades.map((modalidade) => (
              <span key={modalidade} className="badge">
                {modalidade}
              </span>
            ))}
          </div>

          <p className="course-card__meta">
            {course.grau} | {course.duracao}
          </p>
        </div>
      </div>

      <button type="button" className="course-card__cta">
        Ver Mais
        <ChevronRightIcon />
      </button>
    </article>
  )
}
