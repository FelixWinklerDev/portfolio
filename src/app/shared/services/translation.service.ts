import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private currentLanguage: 'en' | 'de' = 'en';

  private translations = {
    en: {
      header: {
        nav: {
          aboutMe: 'About Me',
          skills: 'Skills',
          projects: 'Projects',
          contact: 'Contact',
        },
        hello: 'Hello World',
        introduce: "I'm Felix Winkler",
        getInTouch: 'Get in Touch',
      },
      aboutMe: {
        title: 'About me',
        subtitle: "Who's Felix?",
        intro:
          "Hey, I'm Felix, a 29 years old family father straight from Saxony-Anhalt, Germany. I love creating bugs, playful UI / UX design and creative web projects. Right now I'm diving deep into frontend developement with Angular, TypeScript & SCSS while trying to improve my skills every day. I have already been able to gain some project experiences: Independently and in a group.",
        location: 'Based in Gräfenhainichen',
        workMode: 'working remote/hybrid',
        availability: 'location-bound',
        cta: 'Get in Touch',
      },
      skillset: {
        eyebrow: 'my Stack',
        title: 'Skillset',
        description:
          "I'm using modern frontend technologies and I'm always open to learn new technologies and improving my skills.",
        peel: 'Pull to Peel',
      },
      projects: {
        eyebrow: 'MY CRAFT',
        title: 'Projects',
        description:
          'Every project is built with responsivnes, usability and attention to detail in mind. Feel free to explore my work.',
        details: 'Project Details',
        join: {
          title: 'Join',
          description:
            'a task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
        },
        elPollo: {
          title: 'El Pollo Loco',
          description:
            "a simple 2-D Jump'n Run Game based on object-oriented approach. Jump on enemys and throw salsa bottles at the Boss in the end.",
        },
        pokedex: {
          title: 'Pokédex',
          description:
            'a simple Pokedex based on Poke-API and JavaScript. Search and inspect your favorite pokémon from the first to the lastest editions.',
        },
      },
      contact: {
        eyebrow: 'Contact me',
        title: 'Ready to work together?',
        intro:
          'I am excited to dive into the professional tech market. During my rigorous journey, I gained deep, practical experience building applications with HTML, CSS/SASS, JavaScript, TypeScript, and Angular. I am confident in my abilities to make a meaningful contribution to a development team by combining my foundational expertise with an absolute enthusiasm for continuous learning and skill improvement. I am highly motivated to bring fresh value, clean code, and a strong collaborative spirit to a new project.',
        form: {
          nameLabel: "What's your name?",
          namePlaceholder: 'Your name goes here',
          nameError: 'Please enter your name.',
          emailLabel: "What's your email?",
          emailPlaceholder: 'yourmail@email.com',
          emailError: 'Please enter your e-mail.',
          messageLabel: 'How can i help you?',
          messagePlaceholder: 'Hello Felix, I am interested in ...',
          messageError: 'Please enter at least 10 characters.',
          policyText: "I've read the",
          policyLink: 'privacy policy',
          policyAgreement: 'and agree the processing of my data as outlined.',
          policyError: 'Please accept the privacy policy.',
          submit: 'Send',
        },
        success: {
          title: 'Your message was sent',
          message: "Thanks — your message has been sent. I'll get back to you soon.",
          close: 'Close',
        },
      },
    },
    de: {
      header: {
        nav: {
          aboutMe: 'Über mich',
          skills: 'Skills',
          projects: 'Projekte',
          contact: 'Kontakt',
        },
        hello: 'Hallo Welt',
        introduce: 'Ich bin Felix Winkler',
        getInTouch: 'Kontakt aufnehmen',
      },
      aboutMe: {
        title: 'Über mich',
        subtitle: 'Wer ist Felix?',
        intro:
          'Hallo, ich bin Felix, ein 29-jähriger Familienvater aus Sachsen-Anhalt, Deutschland. Ich liebe das Erstellen von Bugs, spielerisches UI-/UX-Design und kreative Webprojekte. Gerade tauche ich tief in die Frontend-Entwicklung mit Angular, TypeScript und SCSS ein und versuche, meine Skills jeden Tag zu verbessern. Ich habe bereits einige Projekterfahrungen sammeln können: sowohl selbstständig als auch im Team.',
        location: 'Basierend in Gräfenhainichen',
        workMode: 'remote/hybrid arbeiten',
        availability: 'standortgebunden',
        cta: 'Kontakt aufnehmen',
      },
      skillset: {
        eyebrow: 'mein Stack',
        title: 'Skillset',
        description:
          'Ich arbeite mit modernen Frontend-Technologien und bin immer offen dafür, neue Technologien zu lernen und meine Fähigkeiten zu verbessern.',
        peel: 'Zum Abziehen',
      },
      projects: {
        eyebrow: 'MEINE ARBEIT',
        title: 'Projekte',
        description:
          'Jedes Projekt wird mit Blick auf Responsivität, Benutzerfreundlichkeit und Liebe zum Detail entwickelt. Schau dir meine Arbeit an.',
        details: 'Projekt-Details',
        join: {
          title: 'Join',
          description:
            'ein Aufgabenmanager inspiriert vom Kanban-System. Erstelle und organisiere Aufgaben mit Drag-and-Drop-Funktionen, weise Nutzer und Kategorien zu.',
        },
        elPollo: {
          title: 'El Pollo Loco',
          description:
            'ein einfaches 2D-Jump-and-Run-Spiel auf OOP-Basis. Springe auf Gegner und wirf Salsa-Flaschen auf den Boss am Ende.',
        },
        pokedex: {
          title: 'Pokédex',
          description:
            'ein einfacher Pokédex basierend auf der Poke-API und JavaScript. Suche und inspiziere deine Lieblings-Pokémon von der ersten bis zur neuesten Edition.',
        },
      },
      contact: {
        eyebrow: 'Kontakt',
        title: 'Bereit, zusammen zu arbeiten?',
        intro:
          'Ich freue mich darauf, in den professionellen Tech-Markt einzusteigen. Auf meiner intensiven Reise habe ich tiefe praktische Erfahrung beim Aufbau von Anwendungen mit HTML, CSS/SASS, JavaScript, TypeScript und Angular gesammelt. Ich bin zuversichtlich, einen sinnvollen Beitrag für ein Entwicklungsteam leisten zu können, indem ich meine fundierte Expertise mit echter Begeisterung für kontinuierliches Lernen und Skill-Verbesserung verbinde. Ich bin hochmotiviert, frischen Mehrwert, sauberen Code und eine starke Zusammenarbeit in ein neues Projekt einzubringen.',
        form: {
          nameLabel: 'Wie heißt du?',
          namePlaceholder: 'Dein Name hier eingeben',
          nameError: 'Bitte gib deinen Namen ein.',
          emailLabel: 'Wie lautet deine E-Mail?',
          emailPlaceholder: 'deinemail@email.de',
          emailError: 'Bitte gib deine E-Mail ein.',
          messageLabel: 'Wie kann ich dir helfen?',
          messagePlaceholder: 'Hallo Felix, ich interessiere mich für ...',
          messageError: 'Bitte gib mindestens 10 Zeichen ein.',
          policyText: 'Ich habe die',
          policyLink: 'Datenschutzerklärung',
          policyAgreement: 'gelesen und akzeptiere die Verarbeitung meiner Daten wie beschrieben.',
          policyError: 'Bitte akzeptiere die Datenschutzerklärung.',
          submit: 'Senden',
        },
        success: {
          title: 'Ihre Nachricht wurde versendet',
          message: 'Danke — Ihre Nachricht wurde gesendet. Ich melde mich bald bei Ihnen.',
          close: 'Schließen',
        },
      },
    },
  } as const;

  setLanguage(language: 'en' | 'de') {
    this.currentLanguage = language;
  }

  getLanguage(): 'en' | 'de' {
    return this.currentLanguage;
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
  }

  translate(key: string): string {
    const keys = key.split('.');
    let value: any = this.translations[this.currentLanguage];

    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  }
}
