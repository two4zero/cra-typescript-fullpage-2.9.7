import $ from "jquery";
import IScroll from "./iscroll";

Object.assign(global, {
  jQuery: $,
  IScroll: IScroll,
});

// https://create-react-app.dev/docs/using-global-variables
// const $ = window.$;
