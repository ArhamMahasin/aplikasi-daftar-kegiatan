function Summary({ total, pending, completed }) {
  return (
    <section className="summary">
      <div className="summary-card">
        <div className="summary-icon total-icon">📋</div>
        <div>
          <p>Total Kegiatan</p>
          <h2>{total}</h2>
        </div>
      </div>

      <div className="summary-card">
        <div className="summary-icon pending-icon">⏳</div>
        <div>
          <p>Belum Selesai</p>
          <h2>{pending}</h2>
        </div>
      </div>

      <div className="summary-card">
        <div className="summary-icon completed-icon">✅</div>
        <div>
          <p>Selesai</p>
          <h2>{completed}</h2>
        </div>
      </div>
    </section>
  );
}

export default Summary;
