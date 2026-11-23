function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="navbar-icon">A</div>
        <span>AktivitasKu</span>
      </div>

      <div className="navbar-menu">
        <a href="#beranda" className="nav-link active">
          Beranda
        </a>
        <a href="#kegiatan" className="nav-link">
          Kegiatan
        </a>
        <a href="#tentang" className="nav-link">
          Tentang
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
