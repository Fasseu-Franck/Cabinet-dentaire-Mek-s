/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./assets/js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        azur: '#0c598f',
        mauve: '#30263c',
        magenta: '#d47ead',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 3s',
        'shine': 'shine 0.6s ease-in-out',
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shine: {
          '0%': { 
            transform: 'translateX(-100%) translateY(-100%) rotate(45deg)', 
            opacity: '0' 
          },
          '50%': { opacity: '1' },
          '100%': { 
            transform: 'translateX(100%) translateY(100%) rotate(45deg)', 
            opacity: '0' 
          },
        }
      },
      backgroundImage: {
        'gradient-yaounde': 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
        'gradient-douala': 'linear-gradient(135deg, #f1f8e9 0%, #fce4ec 100%)',
        'gradient-yaounde-hover': 'linear-gradient(135deg, #bbdefb 0%, #e1bee7 100%)',
        'gradient-douala-hover': 'linear-gradient(135deg, #dcedc8 0%, #f8bbd9 100%)',
        'gradient-card': 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        'gradient-section': 'linear-gradient(135deg, #f0f9ff 0%, #faf5ff 100%)',
        'gradient-button': 'linear-gradient(135deg, #d47ead, #0c598f)',
        'gradient-icon': 'linear-gradient(135deg, #0c598f, #d47ead)',
        'shine-effect': 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
      },
      boxShadow: {
        'card': '0 10px 30px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 40px rgba(0, 0, 0, 0.15)',
        'icon': '0 4px 15px rgba(12, 89, 143, 0.3)',
        'icon-hover': '0 6px 20px rgba(12, 89, 143, 0.4)',
        'button': '0 4px 15px rgba(212, 126, 173, 0.3)',
        'button-hover': '0 6px 20px rgba(212, 126, 173, 0.4)',
        'social': '0 4px 15px rgba(0, 0, 0, 0.1)',
        'social-hover': '0 8px 25px rgba(0, 0, 0, 0.2)',
      },
      transitionTimingFunction: {
        'bounce-smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.cabinet-card': {
          '@apply bg-gradient-card rounded-4xl p-8 shadow-card transition-all duration-300 relative overflow-hidden border border-white/20': '',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '4px',
            background: 'linear-gradient(90deg, #0c598f, #d47ead)',
            transform: 'scaleX(0)',
            transition: 'transform 0.3s ease',
          },
          '&:hover::before': {
            transform: 'scaleX(1)',
          },
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '-50%',
            left: '-50%',
            width: '200%',
            height: '200%',
            background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
            transform: 'rotate(45deg)',
            transition: 'all 0.6s',
            opacity: '0',
          },
          '&:hover::after': {
            animation: 'shine 0.6s ease-in-out',
          }
        },
        '.yaounde-card': {
          '@apply bg-gradient-yaounde': '',
          '&:hover': {
            background: 'linear-gradient(135deg, #bbdefb 0%, #e1bee7 100%)',
          }
        },
        '.douala-card': {
          '@apply bg-gradient-douala': '',
          '&:hover': {
            background: 'linear-gradient(135deg, #dcedc8 0%, #f8bbd9 100%)',
          }
        },
        '.card-header': {
          '@apply flex items-center mb-6 pb-4 border-b-2 border-black/5': '',
        },
        '.city-icon': {
          '@apply w-12 h-12 rounded-full flex items-center justify-center mr-4 text-xl text-white bg-gradient-icon shadow-icon transition-all duration-300': '',
          '&:hover': {
            transform: 'scale(1.1) rotate(5deg)',
            boxShadow: '0 6px 20px rgba(12, 89, 143, 0.4)',
          }
        },
        '.card-content': {
          '@apply flex flex-col gap-4': '',
        },
        '.info-item': {
          '@apply flex items-center p-3 rounded-xl bg-white/60 transition-all duration-300 border-l-4 border-transparent': '',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.9)',
            borderLeftColor: '#d47ead',
            transform: 'translateX(5px)',
          },
          '& i': {
            '@apply w-5 mr-3 text-magenta text-base transition-all duration-300': '',
          },
          '&:hover i': {
            color: '#0c598f',
            transform: 'scale(1.2)',
          },
          '& span, & a': {
            '@apply text-mauve font-medium transition-colors duration-300': '',
          },
          '& a:hover': {
            color: '#d47ead',
          }
        },
        '.btn-primary': {
          '@apply bg-gradient-button text-white px-8 py-3 rounded-xl border-0 font-semibold transition-all duration-300 shadow-button': '',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 6px 20px rgba(212, 126, 173, 0.4)',
          }
        },
        '.social-btn': {
          '@apply transition-all duration-300 shadow-social': '',
          '&:hover': {
            transform: 'translateY(-3px) scale(1.05)',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
          }
        },
        '.contact-form': {
          '@apply bg-gradient-to-br from-slate-50 to-slate-200 rounded-4xl p-8 shadow-card': '',
        }
      }
      addUtilities(newUtilities)
    }
  ],
}
