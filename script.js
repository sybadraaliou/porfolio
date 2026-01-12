function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// --- Language translation logic ---
const translations = {
  'nav.about': { fr: 'À propos', en: 'About' },
  'nav.experience': { fr: 'Expériences', en: 'Experience' },
  'nav.projects': { fr: 'Projets', en: 'Projects' },
  'nav.contact': { fr: 'Contact', en: 'Contact' },
  'profile.greeting': { fr: "Bonjour, je suis", en: "Hello, I'm" },
  'profile.role': { fr: 'Analyste de données et Développeur Full Stack', en: 'Data analyst and Full stack Developer' },
  'btn.download': { fr: 'Télécharger CV', en: 'Download CV' },
  'btn.contact': { fr: 'Coordonnées', en: 'Contact Info' },
  'about.subtitle': { fr: 'Pour en savoir plus', en: 'Get To Know More' },
  'about.title': { fr: 'À propos', en: 'About Me' },
  'about.paragraph': { fr: "Passionné par le développement web & mobile et l'analyse de données, je possède une solide formation en informatique de gestion et data science. Actuellement en Pre Msc (Bac +3) à Epitech, je recherche un stage de 6 à 9 mois à partir de janvier 2026 et une alternance de deux ans à partir d'octobre 2026.", en: "I am a passionate web & mobile full-stack developer and data analyst with a strong background in business IT and data science. Currently in Pre Msc (Bac +3) at Epitech, I am actively looking for an internship of 6 to 9 months starting from January 2026 and a two-year work-study program starting from October 2026." },
  'experience.subtitle': { fr: 'Découvrez mes', en: 'Explore My' },
  'experience.title': { fr: 'COMPÉTENCES', en: 'SKILLS' },
  'projects.subtitle': { fr: 'Parcourez mes', en: 'Browse My Recent' },
  'projects.title': { fr: 'Projets', en: 'Projects' },
  'contact.subtitle': { fr: 'Contact', en: 'Get in Touch' },
  'contact.title': { fr: 'Contactez-moi', en: 'Contact Me' },
  'contact.emailTitle': { fr: 'Email', en: 'Email' },
  'contact.send': { fr: 'Envoyer un message', en: 'Send a message' },
  'contact.phoneTitle': { fr: 'Téléphone', en: 'Phone' },
  'contact.call': { fr: 'Appeler', en: 'Call me' },
  'contact.locationTitle': { fr: 'Localisation', en: 'Location' },
  'contact.map': { fr: 'Voir sur la carte', en: 'View on map' }
};

function translate(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const entry = translations[key];
    if (entry && entry[lang]) {
      el.textContent = entry[lang];
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  try { localStorage.setItem('lang', lang); } catch (e) { /* ignore */ }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => translate(btn.dataset.lang));
  });
  const saved = (localStorage.getItem('lang')) || 'fr';
  translate(saved);
});

