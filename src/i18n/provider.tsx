import React, { FC } from 'react';
import { IntlProvider } from 'react-intl';
import AppLocale from './locales';

interface Prop {
  children: React.ReactNode;
  locale: any;
}

const Provider: FC<Prop> = ({ children, locale = AppLocale.en_US }) => {
  const currentLocale = AppLocale[locale];
  return (
    <IntlProvider
      locale={currentLocale.locale}
      messages={currentLocale.messages}
    >
      {children}
    </IntlProvider>
  )
}

export default Provider;