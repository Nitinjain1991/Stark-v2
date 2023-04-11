(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{194:function(n,r,e){e(195),n.exports=e(196)},263:function(n,r,e){var content=e(264);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(126).default)("17bc9ac2",content,!0,{sourceMap:!1})},264:function(n,r,e){var t=e(125),o=e(265),l=e(266),d=e(267),c=e(268),f=t((function(i){return i[1]})),m=o(l),h=o(d),w=o(c);f.push([n.i,'/*\n! tailwindcss v3.3.1 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: \'\';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user\'s configured `sans` font-family by default.\n5. Use the user\'s configured `sans` font-feature-settings by default.\n6. Use the user\'s configured `sans` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user\'s configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type=\'button\'],\n[type=\'reset\'],\n[type=\'submit\'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type=\'search\'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user\'s configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don\'t get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\r\n.static {\n  position: static;\n}\r\n.absolute {\n  position: absolute;\n}\r\n.relative {\n  position: relative;\n}\r\n.inset-y-0 {\n  top: 0px;\n  bottom: 0px;\n}\r\n.left-0 {\n  left: 0px;\n}\r\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\r\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\r\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\r\n.me-2 {\n  -webkit-margin-end: 0.5rem;\n          margin-inline-end: 0.5rem;\n}\r\n.ms-3 {\n  -webkit-margin-start: 0.75rem;\n          margin-inline-start: 0.75rem;\n}\r\n.mt-1 {\n  margin-top: 0.25rem;\n}\r\n.mt-2 {\n  margin-top: 0.5rem;\n}\r\n.mt-3 {\n  margin-top: 0.75rem;\n}\r\n.mt-4 {\n  margin-top: 1rem;\n}\r\n.mt-5 {\n  margin-top: 1.25rem;\n}\r\n.block {\n  display: block;\n}\r\n.inline-block {\n  display: inline-block;\n}\r\n.flex {\n  display: flex;\n}\r\n.w-1\\/2 {\n  width: 50%;\n}\r\n.w-4\\/5 {\n  width: 80%;\n}\r\n.w-full {\n  width: 100%;\n}\r\n.-translate-x-full {\n  --tw-translate-x: -100%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.translate-x-0 {\n  --tw-translate-x: 0px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\r\n.appearance-none {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\r\n.flex-col {\n  flex-direction: column;\n}\r\n.items-end {\n  align-items: flex-end;\n}\r\n.items-center {\n  align-items: center;\n}\r\n.rounded {\n  border-radius: 0.25rem;\n}\r\n.border {\n  border-width: 1px;\n}\r\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\r\n.p-5 {\n  padding: 1.25rem;\n}\r\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\r\n.py-20 {\n  padding-top: 5rem;\n  padding-bottom: 5rem;\n}\r\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\r\n.pb-3 {\n  padding-bottom: 0.75rem;\n}\r\n.pb-4 {\n  padding-bottom: 1rem;\n}\r\n.pb-5 {\n  padding-bottom: 1.25rem;\n}\r\n.pt-4 {\n  padding-top: 1rem;\n}\r\n.text-center {\n  text-align: center;\n}\r\n.text-end {\n  text-align: end;\n}\r\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\r\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\r\n.leading-tight {\n  line-height: 1.25;\n}\r\n.text-gray-700 {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}\r\n.no-underline {\n  text-decoration-line: none;\n}\r\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\r\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\r\n.duration-200 {\n  transition-duration: 200ms;\n}\r\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\r\n\r\n/* font-family import */\r\n@font-face {\r\n  font-family: "Poppins-Regular";\r\n  src: url('+m+');\r\n}\r\n@font-face {\r\n  font-family: "Poppins-medium";\r\n  src: url('+h+');\r\n}\r\n@font-face {\r\n  font-family: "Poppins-SemiBold";\r\n  src: url('+w+');\r\n}\r\n.ff-poppins-medium {\r\n  font-family: "poppins-medium";\r\n}\r\n.font-14-400 {\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  font-family: "poppins-Regular";\r\n}\r\n.font-14-500 {\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  font-family: "poppins-medium";\r\n}\r\n.font-16-500 {\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  font-family: "poppins-medium";\r\n}\r\n.font-18-500 {\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  font-family: "poppins-medium";\r\n}\r\n.font-20-500 {\r\n  font-size: 20px;\r\n  font-weight: 500;\r\n  font-family: "poppins-medium";\r\n}\r\n.font-28-600 {\r\n  font-size: 28px;\r\n  font-weight: 500;\r\n  font-family: "Poppins-SemiBold";\r\n}\r\n\r\n.clr-primary {\r\n  color: rgba(18, 19, 31, 1);\r\n}\r\n.clr-secondary {\r\n  color: rgba(55, 71, 79, 1);\r\n}\r\n.clr-rare {\r\n  color: rgba(109, 129, 138, 1);\r\n}\r\n/* toggle button */\r\n.switch {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 36px;\r\n  height: 20px;\r\n  margin-top: 22px;\r\n}\r\n.py-20 {\r\n  padding: 20px 0px;\r\n}\r\n\r\n.switch input {\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n}\r\n\r\n.slider {\r\n  width: 36px;\r\n  height: 20px;\r\n  position: absolute;\r\n  cursor: pointer;\r\n  top: 2px;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #ccc;\r\n  transition: 0.4s;\r\n}\r\n\r\n.slider:before {\r\n  position: absolute;\r\n  content: "";\r\n  height: 16px;\r\n  width: 16px;\r\n  left: 2px;\r\n  bottom: 2px;\r\n  background-color: white;\r\n  transition: 0.4s;\r\n}\r\n\r\ninput:checked + .slider {\r\n  background-color: rgba(18, 19, 31, 1);\r\n}\r\n\r\ninput:focus + .slider {\r\n  box-shadow: 0 0 1px #2196f3;\r\n}\r\n\r\ninput:checked + .slider:before {\r\n  transform: translateX(16px);\r\n}\r\nlabel {\r\n  cursor: pointer;\r\n}\r\n\r\n/* Rounded sliders */\r\n.slider.round {\r\n  border-radius: 34px;\r\n}\r\n\r\n.slider.round:before {\r\n  border-radius: 50%;\r\n}\r\n\r\n/* sdiebar-left css */\r\n.sidebar-left {\r\n  padding: 20px;\r\n  background: #ffffff;\r\n  border: 1px solid #cfd8dc;\r\n  border-radius: 12px;\r\n}\r\n.sidebar-right {\r\n  padding: 20px;\r\n  background: #ffffff;\r\n  border: 1px solid #cfd8dc;\r\n  border-radius: 12px;\r\n  width: 20%;\r\n}\r\n.toggle-box {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 1px solid #cfd8dc;\r\n}\r\n.btn-light {\r\n  padding: 8px 28px;\r\n  background: #eceff1;\r\n  color: rgba(18, 19, 31, 1);\r\n  border-radius: 40px;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n.btn-light:hover {\r\n  background: rgba(18, 19, 31, 1);\r\n  color: rgba(236, 239, 241, 1);\r\n}\r\n.btn-dark {\r\n  padding: 8px 28px;\r\n  background: rgba(18, 19, 31, 1);\r\n  color: #eceff1;\r\n  border-radius: 40px;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n.btn-dark:hover {\r\n  background: #eceff1;\r\n  color: rgba(18, 19, 31, 1);\r\n}\r\n.bb-light {\r\n  border-bottom: 1px solid #cfd8dc;\r\n}\r\n.image-upload > input {\r\n  display: none;\r\n}\r\nform input,\r\ntextarea {\r\n  padding: 10px 14px;\r\n}\r\n.image-upload {\r\n  display: flex;\r\n  align-items: center;\r\n  width: 200px;\r\n  margin-bottom: 12px;\r\n}\r\n::-moz-placeholder {\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n}\r\n::placeholder {\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n}\r\n.preview-box {\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 12px;\r\n  border: 1px solid #c3cacd;\r\n  border-radius: 8px;\r\n  margin: 12px 0px;\r\n}\r\n.pointing {\r\n  cursor: pointer;\r\n}\r\n.warpper {\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n.panels {\r\n  background: #fffffff6;\r\n  border: 1px solid #cfd8dc;\r\n  border-radius: 12px;\r\n  overflow: hidden;\r\n  padding: 20px;\r\n}\r\n.panel {\r\n  display: none;\r\n  animation: fadein 0.8s;\r\n}\r\n@keyframes fadein {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n.panel-title {\r\n  font-size: 1.5em;\r\n  font-weight: bold;\r\n}\r\n.radio {\r\n  display: none;\r\n}\r\n#one:checked ~ .panels #one-panel,\r\n#two:checked ~ .panels #two-panel,\r\n#three:checked ~ .panels #three-panel,\r\n#four:checked ~ .panels #four-panel,\r\n#five:checked ~ .panels #five-panel,\r\n#six:checked ~ .panels #six-panel,\r\n#seven:checked ~ .panels #seven-panel,\r\n#eight:checked ~ .panels #eight-panel,\r\n#nine:checked ~ .panels #nine-panel {\r\n  display: block;\r\n}\r\n\r\n/* responsive css */\r\n\r\n@media (max-width: 1400px) {\r\n  #navbar {\r\n    position: absolute;\r\n    top: 0;\r\n    min-height: 100vh;\r\n    left: -100%;\r\n    width: 100%;\r\n    background-color: lightcoral;\r\n    transition: all 1000ms;\r\n  }\r\n}\r\n\r\n.hover\\:underline:hover {\n  text-decoration-line: underline;\n}\r\n\r\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\r\n\r\n@media (min-width: 768px) {\n\n  .md\\:relative {\n    position: relative;\n  }\n\n  .md\\:w-4\\/12 {\n    width: 33.333333%;\n  }\n\n  .md\\:-translate-x-0 {\n    --tw-translate-x: -0px;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n\n  .md\\:px-5 {\n    padding-left: 1.25rem;\n    padding-right: 1.25rem;\n  }\n\n  .md\\:text-3xl {\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n  }\n}\r\n\r\n@media (min-width: 1024px) {\n\n  .lg\\:text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n}\r\n',""]),f.locals={},n.exports=f},266:function(n,r,e){n.exports=e.p+"fonts/Poppins-Regular.35d26b7.ttf"},267:function(n,r,e){n.exports=e.p+"fonts/Poppins-Medium.673ed42.ttf"},268:function(n,r,e){n.exports=e.p+"fonts/Poppins-SemiBold.ac8d04b.ttf"}},[[194,4,2,5]]]);