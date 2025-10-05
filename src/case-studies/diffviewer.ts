import type { CaseStudy } from './schema';

export const diffviewerCaseStudy: CaseStudy = {
  slug: 'diffviewer',
  hero: {
    title: 'DiffViewer',
    subtitle: 'VS Code–style Diff Viewer for Developers',
    timeframe: 'Sep 2025 - Oct 2025',
    role: 'Full Stack Developer',
    stack: ['React', 'TypeScript', 'Vite', 'Monaco Editor', 'Highlight.js', 'Diff Engine'],
    coverImage: '/projects_pics/diffviewer.png'
  },
  summary:
    'A developer-friendly, VS Code–inspired diff viewer that enables real-time side-by-side editing and comparison of code snippets. Designed for clarity, stability, and customizability, it powers clean diffs with syntax highlighting and change statistics.',
  problem:
    'Existing diff tools are either rigid and hard to customize or too barebones, lacking editing ergonomics and modern UX. Developers need a fast, predictable, and extensible diff viewer for teaching, reviewing, and experimenting with code changes.',
  audienceAndConstraints: {
    audience:
      'Developers, code reviewers, and educators who need to quickly visualize and experiment with differences between code versions.',
    constraints: [
      'Cursor stability when editing both panes, especially the "original" side',
      'Performance budget: responsive for files <5k lines, usable up to ~20k lines',
      'Must integrate syntax highlighting across multiple languages',
      'Lightweight footprint to avoid large bundle sizes',
      'Future extensibility for custom diff rendering'
    ]
  },
  architecture: {
    overview:
      'Built with React + Vite + TypeScript. Monaco Editor provides editable panes, while the diff engine computes word/line differences. Highlight.js auto-detects syntax and applies VS Code Dark+-style highlighting. React state subscribes to editor changes for diff statistics, with plans to decouple editor state from React to preserve cursor position.',
    keyDecisions: [
      {
        decision: 'Editable original pane',
        rationale: 'Allows users to quickly try variations on both sides, not just modified code.',
        tradeoffs: 'Introduced cursor jump bug that required deeper integration with Monaco models.'
      },
      {
        decision: 'Word-level diff with whitespace awareness',
        rationale: 'Provides granular readability for code review and teaching use cases.',
        tradeoffs: 'Can be slower for very large files; line-level diff may be needed later.'
      },
      {
        decision: 'Preserve view state on updates',
        rationale: 'Ensures no cursor/scroll jumps during editing or language changes.',
        tradeoffs: 'More complex state management, requires bypassing controlled React flow.'
      }
    ],
    diagramNote:
      'Two Monaco models (original and modified) feed into DiffEditor, with React only subscribing for statistics.'
  },
  implementation: {
    highlights: [
      {
        title: 'Side-by-Side Editable Diff',
        detail:
          'Monaco DiffEditor integrated with React state, both panes editable with live diff calculation.'
      },
      {
        title: 'Syntax Highlighting',
        detail:
          'Highlight.js integrated with Monaco, providing auto-detection and VS Code Dark+ styling.'
      },
      {
        title: 'Diff Statistics',
        detail:
          'Real-time count of additions, deletions, and modifications surfaced alongside the editor.'
      },
      {
        title: 'Cursor Stability Fix',
        detail:
          'Refactored to own Monaco models directly, decoupling from React props to preserve selection and scroll position.'
      }
    ],
    codeSnippets: [
      {
        label: 'Preserving View State in Monaco',
        language: 'ts',
        code: `const view = editor.saveViewState();
model.pushEditOperations(
  [],
  [{ range: model.getFullModelRange(), text: next }],
  () => null
);
editor.restoreViewState(view);
editor.focus();`
      }
    ]
  },
  results: {
    metrics: [
      { label: 'Languages Supported', value: '6+' },
      { label: 'Diff Speed', value: '<50ms for typical files' },
      { label: 'Bundle Size', value: '< 200kb gzipped' },
      { label: 'Cursor Jumps Fixed', value: '100%' }
    ],
    outcomes: [
      'Achieved smooth, predictable editing experience across both panes',
      'Delivered a developer-friendly UI closely resembling VS Code',
      'Enabled teaching and code review scenarios with instant feedback',
      'Built a solid foundation for future custom diff rendering'
    ]
  },
  demo: {
    liveUrl: 'https://sdar.dev/diffviewer',
    repoUrl: 'https://github.com/sssamuelll/diffviewer'
  },
  lessons: [
    'Controlled React state can conflict with Monaco internals – owning models directly is cleaner',
    'Syntax highlighting integration needs careful bundle size management',
    'Auto language switching during typing is disruptive; explicit user selection works better',
    'Performance testing with large files is crucial to validate architectural decisions'
  ],
  nextSteps: [
    'Implement custom diff renderer on top of Monaco',
    'Add language selector with manual override',
    'Enable permalink sharing and export of diff sessions',
    'Test scalability with 20k+ line files and optimize rendering'
  ]
};
