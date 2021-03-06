import React from "react";
import parse from "html-react-parser";
import PropTypes from "prop-types";

export default function AffliateProgram(props) {
  const FilterData = () => {
    let data;
    props.mockData.map((item, i) => {
      if (Object.keys(item) == "affiliateProgram") data = item.affiliateProgram;
    });
    return data;
  };

  const FilteredData = FilterData();

  const htmlParser = (htmlText) => {
    return parse(htmlText);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-md-12 px-0">
          <img
            className="img-fluid min-vw-100 affiliate-logo"
            src={FilteredData[0].image}
            alt={FilteredData[0].imageAlt}
          />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-3 col-sm-3">
          <img
            className="img-fluid w-100 man-image"
            src={FilteredData[1].image}
            alt={FilteredData[1].imageAlt}
          />
        </div>
        <div className="col-md-9 col-sm-9">
          <h2>{FilteredData[1].h2}</h2>
          <p>{htmlParser(FilteredData[1].para1)}</p>
          <p>{htmlParser(FilteredData[1].para2)}</p>
          <a
            title={FilteredData[1].ahrefTitle}
            className="text-center"
            href={FilteredData[1].ahref}
          >
            <h4 className="text-warning">{FilteredData[1].h4}</h4>
          </a>
        </div>
      </div>
      <div className="row mx-3">
        <div className="col-sm-12 col-md-12">
          <h3 className="mt-5">{FilteredData[2].h3}</h3>
          <ul className="list-group list-group-flush">
            {FilteredData[2].list.map((item, i) => (
              <li key={i} className="list-group-item">
                {htmlParser(item)}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row mx-3">
        <div className="col-sm-12 col-md-12">
          <h3 className="mt-5">{FilteredData[3].h3}</h3>
          <p>{FilteredData[3].para1}</p>
          <ul className="list-group list-group-flush ml-5">
            {FilteredData[3].list.map((item, i) => (
              <li key={i} className="list-group-item">
                {htmlParser(item)}
              </li>
            ))}
          </ul>
          <p className="text-center w-100">
            <a
              title={FilteredData[3].ahrefTitle}
              className="text-warning"
              href={FilteredData[3].ahref}
            >
              {FilteredData[3].ahrefTitle}
              <br></br>
              <img
                className="papperjam-logo"
                alt={FilteredData[3].imageAlt}
                src={FilteredData[3].image}
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

AffliateProgram.propTypes = PropTypes.object;