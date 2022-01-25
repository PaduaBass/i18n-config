import I18n from 'i18n-js';
import en from './locales/en';
import pt from './locales/pt';
import es from './locales/es';

export const setI18nConfig = (language) => {
  if (!language) {
    language = 'pt';
  }

  const translationGetters = {
    pt: () => pt,
    en: () => en,
    es: () => es,
  };
  I18n.defaultLocale = 'pt';
  I18n.translations = {
    ['pt']: translationGetters.pt(),
    ['en']: translationGetters.en(),
    ['es']: translationGetters.es(),
  };
  const numberOptions = {
    precision: 1,
    separator: I18n.t('numberSeparator'),
    delimiter: I18n.t('numberDelimiter'),
  };

  I18n.formatNumber = (number, precision) => {
    return I18n.toNumber(number, numberOptions);
  };

  I18n.locale = language;
  I18n.fallbacks = true;
};
setI18nConfig('pt');
export default I18n;
