<template>
  <div class="team-bg">
    <div class="team-container">
      <!-- Left Panel: Team List -->
      <div class="team-list-panel">
        <div class="team-header">
          <input class="team-search" type="text" placeholder="What are you looking for?" />
          <nav class="team-breadcrumb">Home / Team Members</nav>
        </div>
        <h2 class="team-title">Team Members</h2>
        <div class="team-list-tools">
          <input type="text" class="team-filter-search" placeholder="Search" />
        </div>
        <table class="team-table">
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Name</th>
              <th>Status <span class="sort-arrow">↓</span></th>
              <th>Email address</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="member in members" :key="member.email" @click="selectMember(member)" :class="{selected: member.email === selectedMember.email}">
              <td><input type="checkbox" /></td>
              <td class="team-user">
                <img :src="member.avatar" class="team-avatar" alt="Avatar" />
                <span class="team-name">{{ member.name }}</span>
                <span class="team-username">@{{ member.username }}</span>
              </td>
              <td>
                <span :class="['team-status', member.status === 'Active' ? 'active' : 'offline']">{{ member.status }}</span>
              </td>
              <td>
                <span>{{ member.email }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- Right Panel: Profile -->
      <div class="team-profile-panel" v-if="selectedMember.name">
        <div class="team-profile-header">
          <h3>Profile</h3>
          <button class="close-btn" @click="selectedMember={}">&times;</button>
        </div>
        <div class="team-profile-body">
          <img :src="selectedMember.avatar" class="profile-img" alt="Profile" />
          <h2 class="profile-name">{{ selectedMember.name }}</h2>
          <div class="profile-role">{{ selectedMember.role }}</div>
          <button class="profile-message">Message</button>
          <div class="profile-section">
            <h4>About</h4>
            <p>{{ selectedMember.about }}</p>
          </div>
          <div class="profile-section">
            <h4>Team</h4>
            <div class="profile-tags">
              <span v-for="tag in selectedMember.team" :key="tag" class="profile-tag">{{ tag }}</span>
            </div>
          </div>
          <div class="profile-section">
            <h4>Contact Information</h4>
            <div class="profile-contact">
              <div class="contact-row">
                <span class="contact-icon">📧</span>
                <a :href="'mailto:' + selectedMember.email">{{ selectedMember.email }}</a>
              </div>
              <div class="contact-row">
                <span class="contact-icon">📞</span>
                <span>{{ selectedMember.phone }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamMembersPage",
  data() {
    return {
      members: [
        {
          name: "John Smith",
          username: "j.smith",
          status: "Active",
          email: "johnsmith@dashco.com",
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
          role: "Product Designer and Design head",
          about:
            "I'm a Product Designer based in Melbourne, Australia. I specialize in product design, Interaction design and design systems and interface design",
          team: ["Design", "Product"],
          phone: "7518-514-852",
        },
        {
          name: "Ahmed Medi",
          username: "ahmed.medi",
          status: "Active",
          email: "ahmedmedi@dashco.com",
          avatar: "https://randomuser.me/api/portraits/men/33.jpg",
          role: "UI Engineer",
          about: "Front-end developer focused on UI frameworks and design systems.",
          team: ["Design"],
          phone: "7518-514-853",
        },
        {
          name: "Mitchell Luo",
          username: "mitchell.luo",
          status: "Active",
          email: "mitchellluo@dashco.com",
          avatar: "https://randomuser.me/api/portraits/men/34.jpg",
          role: "Product Manager",
          about: "Expert in product strategy and user research.",
          team: ["Product"],
          phone: "7518-514-854",
        },
        {
          name: "Milie Nose",
          username: "milie.nose",
          status: "Active",
          email: "milienose@dashco.com",
          avatar: "https://randomuser.me/api/portraits/women/32.jpg",
          role: "QA Lead",
          about: "Quality assurance and testing specialist.",
          team: ["Product"],
          phone: "7518-514-855",
        },
        {
          name: "Aditi Sharma",
          username: "aditi.s",
          status: "Offline",
          email: "aditi.sharma@dashco.com",
          avatar: "https://randomuser.me/api/portraits/women/33.jpg",
          role: "UX Researcher",
          about: "Conducts user interviews and usability tests.",
          team: ["Design"],
          phone: "7518-514-856",
        },
        {
          name: "Irfan Khan",
          username: "irfan.khan",
          status: "Active",
          email: "irfan.khan@dashco.com",
          avatar: "https://randomuser.me/api/portraits/men/35.jpg",
          role: "Developer",
          about: "Full-stack developer.",
          team: ["Product"],
          phone: "7518-514-857",
        },
        {
          name: "Natali Craig",
          username: "natali.craig",
          status: "Offline",
          email: "natalicraig@dashco.com",
          avatar: "https://randomuser.me/api/portraits/women/34.jpg",
          role: "Designer",
          about: "Specialist in branding and visual design.",
          team: ["Design"],
          phone: "7518-514-858",
        },
        {
          name: "Orlando Diggs",
          username: "orlando.diggs",
          status: "Active",
          email: "orlandodiggs@dashco.com",
          avatar: "https://randomuser.me/api/portraits/men/36.jpg",
          role: "Frontend Developer",
          about: "JavaScript and React expert.",
          team: ["Product"],
          phone: "7518-514-859",
        },
        {
          name: "Drew Cano",
          username: "drew.cano",
          status: "Active",
          email: "drewcano@dashco.com",
          avatar: "https://randomuser.me/api/portraits/men/37.jpg",
          role: "Designer",
          about: "UI/UX designer and illustrator.",
          team: ["Design"],
          phone: "7518-514-860",
        },
      ],
      selectedMember: {},
    };
  },
  methods: {
    selectMember(member) {
      this.selectedMember = member;
    },
  },
};
</script>

<style scoped>
:root {
  --dark-green-bg: #112d22;
  --darker-green-panel: #143626;
  --green-accent: #16c995;
  --text-light: #e3eaf2;
  --text-grey: #a7b2c1;
  --text-dark: #22272e;
  --panel-border: #18432c;
  --panel-hover: #115941;
}

.team-bg {
  background: var(--dark-green-bg);
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-family: 'Inter', sans-serif;
}
.team-container {
  display: flex;
  width: 99vw;
  max-width: 1200px;
  min-height: 95vh;
  background: var(--dark-green-bg);
  border-radius: 14px;
  box-shadow: 0 4px 32px #0000002c;
  overflow: hidden;
}
.team-list-panel {
  flex: 2;
  background: var(--darker-green-panel);
  padding: 32px 16px 24px 28px;
  min-width: 340px;
  max-width: 520px;
  border-right: 1px solid var(--panel-border);
  box-sizing: border-box;
}
.team-header {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 10px;
}
.team-search {
  background: #173d2c;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  color: var(--text-light);
  font-size: 1em;
  margin-bottom: 2px;
}
.team-breadcrumb {
  color: var(--text-grey);
  font-size: 0.93em;
  margin-left: 3px;
}
.team-title {
  color: var(--text-light);
  font-size: 1.45em;
  font-weight: 700;
  margin-bottom: 14px;
}
.team-list-tools {
  margin-bottom: 8px;
}
.team-filter-search {
  width: 130px;
  background: #173d2c;
  border: none;
  padding: 7px 12px;
  border-radius: 8px;
  color: var(--text-light);
  font-size: 1em;
}
.team-table {
  width: 100%;
  border-collapse: collapse;
  background: transparent;
}
.team-table th,
.team-table td {
  padding: 11px 8px;
  color: var(--text-light);
  background: transparent;
}
.team-table th {
  font-weight: 600;
  font-size: 1em;
  color: var(--text-grey);
  border-bottom: 1px solid var(--panel-border);
  background: var(--dark-green-bg);
}
.team-table tr {
  cursor: pointer;
  transition: background 0.13s;
}
.team-table tr.selected,
.team-table tr:hover {
  background: var(--panel-hover);
}
.team-table td {
  border-bottom: 1px solid var(--panel-border);
  vertical-align: middle;
}
.team-user {
  display: flex;
  align-items: center;
  gap: 13px;
}
.team-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--panel-border);
}
.team-name {
  font-weight: 600;
  color: var(--text-light);
  margin-right: 3px;
}
.team-username {
  color: var(--text-grey);
  font-size: 0.96em;
}
.team-status {
  padding: 4px 13px;
  border-radius: 14px;
  font-size: 0.98em;
  font-weight: 600;
  background: #194d34;
  color: var(--green-accent);
  display: inline-block;
}
.team-status.active {
  background: #194d34;
  color: var(--green-accent);
}
.team-status.offline {
  background: #194d34;
  color: var(--text-grey);
}
.sort-arrow {
  font-size: 0.9em;
  color: var(--text-grey);
}
.team-profile-panel {
  flex: 1.3;
  background: #173d2c;
  padding: 42px 36px 24px 36px;
  min-width: 320px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border-left: 1px solid var(--panel-border);
}
.team-profile-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}
.team-profile-header h3 {
  color: var(--text-grey);
  font-weight: 700;
  font-size: 1.08em;
  margin: 0;
}
.close-btn {
  background: transparent;
  border: none;
  color: var(--text-grey);
  font-size: 1.7em;
  cursor: pointer;
  margin-left: 8px;
}
.team-profile-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.profile-img {
  width: 130px;
  height: 130px;
  border-radius: 14px;
  object-fit: cover;
  margin-bottom: 18px;
  border: 2px solid var(--panel-border);
  background: var(--panel-hover);
}
.profile-name {
  color: var(--text-light);
  font-size: 1.3em;
  font-weight: 700;
  margin-bottom: 3px;
  text-align: center;
}
.profile-role {
  color: var(--text-grey);
  font-size: 1em;
  font-weight: 500;
  margin-bottom: 7px;
  text-align: center;
}
.profile-message {
  background: #115941;
  color: var(--text-light);
  border: none;
  padding: 6px 18px;
  border-radius: 8px;
  font-weight: 600;
  margin-bottom: 16px;
  font-size: 1em;
  cursor: pointer;
  transition: background 0.2s;
}
.profile-message:hover {
  background: var(--green-accent);
  color: #173d2c;
}
.profile-section {
  width: 100%;
  margin-bottom: 16px;
}
.profile-section h4 {
  color: var(--text-grey);
  font-size: 1.05em;
  font-weight: 600;
  margin-bottom: 4px;
}
.profile-section p {
  color: var(--text-light);
  font-size: 1em;
  margin-bottom: 0;
}
.profile-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.profile-tag {
  background: #194d34;
  color: var(--green-accent);
  border-radius: 8px;
  padding: 4px 13px;
  font-size: 0.97em;
  font-weight: 600;
  margin-bottom: 4px;
}
.profile-contact {
  margin-top: 6px;
}
.contact-row {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 5px;
}
.contact-icon {
  font-size: 1.11em;
  color: var(--green-accent);
}
.profile-contact a {
  color: var(--green-accent);
  text-decoration: underline;
}

@media (max-width: 1100px) {
  .team-container {
    max-width: 99vw;
    min-width: 0;
  }
  .team-list-panel {
    max-width: 100vw;
    min-width: 0;
    border-right: none;
    border-bottom: 1px solid var(--panel-border);
    padding: 24px 8px 18px 8px;
  }
  .team-profile-panel {
    min-width: 0;
    padding: 32px 12px 18px 12px;
    border-left: none;
    border-top: 1px solid var(--panel-border);
  }
}
@media (max-width: 800px) {
  .team-container {
    flex-direction: column;
  }
  .team-list-panel {
    padding: 16px 6px 10px 6px;
  }
  .team-profile-panel {
    padding: 18px 3px 10px 3px;
  }
  .profile-img {
    width: 80px;
    height: 80px;
    margin-bottom: 10px;
  }
  .profile-name {
    font-size: 1.11em;
    margin-bottom: 1px;
  }
  .team-table th,
  .team-table td {
    padding: 8px 5px;
    font-size: 0.94em;
  }
}
</style>