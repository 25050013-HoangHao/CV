const menuToggle = document.querySelector("#menu-toggle");
const siteNav = document.querySelector("#site-nav");
const themeToggle = document.querySelector("#theme-toggle");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
const backToTop = document.querySelector("#back-to-top");
const avatarSwitch = document.querySelector("#avatar-switch");
const profilePhoto = document.querySelector("#profile-photo");
const profileFallback = document.querySelector("#profile-fallback");
const contactEmailLink = document.querySelector("#contact-email-link");
const contactSubmit = document.querySelector("#contact-submit");
const profileSkills = document.querySelector("#profile-skills");
const profileProjects = document.querySelector("#profile-projects");
const projectFilters = document.querySelector("#project-filters");
const projectDisclaimer = document.querySelector("#project-disclaimer");
const haoSkillsMarkup = profileSkills.innerHTML;
const haoProjectsMarkup = profileProjects.innerHTML;
const haoProjectDisclaimer = projectDisclaimer.textContent;
const tienSkillsMarkup = `
    <article class="skill-card"><span class="skill-index">01</span><h3>HTML</h3><p>Cấu trúc trang, semantic HTML và khả năng truy cập cơ bản.</p><span class="skill-level">Đang thực hành</span></article>
    <article class="skill-card"><span class="skill-index">02</span><h3>CSS</h3><p>Flexbox, Grid, responsive layout và hiệu ứng chuyển động.</p><span class="skill-level">Đang thực hành</span></article>
    <article class="skill-card"><span class="skill-index">03</span><h3>JavaScript</h3><p>DOM, sự kiện, kiểm tra biểu mẫu và tương tác giao diện.</p><span class="skill-level">Đang học</span></article>
    <article class="skill-card"><span class="skill-index">+</span><h3>Kỹ năng khác</h3><p>Thông tin về Python, Java và công cụ khác chưa được cung cấp.</p><span class="skill-level">Chưa có thông tin</span></article>
`;
const tienProjectsMarkup = `
    <article class="project-card" data-category="web">
        <img class="project-image" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85" alt="Minh họa giao diện portfolio trên màn hình máy tính" loading="lazy">
        <div class="project-content"><p class="project-meta">01 / WEBSITE CÁ NHÂN</p><h3>Portfolio cá nhân của Tạ Bá Tiến</h3><p>Trang giới thiệu hồ sơ, kỹ năng, mục tiêu và các dự án học tập; tối ưu cho thiết bị di động.</p><div class="tag-list"><span class="tag">HTML</span><span class="tag">CSS</span><span class="tag">JavaScript</span></div><a class="project-link" href="#home">Đang xem portfolio</a></div>
    </article>
    <article class="project-card" data-category="javascript">
        <img class="project-image" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=85" alt="Minh họa bảng điều khiển và dữ liệu" loading="lazy">
        <div class="project-content"><p class="project-meta">02 / MINI PROJECT</p><h3>Form liên hệ có kiểm tra dữ liệu</h3><p>Biểu mẫu kiểm tra họ tên, email và lời nhắn bằng JavaScript, sau đó mở ứng dụng email để gửi.</p><div class="tag-list"><span class="tag">HTML</span><span class="tag">CSS</span><span class="tag">JavaScript</span></div><a class="project-link" href="#contact">Xem form liên hệ</a></div>
    </article>
`;

const profiles = {
    hao: {
        name: "Phạm Hoàng Hảo",
        role: "Sinh viên Công nghệ thông tin",
        intro: "Tôi yêu thích lập trình, công nghệ và giải quyết các vấn đề thực tế bằng những giải pháp sáng tạo. Tôi luôn sẵn sàng học hỏi và phát triển bản thân.",
        aboutIntro: "Tôi là sinh viên ngành Công nghệ thông tin, có niềm đam mê với lập trình và phát triển các ứng dụng phần mềm.",
        aboutDetail: "Tôi mong muốn được tham gia các dự án thực tế, nâng cao kiến thức chuyên môn, kỹ năng làm việc nhóm và khả năng giải quyết vấn đề.",
        major: "Công nghệ thông tin",
        email: "25050013@student.bdu.edu.vn",
        aboutNote: "Mình đang xây dựng nền tảng chuyên môn qua việc học và thực hành các sản phẩm web nhỏ. Mục tiêu là biến kiến thức trên lớp thành trải nghiệm có ích cho người dùng.",
        careerGoal: "Trong thời gian tới, mình muốn củng cố kiến thức phát triển web, rèn tư duy giải quyết vấn đề và tham gia những dự án thực tế để trưởng thành thành một lập trình viên có trách nhiệm.",
        educationRole: "Sinh viên Công nghệ thông tin",
        educationSchool: "Đại học Bình Dương (BDU) · Đang theo học",
        educationNote: "Tập trung vào nền tảng lập trình và phát triển phần mềm.",
        experienceTitle: "Chưa có",
        experienceNote: "Mình đang tìm cơ hội thực hành, tham gia hoạt động và làm việc nhóm.",
        certificate: "Chưa có",
        award: "Chưa có",
        hobby: "Đang cập nhật",
        highlightsLabel: "ĐIỀU LÀM NÊN MỘT HẢO",
        photo: "hoanghao.jpg"
    },
    tien: {
        name: "Tạ Bá Tiến",
        role: "Sinh viên Công nghệ thông tin",
        intro: "Tôi là sinh viên Công nghệ thông tin, yêu thích lập trình và công nghệ. Tôi luôn sẵn sàng học hỏi, rèn luyện kỹ năng và tìm cách giải quyết các vấn đề thực tế.",
        aboutIntro: "Tôi là sinh viên ngành Công nghệ thông tin, có niềm đam mê với lập trình và phát triển các ứng dụng phần mềm.",
        aboutDetail: "Tôi mong muốn được tham gia các dự án thực tế, nâng cao kiến thức chuyên môn, kỹ năng làm việc nhóm và khả năng giải quyết vấn đề.",
        major: "Công nghệ thông tin",
        email: "25050075@student.bdu.edu.vn",
        aboutNote: "Mình đang xây dựng nền tảng chuyên môn qua việc học và thực hành các sản phẩm web nhỏ. Mục tiêu là biến kiến thức trên lớp thành trải nghiệm có ích cho người dùng.",
        careerGoal: "Trong thời gian tới, mình muốn củng cố kiến thức phát triển web, rèn tư duy giải quyết vấn đề và tham gia những dự án thực tế để trưởng thành thành một lập trình viên có trách nhiệm.",
        educationRole: "Sinh viên Công nghệ thông tin",
        educationSchool: "Đại học Bình Dương (BDU) · Đang theo học",
        educationNote: "Tập trung vào nền tảng lập trình và phát triển phần mềm.",
        experienceTitle: "Chưa có",
        experienceNote: "Mình đang tìm cơ hội thực hành, tham gia hoạt động và làm việc nhóm.",
        certificate: "Chưa có",
        award: "Chưa có",
        hobby: "Đang cập nhật",
        highlightsLabel: "ĐIỀU LÀM NÊN MỘT TẠ BÁ TIẾN",
        photo: "batien.jpg"
    }
};

let activeProfile = "hao";

function switchProfile(profileKey) {
    const profile = profiles[profileKey];
    activeProfile = profileKey;

    document.querySelector("#profile-name").textContent = profile.name;
    document.querySelector("#profile-role").textContent = profile.role;
    document.querySelector("#profile-intro").textContent = profile.intro;
    document.querySelector("#about-intro").textContent = profile.aboutIntro;
    document.querySelector("#about-detail").textContent = profile.aboutDetail;
    document.querySelector("#about-name").textContent = profile.name;
    document.querySelector("#about-major").textContent = profile.major;
    document.querySelector("#about-email").textContent = profile.email || "Chưa cập nhật";
    document.querySelector("#about-note").textContent = profile.aboutNote;
    document.querySelector("#career-goal").textContent = profile.careerGoal;
    document.querySelector("#education-role").textContent = profile.educationRole;
    document.querySelector("#education-school").textContent = profile.educationSchool;
    document.querySelector("#education-note").textContent = profile.educationNote;
    document.querySelector("#experience-title").textContent = profile.experienceTitle;
    document.querySelector("#experience-note").textContent = profile.experienceNote;
    document.querySelector("#highlights-label").textContent = profile.highlightsLabel;
    document.querySelector("#certificate-status").textContent = profile.certificate;
    document.querySelector("#award-status").textContent = profile.award;
    document.querySelector("#hobby-status").textContent = profile.hobby;
    document.querySelector("#footer-name").textContent = profile.name;

    const isHao = profileKey === "hao";
    const hasPhoto = Boolean(profile.photo);
    profileSkills.innerHTML = isHao
        ? haoSkillsMarkup
        : tienSkillsMarkup;
    profileProjects.innerHTML = isHao
        ? haoProjectsMarkup
        : tienProjectsMarkup;
    projectDisclaimer.textContent = isHao
        ? haoProjectDisclaimer
        : "Các dự án được trình bày theo nội dung portfolio học tập.";
    projectFilters.querySelectorAll(".filter-button").forEach((button) => {
        const isAllFilter = button.dataset.filter === "all";
        button.disabled = !isHao;
        button.classList.toggle("active", isAllFilter);
        button.setAttribute("aria-pressed", String(isAllFilter));
    });
    profilePhoto.hidden = !hasPhoto;
    profileFallback.hidden = hasPhoto;
    if (hasPhoto) {
        profilePhoto.src = profile.photo;
    }
    profilePhoto.alt = hasPhoto ? `Ảnh đại diện ${profile.name}` : "";
    avatarSwitch.setAttribute("aria-label", isHao ? "Chuyển sang hồ sơ Tạ Bá Tiến" : "Chuyển về hồ sơ Phạm Hoàng Hảo");
    avatarSwitch.title = isHao ? "Nhấn để xem hồ sơ Tạ Bá Tiến" : "Nhấn để xem hồ sơ Phạm Hoàng Hảo";

    contactEmailLink.textContent = profile.email || "Email chưa cập nhật";
    contactEmailLink.href = profile.email ? `mailto:${profile.email}` : "#contact-form";
    contactSubmit.disabled = !profile.email;
    contactForm.reset();
    formStatus.textContent = profile.email ? "" : "Hồ sơ này chưa có email nhận liên hệ.";
}

avatarSwitch.addEventListener("click", () => {
    switchProfile(activeProfile === "hao" ? "tien" : "hao");
});

menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Đóng menu" : "Mở menu");
});

siteNav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
        siteNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Mở menu");
    }
});

themeToggle.addEventListener("click", () => {
    const isDark = document.body.dataset.theme !== "dark";
    document.body.dataset.theme = isDark ? "dark" : "light";
    themeToggle.setAttribute("aria-label", isDark ? "Bật giao diện sáng" : "Bật giao diện tối");
    localStorage.setItem("portfolio-theme", document.body.dataset.theme);
});

if (localStorage.getItem("portfolio-theme") === "dark") {
    document.body.dataset.theme = "dark";
    themeToggle.setAttribute("aria-label", "Bật giao diện sáng");
}

document.querySelector("#print-cv")?.addEventListener("click", () => window.print());
document.querySelector("#current-year").textContent = new Date().getFullYear();

document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        document.querySelectorAll(".filter-button").forEach((item) => {
            const isActive = item === button;
            item.classList.toggle("active", isActive);
            item.setAttribute("aria-pressed", String(isActive));
        });
        document.querySelectorAll(".project-card").forEach((card) => {
            card.hidden = filter !== "all" && card.dataset.category !== filter;
        });
    });
});

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    formStatus.textContent = "";

    const recipient = profiles[activeProfile].email;
    if (!recipient) {
        formStatus.textContent = "Hồ sơ này chưa có email nhận liên hệ.";
        return;
    }

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        formStatus.textContent = "Vui lòng kiểm tra lại các trường thông tin.";
        return;
    }

    const formData = new FormData(contactForm);
    const subject = `Portfolio contact: ${formData.get("name")}`;
    const message = `${formData.get("message")}\n\nEmail phản hồi: ${formData.get("email")}`;
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    formStatus.textContent = "Đang mở ứng dụng email để bạn gửi lời nhắn.";
    window.location.href = mailto;
});

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll("section, .skill-card, .project-card, .timeline-item").forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});

window.addEventListener("scroll", () => {
    backToTop.classList.toggle("visible", window.scrollY > 500);
}, { passive: true });

backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
