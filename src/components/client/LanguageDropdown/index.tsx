"use client";

import React, { useState } from 'react';
import { Dropdown, Button, Avatar } from 'antd';
import type { MenuProps } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import "./style.scss";
import classNames from 'classnames';

const languages = [
  {
    key: 'en',
    label: 'English',
    flag: '/language/USIcon.png',
  },
  {
    key: 'th',
    label: 'Thailand',
    flag: '/language/TLIcon.png',
  },
  {
    key: 'vi',
    label: 'Vietnamese',
    flag: '/language/VNIcon.png',
  },
];

export type LanguageDropdownProps = {
  defaultLanguage: string;
}
const LanguageDropdown = (props: LanguageDropdownProps) => {
  const { defaultLanguage } = props;
  const defaultLang = languages.find((lang) => lang.key === defaultLanguage) || languages[0];
  const [selectedLang, setSelectedLang] = useState(defaultLang);

  const items: MenuProps['items'] = languages.map((lang, index) => ({
    key: lang.key,
    label: (
      <div
        className={classNames("language-option", { "is-last": index === languages.length - 1 })}
      >
        <Avatar size={28} src={lang.flag} className='language-flag'/>
        <span className='language-label'>{lang.label}</span>
      </div>
    ),
    onClick: () => setSelectedLang(lang),
  }));

  return (
    <Dropdown
      menu={{ items }}
      trigger={['click']}
      placement="bottomRight"
      overlayClassName="language-dropdown-overlay"
    >
      <Button
        type="text"
        icon={<Avatar size={28} src={selectedLang.flag} className='language-flag' />}
        style={{
          backgroundColor: 'transparent',
          display: 'flex',
          alignItems: 'center',
          padding: 0,
        }}
      />
    </Dropdown>
  );
};

export default LanguageDropdown;
