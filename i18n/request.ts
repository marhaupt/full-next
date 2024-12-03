import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
    // Provide a static locale, fetch a user setting,
    // read from `cookies()`, `headers()`, etc.
    let locale = await requestLocale;
    
    // Ensure that a valid locale is used
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!locale || !routing.locales.includes(locale as any)) {
        locale = routing.defaultLocale;
    }

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default,
    };
});
