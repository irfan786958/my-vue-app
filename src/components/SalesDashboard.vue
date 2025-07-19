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
          <div class="dashboard-chart-block white-box">
            <h4>Latest Transactions</h4>
            <span class="dashboard-chart-sub">Last 30 days</span>
            <div class="chart" id="latest-transactions">
              <!-- Line chart SVG -->
              <svg width="100%" height="110" viewBox="0 0 300 110">
                <rect x="0" y="0" width="300" height="110" fill="#fff" />
                <polyline
                  points="0,70 20,50 40,85 60,50 80,70 100,55 120,100 140,80 160,70 180,40 200,65 220,50"
                  fill="none"
                  stroke="#24a2e3"
                  stroke-width="3"
                />
                <text x="10" y="105" font-size="11" fill="#888">Sep 8</text>
                <text x="110" y="105" font-size="11" fill="#888">Sep 22</text>
                <text x="240" y="105" font-size="11" fill="#888">Oct 7</text>
                <text x="0" y="15" font-size="10" fill="#ccc">1K</text>
                <text x="0" y="40" font-size="10" fill="#ccc">0.6K</text>
                <text x="0" y="70" font-size="10" fill="#ccc">0.2K</text>
              </svg>
            </div>
          </div>
          <div class="dashboard-chart-block white-box">
            <div class="chart" id="chart-pie">
              <!-- Pie chart SVG -->
              <svg width="110" height="110" viewBox="0 0 110 110">
                <circle cx="55" cy="55" r="50" fill="#f5f7fa"/>
                <path d="M55,55 L55,5 A50,50 0 0,1 105,55 Z" fill="#24a2e3"/>
                <path d="M55,55 L105,55 A50,50 0 0,1 55,105 Z" fill="#34aadc"/>
                <path d="M55,55 L55,105 A50,50 0 0,1 5,55 Z" fill="#b3e0fc"/>
                <path d="M55,55 L5,55 A50,50 0 0,1 55,5 Z" fill="#f5c6cb"/>
                <text x="40" y="55" font-size="13" fill="#555">renewal</text>
                <text x="68" y="70" font-size="11" fill="#555">new</text>
                <text x="30" y="90" font-size="11" fill="#555">cancellation</text>
              </svg>
            </div>
          </div>
        </div>
        <!-- Sales Numbers & Projected Revenue -->
        <div class="dashboard-main-right">
          <div class="dashboard-chart-block white-box">
            <h4>Sales Numbers by Month</h4>
            <div class="chart" id="sales-numbers">
              <!-- Bar chart SVG -->
              <svg width="100%" height="110" viewBox="0 0 300 110">
                <rect x="0" y="0" width="300" height="110" fill="#fff" />
                <rect x="10" y="30" width="20" height="60" fill="#24a2e3"/>
                <rect x="40" y="35" width="20" height="55" fill="#24a2e3"/>
                <rect x="70" y="25" width="20" height="65" fill="#24a2e3"/>
                <rect x="100" y="40" width="20" height="50" fill="#24a2e3"/>
                <rect x="130" y="25" width="20" height="65" fill="#24a2e3"/>
                <rect x="160" y="45" width="20" height="45" fill="#24a2e3"/>
                <rect x="190" y="40" width="20" height="50" fill="#24a2e3"/>
                <rect x="220" y="70" width="20" height="20" fill="#24a2e3"/>
                <text x="10" y="105" font-size="11" fill="#888">1/19</text>
                <text x="50" y="105" font-size="11" fill="#888">3/19</text>
                <text x="90" y="105" font-size="11" fill="#888">5/19</text>
                <text x="130" y="105" font-size="11" fill="#888">7/19</text>
                <text x="170" y="105" font-size="11" fill="#888">9/19</text>
                <text x="210" y="105" font-size="11" fill="#888">10/19</text>
                <text x="0" y="15" font-size="10" fill="#ccc">90K</text>
                <text x="0" y="40" font-size="10" fill="#ccc">60K</text>
                <text x="0" y="75" font-size="10" fill="#ccc">30K</text>
                <text x="0" y="100" font-size="10" fill="#ccc">0K</text>
              </svg>
            </div>
          </div>
          <div class="dashboard-chart-block white-box">
            <h4>Projected Revenue</h4>
            <div class="dashboard-chart-legend">
              <span class="legend-projected"></span> Projected
              <span class="legend-actual"></span> Actual
            </div>
            <div class="chart" id="projected-revenue">
              <!-- Bar chart SVG -->
              <svg width="100%" height="110" viewBox="0 0 300 110">
                <rect x="0" y="0" width="300" height="110" fill="#fff" />
                <rect x="10" y="80" width="16" height="20" fill="#24a2e3"/>
                <rect x="30" y="70" width="16" height="30" fill="#24a2e3"/>
                <rect x="50" y="65" width="16" height="35" fill="#24a2e3"/>
                <rect x="70" y="55" width="16" height="45" fill="#24a2e3"/>
                <rect x="90" y="50" width="16" height="60" fill="#24a2e3"/>
                <rect x="110" y="40" width="16" height="70" fill="#24a2e3"/>
                <rect x="130" y="35" width="16" height="75" fill="#24a2e3"/>
                <rect x="150" y="30" width="16" height="80" fill="#24a2e3"/>
                <rect x="170" y="25" width="16" height="85" fill="#24a2e3"/>
                <rect x="190" y="20" width="16" height="90" fill="#24a2e3"/>
                <rect x="210" y="65" width="16" height="35" fill="#b3e0fc"/>
                <rect x="230" y="60" width="16" height="40" fill="#b3e0fc"/>
                <rect x="250" y="55" width="16" height="45" fill="#b3e0fc"/>
                <rect x="270" y="45" width="16" height="55" fill="#b3e0fc"/>
                <text x="10" y="105" font-size="11" fill="#888">1/19</text>
                <text x="50" y="105" font-size="11" fill="#888">3/19</text>
                <text x="90" y="105" font-size="11" fill="#888">5/19</text>
                <text x="130" y="105" font-size="11" fill="#888">7/19</text>
                <text x="170" y="105" font-size="11" fill="#888">9/19</text>
                <text x="210" y="105" font-size="11" fill="#888">10/19</text>
                <text x="0" y="15" font-size="10" fill="#ccc">800K</text>
                <text x="0" y="40" font-size="10" fill="#ccc">600K</text>
                <text x="0" y="75" font-size="10" fill="#ccc">200K</text>
                <text x="0" y="100" font-size="10" fill="#ccc">0K</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <!-- Table -->
      <div class="dashboard-table-block white-box">
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
  name: "SalesDashboard",
};
</script>

<style scoped>
.dashboard-bg {
  min-height: 100vh;
  background: #f5f7fa;
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
.white-box {
  background: #fff;
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
  .calendar-bg {
    padding: 6px;
    border-radius: 8px;
  }

  .calendar-left,
  .calendar-right {
    padding: 10px;
    flex-direction: column;
    gap: 14px;
  }

  .calendar-year h1 {
    font-size: 1.5em;
  }

  .calendar-desc {
    font-size: 0.85em;
  }

  .calendar-container {
    border-radius: 10px;
    padding: 12px;
  }

  .month-box {
    min-width: 44px;
    font-size: 0.85em;
  }

  .months-row {
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
  }

  .calendar-table {
    padding: 6px;
  }

  .calendar-table-day {
    min-width: 34px;
    font-size: 0.8em;
  }

  .calendar-mini-day {
    width: 24px;
    height: 24px;
    font-size: 0.8em;
  }

  .calendar-mini-row {
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .calendar-footer {
    font-size: 0.85em;
    text-align: center;
  }

  .calendar-mini {
    padding: 10px;
  }

  .calendar-right h3 {
    font-size: 1em;
  }

  .calendar-right h4 {
    font-size: 0.9em;
  }
}

}
</style>