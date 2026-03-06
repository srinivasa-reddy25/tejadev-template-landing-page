import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Changelog — TejaDev',
  description: 'What changed, when, and why. Every version of TejaDev template documented.'
}

// ─── Data ─────────────────────────────────────────────────────────────────────
// To add a new version: prepend a new entry to this array.
// The UI will update automatically.

type TChangeType = 'added' | 'improved' | 'fixed' | 'removed'

type TChangeEntry = {
  version: string
  date: string
  summary: string
  changes: { type: TChangeType; text: string }[]
}

const CHANGELOG: TChangeEntry[] = [
  {
    version: 'v1.0.0',
    date: 'March 2026',
    summary: 'Initial release — the full production-ready monorepo template.',
    changes: [
      { type: 'added', text: 'Turborepo monorepo with apps/web (Next.js 16) and apps/api (Express + Bun)' },
      { type: 'added', text: 'Firebase Auth — email/password, Google OAuth, One Tap, email verification' },
      { type: 'added', text: 'Firebase Admin SDK on the API for server-side token verification' },
      { type: 'added', text: 'MongoDB + Mongoose with shared model registry via packages/db' },
      { type: 'added', text: 'Shared packages: db, ui, logging, shared, typescript-config, eslint-config' },
      { type: 'added', text: 'shadcn/ui component library with Radix UI primitives and custom theme tokens' },
      { type: 'added', text: 'TanStack Query for server state management in the web app' },
      { type: 'added', text: 'Axiom-backed structured logging via packages/logging' },
      { type: 'added', text: 'Zod schema validation on the API' },
      { type: 'added', text: 'ESLint, Prettier, Commitlint, Husky, lint-staged — all pre-configured' },
      { type: 'added', text: 'GitHub Actions CI pipeline' },
      { type: 'added', text: 'express-rate-limit and helmet for API security' },
      { type: 'added', text: 'Seed script for database initialization' },
      { type: 'added', text: 'Health check endpoint with memory usage details' }
    ]
  }
]

// ─── Styles ───────────────────────────────────────────────────────────────────

const TYPE_STYLES: Record<TChangeType, { dot: string; badge: string; label: string }> = {
  added:    { dot: 'bg-primary',              badge: 'bg-primary/10 text-primary border-primary/20',             label: 'Added' },
  improved: { dot: 'bg-accent',               badge: 'bg-accent/10 text-accent border-accent/20',                label: 'Improved' },
  fixed:    { dot: 'bg-yellow-500',           badge: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',    label: 'Fixed' },
  removed:  { dot: 'bg-muted-foreground',     badge: 'bg-muted text-muted-foreground border-border',             label: 'Removed' }
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Navbar ─────────────────────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/40">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xl font-brand font-bold tracking-tight text-foreground">
              TejaDev
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'Features', href: '/#features' },
              { label: 'Stack', href: '/#stack' },
              { label: 'Dev Experience', href: '/#devex' },
              { label: 'Changelog', href: '/changelog' }
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm transition-colors duration-200 ${
                  link.href === '/changelog'
                    ? 'text-foreground font-semibold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div>
            <Link
              href="/#features"
              className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary-dark transition-all duration-200 font-semibold"
            >
              Get Started
            </Link>
          </div>
        </nav>
      </header>

      {/* ── Content ────────────────────────────────────────────────────── */}
      <main className="max-w-3xl mx-auto px-6 pt-36 pb-28">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 block">
            What&apos;s new
          </span>
          <h1 className="text-4xl md:text-5xl font-brand font-bold text-foreground mb-4 leading-tight">
            Changelog
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Every version, every change — documented as the template evolves.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-0 w-px bg-border/50" />

          <div className="space-y-16">
            {CHANGELOG.map((entry, i) => (
              <div key={entry.version} className="relative pl-8">
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 top-1.5 w-2 h-2 rounded-full -translate-x-[3.5px] ${
                    i === 0 ? 'bg-primary ring-4 ring-primary/20' : 'bg-border'
                  }`}
                />

                {/* Version header */}
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="text-xl font-brand font-bold text-foreground">
                    {entry.version}
                  </span>
                  {i === 0 && (
                    <span className="text-xs bg-primary/10 text-primary border border-primary/20 px-2.5 py-0.5 rounded-full font-semibold">
                      Latest
                    </span>
                  )}
                  <span className="text-sm text-muted-foreground">{entry.date}</span>
                </div>

                {/* Summary */}
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {entry.summary}
                </p>

                {/* Changes */}
                <ul className="space-y-3">
                  {entry.changes.map((change, j) => {
                    const style = TYPE_STYLES[change.type]
                    return (
                      <li key={j} className="flex items-start gap-3">
                        <span
                          className={`mt-1.5 inline-flex shrink-0 text-xs font-semibold px-2 py-0.5 rounded border ${style.badge}`}
                        >
                          {style.label}
                        </span>
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {change.text}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* ── Footer ─────────────────────────────────────────────────────── */}
      <footer className="border-t border-border/40 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} TejaDev Template. MIT License.
          </p>
          <Link
            href="/"
            className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            ← Back to home
          </Link>
        </div>
      </footer>
    </div>
  )
}
