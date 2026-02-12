import { supabase } from "../../services/supabase"
import { useNavigate } from "react-router-dom"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate("/login")
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow p-4 flex justify-between">
        <h1 className="font-bold">PWA Factory</h1>
        <button
          onClick={handleLogout}
          className="text-sm bg-black text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </nav>

      <main className="p-6">
        {children}
      </main>
    </div>
  )
}