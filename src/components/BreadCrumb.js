import React from 'react';

const ListItem = function (props) {
  return (
    <li>
    <a href={props.path}>{props.caption}</a>
    </li>
  );
}

const BreadCrumb = function(props) {
    return(
   <nav className="breadcrumb is-left"  aria-label="breadcrumbs">
              <ul>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               {props.previousPages.map((page, i) =>
                     <ListItem key = {i}
                          path = {page.path}
                          caption = {page.caption} />
                )}
                <li className="is-active">
                <a to={props.currentPath} aria-current="page">
                {props.currentPage}
                </a>
                </li>
              </ul>
            </nav>
    );
}

export default BreadCrumb;