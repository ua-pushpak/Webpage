/**
 * Advanced Research & Innovation Lab - Translation Engine
 */
const translations = {
    en: {
        // Navigation & General
        "nav.home": "Home",
        "nav.whoWeAre": "Who We Are",
        "nav.research": "Research & Portfolio",
        "nav.resources": "Resources",
        "nav.news": "News",
        "nav.contact": "Reach Us",
        "lab.title": "Advanced Research & Innovation Lab",
        "footer.desc": "Dedicated to advancing knowledge through open, collaborative, and impactful research.",
        "footer.quickLinks": "Quick Navigation",
        "footer.contact": "Contact",
        "footer.findUs": "Find Us",
        "footer.rights": "© 2026 ResearchLab. All rights reserved.",
        "footer.tagline": "Built for open science.",

        // Who We Are Page
        "who.title": "Who We Are",
        "who.subtitle": "Dedicated to pioneering interdisciplinary research in systems, privacy, and artificial intelligence.",
        "who.missionTitle": "Our Mission",
        "who.missionDesc": "We bridge the gap between theoretical computer science and scalable, real-world systems. Through open-source contributions and peer-reviewed research, we aim to solve fundamental engineering challenges.",
        "who.teamTitle": "Lab Leadership",

        // Research Page
        "res.title": "Research & Portfolio",
        "res.subtitle": "Exploring breakthroughs in distributed systems, privacy-preserving machine learning, and edge computing.",
        "res.areas": "Focus Areas",
        "res.publications": "Selected Publications",

        // Resources Page
        "resource.title": "Open Resources",
        "resource.subtitle": "Access our open datasets, developer tools, code repositories, and educational material.",
        "resource.datasets": "Datasets",
        "resource.repos": "Repositories & Libraries",
        "resource.courses": "Courseware & Workshop Notes",

        // News Page
        "news.title": "News & Events",
        "news.subtitle": "Follow recent updates, press coverage, research milestones, and upcoming lab seminars.",
        "news.events": "Upcoming Seminars & Talks",
        "news.articles": "Recent Articles & Press",

        // Contact Page
        "contact.title": "Reach Us",
        "contact.subtitle": "Have questions or collaboration ideas? Reach out via the message form or visit our laboratory space.",
        "contact.formTitle": "Send Us a Message",
        "contact.nameLabel": "Your Full Name",
        "contact.emailLabel": "Email Address",
        "contact.subjectLabel": "Subject / Reason for Contact",
        "contact.msgLabel": "Your Message",
        "contact.submitBtn": "Send Message",
        "contact.infoTitle": "Lab Address & Contacts"
    },
    hi: {
        // Navigation & General
        "nav.home": "मुख्य पृष्ठ",
        "nav.whoWeAre": "हमारे बारे में",
        "nav.research": "अनुसंधान और पोर्टफोलियो",
        "nav.resources": "संसाधन",
        "nav.news": "समाचार",
        "nav.contact": "संपर्क करें",
        "lab.title": "उन्नत अनुसंधान एवं नवाचार प्रयोगशाला",
        "footer.desc": "खुले, सहयोगात्मक और प्रभावशाली अनुसंधान के माध्यम से ज्ञान को आगे बढ़ाने के लिए समर्पित।",
        "footer.quickLinks": "त्वरित नेविगेशन",
        "footer.contact": "संपर्क करें",
        "footer.findUs": "हमारा स्थान",
        "footer.rights": "© 2026 रिसर्चलैब। सर्वाधिकार सुरक्षित।",
        "footer.tagline": "खुले विज्ञान के लिए निर्मित।",

        // Who We Are Page
        "who.title": "हमारे बारे में",
        "who.subtitle": "सिस्टम, गोपनीयता और आर्टिफिशियल इंटेलिजेंस में अंतःविषय अनुसंधान का नेतृत्व।",
        "who.missionTitle": "हमारा उद्देश्य",
        "who.missionDesc": "हम सैद्धांतिक कंप्यूटर विज्ञान और वास्तविक दुनिया के प्रणालियों के बीच के अंतर को पाटते हैं।",
        "who.teamTitle": "प्रयोगशाला नेतृत्व",

        // Research Page
        "res.title": "अनुसंधान और पोर्टफोलियो",
        "res.subtitle": "वितरित प्रणालियों, गोपनीयता-संरक्षित मशीन लर्निंग और एज कंप्यूटिंग में सफलताओं की खोज।",
        "res.areas": "प्रमुख क्षेत्र",
        "res.publications": "चयनित प्रकाशन",

        // Resources Page
        "resource.title": "खुले संसाधन",
        "resource.subtitle": "हमारे खुले डेटासेट, डेवलपर टूल, कोड रिपॉजिटरी और शैक्षणिक सामग्री तक पहुंचें।",
        "resource.datasets": "डेटासेट",
        "resource.repos": "रिपॉजिटरी और लाइब्रेरी",
        "resource.courses": "पाठ्यक्रम सामग्री और वर्कशॉप नोट्स",

        // News Page
        "news.title": "समाचार और कार्यक्रम",
        "news.subtitle": "हालिया अपडेट, प्रेस कवरेज, शोध के मील के पत्थर और आगामी सेमिनार का पालन करें।",
        "news.events": "आगामी सेमिनार और वार्ता",
        "news.articles": "हाल के लेख और प्रेस",

        // Contact Page
        "contact.title": "संपर्क करें",
        "contact.subtitle": "क्या आपके पास प्रश्न या सहयोग के विचार हैं? संदेश फॉर्म के माध्यम से संपर्क करें या हमारी प्रयोगशाला में आएं।",
        "contact.formTitle": "हमें एक संदेश भेजें",
        "contact.nameLabel": "आपका पूरा नाम",
        "contact.emailLabel": "ईमेल पता",
        "contact.subjectLabel": "विषय / संपर्क का कारण",
        "contact.msgLabel": "आपका संदेश",
        "contact.submitBtn": "संदेश भेजें",
        "contact.infoTitle": "प्रयोगशाला का पता और संपर्क"
    }
};

function applyLanguage(lang) {
    const langData = translations[lang];
    if (!langData) return;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (langData[key]) {
            element.textContent = langData[key];
        }
    });

    // Update active class on language toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang-code') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    localStorage.setItem('lab-lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    // Attach click events to EN / HI buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang-code');
            applyLanguage(lang);
        });
    });

    // Load saved language or default to 'en'
    const savedLang = localStorage.getItem('lab-lang') || 'en';
    applyLanguage(savedLang);
});
