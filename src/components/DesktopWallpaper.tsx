import { useTheme } from '@/contexts/ThemeContext';
import { Github, Globe, Mail, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';

const DesktopWallpaper = () => {
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalText, setTerminalText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const { actualTheme } = useTheme();

  const terminalLines = [
    '$ whoami',
    'Sagar - Full Stack Developer',
    '',
    "$ echo 'Welcome to Weather Nexus'",
    'Weather Nexus - Built with ❤️ by Sagar',
    '',
    '$ _',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTerminal(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showTerminal && currentLine < terminalLines.length) {
      const timer = setTimeout(() => {
        setTerminalText((prev) => prev + terminalLines[currentLine] + '\n');
        setCurrentLine((prev) => prev + 1);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [showTerminal, currentLine, terminalLines]);

  const isDark = actualTheme === 'dark';

  const backgroundClasses = isDark
    ? 'from-indigo-900 via-purple-900 to-pink-900'
    : 'from-blue-400 via-purple-500 to-pink-500';

  const terminalBgClasses = isDark ? 'bg-gray-900/95' : 'bg-white/95';

  const terminalHeaderClasses = isDark
    ? 'bg-gray-800/95 border-gray-700/50'
    : 'bg-gray-200/95 border-gray-300/50';

  const terminalContentClasses = isDark ? 'bg-black/60' : 'bg-gray-50/60';

  const terminalTextClasses = isDark ? 'text-green-400' : 'text-green-600';

  const titleTextClasses = isDark ? 'text-gray-300' : 'text-gray-700';

  const welcomeMessageClasses = isDark
    ? 'bg-gray-900/60 border-gray-700/40 text-cyan-300'
    : 'bg-white/80 border-gray-300/40 text-blue-600';

  return (
    <div
      className={`h-full bg-gradient-to-br ${backgroundClasses} relative overflow-hidden transition-all duration-500`}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large animated orbs */}
        <div
          className={`absolute top-1/4 left-1/4 w-96 h-96 ${
            isDark
              ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20'
              : 'bg-gradient-to-r from-white/30 to-blue-200/30'
          } rounded-full blur-3xl animate-pulse transition-all duration-500`}
        ></div>
        <div
          className={`absolute bottom-1/3 right-1/4 w-80 h-80 ${
            isDark
              ? 'bg-gradient-to-r from-purple-500/15 to-pink-500/15'
              : 'bg-gradient-to-r from-pink-200/40 to-purple-200/40'
          } rounded-full blur-3xl animate-pulse transition-all duration-500`}
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className={`absolute top-1/2 right-1/3 w-64 h-64 ${
            isDark
              ? 'bg-gradient-to-r from-emerald-500/10 to-teal-500/10'
              : 'bg-gradient-to-r from-emerald-200/30 to-teal-200/30'
          } rounded-full blur-2xl animate-pulse transition-all duration-500`}
          style={{ animationDelay: '2s' }}
        ></div>

        {/* Geometric shapes */}
        <div
          className={`absolute top-10 right-10 w-4 h-4 ${
            isDark ? 'bg-cyan-400/40' : 'bg-white/60'
          } rotate-45 animate-pulse transition-all duration-500`}
        ></div>
        <div
          className={`absolute bottom-20 left-10 w-6 h-6 ${
            isDark ? 'bg-purple-400/30' : 'bg-pink-300/50'
          } rounded-full animate-pulse transition-all duration-500`}
          style={{ animationDelay: '0.5s' }}
        ></div>
        <div
          className={`absolute top-1/3 right-1/5 w-3 h-3 ${
            isDark ? 'bg-pink-400/50' : 'bg-yellow-300/60'
          } rotate-12 animate-pulse transition-all duration-500`}
          style={{ animationDelay: '1.5s' }}
        ></div>

        {/* Floating particles */}
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 ${
              isDark ? 'bg-white/20' : 'bg-white/40'
            } rounded-full animate-pulse transition-all duration-500`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}

        {/* Wave patterns */}
        <div
          className={`absolute bottom-0 left-0 w-full h-32 ${
            isDark
              ? 'bg-gradient-to-t from-black/20 to-transparent'
              : 'bg-gradient-to-t from-white/20 to-transparent'
          } transition-all duration-500`}
        ></div>
        <div
          className={`absolute top-0 right-0 w-full h-32 ${
            isDark
              ? 'bg-gradient-to-b from-indigo-900/30 to-transparent'
              : 'bg-gradient-to-b from-blue-300/30 to-transparent'
          } transition-all duration-500`}
        ></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex items-center justify-center p-6">
        <div className="max-w-2xl w-full">
          {/* Terminal Window */}
          {showTerminal && (
            <div
              className={`${terminalBgClasses} backdrop-blur-md rounded-xl border ${
                isDark ? 'border-gray-700/50' : 'border-gray-300/50'
              } shadow-3xl animate-fade-in max-w-lg mx-auto transition-all duration-500`}
            >
              {/* Terminal Header */}
              <div
                className={`${terminalHeaderClasses} px-4 py-2 rounded-t-xl flex items-center space-x-3 border-b transition-all duration-500`}
              >
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer"></div>
                </div>
                <div className="flex items-center space-x-2 ml-2">
                  <Terminal size={14} className={isDark ? 'text-gray-400' : 'text-gray-600'} />
                  <span
                    className={`${titleTextClasses} text-xs font-mono transition-colors duration-500`}
                  >
                    terminal — sagar@macbook
                  </span>
                </div>
              </div>

              {/* Terminal Content */}
              <div
                className={`p-4 font-mono ${terminalTextClasses} text-xs leading-relaxed min-h-[200px] ${terminalContentClasses} transition-all duration-500`}
              >
                <pre className="whitespace-pre-wrap">{terminalText}</pre>
                {currentLine >= terminalLines.length && (
                  <div
                    className={`mt-3 pt-2 border-t ${
                      isDark ? 'border-gray-700/50' : 'border-gray-300/50'
                    } transition-colors duration-500`}
                  >
                    <div className="flex items-center space-x-4 text-xs">
                      <a
                        href="https://sagarweb.site"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-1.5 ${
                          isDark
                            ? 'text-blue-400 hover:text-blue-300'
                            : 'text-blue-600 hover:text-blue-500'
                        } transition-all duration-200 hover:scale-110 group cursor-pointer`}
                      >
                        <Globe size={14} className="group-hover:scale-110 transition-transform" />
                        <span className="text-xs">Website</span>
                      </a>
                      <a
                        href="https://github.com/xagar18"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center space-x-1.5 ${
                          isDark
                            ? 'text-purple-400 hover:text-purple-300'
                            : 'text-purple-600 hover:text-purple-500'
                        } transition-all duration-200 hover:scale-110 group cursor-pointer`}
                      >
                        <Github size={14} className="group-hover:scale-110 transition-transform" />
                        <span className="text-xs">GitHub</span>
                      </a>
                      <a
                        href="mailto:sagaryadav6352@gmail.com"
                        className={`flex items-center space-x-1.5 ${
                          isDark
                            ? 'text-yellow-400 hover:text-yellow-300'
                            : 'text-orange-600 hover:text-orange-500'
                        } transition-all duration-200 hover:scale-110 group cursor-pointer`}
                      >
                        <Mail size={14} className="group-hover:scale-110 transition-transform" />
                        <span className="text-xs">Email</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Welcome message */}
          <div className="text-center mt-6">
            <div
              className={`${welcomeMessageClasses} backdrop-blur-sm rounded-lg px-4 py-2 border inline-block transition-all duration-500`}
            >
              <p className="text-xs font-light">Access Weather Nexus from the taskbar below</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopWallpaper;
