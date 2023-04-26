/* eslint-disable eqeqeq */
import React, {useState,useRef} from "react";
import classnames from "https://cdn.skypack.dev/classnames";

function NotifyOnce({ children }) {
  const [visible, setVisible] = useState(false);
  const [workDone, setworkDone] = useState(false);
  
  if ( workDone == false ) {
    setTimeout(function () {
      setVisible(true);
    }, 1000);

    setTimeout(function () {
      setVisible(false);
    }, 3000);
    
    setworkDone(true);
  }

  return (
    <div
      className={classnames(
        "fixed transition-all right-[10px]",
        {
          "top-[-60px]": !visible
        },
        {
          "top-[10px]": visible
        }
      )}
    >
      {children}
    </div>
  );
}
function Alert({color:color_, children}) {
  const color = color_ ?? "white";
  
  return (
    <div className="alert alert-info shadow-lg">
      <div className={`text-[${color}]`}>
        <span>
          <i className="fa-solid fa-circle-info"></i>
        </span>
        <span>{children}</span>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <NotifyOnce>
        <Alert>"안녕." 그녀는 말했다.</Alert>
      </NotifyOnce>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat modi
        ducimus, sunt harum laboriosam deserunt aliquam quas architecto odio
        neque voluptas! Voluptatum perferendis quis fugit nobis sunt obcaecati
        corporis tempore!
      </div>
    </>
  );
}
