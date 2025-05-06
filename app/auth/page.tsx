import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AuthForm } from "@/components/auth/auth-form"

export default function AuthPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <Header />

      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-center">Accede a tu cuenta</h1>
          <AuthForm />
        </div>
      </div>

      <Footer />
    </main>
  )
}
