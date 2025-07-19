<template>
  <div class="calendar-bg">
    <div class="calendar-container">
      <!-- Left: Months Grid -->
      <div class="calendar-left">
        <div class="months-grid">
          <div class="months-row">
            <div v-for="month in months.slice(0, 6)" :key="month.name" class="month-box">
              <span :class="['month-dot', month.color]" />
              <span class="month-name">{{ month.name }}</span>
              <span class="month-days">{{ month.days }} days</span>
            </div>
          </div>
          <div class="calendar-table">
            <div class="calendar-table-header">
              <span v-for="day in daysHeader" :key="day" :class="['calendar-table-day', day==='SUN'?'sun':'' ]">{{ day }}</span>
            </div>
            <div class="calendar-table-body">
              <div v-for="week in weeks" :key="week.id" class="calendar-table-row">
                <span
                  v-for="(day, idx) in week.days"
                  :key="idx"
                  :class="['calendar-table-day', day==='SUN'?'sun':'']"
                >{{ day }}</span>
              </div>
            </div>
          </div>
          <div class="months-row">
            <div v-for="month in months.slice(6, 12)" :key="month.name" class="month-box">
              <span :class="['month-dot', month.color]" />
              <span class="month-name">{{ month.name }}</span>
              <span class="month-days">{{ month.days }} days</span>
            </div>
          </div>
        </div>
      </div>
      <!-- Right: Year & Mini Calendar -->
      <div class="calendar-right">
        <div class="calendar-year">
          <h1>2022</h1>
          <p class="calendar-desc">Simple one page calendar</p>
        </div>
        <div class="calendar-mini">
          <div class="calendar-mini-row">
            <span class="calendar-mini-day active">1</span>
            <span class="calendar-mini-day">8</span>
            <span class="calendar-mini-day">15</span>
            <span class="calendar-mini-day">22</span>
            <span class="calendar-mini-day">29</span>
          </div>
          <div class="calendar-mini-row">
            <span class="calendar-mini-day">2</span>
            <span class="calendar-mini-day">9</span>
            <span class="calendar-mini-day">16</span>
            <span class="calendar-mini-day">23</span>
            <span class="calendar-mini-day">30</span>
          </div>
          <div class="calendar-mini-row">
            <span class="calendar-mini-day">3</span>
            <span class="calendar-mini-day">10</span>
            <span class="calendar-mini-day">17</span>
            <span class="calendar-mini-day">24</span>
            <span class="calendar-mini-day">31</span>
          </div>
          <div class="calendar-mini-row">
            <span class="calendar-mini-day">4</span>
            <span class="calendar-mini-day">11</span>
            <span class="calendar-mini-day">18</span>
            <span class="calendar-mini-day">25</span>
          </div>
          <div class="calendar-mini-row">
            <span class="calendar-mini-day">5</span>
            <span class="calendar-mini-day">12</span>
            <span class="calendar-mini-day">19</span>
            <span class="calendar-mini-day">26</span>
          </div>
          <div class="calendar-mini-row">
            <span class="calendar-mini-day">6</span>
            <span class="calendar-mini-day">13</span>
            <span class="calendar-mini-day">20</span>
            <span class="calendar-mini-day">27</span>
          </div>
          <div class="calendar-mini-row">
            <span class="calendar-mini-day">7</span>
            <span class="calendar-mini-day">14</span>
            <span class="calendar-mini-day">21</span>
            <span class="calendar-mini-day">28</span>
          </div>
        </div>
        <div class="calendar-footer">
          <span>Crafted by Agensip</span>
          <a href="https://agensip.com" target="_blank">www.agensip.com</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppClander",
  data() {
    return {
      months: [
        { name: "Mar", days: 31, color: "green" },
        { name: "Feb", days: 28, color: "green" },
        { name: "Jun", days: 30, color: "green" },
        { name: "Apr", days: 30, color: "green" },
        { name: "Jan", days: 31, color: "green" },
        { name: "May", days: 31, color: "green" },
        { name: "Aug", days: 31, color: "purple" },
        { name: "Nov", days: 30, color: "purple" },
        { name: "Sep", days: 30, color: "purple" },
        { name: "Jul", days: 31, color: "purple" },
        { name: "Oct", days: 31, color: "purple" },
        { name: "Dec", days: 31, color: "purple" },
      ],
      daysHeader: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
      weeks: [
        { id: 1, days: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"] },
        { id: 2, days: ["TUE", "WED", "THU", "FRI", "SAT", "SUN", "MON"] },
        { id: 3, days: ["WED", "THU", "FRI", "SAT", "SUN", "MON", "TUE"] },
        { id: 4, days: ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"] },
        { id: 5, days: ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"] },
        { id: 6, days: ["SAT", "SUN", "MON", "TUE", "WED", "THU", "FRI"] },
        { id: 7, days: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"] },
      ],
    };
  },
};
</script>

<style scoped>
.calendar-bg {
  min-height: 100vh;
  width: 100vw;
  background: linear-gradient(120deg, #5de989 0%, #56da1e 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  border-radius: 24px;
}
.calendar-container {
  background: #fff;
  border-radius: 36px;
  display: flex;
  box-shadow: 0 8px 32px rgba(44, 62, 80, 0.15);
  min-height: 640px;
  max-width: 900px;
  width: 100%;
  overflow: hidden;
  position: relative;
}
.calendar-left {
  flex: 2.5;
  background: #fff;
  padding: 32px 16px 24px 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.months-grid {
  width: 100%;
}
.months-row {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-bottom: 16px;
}
.month-box {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 72px;
}
.month-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  margin-bottom: 4px;
}
.month-dot.green {
  background: #22c993;
}
.month-dot.purple {
  background: #7269e8;
}
.month-name {
  font-weight: 700;
  color: #222;
  font-size: 1.05em;
  margin-bottom: 2px;
}
.month-days {
  font-size: 0.9em;
  color: #b2b2b2;
}
.calendar-table {
  background: #fff;
  border-radius: 18px;
  margin: 24px 0;
  padding: 12px 16px;
  box-shadow: 0 2px 8px rgba(44, 62, 80, 0.08);
  width: 100%;
  max-width: 540px;
}
.calendar-table-header {
  display: flex;
  gap: 18px;
  font-weight: 700;
  color: #868686;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 3px;
}
.calendar-table-day {
  font-size: 1em;
  min-width: 52px;
  text-align: center;
  color: #868686;
}
.calendar-table-day.sun {
  color: #e46060;
  font-weight: 700;
}
.calendar-table-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 6px;
}
.calendar-table-row {
  display: flex;
  gap: 18px;
}
.calendar-right {
  flex: 1.8;
  background: linear-gradient(120deg, #49d611 0%, #38c233 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 36px 28px;
  border-radius: 36px 0 0 36px;
  position: relative;
}
.calendar-year {
  text-align: center;
  margin-bottom: 16px;
}
.calendar-year h1 {
  font-size: 3.2em;
  font-weight: 900;
  margin: 0;
  letter-spacing: 2px;
}
.calendar-desc {
  font-size: 1.07em;
  color: #c8d2f5;
  margin-top: 8px;
  margin-bottom: 30px;
}
.calendar-mini {
  width: 100%;
  max-width: 260px;
  margin: 0 auto 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.calendar-mini-row {
  display: flex;
  gap: 24px;
  justify-content: center;
}
.calendar-mini-day {
  width: 30px;
  height: 30px;
  background: transparent;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.15em;
  border-radius: 50%;
  transition: background 0.2s, color 0.2s;
  cursor: pointer;
}
.calendar-mini-day.active {
  background: #faad60;
  color: #fff;
  box-shadow: 0 2px 8px rgba(250, 173, 96, 0.18);
}
.calendar-footer {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 0.98em;
  color: #c8d2f5;
}
.calendar-footer a {
  color: #c8d2f5;
  text-decoration: underline;
  margin-left: 6px;
  font-size: 0.98em;
}
@media (max-width: 900px) {
  .calendar-container {
    flex-direction: column;
    min-height: unset;
    border-radius: 24px;
    max-width: 99vw;
    padding: 0;
  }
  .calendar-left,
  .calendar-right {
    border-radius: 24px;
    padding: 30px 10px;
    min-width: 0;
  }
  .calendar-right {
    margin-top: 0;
    margin-bottom: 0;
    min-height: 0;
    flex-direction: column;
    align-items: center;
  }
  .calendar-footer {
    position: static;
    transform: none;
    margin-top: 12px;
  }
}
@media (max-width: 600px) {
  .calendar-bg {
    padding: 8px;
    border-radius: 12px;
  }
  .calendar-container {
    border-radius: 14px;
    max-width: 99vw;
    min-width: 0;
  }
  .months-row {
    gap: 12px;
    flex-wrap: wrap;
  }
  .month-box {
    min-width: 54px;
    font-size: 0.95em;
  }
  .calendar-table {
    max-width: 98vw;
    padding: 8px 4px;
  }
  .calendar-mini {
    max-width: 98vw;
  }
  .calendar-year h1 {
    font-size: 2em;
  }
}
</style>