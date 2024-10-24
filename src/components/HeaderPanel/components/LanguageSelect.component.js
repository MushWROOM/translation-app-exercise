import styled from "styled-components";
import {CoreConstants} from "../../../constants";
import React from "react";
import {useTranslation} from "react-i18next";

const LanguageSelect = styled.select`
  background: transparent;
  color: white;
  border: 1px solid white;
  font-size: 16px;
  cursor: pointer;
  padding: 7px;
  border-radius: 4px;
  margin-right: 20px;

  option {
    color: black; /* Ensures the options are visible */
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export default function LanguageSelectComponent() {
    const { i18n } = useTranslation();

    const handleLanguageChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
        localStorage.setItem('language', selectedLanguage);
    };

    return <LanguageSelect value={i18n.language} onChange={handleLanguageChange}>
        {CoreConstants.availableLanguages.map((lang) => (
            <option key={lang.code} value={lang.code}>
                {lang.label}
            </option>
        ))}
    </LanguageSelect>
}