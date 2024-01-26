import React from "react";


  
  function MyApp() {
    return (
      <div className="container">
        <Table />
      </div>
    );
  }

function TableHeader() {
    return (
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
          <th>Delete?</th>
        </tr>
      </thead>
    );
  }
  
  function TableBody(props) {
    const rows = props.characterData.map((row, index) => {
      return (
        <tr key={index}>
          <td>{row.name}</td>
          <td>{row.job}</td>
          <td>
            <button onClick={() => props.removeCharacter(index)}>
            Delete
            </button> </td>
        </tr>
        );
      }
    );
    return (
      <tbody>
        {rows}
      </tbody>
    )
    
  }

function Table(props) {
  return (
    <table>
      <TableHeader />
      <TableBody characterData={props.characterData}
      removeCharacter={props.removeCharacter}
      />
    </table>
  );
}

export default Table;