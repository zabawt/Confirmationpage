import React from 'react';

const ProfessionalDescList = (props) => {

  const ulStyle = {
    textAlign: 'left',
  };

  const liStyle = {
    listStyleType: 'square',
  };

  const { professionalList } = props;
  return <ul style={ulStyle}>
    {professionalList.map(listItem => <li key={listItem} style={liStyle}>{listItem}</li>)}
  </ul>
}

export default ProfessionalDescList;
