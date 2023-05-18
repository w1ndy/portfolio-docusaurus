import React from "react";

export default function Publication({
  image,
  authors,
  title,
  venue,
  doi,
  abstract,
}) {
  return (
    <div className="mb-4">
      <div className="flex flex-row items-start">
        <img
          className="flex-none border-solid border border-gray-200 rounded h-auto"
          src={image}
          width={200}
        />
        <div className="self-stretch ml-4 flex flex-col">
          <div className="font-bold">
            <a id={`paper-${doi.replace("/", "-")}`}>{title}</a>
          </div>
          <div
            className="text-sm"
            dangerouslySetInnerHTML={{ __html: authors }}
          ></div>
          <div className="text-sm italic">{venue}</div>
          <div className="mt-2">
            <a
              className="inline-block rounded-md px-2 py-1 text-sm select-none cursor-pointer"
              style={{
                border: "1px solid var(--ifm-link-color)",
                color: "var(--ifm-link-color)",
              }}
              href={`https://doi.org/${doi}`}
              target="_blank"
            >
              Access via Publisher
            </a>
          </div>
        </div>
      </div>
      {abstract && (
        <div
          className="mt-4 mb-6 ml-2 pl-4"
          style={{ borderLeft: "3px solid var(--ifm-link-color)" }}
        >
          <span className="font-bold">Abstract: </span>
          {abstract}
        </div>
      )}
    </div>
  );
}
