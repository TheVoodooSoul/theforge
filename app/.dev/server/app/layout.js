export const metadata = {
  title: "The Forge - Cinematic AI Action Generator",
  description: "Generate cinematic action scenes using AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="min-h-screen bg-background">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
