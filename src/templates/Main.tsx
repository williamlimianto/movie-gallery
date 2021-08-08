import { ReactNode } from 'react';

import NavHeader from 'src/components/layout/nav-header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700">
    {props.meta}

    <NavHeader />

    <div className="max-w-screen-xl mx-auto">
      <div className="pt-px md:p-5 text-xl content">{props.children}</div>
    </div>
  </div>
);

export { Main };
