import React from "react";

export default function SimplePublication({ authors, title, venue, doi }) {
  return (
    <li>
      <span dangerouslySetInnerHTML={{ __html: authors }}></span>.&nbsp;
      <span class="font-bold">{title}</span>.&nbsp;
      <span>{venue}</span>.&nbsp;
      <a href={`https://doi.org/${doi}`}>{doi}</a>
    </li>
  );
}
