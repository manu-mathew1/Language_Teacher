export default function HomePage() {
    return (
        <main className="container" style={{ paddingTop: 'var(--spacing-16)' }}>
            <div className="fade-in" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: 'var(--spacing-6)', background: 'linear-gradient(135deg, var(--color-primary-400), var(--color-primary-600))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    LinguaMentor
                </h1>

                <p style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-8)' }}>
                    Your AI Language Teacher — Strict, Experienced, Effective
                </p>

                <div style={{ padding: 'var(--spacing-8)', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)' }}>
                    <h2 style={{ fontSize: 'var(--font-size-2xl)', marginBottom: 'var(--spacing-4)' }}>
                        Phase 0: Project Setup Complete ✅
                    </h2>

                    <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--spacing-6)' }}>
                        The foundation has been laid. Check the console to see available endpoints.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-4)', textAlign: 'left' }}>
                        <div style={{ padding: 'var(--spacing-4)', background: 'var(--color-bg-tertiary)', borderRadius: 'var(--radius-lg)' }}>
                            <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-2)', color: 'var(--color-primary-400)' }}>
                                Backend API
                            </h3>
                            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-tertiary)' }}>
                                Express + Prisma + PostgreSQL
                            </p>
                            <code style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-success)' }}>
                                http://localhost:4000/health
                            </code>
                        </div>

                        <div style={{ padding: 'var(--spacing-4)', background: 'var(--color-bg-tertiary)', borderRadius: 'var(--radius-lg)' }}>
                            <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-2)', color: 'var(--color-primary-400)' }}>
                                Frontend Web
                            </h3>
                            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-tertiary)' }}>
                                Next.js 14 + TypeScript
                            </p>
                            <code style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-success)' }}>
                                http://localhost:3000
                            </code>
                        </div>

                        <div style={{ padding: 'var(--spacing-4)', background: 'var(--color-bg-tertiary)', borderRadius: 'var(--radius-lg)' }}>
                            <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-2)', color: 'var(--color-primary-400)' }}>
                                Database
                            </h3>
                            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-tertiary)' }}>
                                PostgreSQL + Redis
                            </p>
                            <code style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-success)' }}>
                                docker-compose up
                            </code>
                        </div>
                    </div>

                    <div style={{ marginTop: 'var(--spacing-8)', padding: 'var(--spacing-4)', background: 'var(--color-surface)', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--color-primary-500)' }}>
                        <h4 style={{ fontSize: 'var(--font-size-base)', marginBottom: 'var(--spacing-2)' }}>
                            🚀 Next Steps
                        </h4>
                        <ul style={{ paddingLeft: 'var(--spacing-6)', color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                            <li>Phase 1: Authentication & User Management</li>
                            <li>Phase 2: Curriculum Engine & Lesson System</li>
                            <li>Phase 3: AI Teacher Core</li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}
