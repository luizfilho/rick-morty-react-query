import React, { useEffect, useState } from "react";
import { Gender, Status } from "../../types/Characters";

interface FilterBarProps {
  onChangeFilters: (status?: Status, gender?: Gender) => void;
}

export default function FilterBar({ onChangeFilters }: FilterBarProps) {
  const [status, setStatus] = useState<Status>();
  const [gender, setGender] = useState<Gender>();

  useEffect(() => {
    onChangeFilters(status, gender);
  }, [status, gender]);

  return (
    <div className="selector-container">
      <div className="select-container">
        <label htmlFor="gender">Gender</label>
        <select
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value as Gender)}
        >
          <option value="">All</option>
          <option value={Gender.MALE}>Male</option>
          <option value={Gender.GENDERLESS}>Genderless</option>
          <option value={Gender.FEMALE}>Female</option>
          <option value={Gender.UNKNOWN}>Unknown</option>
        </select>
      </div>
      <div className="select-container">
        <label htmlFor="status">Status</label>
        <select
          value={status}
          name="status"
          onChange={(e) => setStatus(e.target.value as Status)}
        >
          <option value="">All</option>
          <option value={Status.ALIVE}>Alive</option>
          <option value={Status.DEAD}>Dead</option>
          <option value={Status.UNKNOWN}>UNKNOWN</option>
        </select>
      </div>
    </div>
  );
}
