import React from 'react';

function ContentHeader(props) {
  return (
    <>
      <div className="content-wrapper-before gradient-45deg-indigo-purple"></div>
      <div className="breadcrumbs-dark pb-0 pt-4" id="breadcrumbs-wrapper">
        <div className="container">
          <div className="row">
            <div className="col s10 m6 l6">
              <ol className="breadcrumbs mb-0">
                {props.breadcrumbs.map((item, index) => {
                  return(
                    <li className="breadcrumb-item" key={"content_"+index}><a href={item.pageRoute}>{item.pageName}</a></li>
                  )
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentHeader;