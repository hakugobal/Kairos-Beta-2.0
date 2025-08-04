export default function Home() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>AI Kairos</h1>
      <p>Flow Intelligence Reports Coming Soon</p>
      <form style={{ marginTop: '30px' }}>
        <input type="date" placeholder="Birth Date" style={{ margin: '10px', padding: '10px' }} />
        <br />
        <input type="email" placeholder="Email" style={{ margin: '10px', padding: '10px' }} />
        <br />
        <button type="submit" style={{ margin: '10px', padding: '10px 20px' }}>
          Generate Report
        </button>
      </form>
    </div>
  );
}
