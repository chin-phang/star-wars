import React from 'react';

import * as style from './background.scss';

export class Background extends React.Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 1000"
        className={style.xBackground}
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="0.5"
            x2="0.5"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#fff" stopOpacity="0.8" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <filter
            id="Path_1575"
            x="162.926"
            y="730.425"
            width="1246.645"
            height="427.5"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="-10" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feFlood floodColor="#fff" floodOpacity="0.8" />
            <feComposite operator="in" in2="blur" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="Path_1506"
            x="0"
            y="610"
            width="712.159"
            height="560.425"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="15" result="blur-2" />
            <feFlood floodColor="#2bffde" floodOpacity="0.8" />
            <feComposite operator="in" in2="blur-2" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="Path_1507"
            x="856.159"
            y="610"
            width="712.159"
            height="560.425"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="15" result="blur-3" />
            <feFlood floodColor="#2bffde" floodOpacity="0.8" />
            <feComposite operator="in" in2="blur-3" />
            <feComposite in="SourceGraphic" />
          </filter>
          <linearGradient
            id="linear-gradient-2"
            x1="0.5"
            x2="0.5"
            y2="1"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#1f1f1f" stopOpacity="0" />
            <stop offset="1" stopColor="#2c2c2c" />
          </linearGradient>
          <filter
            id="Path_1511"
            x="856.159"
            y="0"
            width="712.159"
            height="560.425"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="15" result="blur-4" />
            <feFlood floodColor="#fff" floodOpacity="0.8" />
            <feComposite operator="in" in2="blur-4" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="Path_1509"
            x="0"
            y="0"
            width="712.159"
            height="560.425"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="3" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="15" result="blur-5" />
            <feFlood floodColor="#fff" floodOpacity="0.8" />
            <feComposite operator="in" in2="blur-5" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="Path_1"
            x="721"
            y="48.955"
            width="125.733"
            height="138.957"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="10" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="15" result="blur-6" />
            <feFlood floodColor="#fff" floodOpacity="0.471" />
            <feComposite operator="in" in2="blur-6" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="Path_2"
            x="721"
            y="79.379"
            width="104.96"
            height="99.935"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="10" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="15" result="blur-7" />
            <feFlood floodColor="#fff" floodOpacity="0.471" />
            <feComposite operator="in" in2="blur-7" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="Path_3"
            x="750.888"
            y="66.109"
            width="95.848"
            height="113.205"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="10" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="15" result="blur-8" />
            <feFlood floodColor="#fff" floodOpacity="0.471" />
            <feComposite operator="in" in2="blur-8" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="Path_11"
            x="750.888"
            y="66.109"
            width="95.848"
            height="113.205"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="10" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="15" result="blur-9" />
            <feFlood floodColor="#fff" floodOpacity="0.471" />
            <feComposite operator="in" in2="blur-9" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="Path_4"
            x="736.005"
            y="56.764"
            width="110.717"
            height="105.336"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="10" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="15" result="blur-10" />
            <feFlood floodColor="#fff" floodOpacity="0.471" />
            <feComposite operator="in" in2="blur-10" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="use19403"
            x="721.079"
            y="80.688"
            width="104.912"
            height="107.202"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="10" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="15" result="blur-11" />
            <feFlood floodColor="#fff" floodOpacity="0.471" />
            <feComposite operator="in" in2="blur-11" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="use19405"
            x="721.084"
            y="54.885"
            width="104.901"
            height="107.201"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="10" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="15" result="blur-12" />
            <feFlood floodColor="#fff" floodOpacity="0.471" />
            <feComposite operator="in" in2="blur-12" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="use19405-2"
            x="721.084"
            y="54.885"
            width="104.901"
            height="107.201"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="10" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="15" result="blur-13" />
            <feFlood floodColor="#fff" floodOpacity="0.471" />
            <feComposite operator="in" in2="blur-13" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="use19407"
            x="721.079"
            y="63.486"
            width="119.797"
            height="107.202"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="10" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="15" result="blur-14" />
            <feFlood floodColor="#fff" floodOpacity="0.471" />
            <feComposite operator="in" in2="blur-14" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="use19409"
            x="735.996"
            y="72.087"
            width="104.891"
            height="107.202"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="10" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="15" result="blur-15" />
            <feFlood floodColor="#fff" floodOpacity="0.471" />
            <feComposite operator="in" in2="blur-15" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="use19409-2"
            x="735.996"
            y="72.087"
            width="104.891"
            height="107.202"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="10" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="15" result="blur-16" />
            <feFlood floodColor="#fff" floodOpacity="0.471" />
            <feComposite operator="in" in2="blur-16" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="use19411"
            x="735.996"
            y="63.489"
            width="90"
            height="107.201"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="10" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="15" result="blur-17" />
            <feFlood floodColor="#fff" floodOpacity="0.471" />
            <feComposite operator="in" in2="blur-17" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="use19413"
            x="735.996"
            y="80.69"
            width="104.892"
            height="107.205"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="10" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="15" result="blur-18" />
            <feFlood floodColor="#fff" floodOpacity="0.471" />
            <feComposite operator="in" in2="blur-18" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="Path_5"
            x="721.059"
            y="48.94"
            width="109.581"
            height="104.549"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="10" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="15" result="blur-19" />
            <feFlood floodColor="#fff" floodOpacity="0.471" />
            <feComposite operator="in" in2="blur-19" />
            <feComposite in="SourceGraphic" />
          </filter>
          <filter
            id="Path_10"
            x="721.059"
            y="48.94"
            width="109.581"
            height="104.549"
            filterUnits="userSpaceOnUse"
          >
            <feOffset dy="10" input="SourceAlpha" />
            <feGaussianBlur stdDeviation="15" result="blur-20" />
            <feFlood floodColor="#fff" floodOpacity="0.471" />
            <feComposite operator="in" in2="blur-20" />
            <feComposite in="SourceGraphic" />
          </filter>
        </defs>
        <g id="Group_3763" data-name="Group 3763" transform="translate(-360 0)">
          <path
            id="Path_1516"
            data-name="Path 1516"
            className={style['cls-1']}
            d="M-52.706,2543.409l520.128-459.245H701.339l529,459.245Z"
            transform="translate(374.236 -1463.409)"
          />
          <g
            className={style['cls-26']}
            transform="matrix(1, 0, 0, 1, 176, -42.42)"
          >
            <path
              id="Path_1575-2"
              data-name="Path 1575"
              className={style['cls-2']}
              d="M-35.69,0H1120.954L776.8,337.5H296.414Z"
              transform="translate(1328.88 1122.92) rotate(180)"
            />
          </g>
          <g
            className={style['cls-25']}
            transform="matrix(1, 0, 0, 1, 176, -42.42)"
          >
            <path
              id="Path_1506-2"
              data-name="Path 1506"
              className={style['cls-3']}
              d="M157.764,2549l622.159-470.425L254.755,2549Z"
              transform="translate(-112.76 -1426.58)"
            />
          </g>
          <g
            className={style['cls-24']}
            transform="matrix(1, 0, 0, 1, 176, -42.42)"
          >
            <path
              id="Path_1507-2"
              data-name="Path 1507"
              className={style['cls-3']}
              d="M779.923,2549,157.764,2078.575,682.933,2549Z"
              transform="translate(743.4 -1426.58)"
            />
          </g>
          <path
            id="Path_1517"
            data-name="Path 1517"
            className={style['cls-4']}
            d="M-52.706,2542.493l520.128-458.329H701.339l529,458.329Z"
            transform="translate(1546.083 2542.068) rotate(180)"
          />
          <g
            className={style['cls-23']}
            transform="matrix(1, 0, 0, 1, 176, -42.42)"
          >
            <path
              id="Path_1511-2"
              data-name="Path 1511"
              className={style['cls-5']}
              d="M157.764,2549l622.159-470.425L254.755,2549Z"
              transform="translate(1681.08 2591) rotate(180)"
            />
          </g>
          <g
            className={style['cls-22']}
            transform="matrix(1, 0, 0, 1, 176, -42.42)"
          >
            <path
              id="Path_1509-2"
              data-name="Path 1509"
              className={style['cls-5']}
              d="M779.923,2549,157.764,2078.575,682.933,2549Z"
              transform="translate(824.92 2591) rotate(180)"
            />
          </g>
          <path
            id="Path_1-2"
            data-name="Path 1"
            className={style['cls-6']}
            d="M2962.606,1586.521l-5.907,6.135,14.957,8.6,14.863-8.6,5.914-5.914v-17.286l-29.827-17.154-5.82,5.894-.087,17.137,12.69,7.455Z"
            transform="translate(-2014.698 -1510.771)"
          />
          <g
            id="Group_2628"
            data-name="Group 2628"
            transform="translate(942 41.515)"
          >
            <g
              id="Group_2600"
              data-name="Group 2600"
              transform="translate(0 0)"
            >
              <g
                className={style['cls-21']}
                transform="matrix(1, 0, 0, 1, -766, -83.94)"
              >
                <path
                  id="Path_1-3"
                  data-name="Path 1"
                  className={style['cls-6']}
                  d="M2962.606,1586.521l-5.907,6.135,14.957,8.6,14.863-8.6,5.914-5.914v-17.286l-29.827-17.154-5.82,5.894-.087,17.137,12.69,7.455Z"
                  transform="translate(-2190.7 -1468.35)"
                />
              </g>
              <g
                className={style['cls-20']}
                transform="matrix(1, 0, 0, 1, -766, -83.94)"
              >
                <path
                  id="Path_2-2"
                  data-name="Path 2"
                  className={style['cls-6']}
                  d="M2969.373,2058.658l2.268,1.3-14.96,8.632,5.839-6.053Z"
                  transform="translate(-2190.68 -1944.28)"
                />
              </g>
              <g
                className={style['cls-19']}
                transform="matrix(1, 0, 0, 1, -766, -83.94)"
              >
                <path
                  id="Path_3-2"
                  data-name="Path 3"
                  className={style['cls-6']}
                  d="M3454.107,1861.007l5.848-5.9V1837.8l-5.848,5.968Z"
                  transform="translate(-2658.22 -1736.69)"
                />
              </g>
              <g
                className={style['cls-18']}
                transform="matrix(1, 0, 0, 1, -766, -83.94)"
              >
                <path
                  id="Path_11-2"
                  data-name="Path 11"
                  className={style['cls-6']}
                  d="M3454.107,1861.007l5.848-5.9V1837.8l-5.848,5.968Z"
                  transform="translate(-2658.22 -1736.69)"
                />
              </g>
              <g
                className={style['cls-17']}
                transform="matrix(1, 0, 0, 1, -766, -83.94)"
              >
                <path
                  id="Path_4-2"
                  data-name="Path 4"
                  className={style['cls-6']}
                  d="M3068.673,1607.934l-4.542,6.646,14.887,8.69,5.831-5.981Z"
                  transform="translate(-2283.13 -1516.17)"
                />
              </g>
              <g
                className={style['cls-16']}
                transform="matrix(1, 0, 0, 1, -766, -83.94)"
              >
                <path
                  id="use19403-2"
                  data-name="use19403"
                  className={style['cls-6']}
                  d="M118.88,31.688l-14.911,8.6,14.911,8.6v-17.2Z"
                  transform="translate(662.11 84)"
                />
              </g>
              <g
                className={style['cls-15']}
                transform="matrix(1, 0, 0, 1, -766, -83.94)"
              >
                <path
                  id="use19405-3"
                  data-name="use19405"
                  className={style['cls-6']}
                  d="M103.975-921v17.2l14.9-8.6-14.9-8.6Z"
                  transform="translate(662.11 1010.88)"
                />
              </g>
              <g
                className={style['cls-14']}
                transform="matrix(1, 0, 0, 1, -766, -83.94)"
              >
                <path
                  id="use19405-4"
                  data-name="use19405"
                  className={style['cls-6']}
                  d="M103.975-921v17.2l14.9-8.6-14.9-8.6Z"
                  transform="translate(662.11 1010.88)"
                />
              </g>
              <g
                className={style['cls-13']}
                transform="matrix(1, 0, 0, 1, -766, -83.94)"
              >
                <path
                  id="use19407-2"
                  data-name="use19407"
                  className={style['cls-6']}
                  d="M118.88,10.563l-14.911,8.6,14.911,8.6,14.886-8.6Z"
                  transform="translate(662.11 87.92)"
                />
              </g>
              <g
                className={style['cls-12']}
                transform="matrix(1, 0, 0, 1, -766, -83.94)"
              >
                <path
                  id="use19409-3"
                  data-name="use19409"
                  className={style['cls-6']}
                  d="M122.287-891.271l14.891,8.6v-17.2Z"
                  transform="translate(658.71 1006.96)"
                />
              </g>
              <g
                className={style['cls-11']}
                transform="matrix(1, 0, 0, 1, -766, -83.94)"
              >
                <path
                  id="use19409-4"
                  data-name="use19409"
                  className={style['cls-6']}
                  d="M122.287-891.271l14.891,8.6v-17.2Z"
                  transform="translate(658.71 1006.96)"
                />
              </g>
              <g
                className={style['cls-10']}
                transform="matrix(1, 0, 0, 1, -766, -83.94)"
              >
                <path
                  id="use19411-2"
                  data-name="use19411"
                  className={style['cls-6']}
                  d="M122.287-893.231v0Z"
                  transform="translate(658.71 1008.92)"
                />
              </g>
              <g
                className={style['cls-9']}
                transform="matrix(1, 0, 0, 1, -766, -83.94)"
              >
                <path
                  id="use19413-2"
                  data-name="use19413"
                  className={style['cls-6']}
                  d="M122.287-872.1l14.892-8.606-14.892-8.6Z"
                  transform="translate(658.71 1005)"
                />
              </g>
              <g
                className={style['cls-8']}
                transform="matrix(1, 0, 0, 1, -766, -83.94)"
              >
                <path
                  id="Path_5-2"
                  data-name="Path 5"
                  className={style['cls-6']}
                  d="M2972.578,2618.605l4.68-6.64-13.783-7.909-5.8,5.888Z"
                  transform="translate(-2191.62 -2520.12)"
                />
              </g>
              <g
                className={style['cls-7']}
                transform="matrix(1, 0, 0, 1, -766, -83.94)"
              >
                <path
                  id="Path_10-2"
                  data-name="Path 10"
                  className={style['cls-6']}
                  d="M2972.578,2618.605l4.68-6.64-13.783-7.909-5.8,5.888Z"
                  transform="translate(-2191.62 -2520.12)"
                />
              </g>
            </g>
            <path
              id="Path_1-4"
              data-name="Path 1"
              className={style['cls-6']}
              d="M2962.606,1586.521l-5.907,6.135,14.957,8.6,14.863-8.6,5.914-5.914v-17.286l-29.827-17.154-5.82,5.894-.087,17.137,12.69,7.455Z"
              transform="translate(-2956.698 -1552.287)"
            />
            <path
              id="Path_11-3"
              data-name="Path 11"
              className={style['cls-6']}
              d="M3454.107,1861.007l5.848-5.9V1837.8l-5.848,5.968Z"
              transform="translate(-3424.219 -1820.634)"
            />
            <path
              id="use19405-5"
              data-name="use19405"
              className={style['cls-6']}
              d="M103.975-921v17.2l14.9-8.6-14.9-8.6Z"
              transform="translate(-103.89 926.944)"
            />
            <path
              id="use19409-5"
              data-name="use19409"
              className={style['cls-6']}
              d="M122.287-891.271l14.891,8.6v-17.2Z"
              transform="translate(-107.291 923.021)"
            />
            <path
              id="Path_10-3"
              data-name="Path 10"
              className={style['cls-6']}
              d="M2972.578,2618.605l4.68-6.64-13.783-7.909-5.8,5.888Z"
              transform="translate(-2957.618 -2604.057)"
            />
          </g>
        </g>
      </svg>
    );
  }
}
