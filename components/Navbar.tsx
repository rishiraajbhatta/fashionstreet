export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b">
      
      <div className="text-2xl font-bold">
        FashionStreet
      </div>

      <div className="flex gap-8">
        <a href="/">Home</a>
        <a href="/men">Men</a>
        <a href="/women">Women</a>
        <a href="/new-arrivals">New Arrivals</a>
      </div>

      <div className="flex gap-6">
        <button>Search</button>
        <button>Cart</button>
        <button>Account</button>
      </div>

    </nav>
  );
}