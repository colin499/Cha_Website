// Interface strings (nav, buttons, labels). Page copy lives in src/content and is edited in the CMS.
export type Lang = 'en' | 'fr';
export const langs: Lang[] = ['en', 'fr'];

export const nav = [
  { slug: '', key: 'nav.home' },
  { slug: 'lessons', key: 'nav.lessons' },
  { slug: 'homeschool', key: 'nav.curriculum' },
  { slug: 'resources', key: 'nav.resources' },
  { slug: 'about', key: 'nav.about' },
  { slug: 'contact', key: 'nav.contact' },
] as const;

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.lessons': 'Private Lessons',
    'nav.curriculum': 'Homeschool Curriculum',
    'nav.resources': 'Resources',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'cta.book': 'Book a free consultation',
    'cta.contact': 'Get in touch',
    'cta.learn': 'Learn more',
    'cta.download': 'Download (free)',
    'cta.buy': 'Buy',
    'cta.details': 'See what is inside',
    'label.level': 'Level',
    'label.ages': 'Ages',
    'label.free': 'Free',
    'label.paid': 'Paid',
    'home.testimonials': 'Kind words',
    'form.name': 'Your name',
    'form.email': 'Email',
    'form.student': 'I am looking for lessons for',
    'form.student.adult': 'Myself (adult)',
    'form.student.child': 'My child',
    'form.student.homeschool': 'Our homeschool',
    'form.level': 'Current French level',
    'form.level.none': 'Complete beginner',
    'form.level.some': 'Some basics',
    'form.level.inter': 'Intermediate',
    'form.level.adv': 'Advanced',
    'form.message': 'Tell me a little about your goals',
    'form.send': 'Send message',
    'form.thanks.title': 'Merci !',
    'form.thanks.body': 'Your message has been sent. I will reply within two business days.',
    'footer.credential': 'DAEFLE-certified French teacher',
    'footer.rights': 'All rights reserved.',
    'notfound.title': 'Page not found',
    'notfound.body': 'That page does not exist. Shall we go home?',
    'notfound.home': 'Back to home',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.lessons': 'Cours particuliers',
    'nav.curriculum': 'Programme homeschool',
    'nav.resources': 'Ressources',
    'nav.about': 'À propos',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'cta.book': 'Réserver un premier échange gratuit',
    'cta.contact': 'Me contacter',
    'cta.learn': 'En savoir plus',
    'cta.download': 'Télécharger (gratuit)',
    'cta.buy': 'Acheter',
    'cta.details': 'Voir le contenu',
    'label.level': 'Niveau',
    'label.ages': 'Âges',
    'label.free': 'Gratuit',
    'label.paid': 'Payant',
    'home.testimonials': 'Témoignages',
    'form.name': 'Votre nom',
    'form.email': 'E-mail',
    'form.student': 'Je cherche des cours pour',
    'form.student.adult': 'Moi-même (adulte)',
    'form.student.child': 'Mon enfant',
    'form.student.homeschool': 'Notre école à la maison',
    'form.level': 'Niveau actuel de français',
    'form.level.none': 'Grand débutant',
    'form.level.some': 'Quelques bases',
    'form.level.inter': 'Intermédiaire',
    'form.level.adv': 'Avancé',
    'form.message': 'Parlez-moi un peu de vos objectifs',
    'form.send': 'Envoyer',
    'form.thanks.title': 'Merci !',
    'form.thanks.body': 'Votre message a bien été envoyé. Je vous répondrai sous deux jours ouvrés.',
    'footer.credential': 'Professeure de français certifiée DAEFLE',
    'footer.rights': 'Tous droits réservés.',
    'notfound.title': 'Page introuvable',
    'notfound.body': "Cette page n'existe pas. On rentre à l'accueil ?",
    'notfound.home': "Retour à l'accueil",
  },
} as const;

export type UIKey = keyof typeof ui.en;

export function t(lang: Lang, key: UIKey): string {
  return ui[lang][key] ?? ui.en[key] ?? key;
}

// Reads `${key}_${lang}` from a content object, falling back to English.
export function loc(obj: object, key: string, lang: Lang): string {
  const o = obj as Record<string, unknown>;
  const v = o[`${key}_${lang}`] ?? o[`${key}_en`] ?? '';
  return typeof v === 'string' ? v : '';
}
