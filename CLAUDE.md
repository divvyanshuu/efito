@AGENTS.md
# Efito — Production E-commerce Platform

## Business
Gym apparel brand targeting Indian fitness market.
Domain: efito.in | Stack: cloud-native, production-grade, scalable.

## Owner
Divyanshu Sharma — founder, lead engineer.

## Stack
Next.js 14 (App Router) · TypeScript · Tailwind · shadcn/ui
Prisma + PostgreSQL (Neon) · Clerk (auth) · Razorpay (payments)
Shiprocket (shipping) · Cloudinary (images) · Resend (email)
Zustand (state) · Framer Motion + GSAP (animations)
Vercel (hosting) · Cloudflare (security/CDN)

## Engineering standards
- Every function/class gets comments explaining what it does and why
- Introduce concepts with brief explanations (hooks, middleware, ORM, etc.)
- TypeScript strict mode. No any types.
- Mobile-first. Accessibility matters.
- Never commit .env.local
- API routes follow REST conventions
- All errors handled explicitly — no silent failures

## Learning objectives embedded in build
- Frontend architecture, component design, animations
- REST API design and best practices
- Database schema design, relationships, migrations
- Cloud-native deployment, CDN, WAF, CI/CD
- DSA patterns as they appear naturally in code
- SDLC: requirements → design → build → test → deploy → monitor

## Documentation
End of every phase: generate docs/phase-X.md
Covers: what was built, concepts introduced, decisions made, 
DSA patterns used, what to learn next.

## Current phase
Phase 1 — Foundation