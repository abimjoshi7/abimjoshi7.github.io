'use client';

interface IconProps {
  className?: string;
}

// iOS-style Phone Icon (Green gradient like iOS Phone app)
export const IOSPhoneIcon = ({ className = '' }: IconProps) => (
  <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="iosPhoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#34C759" />
        <stop offset="100%" stopColor="#2FB550" />
      </linearGradient>
    </defs>
    <rect width="60" height="60" rx="13" fill="url(#iosPhoneGrad)" />
    <path
      d="M42.3 35.5L37.5 32.8C37 32.5 36.3 32.6 35.9 33L33.5 35.9C33.1 36.3 32.5 36.4 32 36.2C30.1 35.3 27.9 34.1 25.8 32C23.9 30.1 22.7 27.9 21.8 26C21.6 25.5 21.7 24.9 22.1 24.5L25 22.1C25.4 21.7 25.5 21 25.2 20.5L22.5 15.7C22.1 15 21.3 14.7 20.6 15L17.3 16.8C16.6 17.2 16.2 17.9 16.2 18.7C16.5 24.3 19.1 29.7 23.3 33.9C27.5 38.1 32.9 40.7 38.5 41C39.3 41 40 40.6 40.4 39.9L42.2 36.6C42.5 35.9 42.2 35.1 41.5 34.7C41.8 34.9 42 35.2 42.3 35.5Z"
      fill="white"
      fillOpacity="0.95"
    />
  </svg>
);

// iOS-style Messages Icon (Green gradient like iOS Messages)
export const IOSMessagesIcon = ({ className = '' }: IconProps) => (
  <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="iosMessagesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#34C759" />
        <stop offset="100%" stopColor="#30D158" />
      </linearGradient>
    </defs>
    <rect width="60" height="60" rx="13" fill="url(#iosMessagesGrad)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30 16C21.1634 16 14 22.268 14 30C14 33.1 15.1 36 17 38.3V44C17 44.55 17.45 45 18 45C18.23 45 18.45 44.92 18.63 44.77L24.5 40.3C26.2 40.75 28.05 41 30 41C38.8366 41 46 34.732 46 30C46 25.268 38.8366 16 30 16ZM24 32C22.9 32 22 31.1 22 30C22 28.9 22.9 28 24 28C25.1 28 26 28.9 26 30C26 31.1 25.1 32 24 32ZM30 32C28.9 32 28 31.1 28 30C28 28.9 28.9 28 30 28C31.1 28 32 28.9 32 30C32 31.1 31.1 32 30 32ZM36 32C34.9 32 34 31.1 34 30C34 28.9 34.9 28 36 28C37.1 28 38 28.9 38 30C38 31.1 37.1 32 36 32Z"
      fill="white"
    />
  </svg>
);

// iOS-style Safari Icon (Blue gradient like iOS Safari)
export const IOSSafariIcon = ({ className = '' }: IconProps) => (
  <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="iosSafariGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4A9FFF" />
        <stop offset="100%" stopColor="#0A84FF" />
      </linearGradient>
    </defs>
    <rect width="60" height="60" rx="13" fill="url(#iosSafariGrad)" />
    <circle cx="30" cy="30" r="15" fill="white" fillOpacity="0.15" />
    <circle cx="30" cy="30" r="13.5" stroke="white" strokeWidth="1.5" strokeOpacity="0.9" />
    <path
      d="M30 19V21M30 39V41M41 30H39M21 30H19"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeOpacity="0.7"
    />
    <path
      d="M36.5 23.5L35.4 24.6M24.6 35.4L23.5 36.5M36.5 36.5L35.4 35.4M24.6 24.6L23.5 23.5"
      stroke="white"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeOpacity="0.5"
    />
    <path
      d="M30 30L26 36L24 34L30 30L36 24L38 26L30 30Z"
      fill="#FF3B30"
      fillOpacity="0.95"
    />
    <path
      d="M30 30L34 24L36 26L30 30L24 36L22 34L30 30Z"
      fill="white"
      fillOpacity="0.95"
    />
    <circle cx="30" cy="30" r="2" fill="white" fillOpacity="0.9" />
  </svg>
);

// iOS-style Music Icon (Red/Pink gradient like iOS Music)
export const IOSMusicIcon = ({ className = '' }: IconProps) => (
  <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="iosMusicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF3B30" />
        <stop offset="50%" stopColor="#FF2D55" />
        <stop offset="100%" stopColor="#FF1744" />
      </linearGradient>
    </defs>
    <rect width="60" height="60" rx="13" fill="url(#iosMusicGrad)" />
    <path
      d="M39 16C39.55 16 40 16.45 40 17V37C40 37.89 39.69 38.67 39.17 39.26C38.64 39.85 37.89 40.24 37 40.42C35.22 40.78 33.5 39.69 33.14 37.91C32.78 36.13 33.87 34.41 35.65 34.05C36.55 33.87 37.45 34.06 38.13 34.5V21.41L25 24.44V40C25 40.89 24.69 41.67 24.17 42.26C23.64 42.85 22.89 43.24 22 43.42C20.22 43.78 18.5 42.69 18.14 40.91C17.78 39.13 18.87 37.41 20.65 37.05C21.55 36.87 22.45 37.06 23.13 37.5V22C23 21.59 23.2 21.18 23.56 20.96C23.56 20.96 23.56 20.96 23.57 20.96L38.57 17.04C38.85 16.96 39.15 16.98 39.41 17.09C39.67 17.2 39.87 17.39 39.97 17.64C39.99 17.76 40 17.88 40 18V17C40 16.45 39.55 16 39 16Z"
      fill="white"
      fillOpacity="0.95"
    />
  </svg>
);

// Android-style Phone Icon (Material You - dynamic color)
export const AndroidPhoneIcon = ({ className = '' }: IconProps) => (
  <svg className={className} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="androidPhoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4CAF50" />
        <stop offset="100%" stopColor="#2E7D32" />
      </linearGradient>
    </defs>
    <rect width="56" height="56" rx="16" fill="url(#androidPhoneGrad)" />
    <path
      d="M39.2 32.8L35.2 30.5C34.7 30.2 34.1 30.3 33.7 30.6L31.7 32.9C31.4 33.2 30.9 33.3 30.5 33.1C28.9 32.4 27.1 31.4 25.4 29.7C23.9 28.2 22.9 26.4 22.2 24.8C22 24.4 22.1 23.9 22.4 23.6L24.7 21.6C25 21.2 25.1 20.6 24.8 20.1L22.5 16.1C22.2 15.5 21.5 15.2 20.9 15.5L18.1 17C17.5 17.3 17.1 17.9 17.1 18.6C17.4 23.4 19.6 28 23.2 31.6C26.8 35.2 31.4 37.4 36.2 37.7C36.9 37.7 37.5 37.3 37.8 36.7L39.3 33.9C39.6 33.3 39.3 32.6 38.7 32.3C39 32.5 39.1 32.6 39.2 32.8Z"
      fill="white"
      fillOpacity="0.95"
    />
  </svg>
);

// Android-style Messages Icon (Material You)
export const AndroidMessagesIcon = ({ className = '' }: IconProps) => (
  <svg className={className} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="androidMessagesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E88E5" />
        <stop offset="100%" stopColor="#1565C0" />
      </linearGradient>
    </defs>
    <rect width="56" height="56" rx="16" fill="url(#androidMessagesGrad)" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 28C16 22.48 20.48 18 26 18H30C35.52 18 40 22.48 40 28V30C40 35.52 35.52 40 30 40H26L18 44V28C18 27.45 17.55 27 17 27C16.45 27 16 27.45 16 28ZM21 28C21 26.9 21.9 26 23 26C24.1 26 25 26.9 25 28C25 29.1 24.1 30 23 30C21.9 30 21 29.1 21 28ZM28 26C26.9 26 26 26.9 26 28C26 29.1 26.9 30 28 30C29.1 30 30 29.1 30 28C30 26.9 29.1 26 28 26ZM31 28C31 26.9 31.9 26 33 26C34.1 26 35 26.9 35 28C35 29.1 34.1 30 33 30C31.9 30 31 29.1 31 28Z"
      fill="white"
      fillOpacity="0.95"
    />
  </svg>
);

// Android-style Chrome Icon (Material You)
export const AndroidChromeIcon = ({ className = '' }: IconProps) => (
  <svg className={className} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="chromeRed" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#EA4335" />
        <stop offset="100%" stopColor="#C5221F" />
      </linearGradient>
      <linearGradient id="chromeYellow" x1="50%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FBBC04" />
        <stop offset="100%" stopColor="#F29900" />
      </linearGradient>
      <linearGradient id="chromeGreen" x1="50%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#34A853" />
        <stop offset="100%" stopColor="#1E8E3E" />
      </linearGradient>
    </defs>
    <rect width="56" height="56" rx="16" fill="#FAFAFA" />
    <circle cx="28" cy="28" r="22" fill="white" />
    <path d="M28 14L41.86 36.5H14.14L28 14Z" fill="url(#chromeRed)" />
    <path d="M28 14L14.14 36.5L41.86 36.5L28 14Z" fill="url(#chromeYellow)" opacity="0" />
    <path d="M14.14 36.5L28 14L41.86 36.5H14.14Z" fill="url(#chromeGreen)" opacity="0" />
    <circle cx="28" cy="28" r="10" fill="#4285F4" />
    <circle cx="28" cy="28" r="7" fill="white" />
  </svg>
);

// Android-style Music Icon (Material You)
export const AndroidMusicIcon = ({ className = '' }: IconProps) => (
  <svg className={className} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="androidMusicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF6F00" />
        <stop offset="100%" stopColor="#E65100" />
      </linearGradient>
    </defs>
    <rect width="56" height="56" rx="16" fill="url(#androidMusicGrad)" />
    <path
      d="M36 15C36.55 15 37 15.45 37 16V34C37 35.66 35.66 37 34 37C32.34 37 31 35.66 31 34C31 32.34 32.34 31 34 31C34.35 31 34.68 31.06 35 31.17V20.83L23 23.54V37C23 38.66 21.66 40 20 40C18.34 40 17 38.66 17 37C17 35.34 18.34 34 20 34C20.35 34 20.68 34.06 21 34.17V22C21 21.31 21.48 20.7 22.15 20.55L35.15 17.55C35.69 17.42 36.24 17.63 36.58 18.08C36.85 18.43 37 18.88 37 19.33V16C37 15.45 36.55 15 36 15Z"
      fill="white"
      fillOpacity="0.95"
    />
  </svg>
);
