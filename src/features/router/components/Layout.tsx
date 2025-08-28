import { NavLink, Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <header className="header">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Главная
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          О нас
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Блог
        </NavLink>
      </header>
      <Outlet />
      <footer className="footer">2025</footer>
    </>
  );
}
