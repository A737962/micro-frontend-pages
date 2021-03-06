import React from "react";
import PropTypes from "prop-types";

export default function InvestorInformation(props) {
  const FilterData = () => {
    let data;
    props.mockData.map((item, i) => {
      if (Object.keys(item) == "investorInformation")
        data = item.investorInformation;
    });
    return data;
  };

  const FilteredData = FilterData();

  return (
    <div className="container-fluid px-5">
      <div className="row">
        <div className="col-sm-12 col-md-12 my-4">
          <img
            alt={FilteredData[0].imageAlt}
            className="float-right investor-logo"
            src={FilteredData[0].image}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12 mb-4 text-center">
          <img
            alt={FilteredData[1].imageAlt}
            className="img-fluid investor-information-image"
            src={FilteredData[1].image}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <h3>{FilteredData[2].title}</h3>
          <p>{FilteredData[2].para1}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <h3>{FilteredData[3].title}</h3>
          <table className="table table-striped">
            <thead>
              <tr>
                {Object.keys(FilteredData[3].tableData[0]).map((item, i) => (
                  <th key={i}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FilteredData[3].tableData.map((item, i) => (
                <tr key={i}>
                  <td>{item.Date}</td>
                  <td>{item["Title and Summary"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

InvestorInformation.propTypes = PropTypes.object;
