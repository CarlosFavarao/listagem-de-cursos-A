import type { Course } from '../data/courses'
import { CourseCard } from './CourseCard'

interface CourseGridProps {
  courses: Course[]
  favoritos: Set<string>
  onToggleFavorito: (id: string) => void
}

export function CourseGrid({ courses, favoritos, onToggleFavorito }: CourseGridProps) {
  if (courses.length === 0) {
    return (
      <div className="course-grid__empty">
        <p>Nenhum curso encontrado para os filtros selecionados.</p>
      </div>
    )
  }

  return (
    <div className="course-grid">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          course={course}
          favorito={favoritos.has(course.id)}
          onToggleFavorito={onToggleFavorito}
        />
      ))}
    </div>
  )
}
