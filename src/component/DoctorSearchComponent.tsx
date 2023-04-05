import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/static";
import "./SearchComponent.css";
import { useGetSearchedDoctorQuery } from "../queries/doctor.query";

let debounce: number;

const DoctorSearchComponent = () => {
  const navigate = useNavigate();
  const [term, setTerm] = useState<string>("");

  const { data, refetch } = useGetSearchedDoctorQuery(term);

  useEffect(() => {
    clearTimeout(debounce);
    debounce = window.setTimeout(() => {
      refetch();
    }, 500);
  }, [refetch, term]);

  const onSelectInput = (value: { label: string; id: string } | null) => {
    return navigate(`${ROUTES.DOCTOR}/${value?.id}`);
  };

  const onSearchdPatients = () => {
    if (!data) return [];
    return data.map((doctor) => (
      <p
        key={doctor._id}
        className="search-item"
        onClick={() =>
          onSelectInput({
            label: `${doctor.firstName} ${doctor.lastName}`,
            id: doctor._id,
          })
        }
      >
        {`${doctor.firstName} ${doctor.lastName}`}
      </p>
    ));
  };

  return (
    <div className="search-container ">
      <label htmlFor="search">Doctor:</label>
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

export default DoctorSearchComponent;
