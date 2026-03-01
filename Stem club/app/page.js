"use client";

import { useEffect, useMemo, useState } from "react";

const content = {
  kk: {
    nav: { directions: "Бағыттар", work: "Жобалар", team: "Team", join: "Бізге қосыл!" },
    hero: {
      eyebrow: "Khoja Akhmet Yassawi University",
      title1: "Инновациялар әлеміне",
      title2: "қош келдің!",
      text: "Қожа Ахмет Ясауи атындағы ХҚТУ-дың STEM AYU клубында өз болашағыңды бүгіннен баста.",
      cta: "Клубқа мүше болу",
    },
    sections: {
      directions: "Клуб бағыттары",
      stats: "Біздің нәтижелер",
      work: "Біздің жұмыстар",
      testimonials: "Пікірлер",
      joinTitle: "Сұрақтарың бар ма?",
      joinText: "Бізбен хабарласып, толық ақпарат ал немесе төмендегі форманы толтырып, бірден тіркел.",
      socials: "Бізді әлеуметтік желілерде бақыла:",
      about: "About / Team",
      form: "Клубқа тіркелу анкетасы",
    },
    form: {
      name: "Аты-жөніңіз",
      specialty: "Мамандығыңыз",
      course: "Оқу курсы",
      email: "Email поштаңыз",
      phone: "Телефон нөміріңіз",
      reason: "Неліктен біздің клубқа қосылғыңыз келеді?",
      pName: "Мысалы: Серіков Азамат",
      pSpec: "Мысалы: Компьютерлік инженерия",
      pCourse: "Мысалы: 2",
      pEmail: "Sizdin.pochta@example.com",
      pPhone: "+7 (7XX) XXX-XX-XX",
      pReason: "Қысқаша өз ойыңызды жазыңыз...",
      submit: "Анкетаны жіберу",
      sending: "Жіберілуде...",
      success: "Өтінім сәтті жіберілді. Жақында хабарласамыз.",
      error: "Жіберу кезінде қате болды. Қайта көріңіз.",
    },
    footer: "© 2026 STEM AYU Club. Барлық құқықтар қорғалған.",
    directions: [
      { icon: "🤖", title: "Робототехника және AI", text: "Роботтарды құрастыру, оларды бағдарламалау және жасанды интеллект технологияларын зерттеу." },
      { icon: "💻", title: "Бағдарламалау және Web", text: "Мобильді қосымшалар, веб-сайттар жасау және алгоритмдік есептерді шешу." },
      { icon: "🔬", title: "Ғылыми зерттеулер", text: "Инженерия, физика және химия салаларында ғылыми жобалармен айналысып, конференцияларға қатысу." },
      { icon: "🏆", title: "Хакатондар мен жарыстар", text: "Республикалық және халықаралық деңгейдегі STEM жарыстарына команда болып дайындалу." },
    ],
    stats: [
      { value: 120, label: "Клуб мүшесі" },
      { value: 24, label: "Жоба орындалды" },
      { value: 18, label: "Жүлде мен марапат" },
      { value: 8, label: "Халықаралық серіктес" },
    ],
    workItems: [
      { title: "Smart Greenhouse", tag: "IoT + AI", text: "Arduino және сенсорлар арқылы автоматтандырылған жылыжай прототипі." },
      { title: "STEM Web Platform", tag: "Web App", text: "Клуб мүшелеріне арналған тапсырма, портфолио және менторлық платформасы." },
      { title: "Line Follower Bot", tag: "Robotics", text: "Жарысқа дайын жоғары жылдамдықты сызық бойымен жүретін робот." },
      { title: "Research Dashboard", tag: "Data", text: "Ғылыми жобалар метрикасын визуалдайтын аналитикалық панель." },
    ],
    testimonials: [
      { name: "Айару Т.", role: "Клуб мүшесі", video: "https://www.youtube.com/embed/rOAsYNtPAmQ" },
      { name: "Нұрдәулет А.", role: "Жоба лидері", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    ],
    cursor: { join: "Join", view: "View", open: "Open", send: "Send", profile: "Profile" },
  },
  ru: {
    nav: { directions: "Направления", work: "Проекты", team: "Команда", join: "Присоединиться" },
    hero: {
      eyebrow: "Khoja Akhmet Yassawi University",
      title1: "Добро пожаловать",
      title2: "в мир инноваций!",
      text: "В клубе STEM AYU при МКТУ им. Ходжи Ахмеда Ясави начни строить свое будущее уже сегодня.",
      cta: "Стать участником",
    },
    sections: {
      directions: "Направления клуба",
      stats: "Наши результаты",
      work: "Наши работы",
      testimonials: "Отзывы",
      joinTitle: "Есть вопросы?",
      joinText: "Свяжитесь с нами для подробной информации или заполните форму ниже и зарегистрируйтесь сразу.",
      socials: "Следите за нами в соцсетях:",
      about: "About / Team",
      form: "Форма регистрации в клуб",
    },
    form: {
      name: "ФИО",
      specialty: "Специальность",
      course: "Курс",
      email: "Email",
      phone: "Телефон",
      reason: "Почему вы хотите вступить в клуб?",
      pName: "Например: Сериков Азамат",
      pSpec: "Например: Компьютерная инженерия",
      pCourse: "Например: 2",
      pEmail: "your.email@example.com",
      pPhone: "+7 (7XX) XXX-XX-XX",
      pReason: "Кратко напишите вашу мотивацию...",
      submit: "Отправить анкету",
      sending: "Отправка...",
      success: "Заявка успешно отправлена. Скоро свяжемся с вами.",
      error: "Ошибка при отправке. Попробуйте снова.",
    },
    footer: "© 2026 STEM AYU Club. Все права защищены.",
    directions: [
      { icon: "🤖", title: "Робототехника и AI", text: "Сборка роботов, программирование и изучение технологий искусственного интеллекта." },
      { icon: "💻", title: "Программирование и Web", text: "Создание мобильных приложений, сайтов и решение алгоритмических задач." },
      { icon: "🔬", title: "Научные исследования", text: "Проекты в инженерии, физике и химии с участием в конференциях." },
      { icon: "🏆", title: "Хакатоны и соревнования", text: "Подготовка команд к республиканским и международным STEM-соревнованиям." },
    ],
    stats: [
      { value: 120, label: "Участников клуба" },
      { value: 24, label: "Реализованных проектов" },
      { value: 18, label: "Наград и призов" },
      { value: 8, label: "Международных партнеров" },
    ],
    workItems: [
      { title: "Smart Greenhouse", tag: "IoT + AI", text: "Прототип автоматизированной теплицы на Arduino и сенсорах." },
      { title: "STEM Web Platform", tag: "Web App", text: "Платформа задач, портфолио и менторства для участников клуба." },
      { title: "Line Follower Bot", tag: "Robotics", text: "Скоростной робот для соревнований по следованию линии." },
      { title: "Research Dashboard", tag: "Data", text: "Панель аналитики с визуализацией метрик научных проектов." },
    ],
    testimonials: [
      { name: "Айару Т.", role: "Участница клуба", video: "https://www.youtube.com/embed/rOAsYNtPAmQ" },
      { name: "Нурдаулет А.", role: "Лидер проекта", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    ],
    cursor: { join: "Join", view: "View", open: "Open", send: "Send", profile: "Profile" },
  },
  en: {
    nav: { directions: "Directions", work: "Work", team: "Team", join: "Join us" },
    hero: {
      eyebrow: "Khoja Akhmet Yassawi University",
      title1: "Welcome to the",
      title2: "world of innovation!",
      text: "Start building your future today with the STEM AYU club at Khoja Akhmet Yassawi University.",
      cta: "Become a member",
    },
    sections: {
      directions: "Club Directions",
      stats: "Our Impact",
      work: "Featured Work",
      testimonials: "Testimonials",
      joinTitle: "Any questions?",
      joinText: "Contact us for full details or complete the form below and register instantly.",
      socials: "Follow us on social media:",
      about: "About / Team",
      form: "Club Registration Form",
    },
    form: {
      name: "Full name",
      specialty: "Specialty",
      course: "Year",
      email: "Email",
      phone: "Phone",
      reason: "Why do you want to join our club?",
      pName: "Example: Azamat Serikov",
      pSpec: "Example: Computer Engineering",
      pCourse: "Example: 2",
      pEmail: "your.email@example.com",
      pPhone: "+7 (7XX) XXX-XX-XX",
      pReason: "Write your motivation briefly...",
      submit: "Submit form",
      sending: "Sending...",
      success: "Application sent successfully. We will contact you soon.",
      error: "Submission failed. Please try again.",
    },
    footer: "© 2026 STEM AYU Club. All rights reserved.",
    directions: [
      { icon: "🤖", title: "Robotics and AI", text: "Build robots, code systems, and explore artificial intelligence technologies." },
      { icon: "💻", title: "Programming and Web", text: "Create mobile apps, websites, and solve algorithmic problems." },
      { icon: "🔬", title: "Scientific Research", text: "Run projects in engineering, physics, and chemistry, with conference participation." },
      { icon: "🏆", title: "Hackathons and Competitions", text: "Prepare teams for national and international STEM competitions." },
    ],
    stats: [
      { value: 120, label: "Club Members" },
      { value: 24, label: "Projects Delivered" },
      { value: 18, label: "Awards Won" },
      { value: 8, label: "Global Partners" },
    ],
    workItems: [
      { title: "Smart Greenhouse", tag: "IoT + AI", text: "An automated greenhouse prototype powered by Arduino and sensors." },
      { title: "STEM Web Platform", tag: "Web App", text: "A club platform for tasks, portfolios, and mentoring workflows." },
      { title: "Line Follower Bot", tag: "Robotics", text: "A high-speed line follower robot built for competition tracks." },
      { title: "Research Dashboard", tag: "Data", text: "An analytics dashboard that visualizes student research metrics." },
    ],
    testimonials: [
      { name: "Aiaru T.", role: "Club Member", video: "https://www.youtube.com/embed/rOAsYNtPAmQ" },
      { name: "Nurdaulet A.", role: "Project Lead", video: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    ],
    cursor: { join: "Join", view: "View", open: "Open", send: "Send", profile: "Profile" },
  },
};

const teamMembers = ["Қалданбек Исмайл", "Ермекұлы Бейбарыс"];

export default function HomePage() {
  const [lang, setLang] = useState("kk");
  const [loading, setLoading] = useState(true);
  const [cursor, setCursor] = useState({ x: -100, y: -100, text: "" });
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [submitting, setSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: "", message: "" });

  const t = useMemo(() => content[lang], [lang]);

  const renderTitle = (text) =>
    text.split("").map((ch, idx) => (
      <span className="ltr" style={{ transitionDelay: `${idx * 24}ms` }} key={`${ch}-${idx}`}>
        {ch === " " ? "\u00A0" : ch}
      </span>
    ));

  useEffect(() => {
    const onMove = (e) => {
      const target = e.target.closest("[data-cursor]");
      setCursor({
        x: e.clientX,
        y: e.clientY,
        text: target ? target.getAttribute("data-cursor") || "" : "",
      });
      setSpotlight({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const magneticItems = document.querySelectorAll("[data-magnetic]");
    const magneticCleanup = [];
    magneticItems.forEach((item) => {
      const onMagMove = (e) => {
        const rect = item.getBoundingClientRect();
        const moveX = (e.clientX - (rect.left + rect.width / 2)) * 0.2;
        const moveY = (e.clientY - (rect.top + rect.height / 2)) * 0.2;
        item.style.transform = `translate(${moveX}px, ${moveY}px)`;
      };
      const onMagLeave = () => {
        item.style.transform = "translate(0, 0)";
      };
      item.addEventListener("mousemove", onMagMove);
      item.addEventListener("mouseleave", onMagLeave);
      magneticCleanup.push(() => {
        item.removeEventListener("mousemove", onMagMove);
        item.removeEventListener("mouseleave", onMagLeave);
      });
    });

    const countObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const node = entry.target;
          const target = Number(node.getAttribute("data-count") || 0);
          const duration = 1400;
          const start = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            node.textContent = Math.round(target * eased).toString();
            if (progress < 1) requestAnimationFrame(tick);
            else node.textContent = target.toString();
          };

          requestAnimationFrame(tick);
          observer.unobserve(node);
        });
      },
      { threshold: 0.4 }
    );

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in-view");
        });
      },
      { threshold: 0.2 }
    );

    const onScroll = () => {
      const y = window.scrollY;
      document.querySelectorAll("[data-parallax]").forEach((node) => {
        const speed = Number(node.getAttribute("data-parallax")) || 0;
        node.style.transform = `translate3d(0, ${y * speed}px, 0)`;
      });
    };

    document.querySelectorAll(".reveal-section, .reveal-item").forEach((el) => revealObserver.observe(el));
    document.querySelectorAll(".count-num").forEach((el) => countObserver.observe(el));

    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onScroll, { passive: true });

    const timer = setTimeout(() => setLoading(false), 900);
    const forceReveal = setTimeout(() => {
      document.querySelectorAll(".reveal-section, .reveal-item").forEach((el) => el.classList.add("in-view"));
    }, 1100);
    onScroll();

    return () => {
      clearTimeout(timer);
      clearTimeout(forceReveal);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      revealObserver.disconnect();
      countObserver.disconnect();
      magneticCleanup.forEach((fn) => fn());
    };
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setFormStatus({ type: "", message: "" });
    const form = e.currentTarget;

    try {
      const res = await fetch("https://formspree.io/f/mblzyygo", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.reset();
        setFormStatus({ type: "success", message: t.form.success });
      } else {
        setFormStatus({ type: "error", message: t.form.error });
      }
    } catch {
      setFormStatus({ type: "error", message: t.form.error });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="snap-story">
      <div className="spotlight-mask" style={{ "--sx": `${spotlight.x}%`, "--sy": `${spotlight.y}%` }} />

      <div className={`preloader ${loading ? "is-active" : ""}`}>
        <div className="loader-morph" />
        <div className="preloader-mark">STEM AYU</div>
      </div>

      <div className={`tr-cursor ${cursor.text ? "has-text" : ""}`} style={{ transform: `translate(${cursor.x}px, ${cursor.y}px)` }}>
        {cursor.text}
      </div>

      <header className="header">
        <nav className="container nav">
          <a href="#home" className="logo">
            <img src="/stem_club.png" alt="STEM AYU Club Logo" />
            <span>STEM AYU</span>
          </a>
          <ul>
            <li><a href="#directions">{t.nav.directions}</a></li>
            <li><a href="#chairman">{t.nav.team}</a></li>
            <li><a href="#registration" className="btn btn-nav" data-cursor={t.cursor.join} data-magnetic>{t.nav.join}</a></li>
          </ul>
          <div className="lang-switch" aria-label="Language switcher">
            {[{ code: "kk", label: "ҚАЗ" }, { code: "ru", label: "РУС" }, { code: "en", label: "ENG" }].map((item) => (
              <button
                type="button"
                key={item.code}
                className={`lang-btn ${lang === item.code ? "active" : ""}`}
                onClick={() => setLang(item.code)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <section className="hero story-section" id="home">
        <div className="hero-bg-glow" data-parallax="-0.08" />
        <div className="container hero-content">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1><span>{t.hero.title1}</span><span>{t.hero.title2}</span></h1>
          <p>{t.hero.text}</p>
          <a href="#registration" className="btn btn-primary" data-cursor={t.cursor.join} data-magnetic>{t.hero.cta}</a>
        </div>
      </section>

      <section className="marquee-wrap" aria-hidden="true">
        <div className="marquee-track">
          <span>STEM AYU</span><span>•</span><span>ROBOTICS</span><span>•</span><span>WEB</span><span>•</span><span>RESEARCH</span><span>•</span><span>HACKATHON</span><span>•</span><span>STEM AYU</span>
        </div>
      </section>
      <section className="marquee-wrap reverse" aria-hidden="true">
        <div className="marquee-track">
          <span>INNOVATION</span><span>•</span><span>DESIGN</span><span>•</span><span>ENGINEERING</span><span>•</span><span>SCIENCE</span><span>•</span><span>TEAMWORK</span><span>•</span><span>INNOVATION</span>
        </div>
      </section>

      <section id="directions" className="directions-section reveal-section story-section">
        <div className="container">
          <h2 className="tr-title-reveal letter-reveal">{renderTitle(t.sections.directions)}</h2>
          <div className="cards-container">
            {t.directions.map((item, idx) => (
              <article
                className={`card ${idx % 2 === 0 ? "card-left" : "card-right"}`}
                key={item.title}
                style={{ animationDelay: `${idx * 120}ms` }}
                data-cursor={t.cursor.view}
              >
                <div className="card-top">
                  <div className="card-icon">{item.icon}</div>
                  <div className="card-index">{String(idx + 1).padStart(2, "0")}</div>
                </div>
                <div className="card-body">
                  <h3 className="card-title"><span>{item.title}</span></h3>
                  <p className="card-copy">{item.text}</p>
                </div>
                <div className="card-arrow" aria-hidden="true">↗</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="join" className="join-section reveal-section story-section">
        <div className="container">
          <h2 className="tr-title-reveal letter-reveal">{renderTitle(t.sections.joinTitle)}</h2>
          <p>{t.sections.joinText}</p>
          <div className="contact-details">
            <p>📧 Email: <a href="mailto:stemayuclub@gmail.com">stemayuclub@gmail.com</a></p>
            <p>📞 Телефон: <a href="tel:+77078611213">+7 707 861 12 13</a></p>
          </div>
          <div className="socials">
            <p>{t.sections.socials}</p>
            <a href="https://www.instagram.com/stem_ayu/" target="_blank" rel="noopener noreferrer" data-cursor={t.cursor.open}>Instagram</a>
            <span>•</span>
            <a href="https://t.me/stemayuclub" target="_blank" rel="noopener noreferrer" data-cursor={t.cursor.open}>Telegram</a>
          </div>
        </div>
      </section>

      <section id="chairman" className="about-section reveal-section story-section">
        <div className="container">
          <h2 className="tr-title-reveal letter-reveal">{renderTitle(t.sections.about)}</h2>
          <div className="team-grid">
            {teamMembers.map((name, idx) => (
              <article className="team-card reveal-item" key={name} data-cursor={t.cursor.profile}>
                <div className="team-avatar">{String(idx + 1).padStart(2, "0")}</div>
                <h3>{name}</h3>
                {name === "Қалданбек Исмайл" ? <p className="team-role">Клуб төрағасы</p> : null}
                {name === "Ермекұлы Бейбарыс" ? <p className="team-role">Клуб орынбасары</p> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="registration" className="registration-section reveal-section story-section">
        <div className="container">
          <h2 className="tr-title-reveal letter-reveal">{renderTitle(t.sections.form)}</h2>
          <form className="registration-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{t.form.name}</label>
              <input type="text" id="name" name="name" placeholder={t.form.pName} required />
            </div>
            <div className="form-group">
              <label htmlFor="specialty">{t.form.specialty}</label>
              <input type="text" id="specialty" name="specialty" placeholder={t.form.pSpec} required />
            </div>
            <div className="form-group">
              <label htmlFor="course">{t.form.course}</label>
              <input type="number" id="course" name="course" min="1" max="5" placeholder={t.form.pCourse} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">{t.form.email}</label>
              <input type="email" id="email" name="email" placeholder={t.form.pEmail} required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">{t.form.phone}</label>
              <input type="tel" id="phone" name="phone" placeholder={t.form.pPhone} required />
            </div>
            <div className="form-group">
              <label htmlFor="reason">{t.form.reason}</label>
              <textarea id="reason" name="reason" rows="4" placeholder={t.form.pReason} />
            </div>
            <button type="submit" className="btn btn-primary btn-submit" data-cursor={t.cursor.send} data-magnetic disabled={submitting}>
              {submitting ? t.form.sending : t.form.submit}
            </button>
            {formStatus.message ? <p className={`form-status ${formStatus.type}`}>{formStatus.message}</p> : null}
          </form>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>📧 <a href="mailto:stemayuclub@gmail.com">stemayuclub@gmail.com</a> | 📞 <a href="tel:+77078611213">+7 707 861 12 13</a></p>
          <p>{t.footer}</p>
          <p>Қожа Ахмет Ясауи атындағы Халықаралық қазақ-түрік университеті</p>
        </div>
      </footer>

    </main>
  );
}

