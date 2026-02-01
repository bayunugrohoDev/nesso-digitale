Nesso Labs - Senior Front-End Take-Home Project
A high-quality, production-ready monorepo demonstrating a marketing landing page (Next.js) and a dashboard feature (Vite), built with a shared component architecture.

🚀 Tech Stack
Monorepo Management: npm Workspaces

Frameworks: Next.js 15 (App Router), React + Vite

Styling: Tailwind CSS v4 (Shared configuration)

State Management: Zustand (for Vite dashboard logic)

Testing: Vitest + React Testing Library

Typography & Icons: Lucide React, Custom Typography System

📂 Project Structure
Plaintext
/apps
  /next-landing-page  # Next.js marketing site (SEO & Performance)
  /vite-dashboard     # Vite-based app (Complex State & Interactivity)
/packages
  /shared-ui          # Reusable React components (Button, Heading, Text, etc.)
  /shared-config      # Shared constants and TypeScript configurations
  /shared-tailwind    # Shared styling theme using Tailwind v4
🛠 Setup & Installation
Prerequisites: Node.js (v18+)

Clone the repository and install dependencies:

Bash
npm install
Run the development servers:

Bash
# Run both apps simultaneously
npm run dev
Run unit tests for the Vite dashboard:

Bash
npm run test -w vite-dashboard
💡 Key Technical Decisions & Trade-offs
1. Monorepo Architecture
I chose a monorepo structure to demonstrate how to manage shared UI libraries and configurations across multiple applications. This reflects real-world scenarios where a marketing site (Next.js) and a product app (Vite) coexist.

2. Shared UI Pattern (Atomic-ish)
The /packages/shared-ui contains highly reusable, accessible, and themeable components.

Typography System: Implemented a polymorphic <Heading> and <Text> component to ensure semantic HTML and design consistency.

Tailwind v4 Integration: Used the new @source directive to enable CSS scanning across workspace packages without complex config files.

3. SEO & Performance (Next.js)
Metadata API: Implemented for proper indexing and Open Graph visibility.

Image Optimization: Utilized next/image with priority loading for LCP (Largest Contentful Paint) elements (Hero & Logo).

Core Web Vitals: Minimized layout shifts by explicitly defining aspect ratios for media elements.

4. Engineering Judgment in Vite App
For the "app-like" feature, I focused on:

State Management: Used Zustand for its lightweight footprint and clean store pattern.

Separation of Concerns: Logic for data filtering and sorting is decoupled from the UI, making it easily testable.

♿ Accessibility (A11y)
Semantic HTML: Strict use of <header>, <main>, <section>, and sequential heading levels (H1-H3).

Keyboard Navigation: Interactive elements like the mobile menu and project carousel are fully accessible via keyboard.

Focus Management: Clear focus states for all interactive buttons and inputs.

🔮 What's Next (Future Improvements)
If I had more time, I would:

Storybook: Implement Storybook for /shared-ui to document component variants.

E2E Testing: Add Playwright tests for critical user flows (e.g., CTA clicks).

CI/CD: Setup GitHub Actions for automated linting and testing on every PR.

📝 Notes on Figma Implementation
Pixel-Tight: Every spacing and color (primary #0B5ED7) was matched strictly with the provided Figma.

Assumptions: Since some hover states weren't defined, I implemented subtle scale and opacity transitions to enhance the UX.