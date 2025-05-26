import React, { useState , useRef } from 'react';

const PasswordGenerator = () => {
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecial, setIncludeSpecial] = useState(true);
  const [password, setPassword] = useState('');
  const [copied, setCopied] = useState(false);

  const passwordRef = useRef("")

  const generatePassword = () => {
    const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    let charPool = lowerChars + upperChars;
    if (includeNumbers) charPool += numberChars;
    if (includeSpecial) charPool += specialChars;

    if (!charPool.length) {
      setPassword('');
      return;
    }

    let generated = '';
    for (let i = 0; i < length; i++) {
      const randIndex = Math.floor(Math.random() * charPool.length);
      generated += charPool[randIndex];
    }

    setPassword(generated);
    setCopied(false);
  };

  const copyToClipboard = () => {
    passwordRef.current.select();
    navigator.clipboard.writeText(password);
    setCopied(true);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-500 rounded-xl shadow-md text-center space-y-6">
      <h2 className="text-2xl font-bold text-white-800">Password Generator</h2>

      <div className="text-left">
        <label className="block text-sm font-medium text-white-700 mb-1">
          Length: {length}
        </label>
        <input
          type="range"
          min="4"
          max="32"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          className="w-full accent-blue-500"
        />
      </div>

      <div className="flex items-center space-x-2 justify-start">
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
          className="accent-blue-600"
        />
        <label className="text-sm text-white-700">Include Numbers</label>
      </div>

      <div className="flex items-center space-x-2 justify-start">
        <input
          type="checkbox"
          checked={includeSpecial}
          onChange={() => setIncludeSpecial(!includeSpecial)}
          className="accent-blue-600"
        />
        <label className="text-sm text-white-700">Include Special Characters</label>
      </div>

      <button
        onClick={generatePassword}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Generate Password
      </button>

      {password && (
        <div className="flex flex-col items-center space-y-3">
          <input
            type="text"
            value={password}
            ref={passwordRef}
            readOnly
            className="w-full p-2 border border-white-300 bg-amber-50 rounded text-center"
          />
          <button
            onClick={copyToClipboard}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            {copied ? 'Copied!' : 'Copy Password'}
          </button>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
