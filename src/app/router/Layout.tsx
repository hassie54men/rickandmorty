import { NavLink, Outlet } from "react-router";
import { appRoutes } from "./routes";

export default function Layout() {
  return (
    <>
      <header className="header">
        <NavLink
          to={appRoutes.main}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Главная
        </NavLink>
        <NavLink
          to={appRoutes.characters}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Карточки персонажей
        </NavLink>
        <NavLink
          to={appRoutes.locations}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Локации
        </NavLink>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="footer">2025</footer>
    </>
  );
}
