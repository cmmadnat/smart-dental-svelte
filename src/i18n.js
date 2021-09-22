// src/i18n.js
import { register, init, getLocaleFromNavigator, } from 'svelte-i18n';

register('en', () => import('./messages/en.json'));
register('en-US', () => import('./messages/en.json'));
register('th', () => import('./messages/th.json'));
// en, en-US and pt are not available yet

init({
  fallbackLocale: 'en',
  initialLocale:
    getLocaleFromNavigator()

});
// starts loading 'en-US' and 'en'