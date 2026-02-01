# Senior Front-End Engineer Take-Home Project

## Overview

This repository contains the implementation for a take-home project designed to showcase skills in building a responsive landing page with Next.js, a reusable component set, and a small "app-like" feature with React (Vite). The project is structured as a monorepo to maximize code sharing and maintainability.

## What Was Built & Project Navigation

The project is divided into three main packages within this monorepo:

1.  **Landing Page (`apps/next-landing-page`)**
    *   A responsive marketing website built with Next.js and the App Router.
    *   Implements several standard sections: Hero, Services, Features, Projects, CTA, and a Footer.

2.  **Dashboard App (`apps/vite-dashboard`)**
    *   A small, self-contained single-page application built with React and Vite.
    *   Its core feature is displaying project data in a `ProjectTable` and allowing users to add/edit data via a `ProjectForm`.
    *   Demonstrates state management, component decomposition, and handling user interactions.

3.  **Shared UI Library (`packages/shared-ui`)**
    *   A set of reusable UI components shared by both the landing page and the dashboard app.
    *   Available components include: `Button`, `Card`, `Input`, `Table`, `Typography`, etc.
    *   Designed for consistency and reusability.

## Setup & Running the Project

**Prerequisites:**
*   Node.js v20.x or higher

**Steps:**

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/bayunugrohoDev/nesso-digitale
    cd nesso-digitale
    ```

2.  **Install dependencies:**
    This project uses NPM workspaces. Install all dependencies from the root directory.
    ```bash
    npm install
    ```

3.  **Run the applications:**
    *   **To run the Landing Page (Next.js):**
        ```bash
        npm run dev:next
        ```
        Open [http://localhost:3000](http://localhost:3000) in your browser.

    *   **To run the Dashboard App (Vite):**
        ```bash
        npm run dev:vite
        ```
        Open [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

    *   **To run Unit Tests (Vite):**
        ```bash
        npm run test
        ```
    *   **To run Both Landing page and Dasboard ap:**
        ```bash
        npm run dev
        ```


## Architectural & Technical Highlights

This project is structured as a modern monorepo to demonstrate best practices in frontend development, focusing on code reusability, scalability, and separation of concerns.

*   **Monorepo Architecture with NPM Workspaces:** The entire project is contained within a single repository using NPM Workspaces. This structure allows for the clean separation of distinct applications (`apps` directory) while enabling efficient code sharing through local packages (`packages` directory). This approach simplifies dependency management and ensures consistency across the ecosystem.

*   **Two Distinct Applications:**
    *   **`next-landing-page`:** A server-side rendered (SSR) landing page built with Next.js and the App Router. This choice is ideal for a public-facing website, providing excellent SEO capabilities and optimized performance out of the box.
    *   **`vite-dashboard`:** A client-side rendered (CSR) single-page application built with React and Vite. Vite was chosen for its rapid development server and fast build times, which are perfect for an internal tool or dashboard.

*   **Centralized Code Sharing:**
    *   **`shared-ui`:** A dedicated package containing a library of reusable React components (e.g., `Button`, `Card`, `Input`). Both the landing page and the dashboard consume this package, ensuring a consistent user interface and user experience across the entire platform.
    *   **`shared-tailwind`:** A shared package for Tailwind CSS configuration and base styles. This centralizes the design system's tokens and utilities, making it easy to maintain a consistent visual identity.
    *   **`shared-config`:** This package provides a common TypeScript configuration (`tsconfig.json`), ensuring that all projects in the monorepo adhere to the same strict type-checking rules.

This architecture demonstrates a robust and scalable setup that mirrors a real-world production environment, where maintaining consistency and development velocity across multiple applications is crucial.

## Future Improvements

If I had more time, I would focus on the following:
*   Real-time Data Integration: Connecting the Dashboard and Landing Page through a shared API, so any project updates in the Dashboard reflect automatically on the Landing Page.
*   Scroll Animations: Adding reveal effects on scroll using Framer Motion to give the Landing Page a more premium and interactive feel.
*   Lazy Load Loading: Implementing lazy loading for section components to improve the user experience and reduce the initial bundle size.
*   Dashboard Optimizations: Improving mobile responsiveness for the dashboard and adding features like drag-and-drop for reordering projects.
*   Expanded Testing: Increasing code coverage with more unit tests and adding E2E testing with Playwright to ensure critical user flows are rock-solid.
