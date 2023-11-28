import { useState } from "react";

const SearBarch = ({ onSearch }) => {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };
  return (
    <div className="search">
      <input
        className="input"
        type="search"
        value={id}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          onSearch(id);
        }}
      >
        Agregar
      </button>
    </div>
  );
};

export default SearBarch;
