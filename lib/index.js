import React from "react";
import styles from "./index.less";

// const Zcontext = React.createContext({});

export default (...innerComponents) => {
  const LEN = innerComponents.length;
  class Zwraper extends React.Component {
    constructor(props) {
      super(props);
      this.parentZindex = "auto";
      this.currentEle = null;
      this.eleIds = innerComponents.map((c, i) => this.genRandomId(i));
      this.levelCache = innerComponents.map((Compon, index) => (
        <Compon key={this.eleIds[index]} id={this.eleIds[index]} />
      ));
      this.state = {
        currentLevel: LEN - 1,
        levelCache: innerComponents.map((c, i) => (LEN - 1 !== i ? -100000 : 0))
      };
    }

    componentDidMount() {
      // this.currentEle = window.document.getElementById(this.eleIds[this.state.currentLevel]);
      // console.log(this.currentEle);
      // this.parentZindex = window.getComputedStyle(this.currentEle.parentElement).zIndex;
      // console.log(this.parentZindex);
    }

    genRandomId(index, max = 1000000) {
      return `$$zwraper${String(index)}_${(Math.random() * max) | 0}`;
    }

    go = (level = 1) => {
      this.move(level);
    };

    back = (level = -1) => {
      this.move(level);
    };

    move = (level = 0) => {
      const { currentLevel } = this.state;
      if (currentLevel + level < 0) {
        return console.log("已经是最底部了");
      } else if (currentLevel + level > LEN) {
        return console.log("已经是最顶部了");
      }
      this.setState({ currentLevel: currentLevel + level });
    };

    render() {
      const { levelCache, currentLevel } = this.state;
      const func = { go: this.go, back: this.back };
      return innerComponents.map((Compon, index) => {
        const style = index === currentLevel ? styles.normal : styles.wrap;
        return (
          <div className={`${styles.transform} ${style}`}>
            <Compon
              {...func}
              key={this.eleIds[index]}
              id={this.eleIds[index]}
            />
          </div>
        );
      });
    }
  }
  return Zwraper;
};
