export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>Batalha Naval</header>
        <main> {children} </main>
        <footer>Author: Marcelo Urquiza</footer>
      </body>
    </html>
  );
}
