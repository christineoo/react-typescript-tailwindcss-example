import React from 'react';
import logo from './logo.svg';
import tailwindcssLogo from './styles/tailwindcss-logo.svg';
import typescriptLogo from './styles/typescript-logo.svg';

const App: React.FC = () => {
  return (
    <div>
      <header className="min-h-screen bg-gray-800 flex items-center justify-center flex-col">
        <div className="flex px-10 md:px-0 md:pb-10">
          <img src={logo} className="h-24 md:h-64" alt="logo" />
          <img
            src={typescriptLogo}
            className="h-24 pr-2 md:h-64 md:pr-10"
            alt="typescript-logo"
          />
          <img
            src={tailwindcssLogo}
            className="h-24 md:h-64"
            alt="tailwindcss-logo"
          />
        </div>

        <p className="text-white">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="text-teal-400 hover:underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
          className="text-teal-400 hover:underline"
          href="http://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn TypeScript
        </a>
        <a
          className="text-teal-400 hover:underline"
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn tailwindcss
        </a>
      </header>
    </div>
  );
}

export default App;
