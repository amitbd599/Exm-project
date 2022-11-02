import "./App.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import store from "./Redux/Store/Store";
import { SetData } from "./Redux/stateSlicer/DataSlicer";
function App() {
  const GetData = useSelector((state) => state.data.GetData);
  useEffect(() => {
    axios.get("/apiJSON.json").then((result) => {
      store.dispatch(SetData(result.data.data));
    });
  }, []);

  const arr = Object.values(GetData);

  //! **************
  console.log(arr[20]?.settings?.general);
  //! **************

  return (
    <div className='App text-center'>
      <section
        className={arr[0]?.settings?.className}
        style={arr[0]?.settings?.style?.desktop}
      >
        <div className={arr[1]?.settings?.className}>
          <div className={arr[2]?.settings?.general?.className}>
            <div
              className={`${arr[3]?.settings?.className} col-md-${arr[3]?.settings?.general?.colSize?.tablet} col-md-${arr[3]?.settings?.general?.colSize?.desktop}`}
            >
              <div style={arr[4]?.settings?.style?.desktop}>
                <h4
                  className={arr[5]?.settings?.general?.className}
                  style={arr[5]?.settings?.style?.desktop}
                >
                  {arr[5]?.settings?.general?.text}
                </h4>
                <h1 className={arr[6]?.settings?.general?.className}>
                  {arr[6]?.settings?.general?.text}
                </h1>
                <h1
                  className={arr[7]?.settings?.general?.className}
                  style={arr[7]?.settings?.style?.desktop}
                >
                  {arr[7]?.settings?.general?.text}
                </h1>
                <div style={arr[8]?.settings?.style?.desktop}>
                  <img
                    src={arr[9]?.settings?.general?.img?.src}
                    className={arr[9]?.settings?.general?.className}
                    alt=''
                  />
                </div>
                <h5
                  className={arr[10]?.settings?.general?.className}
                  style={arr[10]?.settings?.style?.desktop}
                >
                  {arr[10]?.settings?.general?.text}
                </h5>
                <div style={arr[11]?.settings?.style?.desktop}>
                  <button style={arr[12]?.settings?.style?.desktop}>
                    {arr[12]?.settings?.general?.text}
                  </button>
                  <button style={arr[13]?.settings?.style?.desktop}>
                    {arr[13]?.settings?.general?.text}
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`${arr[14]?.settings?.className} col-md-${arr[3]?.settings?.general?.colSize?.tablet} col-md-${arr[3]?.settings?.general?.colSize?.desktop}`}
            >
              <div style={arr[15]?.settings?.style?.desktop}>
                <img
                  src={arr[16]?.settings?.general?.img?.src}
                  className={arr[16]?.settings?.general?.className}
                  alt=''
                />
                <div style={arr[17]?.settings?.style?.desktop}>
                  <i
                    className={arr[18]?.settings?.general?.icon?.type}
                    style={arr[18]?.settings?.general?.icon?.style?.desktop}
                    aria-hidden='true'
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={arr[19]?.settings?.style?.desktop}>
        <img
          src={arr[20]?.settings?.general?.img?.src}
          className={arr[20]?.settings?.general?.className}
          alt=''
        />
      </div>
    </div>
  );
}

export default App;
