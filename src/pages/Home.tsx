import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-6xl font-bold mb-6">
          FocusFlow
        </h1>

        <p className="text-gray-400 max-w-xl mb-8">
          A minimal, distraction-free Pomodoro app designed for deep work.
        </p>

        <Link
          to="/dashboard"
          className="bg-white text-black px-8 py-4 rounded font-bold"
        >
          Start Focusing 🚀
        </Link>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6 max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="font-bold mb-2">Deep Work Timer</h3>
          <p className="text-gray-400 text-sm">
            25-minute focus cycles with automatic break switching.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="font-bold mb-2">Session Tracking</h3>
          <p className="text-gray-400 text-sm">
            Track your productivity with daily and weekly analytics.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h3 className="font-bold mb-2">Freemium Ready</h3>
          <p className="text-gray-400 text-sm">
            Free daily sessions with upgrade path for power users.
          </p>
        </div>
      </section>

    </div>
  )
}
