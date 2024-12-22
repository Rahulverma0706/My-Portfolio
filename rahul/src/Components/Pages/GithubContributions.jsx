import GitHubCalendar from 'react-github-calendar';
const GitHubContributionChart = () => {
  const username = 'Rahulverma0706';
  const theme = {
    dark: ['#e0e0e0', '#a3d9a5', '#7bc96f', '#38d353', '#28a745'],
    light: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
  };

  return (
    <>
      <div style={styles.container}>
        <h2 style={styles.header}>My GitHub Contributions</h2>
        <div style={styles.scrollableContainer}>
          <div style={styles.chartContainer}>
            <GitHubCalendar username={username} theme={theme} blockSize={calculateBlockSize()} />
          </div>
        </div>
      </div>
      <div style={styles.statsContainer}>
        <div style={styles.statItem}>
          <h2>My GitHub Stats</h2>
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=default`}
            alt="GitHub Stats"
            style={styles.image}
          />
        </div>
        <div style={styles.statItem}>
          <h2>Languages I Use</h2>
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=default`}
            alt="Top Languages"
            style={styles.image}
          />
        </div>
        <div style={styles.statItem}>
          <h2>My Contribution Chart</h2>
          <img
            src={`https://github-contribution-stats.vercel.app/api/?username=${username}`}
            alt="GitHub Contribution Chart"
            style={{ ...styles.image, marginBottom: '20px', padding: '10px' }}
          />
        </div>
      </div>
    </>
  );
};

const calculateBlockSize = () => {
  const screenWidth = window.innerWidth;
  if (screenWidth < 600) return 8; // Smaller block size for small screens
  if (screenWidth < 1024) return 10; // Medium block size for tablets
  return 12; // Default block size for larger screens
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    margin: '0 auto',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '1000px',
  },
  header: {
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  },
  scrollableContainer: {
    overflowX: 'auto',
    whiteSpace: 'nowrap',
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
  },
  chartContainer: {
    display: 'inline-block',
    padding: '10px',
  },
  statsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'center',
    maxWidth: '100%',
    padding: '60px 20px',
  },
  statItem: {
    textAlign: 'center',
    marginBottom: '20px',
    flex: '1 1 300px',
    padding: '10px',
    boxSizing: 'border-box',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  },
};

export default GitHubContributionChart;
