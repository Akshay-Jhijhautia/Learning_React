//rafce -> react Arrow Function Component Export

import { ReactNode } from "react";

// React Node is a class defined in react module, with the help of which we can pass complex html or simple string as child to a component.
// Using children prop, we can pass children to a component

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
