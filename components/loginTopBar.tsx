import React, { useState } from 'react';

const languages = ['Português', 'Inglês', 'Alemão'];

const LoginTopBar: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 bg-bg-amazon-azul-escuro text-white">
      <div className="flex items-center">
        <div className="text-lg font-semibold">Meu Site</div>
      </div>
      <div className="flex items-center">
        <div className="relative mr-4">
          <button
            className="flex items-center px-3 py-1 rounded-md bg-gray-700 hover:bg-gray-600"
            onClick={() => setShowLanguageOptions(!showLanguageOptions)}
          >
            <span className="mr-1">{selectedLanguage || 'Selecionar Idioma'}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={showLanguageOptions ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
              />
            </svg>
          </button>
          {showLanguageOptions && (
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                {languages.map((language) => (
                  <button
                    key={language}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    onClick={() => {
                      setSelectedLanguage(language);
                      setShowLanguageOptions(false);
                    }}
                  >
                    {language}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <button className="px-3 py-1 rounded-md bg-gray-700 hover:bg-gray-600 mr-2">Login</button>
        <button className="px-3 py-1 rounded-md bg-blue-600 hover:bg-blue-500">Criar Conta</button>
      </div>
    </nav>
  );
};

export default LoginTopBar;