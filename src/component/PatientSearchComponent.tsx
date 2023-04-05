import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetSearchedPatientsQuery } from "../queries/patient.query";
import { ROUTES } from "../utils/static";
import "./SearchComponent.css";

let debounce: number;

const PatientSearchComponent = () => {
  const navigate = useNavigate();
  const [term, setTerm] = useState<string>("");

  const { data, refetch } = useGetSearchedPatientsQuery(term);

  useEffect(() => {
    clearTimeout(debounce);
    debounce = window.setTimeout(() => {
      refetch();
    }, 500);
  }, [refetch, term]);

  const onSelectInput = (value: { label: string; id: string } | null) => {
    return navigate(`${ROUTES.PATIENT}/${value?.id}`);
  };

  const onSearchdPatients = () => {
    if (!data) return [];
    return data.map((patient) => (
      <p
        key={patient._id}
        className="search-item"
        onClick={() =>
          onSelectInput({
            label: `${patient.firstName} ${patient.lastName}`,
            id: patient._id,
          })
        }
      >
        {`${patient.firstName} ${patient.lastName}`}
      </p>
    ));
  };

  return (
    <div className="search-container ">
      <label htmlFor="search">Patient:</label>
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

export default PatientSearchComponent;
