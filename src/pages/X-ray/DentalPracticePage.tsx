import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import useAuthGuard from "../../hooks/useAuthGuard";
import LoadingComponent from "../../component/LoadingComponent";

const DentalPracticePage = () => {
  useAuthGuard();
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useContext(UserContext);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });
  return (
    <>
      {isLoading ? (
        <LoadingComponent />
      ) : (
        <div>
          <h1>Hello {user?.firstName}</h1>
          <button>
            <a href="/logout">Logout</a>
          </button>
        </div>
      )}
    </>
  );
};

export default DentalPracticePage;
