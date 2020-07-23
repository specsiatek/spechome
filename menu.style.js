
import { html } from '@polymer/lit-element';
let cssText = `


      html {
        height: 100%;
        width: 100%;
      }

      body {
        font-family: 'Open Sans', serif;
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        -webkit-font-smoothing: antialiased;
        overflow: -moz-scrollbars-none;
        -ms-overflow-style: none;
      }

      
        @font-face {
          font-family: dinnextltpro_mediumitalic;
          src: url(assets/DINNextLTPro-MediumItalic.ttf);
        }
        

      .menu {

      display: block;
      position: absolute;
      box-sizing: content-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      overflow-x: auto;
      overflow-y: auto;
      background-color: rgba(236, 232, 225, 1);
      width: 414.00px;
    height: 896.00px;
    left: 0px;
    top: 0px;

}

.menu .close {

      display: block;
      position: absolute;
      box-sizing: content-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      overflow-x: unset;
      overflow-y: unset;
      background-color: transparent;
      width: 73.00px;
    height: 73.00px;
    left: 308.50px;
    top: 35.50px;

}

.menu .close .line3 {
    position: absolute;
      box-sizing: content-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      stroke: rgba(255, 70, 85, 1);
          stroke-width: 4.00px;
          stroke-linecap: butt;
      box-shadow: none;
      width: 75.83px;
    height: 75.83px;
    left: -1.41px;
    top: -1.41px;

}

.menu .close .line4 {
    position: absolute;
      box-sizing: content-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      stroke: rgba(255, 70, 85, 1);
          stroke-width: 4.00px;
          stroke-linecap: butt;
      box-shadow: none;
      width: 75.83px;
    height: 75.83px;
    left: -1.41px;
    top: -1.41px;

}

.menu .faq1e8d7800 {

      display: block;
      position: absolute;
      box-sizing: content-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      overflow-x: unset;
      overflow-y: unset;
      background-color: transparent;
      width: 301.00px;
    height: 152.00px;
    left: 44.00px;
    top: 99.00px;

}

.menu .faq1e8d7800 .rectangle11de9e347e {
    position: absolute;
      box-sizing: border-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      background-color: rgba(255, 70, 85, 1);
      border-bottom-color: rgba(112, 112, 112, 1);
      border-bottom-style: solid;
      border-bottom-width: 1.00px;
      border-left-color: rgba(112, 112, 112, 1);
      border-left-style: solid;
      border-left-width: 1.00px;
      border-right-color: rgba(112, 112, 112, 1);
      border-right-style: solid;
      border-right-width: 1.00px;
      border-top-color: rgba(112, 112, 112, 1);
      border-top-style: solid;
      border-top-width: 1.00px;
      border-top-left-radius: 0.00px;
      border-top-right-radius: 0.00px;
      border-bottom-left-radius: 0.00px;
      border-bottom-right-radius: 0.00px;
      box-shadow: none;
      width: 238.00px;
    height: 101.00px;
    left: 63.00px;
    top: 51.00px;

}

.menu .faq1e8d7800 .rectangle10e0adfe31 {
    position: absolute;
      box-sizing: border-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      background-color: rgba(236, 232, 225, 1);
      border-bottom-color: rgba(112, 112, 112, 1);
      border-bottom-style: solid;
      border-bottom-width: 1.00px;
      border-left-color: rgba(112, 112, 112, 1);
      border-left-style: solid;
      border-left-width: 1.00px;
      border-right-color: rgba(112, 112, 112, 1);
      border-right-style: solid;
      border-right-width: 1.00px;
      border-top-color: rgba(112, 112, 112, 1);
      border-top-style: solid;
      border-top-width: 1.00px;
      border-top-left-radius: 0.00px;
      border-top-right-radius: 0.00px;
      border-bottom-left-radius: 0.00px;
      border-bottom-right-radius: 0.00px;
      box-shadow: none;
      width: 238.00px;
    height: 101.00px;
    left: 0.00px;
    top: 0.00px;

}

.menu .faq1e8d7800 .rectangle96239aaf7 {
    position: absolute;
      box-sizing: border-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      background-color: rgba(15, 25, 35, 1);
      border-bottom-color: rgba(112, 112, 112, 1);
      border-bottom-style: solid;
      border-bottom-width: 1.00px;
      border-left-color: rgba(112, 112, 112, 1);
      border-left-style: solid;
      border-left-width: 1.00px;
      border-right-color: rgba(112, 112, 112, 1);
      border-right-style: solid;
      border-right-width: 1.00px;
      border-top-color: rgba(112, 112, 112, 1);
      border-top-style: solid;
      border-top-width: 1.00px;
      border-top-left-radius: 0.00px;
      border-top-right-radius: 0.00px;
      border-bottom-left-radius: 0.00px;
      border-bottom-right-radius: 0.00px;
      box-shadow: none;
      width: 238.00px;
    height: 101.00px;
    left: 44.00px;
    top: 32.00px;

}

.menu .faq1e8d7800 .faq {
    position: absolute;
      box-sizing: content-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      background-color: rgba(255, 255, 255, 0);
      text-align: left;
      letter-spacing: 0.00px;
      color: rgba(255, 70, 85, 1);
      -webkit-text-stroke: 1.00px rgba(0, 0, 0, 0);
      font-size: 54.00px;
      font-weight: 500;
    font-style: italic;
      font-family: dinnextltpro_mediumitalic, Arial;
      text-decoration: none;
      box-shadow: none;
      overflow-x: unset;
      overflow-y: unset;
      white-space: pre;
      width: 89.00px;
    height: 65.00px;
    left: 119.00px;
    top: 50.00px;

}

.menu .infobb67ed7d {

      display: block;
      position: absolute;
      box-sizing: content-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      overflow-x: unset;
      overflow-y: unset;
      background-color: transparent;
      width: 301.00px;
    height: 152.00px;
    left: 44.00px;
    top: 282.00px;

}

.menu .infobb67ed7d .rectangle1189632862 {
    position: absolute;
      box-sizing: border-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      background-color: rgba(255, 70, 85, 1);
      border-bottom-color: rgba(112, 112, 112, 1);
      border-bottom-style: solid;
      border-bottom-width: 1.00px;
      border-left-color: rgba(112, 112, 112, 1);
      border-left-style: solid;
      border-left-width: 1.00px;
      border-right-color: rgba(112, 112, 112, 1);
      border-right-style: solid;
      border-right-width: 1.00px;
      border-top-color: rgba(112, 112, 112, 1);
      border-top-style: solid;
      border-top-width: 1.00px;
      border-top-left-radius: 0.00px;
      border-top-right-radius: 0.00px;
      border-bottom-left-radius: 0.00px;
      border-bottom-right-radius: 0.00px;
      box-shadow: none;
      width: 238.00px;
    height: 101.00px;
    left: 63.00px;
    top: 51.00px;

}

.menu .infobb67ed7d .rectangle10ba7fb3fd {
    position: absolute;
      box-sizing: border-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      background-color: rgba(236, 232, 225, 1);
      border-bottom-color: rgba(112, 112, 112, 1);
      border-bottom-style: solid;
      border-bottom-width: 1.00px;
      border-left-color: rgba(112, 112, 112, 1);
      border-left-style: solid;
      border-left-width: 1.00px;
      border-right-color: rgba(112, 112, 112, 1);
      border-right-style: solid;
      border-right-width: 1.00px;
      border-top-color: rgba(112, 112, 112, 1);
      border-top-style: solid;
      border-top-width: 1.00px;
      border-top-left-radius: 0.00px;
      border-top-right-radius: 0.00px;
      border-bottom-left-radius: 0.00px;
      border-bottom-right-radius: 0.00px;
      box-shadow: none;
      width: 238.00px;
    height: 101.00px;
    left: 0.00px;
    top: 0.00px;

}

.menu .infobb67ed7d .rectangle985b63bbe {
    position: absolute;
      box-sizing: border-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      background-color: rgba(15, 25, 35, 1);
      border-bottom-color: rgba(112, 112, 112, 1);
      border-bottom-style: solid;
      border-bottom-width: 1.00px;
      border-left-color: rgba(112, 112, 112, 1);
      border-left-style: solid;
      border-left-width: 1.00px;
      border-right-color: rgba(112, 112, 112, 1);
      border-right-style: solid;
      border-right-width: 1.00px;
      border-top-color: rgba(112, 112, 112, 1);
      border-top-style: solid;
      border-top-width: 1.00px;
      border-top-left-radius: 0.00px;
      border-top-right-radius: 0.00px;
      border-bottom-left-radius: 0.00px;
      border-bottom-right-radius: 0.00px;
      box-shadow: none;
      width: 238.00px;
    height: 101.00px;
    left: 44.00px;
    top: 32.00px;

}

.menu .infobb67ed7d .info {
    position: absolute;
      box-sizing: content-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      background-color: rgba(255, 255, 255, 0);
      text-align: left;
      letter-spacing: 0.00px;
      color: rgba(255, 70, 85, 1);
      -webkit-text-stroke: 1.00px rgba(0, 0, 0, 0);
      font-size: 54.00px;
      font-weight: 500;
    font-style: italic;
      font-family: dinnextltpro_mediumitalic, Arial;
      text-decoration: none;
      box-shadow: none;
      overflow-x: unset;
      overflow-y: unset;
      white-space: pre;
      width: 86.00px;
    height: 65.00px;
    left: 120.00px;
    top: 47.00px;

}

.menu .design4fd22e1f {

      display: block;
      position: absolute;
      box-sizing: content-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      overflow-x: unset;
      overflow-y: unset;
      background-color: transparent;
      width: 301.00px;
    height: 152.00px;
    left: 44.00px;
    top: 467.00px;

}

.menu .design4fd22e1f .rectangle114fec366e {
    position: absolute;
      box-sizing: border-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      background-color: rgba(255, 70, 85, 1);
      border-bottom-color: rgba(112, 112, 112, 1);
      border-bottom-style: solid;
      border-bottom-width: 1.00px;
      border-left-color: rgba(112, 112, 112, 1);
      border-left-style: solid;
      border-left-width: 1.00px;
      border-right-color: rgba(112, 112, 112, 1);
      border-right-style: solid;
      border-right-width: 1.00px;
      border-top-color: rgba(112, 112, 112, 1);
      border-top-style: solid;
      border-top-width: 1.00px;
      border-top-left-radius: 0.00px;
      border-top-right-radius: 0.00px;
      border-bottom-left-radius: 0.00px;
      border-bottom-right-radius: 0.00px;
      box-shadow: none;
      width: 238.00px;
    height: 101.00px;
    left: 63.00px;
    top: 51.00px;

}

.menu .design4fd22e1f .rectangle10ffa98758 {
    position: absolute;
      box-sizing: border-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      background-color: rgba(236, 232, 225, 1);
      border-bottom-color: rgba(112, 112, 112, 1);
      border-bottom-style: solid;
      border-bottom-width: 1.00px;
      border-left-color: rgba(112, 112, 112, 1);
      border-left-style: solid;
      border-left-width: 1.00px;
      border-right-color: rgba(112, 112, 112, 1);
      border-right-style: solid;
      border-right-width: 1.00px;
      border-top-color: rgba(112, 112, 112, 1);
      border-top-style: solid;
      border-top-width: 1.00px;
      border-top-left-radius: 0.00px;
      border-top-right-radius: 0.00px;
      border-bottom-left-radius: 0.00px;
      border-bottom-right-radius: 0.00px;
      box-shadow: none;
      width: 238.00px;
    height: 101.00px;
    left: 0.00px;
    top: 0.00px;

}

.menu .design4fd22e1f .rectangle9475be0a0 {
    position: absolute;
      box-sizing: border-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      background-color: rgba(15, 25, 35, 1);
      border-bottom-color: rgba(112, 112, 112, 1);
      border-bottom-style: solid;
      border-bottom-width: 1.00px;
      border-left-color: rgba(112, 112, 112, 1);
      border-left-style: solid;
      border-left-width: 1.00px;
      border-right-color: rgba(112, 112, 112, 1);
      border-right-style: solid;
      border-right-width: 1.00px;
      border-top-color: rgba(112, 112, 112, 1);
      border-top-style: solid;
      border-top-width: 1.00px;
      border-top-left-radius: 0.00px;
      border-top-right-radius: 0.00px;
      border-bottom-left-radius: 0.00px;
      border-bottom-right-radius: 0.00px;
      box-shadow: none;
      width: 238.00px;
    height: 101.00px;
    left: 44.00px;
    top: 32.00px;

}

.menu .design4fd22e1f .design {
    position: absolute;
      box-sizing: content-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      background-color: rgba(255, 255, 255, 0);
      text-align: left;
      letter-spacing: 0.00px;
      color: rgba(255, 70, 85, 1);
      -webkit-text-stroke: 1.00px rgba(0, 0, 0, 0);
      font-size: 54.00px;
      font-weight: 500;
    font-style: italic;
      font-family: dinnextltpro_mediumitalic, Arial;
      text-decoration: none;
      box-shadow: none;
      overflow-x: unset;
      overflow-y: unset;
      white-space: pre;
      width: 154.00px;
    height: 65.00px;
    left: 76.00px;
    top: 52.00px;

}

.menu .kontakt49b4f570 {

      display: block;
      position: absolute;
      box-sizing: content-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      overflow-x: unset;
      overflow-y: unset;
      background-color: transparent;
      width: 301.00px;
    height: 152.00px;
    left: 44.00px;
    top: 657.00px;

}

.menu .kontakt49b4f570 .rectangle11 {
    position: absolute;
      box-sizing: border-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      background-color: rgba(255, 70, 85, 1);
      border-bottom-color: rgba(112, 112, 112, 1);
      border-bottom-style: solid;
      border-bottom-width: 1.00px;
      border-left-color: rgba(112, 112, 112, 1);
      border-left-style: solid;
      border-left-width: 1.00px;
      border-right-color: rgba(112, 112, 112, 1);
      border-right-style: solid;
      border-right-width: 1.00px;
      border-top-color: rgba(112, 112, 112, 1);
      border-top-style: solid;
      border-top-width: 1.00px;
      border-top-left-radius: 0.00px;
      border-top-right-radius: 0.00px;
      border-bottom-left-radius: 0.00px;
      border-bottom-right-radius: 0.00px;
      box-shadow: none;
      width: 238.00px;
    height: 101.00px;
    left: 63.00px;
    top: 51.00px;

}

.menu .kontakt49b4f570 .rectangle10 {
    position: absolute;
      box-sizing: border-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      background-color: rgba(236, 232, 225, 1);
      border-bottom-color: rgba(112, 112, 112, 1);
      border-bottom-style: solid;
      border-bottom-width: 1.00px;
      border-left-color: rgba(112, 112, 112, 1);
      border-left-style: solid;
      border-left-width: 1.00px;
      border-right-color: rgba(112, 112, 112, 1);
      border-right-style: solid;
      border-right-width: 1.00px;
      border-top-color: rgba(112, 112, 112, 1);
      border-top-style: solid;
      border-top-width: 1.00px;
      border-top-left-radius: 0.00px;
      border-top-right-radius: 0.00px;
      border-bottom-left-radius: 0.00px;
      border-bottom-right-radius: 0.00px;
      box-shadow: none;
      width: 238.00px;
    height: 101.00px;
    left: 0.00px;
    top: 0.00px;

}

.menu .kontakt49b4f570 .rectangle9 {
    position: absolute;
      box-sizing: border-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      background-color: rgba(15, 25, 35, 1);
      border-bottom-color: rgba(112, 112, 112, 1);
      border-bottom-style: solid;
      border-bottom-width: 1.00px;
      border-left-color: rgba(112, 112, 112, 1);
      border-left-style: solid;
      border-left-width: 1.00px;
      border-right-color: rgba(112, 112, 112, 1);
      border-right-style: solid;
      border-right-width: 1.00px;
      border-top-color: rgba(112, 112, 112, 1);
      border-top-style: solid;
      border-top-width: 1.00px;
      border-top-left-radius: 0.00px;
      border-top-right-radius: 0.00px;
      border-bottom-left-radius: 0.00px;
      border-bottom-right-radius: 0.00px;
      box-shadow: none;
      width: 238.00px;
    height: 101.00px;
    left: 44.00px;
    top: 32.00px;

}

.menu .kontakt49b4f570 .kontakt {
    position: absolute;
      box-sizing: content-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      background-color: rgba(255, 255, 255, 0);
      text-align: left;
      letter-spacing: 0.00px;
      color: rgba(255, 70, 85, 1);
      -webkit-text-stroke: 1.00px rgba(0, 0, 0, 0);
      font-size: 54.00px;
      font-weight: 500;
    font-style: italic;
      font-family: dinnextltpro_mediumitalic, Arial;
      text-decoration: none;
      box-shadow: none;
      overflow-x: unset;
      overflow-y: unset;
      white-space: pre;
      width: 174.00px;
    height: 65.00px;
    left: 76.00px;
    top: 55.00px;

}

.menu .stopka {

      display: block;
      position: absolute;
      box-sizing: content-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      overflow-x: unset;
      overflow-y: unset;
      background-color: transparent;
      width: 414.00px;
    height: 87.00px;
    left: 0.00px;
    top: 809.00px;

}

.menu .stopka .rectangle8 {
    position: absolute;
      box-sizing: border-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      background-color: rgba(15, 25, 35, 1);
      border-bottom-color: rgba(112, 112, 112, 1);
      border-bottom-style: solid;
      border-bottom-width: 1.00px;
      border-left-color: rgba(112, 112, 112, 1);
      border-left-style: solid;
      border-left-width: 1.00px;
      border-right-color: rgba(112, 112, 112, 1);
      border-right-style: solid;
      border-right-width: 1.00px;
      border-top-color: rgba(112, 112, 112, 1);
      border-top-style: solid;
      border-top-width: 1.00px;
      border-top-left-radius: 0.00px;
      border-top-right-radius: 0.00px;
      border-bottom-left-radius: 0.00px;
      border-bottom-right-radius: 0.00px;
      box-shadow: none;
      width: 414.00px;
    height: 87.00px;
    left: 0.00px;
    top: 0.00px;

}

.menu .stopka .copywright {
    position: absolute;
      box-sizing: content-box;
      -ms-transform: rotate(0.00deg);
    -webkit-transform: rotate(0.00deg);
    transform: rotate(0.00deg);
    -ms-transform-origin: center;
    -webkit-transform-origin: center;
    transform-origin: center;
      opacity: 1;
      cursor: default;
      margin-top: 0.00px;
      margin-right: 0.00px;
      margin-bottom: 0.00px;
      margin-left: 0.00px;
      padding-top: 0.00px;
      padding-right: 0.00px;
      padding-bottom: 0.00px;
      padding-left: 0.00px;
      background-color: rgba(255, 255, 255, 0);
      text-align: left;
      letter-spacing: 0.00px;
      color: rgba(255, 70, 85, 1);
      -webkit-text-stroke: 1.00px rgba(0, 0, 0, 0);
      font-size: 42.00px;
      font-weight: 500;
    font-style: italic;
      font-family: dinnextltpro_mediumitalic, Arial;
      text-decoration: none;
      box-shadow: none;
      overflow-x: unset;
      overflow-y: unset;
      white-space: pre;
      width: 200.00px;
    height: 51.00px;
    left: 107.00px;
    top: 18.00px;

}

;
`;
cssText = cssText.replace(/background-image: url\(\"assets/g, `background-image: url("${import.meta.url.replace('menu.style.js', 'assets')}`);
cssText = cssText.replace(/src: url\(assets/g, `src: url(${import.meta.url.replace('menu.style.js', 'assets')}`);
export const MenuStyle = html`
${cssText}
`;
