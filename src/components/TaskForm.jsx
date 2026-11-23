function TaskForm({ onAddTask }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const newTask = {
      id: Date.now(),
      title: formData.get("title"),
      category: formData.get("category"),
      date: formData.get("date"),
      completed: false,
    };

    onAddTask(newTask);
    event.target.reset();
  }

  return (
    <section className="task-form-section">
      <h2>Tambah Kegiatan</h2>
      <p>Catat kegiatan baru yang ingin kamu lakukan.</p>

      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label htmlFor="title">Nama Kegiatan</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Contoh: Mengerjakan tugas React"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Kategori</label>
          <select id="category" name="category" required>
            <option value="">Pilih kategori</option>
            <option value="Kuliah">Kuliah</option>
            <option value="Pribadi">Pribadi</option>
            <option value="Organisasi">Organisasi</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Tanggal Kegiatan</label>
          <input type="date" id="date" name="date" required />
        </div>

        <button type="submit" className="btn-add">
          + Tambahkan Kegiatan
        </button>
      </form>
    </section>
  );
}

export default TaskForm;
