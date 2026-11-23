function TaskForm({ onAddTask, editingTask, onUpdateTask, onCancelEdit }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const taskData = {
      title: formData.get("title"),
      category: formData.get("category"),
      date: formData.get("date"),
    };

    if (editingTask) {
      onUpdateTask({
        ...editingTask,
        ...taskData,
      });
    } else {
      const newTask = {
        id: Date.now(),
        ...taskData,
        completed: false,
      };

      onAddTask(newTask);
    }

    event.target.reset();
  }

  return (
    <section className="task-form-section">
      <h2>{editingTask ? "Edit Kegiatan" : "Tambah Kegiatan"}</h2>

      <p>
        {editingTask
          ? "Perbarui informasi kegiatan yang sudah kamu catat."
          : "Catat kegiatan baru yang ingin kamu lakukan."}
      </p>

      <form
        onSubmit={handleSubmit}
        className="task-form"
        key={editingTask?.id ?? "new-task"}
      >
        <div className="form-group">
          <label htmlFor="title">Nama Kegiatan</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Contoh: Mengerjakan tugas React"
            defaultValue={editingTask?.title || ""}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Kategori</label>
          <select
            id="category"
            name="category"
            defaultValue={editingTask?.category || ""}
            required
          >
            <option value="">Pilih kategori</option>
            <option value="Kuliah">Kuliah</option>
            <option value="Pribadi">Pribadi</option>
            <option value="Organisasi">Organisasi</option>
            <option value="Lainnya">Lainnya</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Tanggal Kegiatan</label>
          <input
            type="date"
            id="date"
            name="date"
            defaultValue={editingTask?.date || ""}
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-add">
            {editingTask ? "Simpan Perubahan" : "+ Tambahkan Kegiatan"}
          </button>

          {editingTask && (
            <button type="button" className="btn-cancel" onClick={onCancelEdit}>
              Batal
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default TaskForm;
