import React, { useEffect, useMemo } from "react";

import $ from "jquery";

// This following line is optional.
// Only necessary if you use the option css3:false and you want to use other easing effects rather than "linear", "swing" or "easeInOutCubic".
// import "./fullpage/jquery-ui.min";

// This following line is only necessary in the case of using the option `scrollOverflow:true`
// This file has to be loaded before the fullPage.js plugin, but after jQuery.
// import "./fullpage/import-iscroll";
// import "./fullpage/scrolloverflow";

import "fullpage.js";

import logo from "./logo.svg";

import "./old-fullpage.js-2.9.7/dist/jquery.fullpage.css";
import "./App.css";

function App() {
  const options: FullPageJsOptions = useMemo(() => {
    return {
      // https://www.npmjs.com/package/fullpage.js/v/2.9.7#afterload--anchorlink--index-
      afterLoad: (anchorLink, index) => {
        console.log("afterLoad", anchorLink, index);
      },
      // css3: false,
      navigation: true,
      // https://www.npmjs.com/package/fullpage.js/v/2.9.7#onleave--index--nextindex--direction-
      onLeave: (index, nextIndex, direction) => {
        console.log("onLeave", index, nextIndex, direction);
      },
      // scrollOverflow: true,
    };
  }, []);

  useEffect(() => {
    // $(function () {
    // https://www.npmjs.com/package/fullpage.js/v/2.9.7#initialization
    $("#fullpage").fullpage(options);
    // });

    return () => {
      // https://www.npmjs.com/package/fullpage.js/v/2.9.7#destroytype
      //destroying all Javascript events and any modification done by fullPage.js over your original HTML markup.
      $.fn.fullpage.destroy("all");
    };
  }, [options]);

  return (
    <React.Fragment>
      <div id='fullpage'>
        <div className='section'>
          <div className='App'>
            <header className='App-header'>
              <img
                src={logo}
                className='App-logo'
                alt='logo'
              />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a
                className='App-link'
                href='https://reactjs.org'
                target='_blank'
                rel='noopener noreferrer'
              >
                Learn React
              </a>
            </header>
          </div>
        </div>

        <div className='section'>
          <div>section 1</div>
        </div>

        <div className='section'>
          <div>section 2</div>
        </div>

        <div className='section fp-auto-height'>
          <div>footer</div>
          <div>MIT License / Copyright (c) 2023 two4zero</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
