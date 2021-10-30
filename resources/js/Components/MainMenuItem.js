import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import classNames from 'classnames';
import Icon from '@/Components/Icon';

export default ({ icon, link, text, method, as }) => {
  const isActive = route().current(link + '*');

  const iconClasses = classNames('w-5 h-5 mr-2', {
    'text-white fill-current': isActive,
    'text-indigo-200 group-hover:text-white fill-current': !isActive
  });

  const textClasses = classNames({
    'text-white': isActive,
    'text-indigo-100 group-hover:text-white': !isActive
  });

  return (
    <div className="mb-4">
      <InertiaLink as={as} method={method} href={route(link)} className="flex items-center group py-3">
        <Icon name={icon} className={iconClasses} />
        <div className={textClasses}>{text}</div>
      </InertiaLink>
    </div>
  );
};
