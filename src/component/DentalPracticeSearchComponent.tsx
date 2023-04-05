import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/static";
import "./SearchComponent.css";
import { useGetSearchedDentalPracticeQuery } from "../queries/dentalPractice.query";

let debounce: number;

const DentalPracticeSearchComponent = () => {
  const navigate = useNavigate();
  const [term, setTerm] = useState<string>("");

  const { data, refetch } = useGetSearchedDentalPracticeQuery(term);

  useEffect(() => {
    clearTimeout(debounce);
    debounce = window.setTimeout(() => {
      refetch();
    }, 500);
  }, [refetch, term]);

  const onSelectInput = (value: { label: string; id: string } | null) => {
    return navigate(`${ROUTES.DPRACTICE}/${value?.id}`);
  };

  const onSearchdPatients = () => {
    if (!data) return [];
    return data.map((dentalPractice) => (
      <p
        key={dentalPractice._id}
        className="search-item"
        onClick={() =>
          onSelectInput({
            label: `${dentalPractice.name}`,
            id: dentalPractice._id,
          })
        }
      >
        {dentalPractice.name}
      </p>
    ));
  };

  return (
    <div className="search-container ">
      <label htmlFor="search">Drntal Practice:</label>
      <input
        className="search-input "
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      {term.length > 1 ? (
        <ul className="search-results ">{onSearchdPatients()}</ul>
      ) : (
        ""
      )}
    </div>
  );
};

export default DentalPracticeSearchComponent;
