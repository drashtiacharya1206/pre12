
import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Outlet,
  Link,
} from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  History,
  Ban,
  Search,
  Bell,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  Truck,
  CircleCheck,
  Clock3,
  Menu,
  X,
  Sparkles,
  ChevronRight,
  CalendarDays,
  Download,
  Plus,
  MoreHorizontal,
} from "lucide-react";

const orders = [
  {
    id: "#ORD-1024",
    name: "Minimal Sneakers",
    category: "Footwear",
    price: 2499,
    date: "24 Oct 2026",
    status: "Processing",
    initials: "MS",
    color: "bg-violet-100 text-violet-700",
  },
  {
    id: "#ORD-1023",
    name: "Everyday Backpack",
    category: "Accessories",
    price: 1899,
    date: "23 Oct 2026",
    status: "Shipped",
    initials: "EB",
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: "#ORD-1022",
    name: "Wireless Headphones",
    category: "Electronics",
    price: 3299,
    date: "22 Oct 2026",
    status: "Delivered",
    initials: "WH",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: "#ORD-1021",
    name: "Classic Watch",
    category: "Accessories",
    price: 2799,
    date: "21 Oct 2026",
    status: "Cancelled",
    initials: "CW",
    color: "bg-pink-100 text-pink-700",
  },
  {
    id: "#ORD-1020",
    name: "Smart Desk Lamp",
    category: "Home",
    price: 1599,
    date: "20 Oct 2026",
    status: "Delivered",
    initials: "DL",
    color: "bg-amber-100 text-amber-700",
  },
  {
    id: "#ORD-1019",
    name: "Cotton Hoodie",
    category: "Fashion",
    price: 2199,
    date: "19 Oct 2026",
    status: "Cancelled",
    initials: "CH",
    color: "bg-emerald-100 text-emerald-700",
  },
];

const navItems = [
  { to: "/", label: "Overview", icon: LayoutDashboard, end: true },
  { to: "/orders", label: "All Orders", icon: ShoppingBag },
  { to: "/orders/current", label: "Current Orders", icon: Package },
  { to: "/orders/history", label: "Order History", icon: History },
  { to: "/orders/cancelled", label: "Cancelled Orders", icon: Ban },
];

function Sidebar({ closeMenu }) {
  return (
    <aside className="flex h-full flex-col bg-[#111329] px-5 py-7 text-white">
      <Link to="/" onClick={closeMenu}
        className="mb-11 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500 shadow-lg shadow-violet-500/30">
          <ShoppingBag size={23} />
        </div>
        <div>
          <h1 className="text-xl font-black tracking-tight">NEXORA</h1>
          <p className="text-[10px] tracking-[3px] text-slate-400">
            COMMERCE OS
          </p>
        </div>
      </Link>

      <p className="mb-4 px-3 text-[10px] font-bold tracking-[2px] text-slate-500">
        WORKSPACE
      </p>

      <nav className="space-y-2">
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={closeMenu}
            className={({ isActive }) =>
              `group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition ${
                isActive
                  ? "bg-violet-500 text-white shadow-lg shadow-violet-950/50"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`
            }
          >
            <Icon size={18} />
            <span>{label}</span>
            {label === "All Orders" && (
              <span className="ml-auto rounded-md bg-white/10 px-2 py-0.5 text-xs">
                24
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="mb-3 flex items-center gap-2 text-violet-300">
          <Sparkles size={17} />
          <span className="text-xs font-bold">NEXORA PRO</span>
        </div>
        <p className="mb-4 text-xs leading-5 text-slate-400">
          Your business, beautifully organized. Every order in one place.
        </p>
        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-3/4 rounded-full bg-violet-400" />
        </div>
        <p className="mt-2 text-[10px] text-slate-500">
          Dashboard workspace
        </p>
      </div>

      <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-pink-400 font-bold">
          D
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold">Store Admin</p>
          <p className="text-xs text-slate-500">Administrator</p>
        </div>
        <MoreHorizontal className="ml-auto text-slate-400" size={20} />
      </div>
    </aside>
  );
}

function Header({ title, subtitle, search, setSearch, openMenu }) {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between gap-3 border-b border-slate-200/70 bg-white/90 px-4 py-4 backdrop-blur-xl sm:px-8">
      <div className="flex min-w-0 items-center gap-3">
        <button onClick={openMenu} className="rounded-lg p-2 hover:bg-slate-100 lg:hidden">
          <Menu size={21} />
        </button>
        <div className="min-w-0">
          <p className="hidden text-[10px] font-bold uppercase tracking-[2px] text-violet-500 sm:block">
            NEXORA / WORKSPACE
          </p>
          <h2 className="truncate text-lg font-extrabold text-slate-900 sm:text-2xl">
            {title}
          </h2>
          <p className="hidden text-xs text-slate-500 sm:block">{subtitle}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 md:flex">
          <Search size={16} className="text-slate-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search orders..."
            className="w-32 bg-transparent text-xs outline-none lg:w-40"
          />
          <span className="rounded border bg-white px-1.5 py-0.5 text-[10px] text-slate-400">
            /
          </span>
        </div>
        <button aria-label="Notifications" className="relative rounded-xl border border-slate-200 p-2.5 hover:bg-slate-50">
          <Bell size={18} />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-pink-500 ring-2 ring-white" />
        </button>
        <div className="hidden rounded-xl bg-violet-50 p-2.5 text-violet-600 sm:block">
          <CalendarDays size={18} />
        </div>
      </div>
    </header>
  );
}

function StatCard({ title, value, change, icon: Icon, tone, down }) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center justify-between">
        <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${tone}`}>
          <Icon size={21} />
        </div>
        <span className={`flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-bold ${down ? "bg-rose-50 text-rose-600" : "bg-emerald-50 text-emerald-600"}`}>
          {down ? <ArrowDownRight size={13} /> : <ArrowUpRight size={13} />}
          {change}
        </span>
      </div>
      <p className="mt-5 text-sm font-medium text-slate-500">{title}</p>
      <h3 className="mt-1 text-3xl font-black tracking-tight text-slate-900">{value}</h3>
      <p className="mt-2 text-[11px] text-slate-400">Compared with last month</p>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Processing: "bg-amber-50 text-amber-700 ring-amber-200",
    Shipped: "bg-blue-50 text-blue-700 ring-blue-200",
    Delivered: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    Cancelled: "bg-rose-50 text-rose-700 ring-rose-200",
  };

  return (
    <span className={`inline-flex whitespace-nowrap items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold ring-1 ring-inset ${styles[status]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

function OrderTable({ data }) {
  const [selected, setSelected] = useState("");

  if (!data.length) {
    return (
      <div className="px-6 py-16 text-center">
        <ShoppingBag className="mx-auto mb-3 text-slate-300" size={36} />
        <h3 className="font-bold text-slate-700">No orders found</h3>
        <p className="mt-1 text-sm text-slate-400">
          Try a different search or select another order category.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[680px] text-left">
        <thead>
          <tr className="border-y border-slate-100 bg-slate-50/70 text-[10px] uppercase tracking-[1.5px] text-slate-400">
            <th className="px-5 py-4 font-bold">Order / Product</th>
            <th className="px-4 py-4 font-bold">Order Date</th>
            <th className="px-4 py-4 font-bold">Amount</th>
            <th className="px-4 py-4 font-bold">Status</th>
            <th className="px-4 py-4 font-bold">Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order) => (
            <tr key={order.id} className="border-b border-slate-100 last:border-0 hover:bg-violet-50/40">
              <td className="px-5 py-4">
                <div className="flex items-center gap-3">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xs font-black ${order.color}`}>
                    {order.initials}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-800">{order.name}</p>
                    <p className="mt-1 text-[10px] text-slate-400">{order.id} · {order.category}</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4 text-xs text-slate-500">{order.date}</td>
              <td className="px-4 py-4 text-sm font-extrabold text-slate-800">
                ₹{order.price.toLocaleString("en-IN")}
              </td>
              <td className="px-4 py-4"><StatusBadge status={order.status} /></td>
              <td className="px-4 py-4">
                <button
                  onClick={() => setSelected(selected === order.id ? "" : order.id)}
                  className="rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 hover:border-violet-300 hover:text-violet-600"
                >
                  {selected === order.id ? "Hide" : "View"}
                </button>
                {selected === order.id && (
                  <div className="mt-2 text-xs text-slate-500">
                    {order.name} · {order.status}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function OrdersLayout({ search }) {
  const tabs = [
    { to: "/orders/current", label: "Current Orders", icon: Package, count: orders.filter(o => ["Processing", "Shipped"].includes(o.status)).length },
    { to: "/orders/history", label: "Order History", icon: History, count: orders.filter(o => o.status === "Delivered").length },
    { to: "/orders/cancelled", label: "Cancelled Orders", icon: Ban, count: orders.filter(o => o.status === "Cancelled").length },
  ];

  return (
    <div className="space-y-6">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#171631] via-[#302466] to-violet-600 p-6 text-white sm:p-8">
        <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border-[35px] border-white/5" />
        <div className="absolute right-28 top-8 h-20 w-20 rounded-full bg-fuchsia-400/10 blur-2xl" />
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[1.5px]">
            <Sparkles size={13} /> Order intelligence
          </span>
          <h2 className="mt-5 text-2xl font-black tracking-tight sm:text-4xl">
            Every order. <span className="text-violet-300">Under control.</span>
          </h2>
          <p className="mt-3 max-w-lg text-sm leading-6 text-violet-100/80">
            Track deliveries, revisit purchases, and manage cancellations
            from one beautifully organized workspace.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <div className="rounded-xl border border-white/10 bg-white/10 px-4 py-3">
              <p className="text-[10px] text-violet-200">TOTAL ORDERS</p>
              <p className="mt-1 text-xl font-black">{orders.length}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/10 px-4 py-3">
              <p className="text-[10px] text-violet-200">DELIVERED</p>
              <p className="mt-1 text-xl font-black">{orders.filter(o => o.status === "Delivered").length}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/10 px-4 py-3">
              <p className="text-[10px] text-violet-200">ACTIVE</p>
              <p className="mt-1 text-xl font-black">{orders.filter(o => ["Processing", "Shipped"].includes(o.status)).length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
        {tabs.map(({ to, label, icon: Icon, count }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex shrink-0 items-center gap-2 rounded-xl px-3 py-3 text-xs font-bold transition sm:px-5 sm:text-sm ${
                isActive
                  ? "bg-violet-600 text-white shadow-md shadow-violet-200"
                  : "text-slate-500 hover:bg-slate-50 hover:text-violet-600"
              }`
            }
          >
            <Icon size={17} />
            {label}
            <span className="rounded-md bg-black/5 px-2 py-0.5 text-[10px]">{count}</span>
          </NavLink>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 p-5">
          <div>
            <h3 className="text-base font-extrabold text-slate-900">Order directory</h3>
            <p className="mt-1 text-xs text-slate-400">Explore your orders and their latest status.</p>
          </div>
          <span className="rounded-lg bg-violet-50 px-3 py-2 text-xs font-bold text-violet-600">
            {orders.filter(o => o.name.toLowerCase().includes(search.toLowerCase()) || o.id.toLowerCase().includes(search.toLowerCase())).length} results
          </span>
        </div>
        <Outlet context={{ search }} />
      </div>
    </div>
  );
}

function FilteredOrders({ type, search }) {
  const filtered = orders.filter((order) => {
    if (type === "current" && !["Processing", "Shipped"].includes(order.status)) return false;
    if (type === "history" && order.status !== "Delivered") return false;
    if (type === "cancelled" && order.status !== "Cancelled") return false;
    return order.name.toLowerCase().includes(search.toLowerCase()) ||
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.status.toLowerCase().includes(search.toLowerCase());
  });

  return <OrderTable data={filtered} />;
}

function AllOrders({ search }) {
  const filtered = orders.filter(o =>
    `${o.name} ${o.id} ${o.status}`.toLowerCase().includes(search.toLowerCase())
  );
  return <OrderTable data={filtered} />;
}

function Overview() {
  return (
    <div className="space-y-7">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 p-7 text-white sm:p-9">
        <div className="absolute -right-10 -top-14 h-60 w-60 rounded-full border-[35px] border-white/10" />
        <div className="relative max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold">
            <Sparkles size={14} /> Your command center
          </span>
          <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
            Good things are <br /> <span className="text-violet-200">in motion.</span>
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/75">
            A smarter way to manage your store. Keep every shipment, customer,
            and order right where it belongs.
          </p>
          <Link to="/orders/current" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-violet-700 transition hover:bg-violet-50">
            Explore orders <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Total Revenue" value="₹14,294" change="12.8%" icon={TrendingUp} tone="bg-violet-50 text-violet-600" />
        <StatCard title="Total Orders" value="24" change="8.2%" icon={ShoppingBag} tone="bg-blue-50 text-blue-600" />
        <StatCard title="In Transit" value="07" change="4.3%" icon={Truck} tone="bg-amber-50 text-amber-600" />
        <StatCard title="Delivered" value="18" change="15.6%" icon={CircleCheck} tone="bg-emerald-50 text-emerald-600" />
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white xl:col-span-2">
          <div className="flex items-center justify-between p-5">
            <div>
              <h3 className="font-extrabold text-slate-900">Recent activity</h3>
              <p className="mt-1 text-xs text-slate-400">A snapshot of your latest orders</p>
            </div>
            <Link to="/orders" className="flex items-center gap-1 text-xs font-bold text-violet-600 hover:text-violet-800">
              View all <ChevronRight size={15} />
            </Link>
          </div>
          <OrderTable data={orders.slice(0, 3)} />
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5">
          <h3 className="font-extrabold text-slate-900">Order overview</h3>
          <p className="mt-1 text-xs text-slate-400">Distribution by status</p>
          <div className="mt-7 space-y-5">
            {[
              { name: "Delivered", count: 18, width: "75%", color: "bg-emerald-500", icon: CircleCheck },
              { name: "Processing", count: 4, width: "42%", color: "bg-amber-500", icon: Clock3 },
              { name: "Shipped", count: 3, width: "28%", color: "bg-blue-500", icon: Truck },
              { name: "Cancelled", count: 2, width: "16%", color: "bg-rose-500", icon: Ban },
            ].map(({ name, count, width, color, icon: Icon }) => (
              <div key={name}>
                <div className="mb-2 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-2 font-semibold text-slate-600">
                    <Icon size={15} /> {name}
                  </span>
                  <span className="font-extrabold text-slate-800">{count}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className={`h-full rounded-full ${color}`} style={{ width }} />
                </div>
              </div>
            ))}
          </div>
          <Link to="/orders/history" className="mt-8 flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-xs font-bold text-slate-600 transition hover:border-violet-300 hover:text-violet-600">
            View order history <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function AppShell() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [downloadMessage, setDownloadMessage] = useState("");
  const [addMessage, setAddMessage] = useState("");

  const pageInfo = [
    { path: "/orders/current", title: "Current Orders", subtitle: "Track orders that are still in progress." },
    { path: "/orders/history", title: "Order History", subtitle: "Review successfully delivered orders." },
    { path: "/orders/cancelled", title: "Cancelled Orders", subtitle: "Review cancelled purchases." },
    { path: "/orders", title: "All Orders", subtitle: "Manage every order from one workspace." },
  ];
  const currentPage = pageInfo.find(p => p.path === window.location.pathname);
  const title = currentPage?.title || "Dashboard";
  const subtitle = currentPage?.subtitle || "Your store at a glance.";

  return (
    <div className="min-h-screen bg-[#f7f8fc] text-slate-800 lg:flex">
      <div className="hidden w-64 shrink-0 lg:block">
        <div className="fixed inset-y-0 w-64">
          <Sidebar />
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button aria-label="Close menu" className="absolute inset-0 bg-slate-950/50" onClick={() => setMenuOpen(false)} />
          <div className="relative h-full w-72">
            <button onClick={() => setMenuOpen(false)} className="absolute right-3 top-3 z-10 rounded-lg p-2 text-white hover:bg-white/10">
              <X size={20} />
            </button>
            <Sidebar closeMenu={() => setMenuOpen(false)} />
          </div>
        </div>
      )}

      <main className="min-w-0 flex-1">
        <Header
          title={title}
          subtitle={subtitle}
          search={search}
          setSearch={setSearch}
          openMenu={() => setMenuOpen(true)}
        />

        <div className="mx-auto max-w-[1500px] space-y-6 p-4 sm:p-8">
          {downloadMessage && (
            <div className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              {downloadMessage}
            </div>
          )}
          {addMessage && (
            <div className="rounded-xl bg-violet-50 px-4 py-3 text-sm text-violet-700">
              {addMessage}
            </div>
          )}

          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/orders" element={<OrdersLayout search={search} />}>
              <Route index element={<AllOrders search={search} />} />
              <Route path="current" element={<FilteredOrders type="current" search={search} />} />
              <Route path="history" element={<FilteredOrders type="history" search={search} />} />
              <Route path="cancelled" element={<FilteredOrders type="cancelled" search={search} />} />
            </Route>
            <Route path="*" element={
              <div className="rounded-2xl border bg-white p-10 text-center">
                <h2 className="text-xl font-bold">Page not found</h2>
                <Link to="/" className="mt-4 inline-block text-violet-600">Return to dashboard</Link>
              </div>
            } />
          </Routes>

          <footer className="flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 pt-5 text-[11px] text-slate-400">
            <p>© 2026 NEXORA Commerce OS · Built with React & Tailwind CSS</p>
            <p className="flex items-center gap-1">Made for smarter commerce <Sparkles size={12} /></p>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}
