<template>
  <div class="dashboard-bg">
    <div class="dashboard-container">
      <div class="dashboard-header">
        <h2>Your Sales Dashboard</h2>
        <div class="dashboard-date-range">
          <span>Showing data from</span>
          <input type="text" value="01/01/2019 - 10/08/2019" readonly />
        </div>
      </div>
      <div class="dashboard-summary-cards">
        <div class="summary-card">
          <div class="summary-icon"></div>
          <div class="summary-main">$21,718.73</div>
          <div class="summary-sub">Total Sales this Month</div>
        </div>
        <div class="summary-card">
          <div class="summary-icon"></div>
          <div class="summary-main">$808,696.50</div>
          <div class="summary-sub">Total Sales this Year</div>
        </div>
        <div class="summary-card">
          <div class="summary-icon"></div>
          <div class="summary-main">5</div>
          <div class="summary-sub">Change in Customers<br/><span class="summary-sub-sm">from the month prior</span></div>
        </div>
      </div>
      <div class="dashboard-main-grid">
        <!-- Latest Transactions & Pie -->
        <div class="dashboard-main-left">
          <div class="dashboard-chart-block">
            <h4>Latest Transactions</h4>
            <span class="dashboard-chart-sub">Last 30 days</span>
            <div class="chart" id="latest-transactions">
              <!-- Placeholder for line chart -->
              <div class="chart-img chart-line"></div>
            </div>
          </div>
          <div class="dashboard-chart-block">
            <div class="chart" id="chart-pie">
              <!-- Placeholder for pie chart -->
              <div class="chart-img chart-pie"></div>
            </div>
          </div>
        </div>
        <!-- Sales Numbers & Projected Revenue -->
        <div class="dashboard-main-right">
          <div class="dashboard-chart-block">
            <h4>Sales Numbers by Month</h4>
            <div class="chart" id="sales-numbers">
              <!-- Placeholder for bar chart -->
              <div class="chart-img chart-bar"></div>
            </div>
          </div>
          <div class="dashboard-chart-block">
            <h4>Projected Revenue</h4>
            <div class="dashboard-chart-legend">
              <span class="legend-projected"></span> Projected
              <span class="legend-actual"></span> Actual
            </div>
            <div class="chart" id="projected-revenue">
              <!-- Placeholder for bar chart -->
              <div class="chart-img chart-bar"></div>
            </div>
          </div>
        </div>
      </div>
      <!-- Table -->
      <div class="dashboard-table-block">
        <table class="dashboard-table">
          <thead>
            <tr>
              <th>
                Date
                <span class="filter-icon">↓</span>
                <input type="text" placeholder="Filter" />
              </th>
              <th>
                Company
                <span class="filter-icon">↓</span>
                <input type="text" placeholder="Filter" />
              </th>
              <th>
                Cost
                <span class="filter-icon">↓</span>
                <input type="text" placeholder="Filter" />
              </th>
              <th>
                License
                <span class="filter-icon">↓</span>
                <select>
                  <option>saas</option>
                  <option>website</option>
                </select>
              </th>
              <th>
                Type
                <span class="filter-icon">↓</span>
                <select>
                  <option>renewal</option>
                  <option>new</option>
                </select>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9/8/2019</td>
              <td>Tazzy</td>
              <td>$727.55</td>
              <td>saas</td>
              <td>renewal</td>
            </tr>
            <tr>
              <td>9/8/2019</td>
              <td>Dynazzy</td>
              <td>$579.34</td>
              <td>website</td>
              <td>renewal</td>
            </tr>
            <tr>
              <td>9/8/2019</td>
              <td>Skilith</td>
              <td>$1,923.30</td>
              <td>saas</td>
              <td>new</td>
            </tr>
          </tbody>
        </table>
        <div class="dashboard-table-pagination">
          <span>3</span>
          <span class="pagination-icon"></span>
          <span>Page</span>
          <span>1 of 30</span>
          <span class="pagination-nav">
            <button>⏮️</button>
            <button>⏭️</button>
          </span>
          <span>Rows 1 - 3 of 89</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SalesDashboardPage",
};
</script>

<style scoped>
.dashboard-bg {
  min-height: 100vh;
  background: #f8fafc;
  padding: 0;
}
.dashboard-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px 16px 16px;
}
.dashboard-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.dashboard-header h2 {
  font-size: 2em;
  font-weight: 600;
  color: #222;
  margin-bottom: 10px;
}
.dashboard-date-range {
  font-size: 1em;
  color: #888;
  display: flex;
  align-items: center;
  gap: 8px;
}
.dashboard-date-range input {
  border: 1px solid #e5e7eb;
  background: #fff;
  padding: 6px 12px;
  border-radius: 5px;
  font-size: 1em;
  width: 210px;
  margin-left: 6px;
}
.dashboard-summary-cards {
  margin: 22px 0 30px 0;
  display: flex;
  gap: 32px;
  justify-content: space-between;
  flex-wrap: wrap;
}
.summary-card {
  background: #fff;
  box-shadow: 0 2px 8px rgba(44,62,80,0.08);
  border-radius: 16px;
  flex: 1;
  min-width: 220px;
  max-width: 320px;
  padding: 18px 12px 14px 12px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.summary-icon {
  width: 38px;
  height: 18px;
  background: url('data:image/svg+xml;utf8,<svg width="38" height="18" xmlns="http://www.w3.org/2000/svg"><polyline points="2,16 13,5 25,10 36,2" fill="none" stroke="%2334aadc" stroke-width="3"/></svg>') no-repeat center center;
  margin-bottom: 5px;
}
.summary-main {
  font-size: 1.35em;
  font-weight: 700;
  color: #24a2e3;
  margin-bottom: 3px;
}
.summary-sub {
  font-size: 1em;
  color: #444;
  margin-bottom: 0;
}
.summary-sub-sm {
  font-size: 0.92em;
  color: #888;
}
.dashboard-main-grid {
  display: flex;
  gap: 30px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}
.dashboard-main-left,
.dashboard-main-right {
  flex: 1;
  min-width: 280px;
}
.dashboard-chart-block {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(44,62,80,0.08);
  padding: 18px 18px 12px 18px;
  margin-bottom: 22px;
}
.dashboard-chart-block h4 {
  font-size: 1.08em;
  font-weight: 600;
  color: #2980b9;
  margin-bottom: 4px;
}
.dashboard-chart-sub {
  font-size: 0.92em;
  color: #888;
  display: block;
  margin-bottom: 6px;
}
.chart {
  width: 100%;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.chart-img {
  width: 100%;
  height: 110px;
  background-color: #eef4fa;
  border-radius: 10px;
  position: relative;
}
.chart-line::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 16px;
  width: 85%;
  height: 60px;
  background: url('data:image/svg+xml;utf8,<svg width="200" height="60" xmlns="http://www.w3.org/2000/svg"><polyline points="0,40 18,20 36,45 54,20 72,40 90,25 108,50 126,30 144,40 162,10 180,35 200,20" fill="none" stroke="%2324a2e3" stroke-width="3"/></svg>') no-repeat center center;
}
.chart-pie::before {
  content: '';
  position: absolute;
  left: 38px;
  top: 5px;
  width: 70px;
  height: 70px;
  background: url('data:image/svg+xml;utf8,<svg width="70" height="70" xmlns="http://www.w3.org/2000/svg"><circle cx="35" cy="35" r="35" fill="%23eef4fa"/><path d="M35,35 L35,0 A35,35 0 0,1 68,35 Z" fill="%2324a2e3"/><path d="M35,35 L68,35 A35,35 0 0,1 35,68 Z" fill="%2334aadc"/><path d="M35,35 L35,68 A35,35 0 0,1 2,35 Z" fill="%23b3e0fc"/><path d="M35,35 L2,35 A35,35 0 0,1 35,2 Z" fill="%23f5c6cb"/></svg>') no-repeat center center;
}
.chart-bar::before {
  content: '';
  position: absolute;
  left: 10px;
  top: 14px;
  width: 90%;
  height: 80px;
  background: url('data:image/svg+xml;utf8,<svg width="180" height="80" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="50" width="18" height="30" fill="%2324a2e3"/><rect x="22" y="40" width="18" height="40" fill="%2324a2e3"/><rect x="44" y="45" width="18" height="35" fill="%2324a2e3"/><rect x="66" y="38" width="18" height="42" fill="%2324a2e3"/><rect x="88" y="60" width="18" height="20" fill="%2324a2e3"/><rect x="110" y="48" width="18" height="32" fill="%2324a2e3"/><rect x="132" y="30" width="18" height="50" fill="%2324a2e3"/><rect x="154" y="65" width="18" height="15" fill="%2324a2e3"/></svg>') no-repeat center center;
}
.dashboard-chart-legend {
  font-size: 0.98em;
  margin-bottom: 2px;
}
.legend-projected,
.legend-actual {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 3px;
  vertical-align: middle;
  margin-right: 4px;
}
.legend-projected {
  background: #24a2e3;
}
.legend-actual {
  background: #b3e0fc;
}
.dashboard-table-block {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 8px rgba(44,62,80,0.08);
  padding: 16px 18px 10px 18px;
  margin-top: 18px;
  overflow-x: auto;
}
.dashboard-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 12px;
}
.dashboard-table th,
.dashboard-table td {
  text-align: left;
  padding: 8px 8px;
  font-size: 1em;
  border-bottom: 1px solid #f3f3f3;
  min-width: 80px;
}
.dashboard-table th {
  color: #2980b9;
  font-weight: 600;
  position: relative;
  background: #f8fafc;
}
.dashboard-table .filter-icon {
  font-size: 0.9em;
  color: #24a2e3;
  margin-left: 6px;
}
.dashboard-table input,
.dashboard-table select {
  margin-top: 5px;
  font-size: 0.98em;
  padding: 2px 8px;
  border: 1px solid #e5e7eb;
  border-radius: 5px;
  background: #fff;
}
.dashboard-table-pagination {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.98em;
  color: #444;
  flex-wrap: wrap;
}
.pagination-icon {
  width: 16px;
  height: 16px;
  display: inline-block;
  background: url('data:image/svg+xml;utf8,<svg width="16" height="16"><circle cx="8" cy="8" r="6" fill="%2324a2e3"/></svg>') no-repeat center center;
}
.pagination-nav button {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 5px;
  font-size: 1em;
  width: 24px;
  height: 24px;
  margin: 0 2px;
  cursor: pointer;
}
@media (max-width: 900px) {
  .dashboard-main-grid {
    flex-direction: column;
    gap: 12px;
  }
  .dashboard-summary-cards {
    flex-direction: column;
    gap: 18px;
  }
}
@media (max-width: 600px) {
  .dashboard-header {
    flex-direction: column;
    gap: 8px;
  }
  .dashboard-container {
    padding: 10px 4px;
  }
  .dashboard-table-block {
    padding: 6px 2px;
  }
  .dashboard-table th,
  .dashboard-table td {
    padding: 5px 4px;
    font-size: 0.92em;
    min-width: 54px;
  }
  @media (max-width: 420px) {
  .dashboard-container {
    padding: 8px 4px;
  }

  .dashboard-header h2 {
    font-size: 1.4em;
    text-align: center;
  }

  .dashboard-date-range {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    font-size: 0.9em;
  }

  .dashboard-date-range input {
    width: 100%;
    font-size: 0.9em;
  }

  .summary-card {
    padding: 12px 8px;
    min-width: auto;
    max-width: 100%;
  }

  .summary-main {
    font-size: 1.1em;
  }

  .dashboard-main-grid {
    flex-direction: column;
    gap: 14px;
  }

  .dashboard-chart-block {
    padding: 12px 10px;
  }

  .dashboard-chart-bl{
  
  }}
}
</style>