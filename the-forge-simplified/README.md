# The Forge: Cinematic AI Action Generator (Simplified)

This is a simplified version of "The Forge" application, designed to demonstrate the basic structure of a Next.js application with App Router.

## Features

- Home page with application overview
- Dashboard to view generated scenes
- Scene generation form with basic parameters
- Dark theme UI

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Deployment

This application is structured to deploy correctly on Vercel without the "doesn't have a root layout" error, as it includes:

- A proper `app/layout.js` file with the RootLayout component
- Correct folder structure following Next.js App Router conventions

To deploy to Vercel:

1. Push this repository to GitHub
2. Import the repository in Vercel
3. Deploy with default settings

## Structure

- `app/layout.js` - Root layout with metadata and global structure
- `app/page.js` - Home page
- `app/dashboard/page.js` - Dashboard page showing generated scenes
- `app/generate/page.js` - Scene generation form (client component)
- `app/globals.css` - Global styles with dark theme
