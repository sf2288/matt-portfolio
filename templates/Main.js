import { ReactNode } from "react";

const Main = props => (
  <div className="w-full text-gray-700 antialiased">
    {props.meta}

    <div className="mx-auto">
      <div className="content text-xl">{props.children}</div>
    </div>
  </div>
);

export { Main };
