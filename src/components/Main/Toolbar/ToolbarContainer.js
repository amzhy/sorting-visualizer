import { connect } from "react-redux";
import Toolbar from "./Toolbar.jsx";
import { setArray } from "../../../reducers/array";
import { setAlgorithm } from "../../../reducers/algorithm";
import { setCurrentSorted } from "../../../reducers/sorted";
import { setRunning } from "../../../reducers/running";
import bubbleSort from "../../../algos/sorting/bubblesort.js";
import quickSort from "../../../algos/sorting/quicksort.js";
import heapSort from "../../../algos/sorting/heapsort.js";
import mergeSort from "../../../algos/sorting/mergesort.js";

const mapStateToProps = ({
  array,
  algorithm,
  isRunning,
}) => ({
  array,
  algorithm,
  isRunning,
});

const mapDispatchToProps = () => dispatch => ({
  generateArray: (length) => {
    let array = [];
    while (array.length < length) {
      array.push(Math.floor(Math.random() * 200) + 10);
    }
    dispatch(setArray(array));
    dispatch(setCurrentSorted([]));
  },

  updateAlgorithm: (algorithm) => {
    dispatch(setAlgorithm(algorithm));
  },

  sort: (algorithm, array, speed) => {
    let doSort = algorithm === "bubbleSort" ?
      bubbleSort : algorithm === "quickSort" ?
        quickSort : algorithm === "heapSort" ?
          heapSort : algorithm === "mergeSort" ?
            mergeSort : null;
    dispatch(setCurrentSorted([]));
    dispatch(setRunning(true));
    doSort(array, dispatch, speed);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);