# Movie Guide

Modern web application for working with movies, built using Next.js 15, TypeScript and Tailwind CSS.

## Technologies

- **Next.js 15** - React framework with App Router
- **TypeScript** - typed JavaScript
- **Tailwind CSS** - utility-first CSS framework
- **Jest + React Testing Library** - testing
- **Jest Axe** - accessibility testing
- **GitHub Actions** - CI/CD

## Testing

The project includes comprehensive testing:

- **Unit tests** - Jest + React Testing Library
- **Accessibility tests** - jest-axe for a11y checks
- **Coverage** - code coverage tracking

### Running tests

```bash
# All tests
npm test

# Tests in watch mode
npm run test:watch

# Tests with coverage
npm run test:coverage

# Accessibility tests
npm run test:a11y

# CI tests
npm run test:ci
```

## Accessibility (a11y)

The project follows accessibility principles:

- **Semantic markup** - proper HTML tags
- **ARIA attributes** - for screen readers
- **Keyboard navigation** - keyboard accessibility
- **Color contrast** - WCAG 2.1 AA
- **Automated testing** - jest-axe

## CI/CD Pipeline

### GitHub Actions Workflows

1. **CI/CD Pipeline** (`.github/workflows/ci-cd.yml`)
   - Testing on Node.js 20
   - ESLint checks
   - TypeScript checks
   - Unit tests
   - Accessibility tests
   - Code formatting
   - Project build

2. **Code Quality** (`.github/workflows/code-quality.yml`)
   - Code quality checks
   - Test coverage
   - Codecov upload

### Quality Gates

- **ESLint** - no linter errors
- **TypeScript** - no type errors
- **Tests** - all tests pass
- **A11y** - no accessibility violations
- **Formatting** - code is formatted
- **Coverage** - coverage is tracked

## Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Export static files
npm run export
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
├── lib/                   # Utilities and helpers
├── types/                 # TypeScript types
└── __tests__/             # Tests
    ├── setup.test.ts      # Test setup
    └── a11y/              # Accessibility tests
        └── accessibility.test.tsx
```

## Development

### Requirements

- Node.js 20+
- npm 9+

### Commands

```bash
# Install dependencies
npm install

# Development
npm run dev

# Linting
npm run lint
npm run lint:fix

# Formatting
npm run format
npm run format:check

# Types
npm run type-check

# Testing
npm test
npm run test:watch
npm run test:coverage
npm run test:a11y

# Build
npm run build
npm run export
```

## Quality Monitoring

- **Coverage** - tracked in CI
- **A11y** - automated checks
- **Performance** - Lighthouse metrics
- **Security** - npm audit

## Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Add tests
5. Check a11y
6. Create Pull Request

## License

MIT License
