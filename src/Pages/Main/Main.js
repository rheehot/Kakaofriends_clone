import React from "react";
import Homeitem from "./Homeitem/Homeitem";
import Hotitem from "./Hotitem/Hotitem";
import Newitem from "./Newitem/Newitem";
import Saleitem from "./Saleitem/Saleitem";
import Allitem from "./Allitem/Allitem";

import "./Main.scss";

export default class Main extends React.Component {
  state = {
    activeTab: 0,
  };

  clickHandler = (id) => {
    this.setState({ activeTab: id });
  };

  render() {
    const { activeTab } = this.state;
    return (
      <main className="Main">
        <div className="Maintab">
          <ul className="menuTab">
            {TAB_ARR.map((el, idx) => {
              const isActive = activeTab === idx;
              return (
                <li key={el} onClick={() => this.clickHandler(idx)}>
                  <button className={`${isActive && "highlightedBtn"}`}>
                    {el}
                  </button>
                  <hr className={`highlightedTab ${isActive ? "on" : "off"}`} />
                </li>
              );
            })}
          </ul>
        </div>
        {SHOWTAB[activeTab]}
      </main>
    );
  }
}

const TAB_ARR = ["홈", "신규", "인기", "세일", "전체"];

const SHOWTAB = {
  0: <Homeitem />,
  1: <Newitem />,
  2: <Hotitem />,
  3: <Saleitem />,
  4: <Allitem />,
};
