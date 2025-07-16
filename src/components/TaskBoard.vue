<template>
  <div class="taskboard-bg">
    <div class="taskboard-columns">
      <div
        v-for="(column, ) in columns"
        :key="column.title"
        class="taskboard-column"
        :style="{background: column.bg}"
      >
        <div class="taskboard-column-header">
          <span class="taskboard-column-icon">{{ column.icon }}</span>
          <span class="taskboard-column-title">{{ column.title }}</span>
        </div>
        <div class="taskboard-tasks">
          <div v-for="task in column.tasks" :key="task.title" class="taskboard-task">
            <div class="taskboard-task-title">
              <strong>{{ task.title }}</strong>
              <img v-if="task.avatar" class="taskboard-avatar" :src="task.avatar" alt="avatar">
            </div>
            <div class="taskboard-task-desc">{{ task.description }}</div>
            <div class="taskboard-task-labels">
              <span
                v-for="label in task.labels"
                :key="label.text"
                class="taskboard-label"
                :style="{background: label.bg, color: label.color}"
              >
                {{ label.text }}
              </span>
            </div>
            <div v-if="task.img" class="taskboard-task-img">
              <img :src="task.img" alt="icon" />
            </div>
          </div>
          <div class="taskboard-add">
            <button class="taskboard-add-btn">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskBoard",
  data() {
    return {
      columns: [
        {
          title: "Product & Design",
          icon: "🎨",
          bg: "linear-gradient(90deg,#b076fd 0%,#7e94fa 100%)",
          tasks: [
            {
              title: "UX flow analysis",
              description: "Analyze user experience flows to ensure smooth navigation.",
              avatar: "https://randomuser.me/api/portraits/men/32.jpg",
              labels: [
                { text: "Research", bg: "#4fd2c4", color: "#fff" },
                { text: "UX", bg: "#3d9df6", color: "#fff" }
              ]
            },
            {
              title: "Create style guide",
              description: "Develop a style guide that outlines the app’s visual elements, typography, color palette, and branding.",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg",
              labels: [
                { text: "Marketing", bg: "#e254c0", color: "#fff" },
                { text: "Product", bg: "#fe7878", color: "#fff" },
                { text: "UX", bg: "#3d9df6", color: "#fff" }
              ],
              img: "https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg"
            }
          ]
        },
        {
          title: "Development",
          icon: "💻",
          bg: "linear-gradient(90deg,#7e94fa 0%,#53e0e0 100%)",
          tasks: [
            {
              title: "Payment integration",
              description: "Integrate a payment gateway to enable in-app purchases and transactions.",
              avatar: "https://randomuser.me/api/portraits/men/22.jpg",
              labels: [
                { text: "Engineering", bg: "#3d9df6", color: "#fff" }
              ]
            },
            {
              title: "Build database schema",
              description: "Design and implement the database schema to store user data",
              avatar: "https://randomuser.me/api/portraits/women/36.jpg",
              labels: [
                { text: "Engineering", bg: "#3d9df6", color: "#fff" },
                { text: "Research", bg: "#4fd2c4", color: "#fff" }
              ]
            },
            {
              title: "Feature workshop",
              description: "Hey team! Please find the summary of today's workshop in the attached note.",
              avatar: "https://randomuser.me/api/portraits/women/25.jpg",
              labels: [
                { text: "Engineering", bg: "#3d9df6", color: "#fff" },
                { text: "Research", bg: "#4fd2c4", color: "#fff" }
              ]
            }
          ]
        },
        {
          title: "Testing",
          icon: "🧪",
          bg: "linear-gradient(90deg,#53e0e0 0%,#57e379 100%)",
          tasks: [
            {
              title: "Conduct unit tests",
              description: "Write and execute unit tests for critical app components.",
              avatar: "https://randomuser.me/api/portraits/women/18.jpg",
              labels: [
                { text: "Engineering", bg: "#3d9df6", color: "#fff" },
                { text: "QA", bg: "#57e379", color: "#fff" }
              ]
            },
            {
              title: "Compatibility testing",
              description: "Test the app on different browsers and devices to ensure compatibility.",
              avatar: "https://randomuser.me/api/portraits/women/28.jpg",
              labels: [
                { text: "Engineering", bg: "#3d9df6", color: "#fff" },
                { text: "QA", bg: "#57e379", color: "#fff" }
              ]
            }
          ]
        },
        {
          title: "Release",
          icon: "✅",
          bg: "linear-gradient(90deg,#aeea00 0%,#d2f150 100%)",
          tasks: [
            {
              title: "Set up production",
              description: "Configure the production environment for the app.",
              labels: [
                { text: "Engineering", bg: "#3d9df6", color: "#fff" },
                { text: "Product", bg: "#fe7878", color: "#fff" }
              ]
            },
            {
              title: "Coordinate app release",
              description: "Coordinate app release with marketing and product teams.",
              labels: [
                { text: "Marketing", bg: "#e254c0", color: "#fff" },
                { text: "PM", bg: "#ffd600", color: "#fff" },
                { text: "Product", bg: "#fe7878", color: "#fff" }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.taskboard-bg {
  min-height: 100vh;
  background: linear-gradient(90deg,#75c3ff 0%,#aeeaee 100%);
  padding: 32px 0;
  border-radius: 24px;
  overflow-x: auto;
}
.taskboard-columns {
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: flex-start;
  padding: 0 16px;
}
.taskboard-column {
  min-width: 270px;
  background: #f8faff;
  border-radius: 16px;
  box-shadow: 0 4px 18px 0 #aeeaee22;
  padding: 0 0 24px 0;
  display: flex;
  flex-direction: column;
  flex: 1 1 270px;
}
.taskboard-column-header {
  padding: 18px 0 16px 24px;
  font-size: 1.24em;
  font-weight: 600;
  color: #fff;
  border-radius: 16px 16px 0 0;
  display: flex;
  align-items: center;
  gap: 12px;
}
.taskboard-column-icon {
  font-size: 1.4em;
}
.taskboard-column-title {
  font-size: 1.07em;
  font-weight: bold;
}
.taskboard-tasks {
  padding: 8px 14px 0 14px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.taskboard-task {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px 0 #e5e3ef50;
  padding: 18px 18px 12px 18px;
  margin-bottom: 0;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
}
.taskboard-task-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.08em;
  font-weight: 600;
  color: #26323a;
}
.taskboard-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
  margin-left: 7px;
  border: 2px solid #e5e3ef;
}
.taskboard-task-desc {
  color: #888;
  font-size: 0.99em;
  margin-bottom: 4px;
}
.taskboard-task-labels {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.taskboard-label {
  padding: 3px 10px;
  border-radius: 8px;
  font-size: 0.95em;
  font-weight: 500;
  margin-top: 4px;
  margin-bottom: 2px;
  letter-spacing: 0.2px;
}
.taskboard-task-img img {
  width: 38px;
  height: 38px;
  object-fit: contain;
}
.taskboard-add {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
}
.taskboard-add-btn {
  background: #fff;
  border: none;
  box-shadow: 0 2px 8px 0 #e5e3ef50;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  color: #888;
  font-size: 1.5em;
  font-weight: 600;
  cursor: pointer;
  transition: background .2s;
}
.taskboard-add-btn:hover {
  background: #f3f6ff;
}

@media (max-width: 900px) {
  .taskboard-columns {
    flex-direction: column;
    align-items: stretch;
  }
  .taskboard-column {
    min-width: unset;
    margin-bottom: 30px;
  }
}
</style>