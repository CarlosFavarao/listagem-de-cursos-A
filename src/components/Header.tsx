import { BellIcon, CapLogoIcon, HeartIcon, UserIcon } from './icons'

export function Header() {
  return (
    <header className="header">
      <div className="header__brand">
        <CapLogoIcon className="header__logo-icon" />
        <span className="header__logo-text">SAUF</span>
      </div>

      <nav className="header__nav" aria-label="Navegação principal">
        <a href="#sobre-nos">Sobre Nós</a>
        <a href="#eventos">Eventos</a>
        <a href="#parcerias">Parcerias</a>
      </nav>

      <div className="header__actions">
        <button type="button" className="header__icon-btn" aria-label="Notificações">
          <BellIcon className="header__icon" />
          <span className="header__icon-dot" aria-hidden="true" />
        </button>
        <button type="button" className="header__icon-btn" aria-label="Cursos favoritos">
          <HeartIcon className="header__icon" />
        </button>
        <button type="button" className="header__icon-btn" aria-label="Minha conta">
          <UserIcon className="header__icon" />
        </button>
      </div>
    </header>
  )
}
