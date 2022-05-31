import React from "react";
import "./Test.css";
import app from "./images/button-app.png";
import android from "./images/android_download.jpg";
import play from "./images/button-play.png";
import logo from "./images/TT_ELDBlack.png";
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
          {/* TTELD is an industry-leading electronic logging device. */}
        </div>
        <div className="h3">
        Downloads
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
            <td className="td">
              <a href={item.path} target="_blank" rel="noreferrer">
                <div className="price"> {item.price} </div>
              </a>

              <a href={item.pathApk}>
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
            name2: "APK",
            // title:
            //   "A simple sticker can help roadside or enforcement personnel quickly ascertain that the device on board is in fact an ELD and carry out the inspection accordingly.",
            // price: "Download",
            icon: android,
            pathApk: "https://us.tteld.com/update/tteld.apk",
            stock: 20,
          },
          {
            id: 2,
            name: "IOS APP",
            // name2:"IOS APP",
            pathApk: "https://apps.apple.com/uz/app/tt-eld/id1596279099",

            // title: "TT ELD is certified for customers confidence and safety",
            // price: "Download",
            icon: app,
            stock: 32,
          },
          {
            id: 3,
            name: "Android ",
            name2: "APP",

            // title: "Step by step guid for drivers during inspection",
            // price: "Download",
            pathApk: "https://play.google.com/store/apps/details?id=com.tteld.app&hl=ru&gl=US",

            icon: play,
            stock: 12,
          },
          {
            id: 4,

            name: "TT ELD Sticker ",
            path: "https://us.tteld.com/docs/sticker.png",
            title:
              "A simple sticker can help roadside or enforcement personnel quickly ascertain that the device on board is in fact an ELD and carry out the inspection accordingly.",
            price: "Download",
            // icon: android,

            stock: 20,
          },
          {
            id: 5,
            name: "Certificate",
            // name2:"IOS APP",
            path: "https://us.tteld.com/docs/Certificate.pdf",
            title: "TT ELD is certified for customers confidence and safety",
            price: "Download",
            // icon: app,
            stock: 32,
          },
          {
            id: 6,
            name: "Inspection ",
            // name2:"APP",
            path: "https://us.tteld.com/docs/Inspection.pdf",

            title: "Step by step guid for drivers during inspection",
            price: "Download",

            // icon: play,
            stock: 12,
          },
          {
            id: 7,
            name: "Users manual",
            title:
              "The source for both drivers and dispatchers to guide while using TT ELD",
            price: "Download",
            // icon: play,
            path: "https://us.tteld.com/docs/Usersmanual.pdf",

            stock: 9,
          },
          {
            id: 8,
            name: "Installation",
            title:
              "Quick instruction to setup both driver application and eld device before using TT ELD",
            price: "Download",
            // icon: app,
            path: "https://us.tteld.com/docs/Setup.pdf",

            stock: 99,
          },
          {
            id: 9,
            name: "Malfunction",
            title:
              "The guide when eld or driver application does not work as intended",
            price: "Download",
            path: "https://us.tteld.com/docs/EldMalfunction.pdf",

            // icon: play,
            stock: 86,
          },
        ]}
      />
    </div>
  );
}
