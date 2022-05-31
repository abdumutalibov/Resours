import React from "react";
import "./Test.css";
import app from "./images/button-app.png";
import android from "./images/android_download.jpg";
import play from "./images/button-play.png";
import logo from "./images/LogoSidebar.png";
const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
  const { items, requestSort } = useSortableData(props.products);

  return (
    <table>
      <caption>
        
        <img src={logo} alt="" />
        <div className="h3">
         
          TTELD is an industry-leading electronic logging device.
        </div>
        <div>
        
          TTELD is an industry-leading electronic logging device. Our ELD
          compliance solution provides users with a wide variety of
          comprehensive features.
        </div>
      </caption>
      <thead>
        <tr>
          <th>
            <button
              type="button"
              onClick={() => requestSort("name")}
              className="button"
            >
              DESCRIPTION
            </button>
          </th>
          <th>
            <button
              type="button"
              onClick={() => requestSort("price")}
              className="button"
            >
              FILE
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td className="tdFirst">
            {/* <img className="imges1" src={item.ios} alt="" /> */}

              <div className="firstTD">
                <div className="name"> {item.name}</div>

              <div className="title">{item.name2}</div>
              <div className="title">{item.title}</div>
              </div>
              
            </td>
            <td>
              <div> {item.price} </div>
<a href="/">

              <img className="imges" src={item.icon} alt="" />
</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function App() {
  return (
    <div className="App">
      <ProductTable
        products={[
          {
            id: 1,
           
            name: "Download ",
            name2:"APK",
            // title:
            //   "A simple sticker can help roadside or enforcement personnel quickly ascertain that the device on board is in fact an ELD and carry out the inspection accordingly.",
            // price: "Download",
            icon: android,
        
            stock: 20,
          },
          {
            id: 2,
            name: "IOS APP",
            // name2:"IOS APP",

            // title: "TT ELD is certified for customers confidence and safety",
            // price: "Download",
            icon: app,
            stock: 32,
          },
          {
            id: 3,
            name: "Android ",
            name2:"APP",

            // title: "Step by step guid for drivers during inspection",
            // price: "Download",
           
            icon: play,
            stock: 12,
          },
          {
            id: 4,
            name: "Users manual",
            title:
              "The source for both drivers and dispatchers to guide while using TT ELD",
            price: "Download",
            // icon: play,
            stock: 9,
          },
          {
            id: 5,
            name: "Installation",
            title:
              "Quick instruction to setup both driver application and eld device before using TT ELD",
            price: "Download",
            // icon: app,
            stock: 99,
          },
          {
            id: 6,
            name: "Malfunction",
            title:
              "The guide when eld or driver application does not work as intended",
            price: "Download",
            // icon: play,
            stock: 86,
          },
        ]}
      />
    </div>
  );
}
