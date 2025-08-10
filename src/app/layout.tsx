import "./globals.css";

export const metadata = {
  title: "OtterList",
  description: "The Anti-Amazon Marketplace for Ethical Brands",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-900">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white border-b border-zinc-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Logo / Title */}
            <h1 className="text-2xl font-bold">OtterList</h1>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-6">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full border border-zinc-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Future Nav Links */}
            <nav className="space-x-4">
              <a href="#" className="text-sm font-medium hover:text-green-600">
                Home
              </a>
              <a href="#" className="text-sm font-medium hover:text-green-600">
                Categories
              </a>
              <a href="#" className="text-sm font-medium hover:text-green-600">
                About
              </a>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <main className="max-w-7xl mx-auto px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
