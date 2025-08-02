# 🤖 AssistMind AI - Landing Page

A modern, responsive landing page for AssistMind AI - an intelligent voice agent solution that handles calls, books appointments, and qualifies leads 24/7.

![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.11-purple)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Components](#components)
- [Responsive Design](#responsive-design)
- [Deployment](#deployment)
- [Contributing](#contributing)

## ✨ Features

### 🎨 Design & UI

- **Modern, Clean Design** - Professional landing page with smooth animations
- **Fully Responsive** - Optimized for mobile, tablet, and desktop devices
- **Interactive Components** - Engaging user experience with Framer Motion animations
- **Custom Illustrations** - High-quality images and graphics

### 📱 Responsive Sections

- **Hero Section** - Compelling headline with call-to-action
- **AI in Action** - Interactive showcase of voice agent capabilities
- **Feature Highlights** - Key benefits and use cases
- **How It Works** - Step-by-step process explanation
- **Feature Comparison** - Competitive advantage table
- **Customer Testimonials** - Social proof with animated carousel
- **Integrations** - Popular business tool connections
- **Pricing Plans** - Clear pricing structure
- **FAQ Section** - Expandable accordion with common questions
- **Contact Forms** - Lead capture and enterprise inquiries

### 🚀 Performance

- **Next.js 15** - Latest framework with App Router
- **Server-Side Rendering** - Fast initial page loads
- **Image Optimization** - Automatic image compression and lazy loading
- **SEO Optimized** - Meta tags and structured data

## 🛠 Tech Stack

| Technology        | Version  | Purpose                     |
| ----------------- | -------- | --------------------------- |
| **Next.js**       | 15.4.4   | React framework with SSR    |
| **React**         | 19.1.0   | UI library                  |
| **TypeScript**    | 5.x      | Type safety                 |
| **Tailwind CSS**  | 4.x      | Utility-first CSS framework |
| **Framer Motion** | 12.23.11 | Animation library           |
| **ESLint**        | 9.x      | Code linting                |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/numaanahmed3110/AssistMind-AI_LandingPage.git
   cd AssistMind-AI_LandingPage
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### Available Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
assistmind-ai-landing/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── AiInAction.tsx
│       ├── EnterpriseCta.tsx
│       ├── Faq.tsx
│       ├── FeatureComparison.tsx
│       ├── FinalCta.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── HowItWorks.tsx
│       ├── Integrations.tsx
│       ├── Navbar.tsx
│       ├── Pricing.tsx
│       ├── SmarterVoicemail.tsx
│       └── Testimonials.tsx
├── public/
│   ├── images/
│   ├── agents/
│   └── companies/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

## 🧩 Components

### Core Components

- **Hero** - Main landing section with primary CTA
- **AiInAction** - Interactive demo of AI capabilities
- **SmarterVoicemail** - Feature showcase with dashboard images
- **HowItWorks** - Step-by-step process explanation
- **FeatureComparison** - Competitive advantages table
- **Testimonials** - Customer reviews carousel
- **Integrations** - Third-party tool connections
- **Pricing** - Subscription plans and pricing
- **Faq** - Expandable Q&A section
- **Footer** - Contact info and links

## 📱 Responsive Design

- **Mobile-First Approach** - Optimized for all screen sizes
- **Breakpoints**:
  - Mobile: `< 768px`
  - Tablet: `768px - 1024px`
  - Desktop: `> 1024px`
- **Flexible Layouts** - CSS Grid and Flexbox
- **Touch-Friendly** - Appropriate tap targets and spacing

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every commit

### Manual Deployment

```bash
npm run build
npm run start
```

### Environment Variables

No environment variables required for basic deployment.

## 🤝 Contributing

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Maintain responsive design principles
- Test on multiple devices
- Follow the existing code style

### Steps to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- Framer Motion for smooth animations
- The open-source community

---

**Built by [Numaan Ahmed](https://github.com/numaanahmed3110)**

For questions or support, please open an issue or contact the development team.
