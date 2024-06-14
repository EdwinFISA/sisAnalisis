import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

//
import App from "./App";

//const root = ReactDOM.createRoot(document.getElementById("root"));

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

const Root = () => {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(<Root />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*root.render(
  <React.StrictMode>
    <div>
      <Navbar />

      <div className="container-fluid">
        <div className="row">
          <Sidbear />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <RouterProvider router={router} />
          </main>
        </div>
      </div>
    </div>
  </React.StrictMode>
);*/
