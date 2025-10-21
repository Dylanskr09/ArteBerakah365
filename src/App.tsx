import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { AppRouter } from './routes/AppRouter'

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1">
        <AppRouter />
      </main>
      <Footer />
    </div>
  )
}
