# Phase 1 — Foundation Complete ✅

**Date Completed:** April 20, 2026  
**Live URL:** https://efito.vercel.app  
**GitHub:** https://github.com/divvyanshuu/efito

---

## What We Built

A production-ready Next.js foundation with:
- ✅ Professional navbar with coded logo
- ✅ Animated hero section with scroll indicator
- ✅ Product grid with 4 placeholder cards
- ✅ Footer with navigation links
- ✅ Database connected (Supabase PostgreSQL)
- ✅ Type-safe state management (Zustand)
- ✅ Deployed to Vercel with auto-deployment on Git push

---

## Tech Stack Implemented

| Category | Technology | Why We Chose It |
|----------|-----------|-----------------|
| **Framework** | Next.js 14 (App Router) | Server + client rendering in one, file-based routing, built-in API routes |
| **Language** | TypeScript | Catches bugs at compile time, not in production |
| **Styling** | Tailwind CSS + shadcn/ui | Utility-first CSS, copy-paste components you own |
| **Animations** | Framer Motion | Declarative React animations, smooth and performant |
| **Database** | PostgreSQL (Supabase) | Cloud-hosted, free tier, scales to production |
| **ORM** | Prisma | Type-safe database queries, auto-generates client |
| **State** | Zustand | Lightweight global state, no Redux boilerplate |
| **Hosting** | Vercel | Built for Next.js, deploys in 30 seconds |
| **Version Control** | Git + GitHub | Industry standard, enables CI/CD |

---

## Concepts Learned

### 1. **Environment Variables**
**What:** Key-value pairs your OS/app maintains that programs can read  
**Why:** Store secrets (DB passwords, API keys) outside code  
**Example:** `DATABASE_URL` in `.env` file  
**Interview Relevance:** Asked in every backend/DevOps interview

### 2. **PATH**
**What:** List of directories your terminal searches for executables  
**Why:** When you type `node`, terminal checks PATH to find where `node` is installed  
**Real Issue We Hit:** `code` command not found until we added it to PATH  
**System Design Connection:** Environment configuration in containers/servers

### 3. **Package Managers**
**npm vs npx:**
- `npm install` — downloads and saves a package
- `npx` — downloads, runs once, deletes (great for scaffolding tools)

### 4. **Database Migrations**
**What:** Version control for your database schema  
**Why:** Track every change, deploy safely to production  
**Commands:**
- `npx prisma db push` — sync schema (development)
- `npx prisma migrate dev` — create migration file (production-ready)

### 5. **Singleton Pattern**
**Where We Used It:** `lib/prisma.ts`  
**Problem:** Next.js hot-reloads constantly in dev → 100 DB connections → crash  
**Solution:** Store PrismaClient on global object, reuse across reloads  
**Interview Relevance:** Classic design pattern question

### 6. **Type Systems**
**Static Typing (TypeScript):** Errors at compile time  
**Dynamic Typing (JavaScript):** Errors at runtime (in production)  
**Trade-off:** Development speed vs production safety  
**Our Choice:** TypeScript strict mode — catch bugs before users do

### 7. **State Management**
**Problem:** Component A (Navbar) needs cart count. Component B (ProductPage) adds item. They're not parent/child.  
**Solution:** Global store both components read from (Zustand)  
**Alternative:** Redux (too complex for our scale)

### 8. **CI/CD Pipeline**
**What We Built:**
1. Write code locally
2. `git push` to GitHub
3. Vercel auto-detects, builds, deploys
4. Live in 2 minutes

**Production Pattern:** Every company uses this flow (GitHub → CircleCI/Jenkins → AWS/GCP)

---

## DSA Patterns Used in Real Code

### Array.reduce()
**Location:** `store/cartStore.ts` — `getTotalItems()` and `getTotalPrice()`  
**Pattern:** Accumulator pattern — reduce array to single value  
**Interview Frequency:** Very high. Asked at Google, Amazon, Meta consistently.

```typescript
getTotalItems: () =>
  get().items.reduce((total, item) => total + item.quantity, 0)
```

**Explanation:** Start with 0, for each item add its quantity to running total.

### Array.filter() + Array.map()
**Location:** `store/cartStore.ts` — `removeItem()` and `updateQuantity()`  
**Pattern:** Functional array manipulation  
**Why Not Loops:** Immutable, composable, cleaner

---

## Commands Reference

### Development
```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Start production server
```

### Database
```bash
npx prisma generate  # Generate Prisma client
npx prisma db push   # Sync schema to DB
npx prisma studio    # Open DB GUI
```

### Git
```bash
git add .
git commit -m "message"
git push
git status           # Check what changed
git log              # See commit history
```

### Troubleshooting
```bash
rm -rf node_modules package-lock.json
npm install          # Clean reinstall

npx prisma generate  # If Prisma errors
```

---

## File Structure Explained
efito/
├── app/                    # Next.js routes
│   ├── page.tsx           # Homepage (efito.in/)
│   ├── layout.tsx         # Root layout (wraps all pages)
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Navbar, Footer, Logo
│   └── shop/              # ProductCard, CartDrawer (future)
├── lib/
│   ├── prisma.ts          # Database client singleton
│   └── utils.ts           # Helper functions
├── store/
│   └── cartStore.ts       # Zustand global state
├── types/
│   └── index.ts           # TypeScript interfaces
├── prisma/
│   └── schema.prisma      # Database schema
├── public/
│   └── images/            # Static assets
├── .env                   # Environment variables (NEVER COMMIT)
└── package.json           # Dependencies & scripts

---

## Problems Solved & How

### Issue 1: `command not found: npx`
**Cause:** Node.js not installed  
**Fix:** `brew install node`  
**Concept:** Package managers, PATH

### Issue 2: Prisma client import error
**Cause:** Client not generated during Vercel build  
**Fix:** Add `"postinstall": "prisma generate"` to package.json  
**Concept:** Build hooks, deployment pipelines

### Issue 3: Database connection timeout
**Cause:** Using pgbouncer pooler incompatible with migrations  
**Fix:** Switch to session pooler (port 5432)  
**Concept:** Connection pooling, IPv4/IPv6

### Issue 4: Git authentication failed
**Cause:** GitHub disabled password auth  
**Fix:** Used GitHub CLI (`gh auth login`)  
**Concept:** OAuth, personal access tokens

---

## What's Next — Phase 2

**Goal:** Individual product pages + cart drawer

**Features:**
- `/products/[slug]` — dynamic product detail pages
- Size and color selectors
- Add to cart with animation
- Cart drawer (slides in from right)
- Quantity controls

**New Concepts:**
- Dynamic routing in Next.js
- Client-side data fetching
- Optimistic UI updates
- LocalStorage persistence

**Estimated Time:** 3-4 hours

---

## Interview Prep — What You Can Now Explain

✅ Difference between SSR and CSR  
✅ How Next.js App Router works  
✅ Why TypeScript over JavaScript  
✅ Database connection pooling  
✅ Singleton pattern with example  
✅ Git workflow and CI/CD  
✅ Environment variable management  
✅ State management patterns  
✅ REST API design basics (for Phase 3)

---

## Resources for Deeper Learning

**Next.js:** nextjs.org/docs  
**TypeScript:** typescriptlang.org/docs/handbook  
**Prisma:** prisma.io/docs  
**Tailwind:** tailwindcss.com/docs  
**Git:** git-scm.com/book/en/v2  

---

**Phase 1 Status:** Complete ✅  
**Next Session:** Phase 2 — Product Pages & Cart  
**Live Site:** https://efito.vercel.app