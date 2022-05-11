import React, {
  useState,
  KeyboardEvent,
  useRef,
  useLayoutEffect,
  useEffect,
} from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const mainref = useRef(null);
  const [firstArr, setfirstArr] = useState<number[]>([2, 2, 0, 0]);
  const [secondArr, setSecondArr] = useState<number[]>([2, 8, 0, 4]);
  const [thirdArr, setthirdArr] = useState<number[]>([4, 4, 4, 4]);
  const [fourthArr, setfourthArr] = useState<number[]>([0, 4, 2, 0]);
  const [fullArr, setFullArr] = useState<object>({
    firstArr,
    secondArr,
    thirdArr,
    fourthArr,
  });

  const element = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    //object can be null
    if (element.current !== null) {
      element.current.focus();
    }
  });

  useEffect(() => {
    console.log(Math.floor(Math.random() * (Math.ceil(3) - Math.ceil(0) + 1)));
  }, [fullArr]);

  const filteredArr = (columnArray: number[], arrow: string) => {
    let count1: number = 0;
    if (columnArray.includes(0)) {
      columnArray = columnArray.filter((ele) => {
        if (ele === 0) {
          count1++;
        }
        return ele !== 0;
      });
      for (let i = 0; i < count1; i++) {
        if (arrow === "down" || arrow === "right") {
          columnArray.unshift(0);
        }
        if (arrow === "up" || arrow === "left") {
          columnArray.push(0);
        }
      }
    }
    return columnArray;
  };
  const finalArr = (arr: number[], arrow: string) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        if (arr[i] === arr[i + 1]) {
          arr[i] = arr[i] + arr[i + 1];
          arr[i + 1] = 0;
        }
      }
      if (arrow === "down" || arrow === "right") {
        if (arr[i] === 0 && i !== 0) {
          arr = filteredArr(arr, arrow);
        }
      } else if (arrow === "up" || arrow === "left") {
        if (arr[i] === 0 && i !== 3) {
          arr = filteredArr(arr, arrow);
        }
      }
    }
    return arr;
  };

  const calculateArrowUp = () => {
    let firstColumn: number[] = [];
    let secondColumn: number[] = [];
    let thirdColumn: number[] = [];
    let fourthColumn: number[] = [];
    Object.values(fullArr).forEach((ele) => {
      firstColumn.push(ele[0]);
      secondColumn.push(ele[1]);
      thirdColumn.push(ele[2]);
      fourthColumn.push(ele[3]);
    });

    firstColumn = filteredArr(firstColumn, "up");
    let finalfirstColumn: number[] = finalArr(firstColumn, "up");

    secondColumn = filteredArr(secondColumn, "up");
    let finalSecondColumn: number[] = finalArr(secondColumn, "up");

    thirdColumn = filteredArr(thirdColumn, "up");
    let finalThirdColumn: number[] = finalArr(thirdColumn, "up");

    fourthColumn = filteredArr(fourthColumn, "up");
    let finalfourthColumn: number[] = finalArr(fourthColumn, "up");

    let totalArr: number[][] = [
      finalfirstColumn,
      finalSecondColumn,
      finalThirdColumn,
      finalfourthColumn,
    ];

    let temp1: number[] = [];
    let temp2: number[] = [];
    let temp3: number[] = [];
    let temp4: number[] = [];
    totalArr.forEach((ele) => {
      temp1.push(ele[0]);
      temp2.push(ele[1]);
      temp3.push(ele[2]);
      temp4.push(ele[3]);
    });

    setfirstArr([...temp1]);
    setSecondArr([...temp2]);
    setthirdArr([...temp3]);
    setfourthArr([...temp4]);
    setFullArr({
      temp1,
      temp2,
      temp3,
      temp4,
    });
  };

  const calculateArrowDown = () => {
    let firstColumn: number[] = [];
    let secondColumn: number[] = [];
    let thirdColumn: number[] = [];
    let fourthColumn: number[] = [];
    Object.values(fullArr).forEach((ele) => {
      firstColumn.push(ele[0]);
      secondColumn.push(ele[1]);
      thirdColumn.push(ele[2]);
      fourthColumn.push(ele[3]);
    });

    firstColumn = filteredArr(firstColumn, "down");
    let finalfirstColumn: number[] = finalArr(firstColumn, "down");

    secondColumn = filteredArr(secondColumn, "down");
    let finalSecondColumn: number[] = finalArr(secondColumn, "down");
    thirdColumn = filteredArr(thirdColumn, "down");
    let finalThirdColumn: number[] = finalArr(thirdColumn, "down");

    fourthColumn = filteredArr(fourthColumn, "down");
    let finalfourthColumn: number[] = finalArr(fourthColumn, "down");

    let totalArr: number[][] = [
      finalfirstColumn,
      finalSecondColumn,
      finalThirdColumn,
      finalfourthColumn,
    ];

    let temp1: number[] = [];
    let temp2: number[] = [];
    let temp3: number[] = [];
    let temp4: number[] = [];
    totalArr.forEach((ele) => {
      temp1.push(ele[0]);
      temp2.push(ele[1]);
      temp3.push(ele[2]);
      temp4.push(ele[3]);
    });

    setfirstArr([...temp1]);
    setSecondArr([...temp2]);
    setthirdArr([...temp3]);
    setfourthArr([...temp4]);
    setFullArr({
      temp1,
      temp2,
      temp3,
      temp4,
    });
  };

  const calculateArrowLeft = () => {
    let firstColumn: number[] = [...firstArr];
    let secondColumn: number[] = [...secondArr];
    let thirdColumn: number[] = [...thirdArr];
    let fourthColumn: number[] = [...fourthArr];

    firstColumn = filteredArr(firstColumn, "left");
    let finalfirstColumn: number[] = finalArr(firstColumn, "left");

    secondColumn = filteredArr(secondColumn, "left");
    let finalSecondColumn: number[] = finalArr(secondColumn, "left");
    thirdColumn = filteredArr(thirdColumn, "left");
    let finalThirdColumn: number[] = finalArr(thirdColumn, "left");

    fourthColumn = filteredArr(fourthColumn, "left");
    let finalfourthColumn: number[] = finalArr(fourthColumn, "left");

    setfirstArr([...finalfirstColumn]);
    setSecondArr([...finalSecondColumn]);
    setthirdArr([...finalThirdColumn]);
    setfourthArr([...finalfourthColumn]);
    setFullArr({
      finalfirstColumn,
      finalSecondColumn,
      finalThirdColumn,
      finalfourthColumn,
    });
  };

  const calculateArrowRight = () => {
    let firstColumn: number[] = [...firstArr];
    let secondColumn: number[] = [...secondArr];
    let thirdColumn: number[] = [...thirdArr];
    let fourthColumn: number[] = [...fourthArr];

    firstColumn = filteredArr(firstColumn, "right");
    let finalfirstColumn: number[] = finalArr(firstColumn, "right");

    secondColumn = filteredArr(secondColumn, "right");
    let finalSecondColumn: number[] = finalArr(secondColumn, "right");
    thirdColumn = filteredArr(thirdColumn, "right");
    let finalThirdColumn: number[] = finalArr(thirdColumn, "right");

    fourthColumn = filteredArr(fourthColumn, "right");
    let finalfourthColumn: number[] = finalArr(fourthColumn, "right");

    setfirstArr([...finalfirstColumn]);
    setSecondArr([...finalSecondColumn]);
    setthirdArr([...finalThirdColumn]);
    setfourthArr([...finalfourthColumn]);
    setFullArr({
      finalfirstColumn,
      finalSecondColumn,
      finalThirdColumn,
      finalfourthColumn,
    });
  };
  const onArrowClick = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowUp") {
      calculateArrowUp();
    }
    if (e.key === "ArrowDown") {
      calculateArrowDown();
    }
    if (e.key === "ArrowLeft") {
      calculateArrowLeft();
    }
    if (e.key === "ArrowRight") {
      calculateArrowRight();
    }
  };
  const getBackGroundColor = (ele: number) => {
    if (ele === 2) {
      return "two";
    }
    if (ele === 4) {
      return "four";
    }
    if (ele === 8) {
      return "eight";
    }
    if (ele === 16) {
      return "sixteen";
    }
    if (ele === 32) {
      return "thirtyTwo";
    }
    if (ele === 64) {
      return "sixtyFour";
    }
    if (ele === 128) {
      return "onetwentyeight";
    }
  };
  return (
    <div
      ref={element}
      tabIndex={0}
      onKeyDown={onArrowClick}
      className="d-flex justify-content-center  align-items-center h-100 w-100 "
    >
      <div>
        <div className="d-flex">
          {firstArr.map((ele, ind) => {
            return (
              <div
                key={ind}
                className={`cells d-flex align-items-center justify-content-center border border-5 fs-1 fw-bold ${getBackGroundColor(
                  ele
                )}`}
              >
                {ele !== 0 ? ele : null}
              </div>
            );
          })}
        </div>
        <div className="d-flex">
          {secondArr.map((ele, ind) => {
            return (
              <div
                key={ind}
                className={`cells d-flex align-items-center justify-content-center border border-5 fs-1 fw-bold ${getBackGroundColor(
                  ele
                )}`}
              >
                {ele !== 0 ? ele : null}
              </div>
            );
          })}
        </div>
        <div className="d-flex">
          {thirdArr.map((ele, ind) => {
            return (
              <div
                key={ind}
                className={`cells d-flex align-items-center justify-content-center border border-5 fs-1 fw-bold ${getBackGroundColor(
                  ele
                )}`}
              >
                {ele !== 0 ? ele : null}
              </div>
            );
          })}
        </div>
        <div className="d-flex">
          {fourthArr.map((ele, ind) => {
            return (
              <div
                key={ind}
                className={`cells d-flex align-items-center justify-content-center border border-5 fs-1 fw-bold ${getBackGroundColor(
                  ele
                )}`}
              >
                {ele !== 0 ? ele : null}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
