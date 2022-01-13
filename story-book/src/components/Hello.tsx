import React from "react";

interface Props {
  name: string | any;
  big?: boolean;
  onHello?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  onBye?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Hello = ({ name, big, onHello, onBye }: Props) => {
  return (
    <>
      {big ? <h1>안녕하세요, {name}!</h1> : <span>안녕하세요, {name}!</span>}
      <div>
        <button onClick={onHello}>Hello</button>
        <button onClick={onBye}>Bye</button>
      </div>
    </>
  );
};

Hello.defaultProps = {
  big: false,
};

export default Hello;
