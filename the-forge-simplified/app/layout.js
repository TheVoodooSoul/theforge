import './globals.css';

export const metadata = {
  title: 'The Forge: Cinematic AI Action Generator',
  description: 'Generate cinematic action scenes with AI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark text-light">
        <div className="app-container">
          <header className="main-header">
            <nav>
              <div className="logo">THE FORGE</div>
              <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/generate">Generate Scene</a></li>
              </ul>
            </nav>
          </header>
          <main>{children}</main>
          <footer>
            <p>© {new Date().getFullYear()} The Forge: Cinematic AI Action Generator</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
