# Samuel Ballesteros - Portfolio

Welcome to my personal portfolio website! I'm Samuel Ballesteros, a Frontend Specialist with an Electronics background and Digital Nomad lifestyle. This portfolio showcases my skills, projects, and provides detailed study cases for each project (coming soon).

## 🚀 Features

- **Modern Tech Stack**: Built with React, TypeScript, and Vite for optimal performance
- **Internationalization**: Full i18n support for English & Spanish (German coming soon)
- **Responsive Design**: Mobile-first approach with CSS Modules for styling
- **Project Showcase**: Interactive projects section with filter tabs
- **Professional UI**: Clean, modern design with smooth animations

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: CSS Modules with custom design tokens
- **Internationalization**: i18next with language detection
- **Routing**: React Router DOM
- **Build Tool**: Vite with hot module replacement
- **Code Quality**: ESLint, Prettier, TypeScript strict mode

## 📦 Installation

To run this project locally, follow these steps:

1. **Clone the repository**

    ```bash
    git clone https://github.com/your-username/portfolio.git
    cd portfolio
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Start the development server**

    ```bash
    npm run dev
    ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── feed/           # Social/media feed component
│   ├── header/         # Navigation header
│   ├── lang/           # Language switcher
│   ├── ProfilePic/     # Profile picture component
│   ├── ProjectCard/    # Project card display
│   ├── SkillPillar/    # Skills visualization
│   ├── svg_links/      # SVG icon links
│   ├── title/          # Title components
│   └── Waveform/       # Audio waveform visualization
├── data/               # Static data and configurations
│   ├── projects.ts     # Project data and metadata
│   ├── techStacks.ts   # Technology stack definitions
│   └── logos/          # Technology logos
├── i18n/               # Internationalization setup
│   ├── index.ts        # i18n configuration
│   └── locales/        # Translation files
│       ├── en.json     # English translations
│       └── es.json     # Spanish translations
├── pages/              # Main page components
│   ├── HomePage.tsx    # Home page with portfolio
│   └── CVPage/         # Curriculum Vitae page
│       └── components/ # CV page components
└── styles/             # Global styles and design tokens
    ├── animations.css  # CSS animations
    ├── App.css         # Main application styles
    ├── index.css       # Global styles
    ├── styles.ts       # Style utilities
    └── tokens.css      # Design tokens and variables
```

## 🚀 Deployment

### Building for Production

```bash
npm run build
```

This command creates a `dist` folder with optimized production files.

### Preview Production Build

```bash
npm run preview
```

### Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Use the `dist` folder contents
- **Traditional Hosting**: Upload the `dist` folder to your web server

## 📝 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🌐 Internationalization

The portfolio supports multiple languages:

- English (default)
- Spanish
- German (coming soon)

Language detection is automatic based on browser settings, with manual switching available.

## 📄 License

This project is licensed under the MIT License - see the [MIT License](https://opensource.org/licenses/MIT) for details.

## 📞 Contact

- **Portfolio**: [https://sdar.dev](https://sdar.dev)
- **LinkedIn**: [Samuel Ballesteros](https://linkedin.com/in/samuel-ballesteros)
- **GitHub**: [@your-username](https://github.com/your-username)
- **Email**: [your-email@example.com](mailto:your-email@example.com)

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/) for fast development
- Styled with CSS Modules for component-scoped styles
- Internationalization powered by [i18next](https://www.i18next.com/)
- Icons from custom SVG components

---

⭐ Feel free to star this repository if you find it helpful!
