function TaskList({
  tasks,
  onToggleTask,
  onDeleteTask,
  searchTerm,
  onSearchChange,
  filterStatus,
  onFilterChange,
}) {
  return (
    <section className="task-list-section" id="kegiatan">
      <div className="section-heading">
        <div>
          <h2>Daftar Kegiatan</h2>
          <p>Kelola semua kegiatan yang sudah kamu catat.</p>
        </div>
      </div>

      <div className="task-tools">
        <input
          type="text"
          className="search-input"
          placeholder="Cari kegiatan..."
          aria-label="Cari kegiatan berdasarkan nama"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
        />

        <select
          className="filter-select"
          aria-label="Filter kegiatan berdasarkan status"
          value={filterStatus}
          onChange={(event) => onFilterChange(event.target.value)}
        >
          <option value="Semua">Semua Kegiatan</option>
          <option value="Belum Selesai">Belum Selesai</option>
          <option value="Selesai">Selesai</option>
        </select>
      </div>

      <div className="task-list">
        {tasks.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📝</div>

            <h3>
              {searchTerm || filterStatus !== "Semua"
                ? "Kegiatan Tidak Ditemukan"
                : "Belum Ada Kegiatan"}
            </h3>

            <p>
              {searchTerm || filterStatus !== "Semua"
                ? "Coba ubah kata kunci pencarian atau filter kegiatan."
                : "Tambahkan kegiatan pertamamu melalui formulir di atas."}
            </p>
          </div>
        ) : (
          tasks.map((task) => (
            <div
              className={`task-card ${task.completed ? "completed" : ""}`}
              key={task.id}
            >
              <div className="task-content">
                <h3>{task.title}</h3>

                <div className="task-meta">
                  <span className="task-category">{task.category}</span>

                  <span className="task-date">📅 {task.date}</span>
                </div>

                <span className="task-status">
                  {task.completed ? "Selesai" : "Belum Selesai"}
                </span>
              </div>

              <div className="task-actions">
                <button
                  className="btn-toggle"
                  aria-label={`${task.completed ? "Batalkan penyelesaian" : "Selesaikan"} kegiatan ${task.title}`}
                  onClick={() => onToggleTask(task.id)}
                >
                  {task.completed ? "Batalkan" : "Selesaikan"}
                </button>

                <button
                  className="btn-delete"
                  aria-label={`Hapus kegiatan ${task.title}`}
                  onClick={() => onDeleteTask(task.id)}
                >
                  Hapus
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default TaskList;
