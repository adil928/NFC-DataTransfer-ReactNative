import { I18nManager } from 'react-native';
import I18n from 'react-native-i18n';

// Enable fallbacks if you want `en-US` and `en-GB` to fallback to `en`
I18n.fallbacks = true;

// English language is the main language for fall back:
I18n.translations = {
  en: require('./languages/en.json'),
  ar: require('./languages/ar.json')
};

if (I18nManager.isRTL === true) {
  I18n.defaultLocale = 'ar-AR';
  I18n.locale = 'ar-AR';
} else {
  I18n.defaultLocale = 'en-US';
  I18n.locale = 'en-US';
}

export default I18n;
