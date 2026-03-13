const resumeData = {
  name: "你的名字",
  title: "前端开发工程师 / 产品型开发者",
  summary:
    "我擅长将业务需求快速落地为可用产品，关注用户体验和技术质量，拥有从 0 到 1 的完整项目交付经验。",
  resumeLink: "#",
  about:
    "这里可以写你的职业故事，例如：累计 3 年互联网产品研发经验，独立负责过官网、运营活动页、后台系统等项目，熟悉跨团队协作与敏捷开发流程。",
  avatar:
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
  stats: [
    { label: "工作年限", value: "3+ 年" },
    { label: "已完成项目", value: "20+" },
    { label: "常用技术", value: "React / Node.js" }
  ],
  skills: ["JavaScript / TypeScript", "React / Vue", "Node.js / Express", "UI 设计基础"],
  projects: [
    {
      name: "个人作品集站点",
      description: "支持多主题切换与动态内容配置，提升个人展示的专业度。",
      link: "#"
    },
    {
      name: "数据可视化看板",
      description: "基于 ECharts 构建实时业务看板，实现关键指标秒级刷新。",
      link: "#"
    },
    {
      name: "招聘流程管理工具",
      description: "协助 HR 团队将筛选和面试流程线上化，提升效率 40%。",
      link: "#"
    }
  ],
  timeline: [
    {
      title: "某科技公司 · 前端开发工程师",
      meta: "2023 - 至今",
      details: "负责官网重构与业务后台搭建，推动组件化和自动化发布流程。"
    },
    {
      title: "某互联网公司 · 前端开发",
      meta: "2021 - 2023",
      details: "参与核心产品迭代，主导多个营销活动页面与数据分析模块开发。"
    },
    {
      title: "某大学 · 计算机科学与技术",
      meta: "2017 - 2021",
      details: "主修信息系统、数据库、软件工程，毕业设计为在线协作平台。"
    }
  ],
  contact: {
    email: "yourname@example.com",
    phone: "+86 138-0000-0000",
    location: "中国 · 上海",
    socials: [
      { label: "GitHub", href: "https://github.com/" },
      { label: "LinkedIn", href: "https://www.linkedin.com/" },
      { label: "Blog", href: "#" }
    ]
  }
};

const setText = (id, value) => {
  document.getElementById(id).textContent = value;
};

setText("name", resumeData.name);
setText("title", resumeData.title);
setText("summary", resumeData.summary);
setText("aboutText", resumeData.about);
setText("email", `邮箱：${resumeData.contact.email}`);
setText("phone", `电话：${resumeData.contact.phone}`);
setText("location", `地区：${resumeData.contact.location}`);
setText("footerText", `© ${new Date().getFullYear()} ${resumeData.name} · Personal Resume Demo`);

document.getElementById("avatar").src = resumeData.avatar;

const resumeLink = document.getElementById("resumeLink");
resumeLink.href = resumeData.resumeLink;
resumeLink.setAttribute("aria-disabled", resumeData.resumeLink === "#");

const statsEl = document.getElementById("stats");
resumeData.stats.forEach((item) => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${item.value}</strong><span>${item.label}</span>`;
  statsEl.appendChild(li);
});

const skillsEl = document.getElementById("skills");
resumeData.skills.forEach((skill) => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsEl.appendChild(li);
});

const projectGrid = document.getElementById("projectGrid");
resumeData.projects.forEach((project) => {
  const article = document.createElement("article");
  article.className = "project";
  article.innerHTML = `
    <h4>${project.name}</h4>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank" rel="noopener">查看详情 →</a>
  `;
  projectGrid.appendChild(article);
});

const timelineList = document.getElementById("timelineList");
resumeData.timeline.forEach((item) => {
  const div = document.createElement("div");
  div.className = "timeline-item";
  div.innerHTML = `
    <h4>${item.title}</h4>
    <p class="meta">${item.meta}</p>
    <p>${item.details}</p>
  `;
  timelineList.appendChild(div);
});

const socialLinks = document.getElementById("socialLinks");
resumeData.contact.socials.forEach((social) => {
  const a = document.createElement("a");
  a.href = social.href;
  a.target = "_blank";
  a.rel = "noopener";
  a.textContent = social.label;
  socialLinks.appendChild(a);
});

document.getElementById("copyBtn").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(resumeData.contact.email);
    alert("邮箱已复制到剪贴板");
  } catch {
    alert("复制失败，请手动复制邮箱");
  }
});
