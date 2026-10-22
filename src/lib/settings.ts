import raw from '../data/settings.json';

// Pages CMS omits empty fields when it saves settings.json, so every key is
// optional on disk. Fill defaults here so templates can rely on each one.
export interface Settings {
  site_name: string;
  teacher_name: string;
  email: string;
  phone: string;
  location_en: string;
  location_fr: string;
  calendly_url: string;
  instagram: string;
  linkedin: string;
  tagline_en: string;
  tagline_fr: string;
}

const defaults: Settings = {
  site_name: 'French Lessons',
  teacher_name: '',
  email: '',
  phone: '',
  location_en: '',
  location_fr: '',
  calendly_url: '',
  instagram: '',
  linkedin: '',
  tagline_en: '',
  tagline_fr: '',
};

const trimmed = Object.fromEntries(
  Object.entries(raw as Partial<Settings>).map(([k, v]) => [k, typeof v === 'string' ? v.trim() : v]),
);

const settings: Settings = { ...defaults, ...trimmed };
export default settings;
