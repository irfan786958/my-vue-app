<template>
  
  <div class="dashboard-container">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="logo">
        <img src="https://dummyimage.com/40x40/009150/fff&text=D" alt="Donezo Logo" />
        <span>Donezo</span>
      </div>
      <nav>
        <ul>
          <li class="active"><i class="icon-dashboard"></i> Dashboard</li>
          <li>
            <router-link to="/task">
                <i class="icon-tasks"></i> Tasks
            </router-link>
            </li>
          <li><i class="icon-calendar"></i> Calendar</li>
          <li><i class="icon-analytics"></i> Analytics</li>
          <li><i class="icon-team"></i> Team</li>
        </ul>
        <hr />
        <ul>
          <li><i class="icon-settings"></i> Settings</li>
          <li><i class="icon-help"></i> Help</li>
          <li><i class="icon-logout"></i> Logout</li>
        </ul>
      </nav>
      <div class="download-app">
        <div>
          <strong>Download our Mobile App</strong>
          <p>Get easy in another way</p>
          <button>Download</button>
        </div>
      </div>
    </aside>

    <!-- Main Dashboard -->
    <main class="main">
      <header class="dashboard-header">
        <input type="text" placeholder="Search task" class="search-bar" />
        <div class="user-info">
          <img src="https://dummyimage.com/40x40/ccc/aaa&text=TM" alt="Avatar" />
          <div>
            <span class="user-name">Totok Michael</span>
            <span class="user-email">tmichael20@mail.com</span>
          </div>
        </div>
      </header>
      <section class="dashboard-content">
        <div class="dashboard-title">
          <h2>Dashboard</h2>
          <p>Plan, prioritize, and accomplish your tasks with ease.</p>
          <div class="dashboard-actions">
            <button class="add-project">+ Add Project</button>
            <button class="import-data">Import Data</button>
          </div>
        </div>
        <div class="dashboard-widgets">
          <!-- Top Stats -->
          <div class="stats-row">
            <div class="stat-card green">
              <h3>Total Projects</h3>
              <span class="stat-value">24</span>
              <span class="stat-info">↑ Increased from last month</span>
            </div>
            <div class="stat-card">
              <h3>Ended Projects</h3>
              <span class="stat-value">10</span>
              <span class="stat-info">↑ Increased from last month</span>
            </div>
            <div class="stat-card">
              <h3>Running Projects</h3>
              <span class="stat-value">12</span>
              <span class="stat-info">↑ Increased from last month</span>
            </div>
            <div class="stat-card">
              <h3>Pending Project</h3>
              <span class="stat-value">2</span>
              <span class="stat-info">On Discuss</span>
            </div>
          </div>
          <!-- Analytics Row -->
          <div class="analytics-row">
            <div class="analytics-card">
              <h4>Project Analytics</h4>
              <div class="bar-graph">
                <div class="bar" style="height:50%"></div>
                <div class="bar" style="height:74%"></div>
                <div class="bar" style="height:100%"></div>
                <div class="bar" style="height:60%"></div>
                <div class="bar" style="height:40%"></div>
                <div class="bar" style="height:30%"></div>
                <div class="bar" style="height:20%"></div>
              </div>
              <div class="bar-labels">
                <span>S</span><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span>
              </div>
            </div>
            <div class="reminder-card">
              <h4>Reminders</h4>
              <p>Meeting with Arc Company</p>
              <span class="reminder-time">Time: 02:00 pm - 04:00 pm</span>
              <button class="start-meeting">Start Meeting</button>
            </div>
            <div class="project-list-card">
              <div class="list-header">
                <h4>Project</h4>
                <button class="new-project">+ New</button>
              </div>
              <ul class="project-list">
                <li>
                  <span class="dot blue"></span>
                  <span>Develop API Endpoints</span>
                  <span class="due-date">Due date: Nov 30, 2024</span>
                </li>
                <li>
                  <span class="dot green"></span>
                  <span>Onboarding Flow</span>
                  <span class="due-date">Due date: Nov 28, 2024</span>
                </li>
                <li>
                  <span class="dot yellow"></span>
                  <span>Build Dashboard</span>
                  <span class="due-date">Due date: Nov 30, 2024</span>
                </li>
                <li>
                  <span class="dot orange"></span>
                  <span>Optimize Page Load</span>
                  <span class="due-date">Due date: Dec 5, 2024</span>
                </li>
                <li>
                  <span class="dot purple"></span>
                  <span>Cross-Browser Testing</span>
                  <span class="due-date">Due date: Dec 6, 2024</span>
                </li>
              </ul>
            </div>
          </div>
          <!-- Collaboration & Progress Row -->
          <div class="collab-row">
            <div class="team-collab-card">
              <div class="list-header">
                <h4>Team Collaboration</h4>
                <button class="add-member">+ Add Member</button>
              </div>
              <ul class="team-list">
                <li>
                  <img src="https://dummyimage.com/32x32/ffb6b6/fff&text=AD" />
                  <span>Alexandra Deff</span>
                  <span class="task">Github Project Repository</span>
                  <span class="status completed">Completed</span>
                </li>
                <li>
                  <img src="https://dummyimage.com/32x32/00bfff/fff&text=EA" />
                  <span>Edwin Adetnike</span>
                  <span class="task">Integrate User Authentication System</span>
                  <span class="status inprogress">In Progress</span>
                </li>
                <li>
                  <img src="https://dummyimage.com/32x32/ffd700/fff&text=IO" />
                  <span>Isaac Oluwatemilornu</span>
                  <span class="task">Develop Search and Filter Functionality</span>
                  <span class="status pending">Pending</span>
                </li>
                <li>
                  <img src="https://dummyimage.com/32x32/32cd32/fff&text=DO" />
                  <span>David Oshodi</span>
                  <span class="task">Responsive Layout for Homepage</span>
                  <span class="status inprogress">In Progress</span>
                </li>
              </ul>
            </div>
            <div class="project-progress">
              <h4>Project Progress</h4>
              <div class="progress-circle">
                <svg width="100" height="100">
                  <circle cx="50" cy="50" r="45" stroke="#e0e0e0" stroke-width="10" fill="none"/>
                  <circle cx="50" cy="50" r="45" stroke="#2ecc40" stroke-width="10" fill="none"
                    stroke-dasharray="283"
                    stroke-dashoffset="167"
                    stroke-linecap="round"/>
                </svg>
                <div class="progress-text">41%<br /><span>Project Ended</span></div>
              </div>
              <div class="progress-labels">
                <span class="dot green"></span>Completed
                <span class="dot blue"></span>In Progress
                <span class="dot gray"></span>Pending
              </div>
            </div>
            <div class="time-tracker">
              <h4>Time Tracker</h4>
              <div class="timer">01:24:08</div>
              <div class="timer-controls">
                <button class="pause"><i class="icon-pause"></i></button>
                <button class="stop"><i class="icon-stop"></i></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
   <router-view />
</template>

<script>

export default {
  name: 'AppaDshboard',
  data() {
    return {};
  }
};
</script>

<style scoped>
.dashboard-container {
  display: flex;
font-family: 'Nunito', sans-serif;

  background: #f7f9fa;
  min-height: 100vh;
}
.sidebar {
  width: 260px;
  background: #fff;
  border-radius: 20px 0 0 20px;
  box-shadow: 0 2px 20px 0 #e8e8e8;
  padding: 32px 18px;
 
  flex-direction: column;
  justify-content: space-between;
  flex-direction: column;
}
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  font-size: 1.2em;
  margin-bottom: 30px;
}
nav ul {
  list-style: none;
  padding: 0;
  margin: 0 0 8px 0;
}
nav ul li {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #576574;
     padding-top: 25px;
    padding-right: 10px;
    padding-bottom: 12px;
    padding-left: 8px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.05em;
  transition: background 0.2s;
}
nav ul li.active,
nav ul li:hover {
  background: #eaf8ee;
  color: #009150;
}
hr {
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 14px 0;
}
.download-app {
  background: linear-gradient(90deg,#009150 80%,#27ae60 100%);
  color: #fff;
  border-radius: 12px;
  padding: 18px 12px;
  margin-top: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.download-app button {
  background: #fff;
  color: #009150;
  border: none;
  border-radius: 6px;
  padding: 7px 16px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 8px;
}
.main {
  flex: 1;
  padding: 32px 38px;
  background: #f7f9fa;
  border-radius: 0 20px 20px 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.dashboard-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
}
.search-bar {
  width: 320px;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  background: #fff;
  font-size: 1.1em;
}
.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}
.user-info img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.user-name {
  font-weight: 600;
}
.user-email {
  color: #b0b0b0;
  font-size: 0.95em;
}
.dashboard-content {
  flex: 1;
}
.dashboard-title {
  color: #868686;
}
.dashboard-title h2 {
  margin: 0;
}
.dashboard-title p {
  color: #868686;
  margin: 0 14px 0 0;
  font-size: 1.08em;
}
.dashboard-actions {
  display: flex;
  gap: 14px;
      margin-top: 20px;
    margin-right: 0px;
    margin-bottom: 26px;
    flex-direction: row-reverse;

}
.dashboard-actions button {
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 1em;
  padding: 10px 22px;
  cursor: pointer;
  background: #009150;
  color: #fff;
  transition: background 0.2s;
}
.dashboard-actions .import-data {
  background: #fff;
  color: #009150;
  border: 1px solid #009150;
}
.dashboard-widgets {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.stats-row {
  display: flex;
  gap: 18px;
  margin-bottom: 14px;
}
.stat-card {
  flex: 1;
  background: #fff;
  border-radius: 16px;
  padding: 22px 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-shadow: 0 1px 12px 0 #e8e8e8;
  min-width: 0;
  position: relative;
}
.stat-card.green {
  background: linear-gradient(90deg, #009150 90%, #27ae60 100%);
  color: #fff;
}
.stat-card h3 {
  margin: 0 0 5px 0;
  font-size: 1.1em;
}
.stat-value {
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 6px;
}
.stat-info {
  font-size: 0.95em;
  color: #b0b0b0;
}
.analytics-row {
  display: flex;
  gap: 18px;
  margin-bottom: 14px;
}
.analytics-card {
  flex: 2;
  background: #fff;
  border-radius: 16px;
  padding: 18px 18px;
  box-shadow: 0 1px 12px 0 #e8e8e8;
}
.bar-graph {
  display: flex;
  gap: 20px;
  margin-top: 70px;
  height: 200px;
  align-items: flex-end;
}
.bar {
  width: 70px;
  background: #009150;
  border-radius: 15px 15px 0 0;
  transition: height 0.3s;
}
.bar-labels {
  display: flex;
  gap: 85px;
  margin-top: 6px;
  font-size: 0.98em;
  color: #2f2f2f;
}
.reminder-card {
  flex: 1.1;
  background: #fff;
  border-radius: 16px;
  padding: 18px 18px;
  box-shadow: 0 1px 12px 0 #e8e8e8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.reminder-card h4 {
  margin: 0 0 6px 0;
}
.reminder-time {
  font-size: 0.98em;
  color: #868686;
  margin-bottom: 12px;
}
.start-meeting {
  background: #009150;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 20px;
  font-weight: 600;
  cursor: pointer;
}
.project-list-card {
  flex: 1.2;
  background: #fff;
  border-radius: 16px;
  padding: 18px 18px;
  box-shadow: 0 1px 12px 0 #e8e8e8;
}
.list-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.new-project {
  background: #009150;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 5px 12px;
  font-size: 0.98em;
  cursor: pointer;
}
.project-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.project-list li {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 0;
  font-size: 1.02em;
  color: #576574;
}
.project-list .dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 4px;
}
.dot.blue { background: #3498db; }
.dot.green { background: #27ae60; }
.dot.yellow { background: #f1c40f; }
.dot.orange { background: #e67e22; }
.dot.purple { background: #8e44ad; }
.collab-row {
  display: flex;
  gap: 18px;
}
.team-collab-card {
  flex: 2;
  background: #fff;
  border-radius: 16px;
  padding: 18px 18px;
  box-shadow: 0 1px 12px 0 #e8e8e8;
}
.team-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.team-list li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 0;
  font-size: 1.02em;
}
.team-list img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}
.task {
  color: #868686;
  font-size: 0.96em;
}
.status {
  border-radius: 6px;
  padding: 3px 10px;
  font-size: 0.92em;
  font-weight: 600;
  margin-left: auto;
}
.status.completed { background: #eaf8ee; color: #009150; }
.status.inprogress { background: #eaf7fb; color: #00bfff; }
.status.pending { background: #fff4d7; color: #e67e22; }
.add-member {
  background: #009150;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 5px 12px;
  font-size: 0.98em;
  cursor: pointer;
}
.project-progress {
  flex: 1.1;
  background: #fff;
  border-radius: 16px;
  padding: 18px 18px;
  box-shadow: 0 1px 12px 0 #e8e8e8;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.progress-circle {
  position: relative;
  width: 100px;
  height: 100px;
  margin-bottom: 4px;
}
.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
  text-align: center;
  font-weight: 700;
  color: #2ecc40;
  font-size: 1.3em;
}
.progress-text span {
  color: #868686;
  font-size: 0.9em;
  font-weight: 500;
}
.progress-labels {
  display: flex;
  gap: 13px;
  margin-top: 8px;
  font-size: 0.98em;
}
.dot.gray { background: #d3d3d3; }
.time-tracker {
  flex: 1;
  background: #fff;
  border-radius: 16px;
  padding: 18px 18px;
  box-shadow: 0 1px 12px 0 #e8e8e8;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.timer {
  font-size: 2em;
  font-weight: 700;
  color: #009150;
  margin: 10px 0;
}
.timer-controls {
  display: flex;
  gap: 12px;
}
.timer-controls button {
  background: #009150;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.icon-dashboard::before { content: "🏠"; }
.icon-tasks::before { content: "📋"; }
.icon-calendar::before { content: "🗓️"; }
.icon-analytics::before { content: "📊"; }
.icon-team::before { content: "👥"; }
.icon-settings::before { content: "⚙️"; }
.icon-help::before { content: "❓"; }
.icon-logout::before { content: "🚪"; }
.icon-pause::before { content: "⏸"; }
.icon-stop::before { content: "⏹"; }
</style>