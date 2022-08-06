import React from "react";

export const TldrComponent = () => {
  return (
    <>
      <h3 className="text-primary-dark-500 text-4xl mb-12">tl;dr</h3>
      <div className="grid sm:grid-cols-2 grid-cols-none gap-5">
        <div className="mb-10 flex flex-col">
          <h4 className="text-primary-dark-500 font-extrabold text-3xl mb-5">
            Strategy
          </h4>
          <ul>
            <li className="text-primary-dark-500 mb-5 text-[1.3rem]">
              Product Strategy
            </li>
            <li className="text-primary-dark-500 mb-5 text-[1.3rem]">
              Campaign Strategy
            </li>
            <li className="text-primary-dark-500 mb-5 text-[1.3rem]">
              Social Direction
            </li>
          </ul>
          <h4 className="font-extrabold text-3xl mb-5 mt-3">Design</h4>
          <ul>
            <li className="text-primary-dark-500 mb-5 text-[1.3rem]">
              Information Architecture
            </li>
            <li className="text-primary-dark-500 mb-5 text-[1.3rem]">
              Wireframes
            </li>
            <li className="text-primary-dark-500 mb-5 text-[1.3rem]">
              Product Design
            </li>
            <li className="text-primary-dark-500 mb-5 text-[1.3rem]">
              Motion Design
            </li>
            <li className="text-primary-dark-500 mb-5 text-[1.3rem]">
              Usability Testing
            </li>
          </ul>
        </div>

        <div className="mb-10 flex flex-col">
          <h4 className="text-primary-dark-500 font-extrabold text-3xl mb-5">
            Engineering
          </h4>
          <ul>
            <li className="text-primary-dark-500 mb-5 text-[1.3rem]">
              Technical Strategy
            </li>
            <li className="text-primary-dark-500 mb-5 text-[1.3rem]">
              Prototyping
            </li>
            <li className="text-primary-dark-500 mb-5 text-[1.3rem]">
              Front End Development
            </li>
            <li className="text-primary-dark-500 mb-5 text-[1.3rem]">
              IOS Development
            </li>
            <li className="text-primary-dark-500 mb-5 text-[1.3rem]">
              Systems Architecture
            </li>
            <li className="text-primary-dark-500 mb-5 text-[1.3rem]">
              Dev Ops
            </li>
            <li className="text-primary-dark-500 mb-5 text-[1.3rem]">
              API Integration
            </li>
          </ul>
          <h4 className="font-extrabold text-3xl mb-5 mt-3">Get It</h4>
          <ul>
            <li className="mb-5 text-[1.3rem]">
              <a
                href="https://miamiabeauty.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-600 text-blue-500"
              >
                miamiabeauty.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
