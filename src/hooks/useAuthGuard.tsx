import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { NAVIGATION_ROUTES, ROUTES } from "../utils/static";

const useAuthGuard = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const perms = NAVIGATION_ROUTES.find((route) => {
    return (
      route.path === location.pathname ||
      (route.path.includes("/:") &&
        new RegExp(`^${route.path.replace(/:[^/]+/, "[^/]+")}$`).test(
          location.pathname
        ))
    );
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!perms) return;

    if (!user && perms.perms.requiredAuth) {
      navigate(ROUTES.LOGIN);
      return;
    }
    if (user && perms.perms.guestOnly) {
      navigate(-1);
    }
  }, []);
};

export default useAuthGuard;
