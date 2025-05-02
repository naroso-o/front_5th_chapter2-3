import { BrowserRouter as Router } from "react-router-dom"
import Header from "./widgets/layout/Header"
import Footer from "./widgets/layout/Footer"
import PostsManagerPage from "./pages/PostsManagerPage"
import TanstackQueryProvider from "./app/assets/query/TanstackQueryProvider"

const App = () => {
  return (
    <TanstackQueryProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <PostsManagerPage />
          </main>
          <Footer />
        </div>
      </Router>
    </TanstackQueryProvider>
  )
}

export default App
