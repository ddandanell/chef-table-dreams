# Chef Table Dreams - AI Agent Instructions

## Project Overview
This is a premium hospitality services website for Chef Table Dreams, a Bali-based company offering private chef services, event staffing, and villa management. Built with React, TypeScript, Vite, and shadcn/ui components.

## Architecture & Tech Stack

### Core Technologies
- **Frontend**: React 18 + TypeScript + Vite
- **UI Framework**: shadcn/ui components + Radix UI primitives
- **Styling**: Tailwind CSS with custom OKLCH color system
- **Routing**: React Router DOM
- **State**: React Query for server state
- **Package Manager**: Uses Bun (see `bun.lockb`)

### Project Structure
```
src/
├── components/          # Business logic components (Hero, ServicesSection, etc.)
├── components/ui/       # Reusable shadcn/ui components
├── pages/              # Route components (Index, Services, About, etc.)
├── layouts/            # Layout wrappers (MainLayout with Header/Footer)
├── hooks/              # Custom React hooks
└── lib/                # Utilities (cn() function for class merging)
```

## Development Patterns

### Component Architecture
- **Page Components**: Located in `src/pages/`, handle routing and layout composition
- **Business Components**: In `src/components/`, contain domain-specific logic
- **UI Components**: In `src/components/ui/`, reusable primitives following shadcn/ui patterns
- **Layout Pattern**: Pages use `MainLayout` wrapper or inline Header/Footer composition

### Styling Conventions
- **Design System**: Custom OKLCH color palette in `src/index.css` with CSS custom properties
- **Class Merging**: Always use `cn()` from `@/lib/utils` for conditional classes
- **Responsive**: Mobile-first approach with Tailwind breakpoints
- **Animations**: Custom scroll reveal animations via `ScrollReveal` component
- **Gradients**: Custom `GradientText` component with predefined variants

### UI Component Patterns
- Components follow shadcn/ui conventions with forwardRef and proper TypeScript
- Custom components extend HTML attributes: `interface Props extends React.HTMLAttributes<HTMLElement>`
- Glass morphism effects via `GlassCard` component
- Consistent use of Lucide React icons

## Key Development Workflows

### Local Development
```bash
npm run dev          # Start dev server on localhost:8080
npm run build        # Production build
npm run build:dev    # Development build
npm run lint         # ESLint checking
```

### Component Creation
1. Use existing shadcn/ui components from `src/components/ui/`
2. For new UI primitives, follow shadcn/ui patterns with forwardRef
3. Business components should import UI components via `@/components/ui/`
4. Always use `cn()` for className composition

### Routing & Navigation
- All routes defined in `src/App.tsx` with React Router
- Pages follow flat structure in `src/pages/`
- Navigation handled by `Header` component with responsive mobile menu

## Business Domain Context

### Service Offerings
- **Private Chef Services**: Custom menus, dietary accommodations, cleanup
- **Event Staffing**: Servers, bartenders, coordinators for events
- **Villa Services**: Housekeeping, guest management, concierge

### Brand Identity
- Premium hospitality brand targeting luxury villa owners/renters in Bali
- Established since 2018
- Contact via WhatsApp integration (floating button pattern)
- Professional, elegant design with warm gold accent colors

## Integration Points

### External Services
- WhatsApp integration for customer contact
- Lovable platform integration (see `lovable-tagger` in dependencies)
- Static assets served from `src/assets/`

### Deployment
- Hosted via Lovable platform
- Auto-deployment from git commits
- Custom domain support available

## Code Quality Standards
- TypeScript strict mode enabled
- ESLint configuration with React hooks rules
- Consistent import aliasing via `@/` for src directory
- Component naming follows PascalCase
- File organization by feature/domain rather than type