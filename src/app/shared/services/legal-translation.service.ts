import { Injectable } from '@angular/core';
import { TranslationService } from './translation.service';

@Injectable({ providedIn: 'root' })
export class LegalTranslationService {
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
        title: 'Legal Notice',
      },
      imprint: {
        title: 'Imprint',
        info: 'Information pursuant to § 5 TMG (German Telemedia Act)',
        country: 'Germany',
        contactInfo: 'Contact Information',
        phone: 'Telephone: +49 171 8175597',
        website: 'Website:',
        copyright: 'Copyright & Design Credits',
        copyInfo:
          'The content and works published on this website are protected by copyright law. The web designs, layouts, and project concepts presented in this portfolio were created as part of the curriculum at Developer Akademie. The intellectual property rights for the underlying designs remain with the respective authors and Developer Akademie. The code and technical implementation were executed by me for training and demonstration purposes.',
        liabilityContent: 'Liability for Content',
        liabilityContentInfo:
          'As a service provider, I am responsible for my own content on these pages in accordance with general legislation pursuant to Section 7 (1) DDG. However, under the provisions of Regulation (EU) 2022/2065 (Digital Services Act / DSA) and Section 7 DDG, I am not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity. Obligations to remove or block the use of information under general laws remain unaffected.',
        liabilityLinks: 'Liability for Links',
        liabilityLinksInfo:
          'This website contains links to external third-party websites over whose content I have no control. Therefore, I cannot accept any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content.',
      },
      policy: {
        title: 'Privacy Policy',
        general: '1. General Information and Mandatory Information',
        generalInfo:
          'The operators of this website take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations (GDPR) and this Privacy Policy. If you use this website, various personal data will be collected. Personal data are data with which you can be personally identified. This Privacy Policy explains what information we collect and what we use it for. It also explains how and for what purpose this happens.',
        controller: '2. Controller (Responsible Party)',
        controllerInfo:
          'The party responsible for data processing on this website (the "controller") is:',
        country: 'Germany',
        dataCollection: '3. Data Collection on This Website',
        hosting: 'Hosting and Server Log Files',
        hostingInfo:
          'This website is hosted by an external service provider (netcup):netcup GmbH, Daimlerstraße 25, 76185 Karlsruhe, Germany. Personal data collected on this website is stored on the host`s servers. The provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These include:',
        type: 'Browser type and browser version',
        system: 'Operating system used',
        ref: 'Referrer URL (the page previously visited)',
        host: 'Host name of the accessing computer',
        time: 'Time of the server request',
        ip: 'IP address',
        hostingInfoSec:
          'The legal basis for this data processing is Art. 6 (1) (f) GDPR (legitimate interest in the secure, fast, and error-free operation of the website). We have entered into a Data Processing Agreement (DPA) pursuant to Art. 28 GDPR with netcup. This ensures that the host processes the personal data of website visitors strictly in accordance with our instructions and in compliance with the GDPR.',
        contact: 'Contact me',
        contactInfo:
          'If you send me an email, the data you provide (such as your email address, name, and the content of the message) will be stored by me in order to process your inquiry. I will not share this information without your consent. The processing of this data is based on Art. 6 (1) (b) GDPR if your request is related to the performance of a contract or necessary for pre-contractual measures. In all other cases, processing is based on our legitimate interest in the effective handling of inquiries addressed to us (Art. 6 (1) (f) GDPR) or on your consent (Art. 6 (1) (a) GDPR).',
        data: '4. Your Rights Regarding Your Data',
        dataInfo:
          'You have the right at any time and free of charge to receive information about the origin, recipient, and purpose of your stored personal data. You also have a right to demand the correction, blocking, or deletion of this data. If you have given your consent to data processing, you can revoke this consent at any time for the future. You also have the right to lodge a complaint with the competent supervisory authority. To exercise these rights, or if you have further questions about data protection, you can contact me at any time at the address given in section 2.',
        date: 'Date: 28.05.2026',
        button: 'Back to Main Page',
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
        title: 'Rechtlicher Hinweis',
      },
      imprint: {
        title: 'Impressum',
        info: 'Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)',
        country: 'Deutschland',
        contactInfo: 'Kontakt Informationen',
        phone: 'Telefon: +49 171 8175597',
        website: 'Webseite:',
        copyright: 'Urheberrecht & Design-Credits',
        copyInfo:
          'Die auf dieser Website veröffentlichten Inhalte und Werke sind urheberrechtlich geschützt. Die in diesem Portfolio präsentierten Webdesigns, Layouts und Projektkonzepte wurden im Rahmen des Lehrplans der Developer Akademie erstellt. Das geistige Eigentum an den zugrundeliegenden Designs liegt bei den jeweiligen Urhebern und der Developer Akademie. Der Code und die Umsetzung wurden von mir zu Ausbildungs- und Demonstrationszwecken realisiert.',
        liabilityContent: 'Haftung für Inhalte',
        liabilityContentInfo:
          'Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach den Regelungen der Verordnung (EU) 2022/2065 (Digital Services Act / DSA) sowie § 7 DDG bin ich jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.',
        liabilityLinks: 'Haftung für Links',
        liabilityLinksInfo:
          'Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Daher kann ich für diese fremden Inhalte keine Haftung übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.',
      },
      policy: {
        title: 'Datenschutzerklärung',
        general: '1. Allgemeine Hinweise und Pflichtinformationen',
        generalInfo:
          'Die Betreiber dieser Website nehmen den Schutz Ihrer personenbezogenen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften (DSGVO) sowie dieser Datenschutzerklärung. Wenn Sie diese Website nutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.',
        controller: '2. Verantwortlicher',
        controllerInfo:
          'Die für die Datenverarbeitung auf dieser Website verantwortliche Stelle (der „Verantwortliche“) ist:',
        country: 'Deutschland',
        dataCollection: '3. Datenerfassung auf dieser Website',
        hosting: 'Hosting und Server-Logfiles',
        hostingInfo:
          'Diese Website wird von einem externen Dienstleister gehostet: netcup GmbH, Daimlerstraße 25, 76185 Karlsruhe, Deutschland. Die auf dieser Website erfassten personenbezogenen Daten werden auf den Servern des Hosters gespeichert. Der Anbieter der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:',
        type: 'Browsertyp und Browserversion',
        system: 'Verwendetes Betriebssystem',
        ref: 'Referrer-URL (die zuvor besuchte Seite)',
        host: 'Hostname des zugreifenden Computers',
        time: 'Zeitpunkt der Serveranfrage',
        ip: 'IP Addresse',
        hostingInfoSec:
          'Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren, schnellen und fehlerfreien Betrieb der Website). Wir haben unteranderem mit dem Anbieter netcup einen Vertrag über Auftragsverarbeitung (AVV) gemäß Art. 28 DSGVO geschlossen. Dies stellt sicher, dass der Hoster die personenbezogenen Daten der Website-Besucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.',
        contact: 'Kontaktieren Sie mich',
        contactInfo:
          'Wenn Sie mir eine E-Mail senden, werden die von Ihnen angegebenen Daten (wie Ihre E-Mail-Adresse, Ihr Name und der Inhalt der Nachricht) von mir gespeichert, um Ihre Anfrage zu bearbeiten. Ich gebe diese Informationen nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf der Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage im Zusammenhang mit der Vertragserfüllung steht oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen anderen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).',
        data: '4. Ihre Rechte in Bezug auf Ihre Daten',
        dataInfo:
          'Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Zudem haben Sie das Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Sofern Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zur Wahrnehmung dieser Rechte oder bei weiteren Fragen zum Datenschutz können Sie sich jederzeit an die in Ziffer 2 angegebene Adresse wenden.',
        date: 'Datum: 28.05.2026',
        button: 'zurück zur Hauptseite',
      },
    },
  };

  constructor(private mainTranslationService: TranslationService) {}

  translate(key: string): string {
    const currentLanguage = this.mainTranslationService.getLanguage();

    const keys = key.split('.');
    let value: any = this.translations[currentLanguage];

    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  }
}
