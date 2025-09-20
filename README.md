# letsAI-Lab

A modern AI solutions playground and demo lab, built with Next.js, TypeScript, and Tailwind CSS. letsAI-Lab showcases 20+ enterprise-ready AI/ML solutions across domains like RAG, Copilot, Vision, Healthcare, Finance, Manufacturing, NLP, and more.

## Features

- **AI Solution Gallery:** Browse, search, and filter a curated set of AI demos by category and status.
- **Live Demos:** Run interactive, scenario-driven demos for each solution with streaming logs.
- **Solution Details:** View KPIs, tags, and business context for each AI service.
- **Playground Mode:** Test and interact with AI services using custom inputs.
- **ChatBot Integration:** Simulate conversations and analytics with visual feedback.
- **Modern UI:** Responsive, accessible design using Radix UI, Tailwind CSS, and custom components.

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router, Client Components)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/) (Dialog, Select, Tabs)
- [Lucide Icons](https://lucide.dev/)
- [Sonner](https://sonner.emilkowal.ski/) (toasts)
- [ESLint](https://eslint.org/) for linting

## Getting Started

1. **Install dependencies:**

   ```sh
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**

   ```sh
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app.

3. **Build for production:**

   ```sh
   pnpm build
   # or
   npm run build
   # or
   yarn build
   ```

## Project Structure

- `app/` — Next.js app directory (routes, pages, layouts)
- `components/` — Reusable UI and feature components
- `lib/` — Business logic, service definitions, and utilities
- `public/` — Static assets (SVGs, images)

## AI Solutions Catalog

The lab includes demos for:

- **RAG:** Enterprise Knowledge Navigator
- **Copilot:** RetailGPT, Meeting Assistant, Customer Support Bot, etc.
- **Vision:** Quality Control, Plant Disease Detection, Object Tracking
- **Healthcare:** Clinical Decision Support, Medical Training
- **Finance:** Risk Advisor
- **Manufacturing:** Predictive Maintenance
- **Compliance & Legal:** Regulatory QA, Document Analysis
- **NLP:** Blog Generator, Summarization, Doc Intelligence
- **ITOps, Marketing, Real-Estate, Time-Series** and more

Each solution features:

- Business scenario walkthroughs
- KPIs and tags
- Interactive demo logs
- Chat and analytics simulation

## Customization

- Add/edit solutions in `lib/services.ts`
- UI components in `components/`
- Styles in `app/globals.css` and Tailwind config

## License

This project is for demo and educational purposes. For commercial use, please contact the author (https://www.iamsubhadeep.dev/).

---

Made with ❤️ by letsAI-Lab (https://www.iamsubhadeep.dev/).
