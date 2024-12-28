<style>
  /* reset.css */
/* Remove all default margins, paddings, and borders */
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Bubblegum+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Gloock&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;600&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  border: 0;
}

/* Set default font styles */
html {
  font-family: sans-serif;
  line-height: 1.5;
  font-size: 100%; /* Default to 16px */
  -webkit-text-size-adjust: 100%; /* Prevent font scaling in iOS */
}

/* Reset body styles */
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}

/* Reset heading and paragraph margins */
h1, h2, h3, h4, h5, h6, p {
  margin: 1em;
}

/* Remove default list styles */
ul, ol {
  list-style: none;
}

/* Remove quotes for blockquote and q elements */
blockquote, q {
  quotes: none;
}

blockquote::before, blockquote::after,
q::before, q::after {
  content: "";
}

/* Reset table styles */
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* Reset image and media defaults */
img, video {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Remove link underlines */
a {
  text-decoration: none;
  color: inherit;
}

/* Reset button and input styles */
button, input, textarea, select {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  outline: none;
  appearance: none;
}

/* Make forms easier to use on mobile devices */
textarea {
  resize: none;
}

button {
  cursor: pointer;
}

.animation {
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
.animation-slide {
  animation-name: slide;
}
.animation-slide-left {
  animation-name: slide-left;
}
.animation-slide-right {
  animation-name: slide-right;
}
.animation-slide-up {
  animation-name: slide-up;
}
.animation-slide-down {
  animation-name: slide-down;
}
.animation-bounce {
  animation-name: bounce;
}
.animation-shake {
  animation-name: shake;
}
.animation-scale {
  animation-name: scale;
}
.animation-spin {
  animation-name: spin;
}
.animation-fade {
  animation-name: fade;
}

.duration-5 {
  animation-duration: 0.5s;
}

.duration-10 {
  animation-duration: 1s;
}

.duration-15 {
  animation-duration: 1.5s;
}

.duration-20 {
  animation-duration: 2s;
}

.duration-25 {
  animation-duration: 2.5s;
}

.duration-30 {
  animation-duration: 3s;
}

.duration-35 {
  animation-duration: 3.5s;
}

.duration-40 {
  animation-duration: 4s;
}

.duration-45 {
  animation-duration: 4.5s;
}

.duration-50 {
  animation-duration: 5s;
}

.duration-55 {
  animation-duration: 5.5s;
}

.duration-60 {
  animation-duration: 6s;
}

.duration-65 {
  animation-duration: 6.5s;
}

.duration-70 {
  animation-duration: 7s;
}

.duration-75 {
  animation-duration: 7.5s;
}

.duration-80 {
  animation-duration: 8s;
}

.duration-85 {
  animation-duration: 8.5s;
}

.duration-90 {
  animation-duration: 9s;
}

.duration-95 {
  animation-duration: 9.5s;
}

.duration-100 {
  animation-duration: 10s;
}

.duration-105 {
  animation-duration: 10.5s;
}

.duration-110 {
  animation-duration: 11s;
}

.duration-115 {
  animation-duration: 11.5s;
}

.duration-120 {
  animation-duration: 12s;
}

.duration-125 {
  animation-duration: 12.5s;
}

.duration-130 {
  animation-duration: 13s;
}

.duration-135 {
  animation-duration: 13.5s;
}

.duration-140 {
  animation-duration: 14s;
}

.duration-145 {
  animation-duration: 14.5s;
}

.duration-150 {
  animation-duration: 15s;
}

.duration-155 {
  animation-duration: 15.5s;
}

.duration-160 {
  animation-duration: 16s;
}

.duration-165 {
  animation-duration: 16.5s;
}

.duration-170 {
  animation-duration: 17s;
}

.duration-175 {
  animation-duration: 17.5s;
}

.duration-180 {
  animation-duration: 18s;
}

.duration-185 {
  animation-duration: 18.5s;
}

.duration-190 {
  animation-duration: 19s;
}

.duration-195 {
  animation-duration: 19.5s;
}

.duration-200 {
  animation-duration: 20s;
}

.linear {
  animation-timing-function: linear;
}

.ease {
  animation-timing-function: ease;
}

.ease-in {
  animation-timing-function: ease-in;
}

.ease-out {
  animation-timing-function: ease-out;
}

.infinite {
  animation-iteration-count: infinite;
}

.once {
  animation-iteration-count: 1;
}

.twice {
  animation-iteration-count: 2;
}

@keyframes slide {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100px);
  }
}
@keyframes slide-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100px);
  }
}
@keyframes slide-right {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100px);
  }
}
@keyframes slide-up {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100px);
  }
}
@keyframes slide-down {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100px);
  }
}
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-10px);
  }
  50% {
    transform: translateX(10px);
  }
  75% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fade {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.badge {
  background-color: #8E8E93;
  color: #F3F3FC;
  border: none;
  font-size: 1rem;
  border-radius: 0.2rem !important;
  padding: 0.2rem 0.6rem !important;
}
.badge-pink {
  background-color: #FF2D55;
}
.badge-red {
  background-color: #FF3B30;
}
.badge-orange {
  background-color: #FF9500;
}
.badge-yellow {
  background-color: #FFCC00;
}
.badge-green {
  background-color: #4CD964;
}
.badge-aqua {
  background-color: #5AC8FA;
}
.badge-sky {
  background-color: #34AADC;
}
.badge-blue {
  background-color: #007AFF;
}
.badge-violet {
  background-color: #5856D6;
}
.badge-gray {
  background-color: #8E8E93;
}
.badge-lead {
  background-color: #29292C;
}
.badge-steel {
  background-color: #444449;
}
.badge-iron {
  background-color: #6E6E74;
}
.badge-titanium {
  background-color: #8E8E93;
}
.badge-silver {
  background-color: #C2C2C9;
}
.badge-platinum {
  background-color: #E5E5ED;
}
.badge-dark {
  background-color: #222224;
}
.badge-light {
  background-color: #F3F3FC;
}
.badge-transparent {
  background-color: transparent;
}
.badge-dark {
  background-color: #222224;
}
.badge-light {
  background-color: #F3F3FC;
}
.badge-transparent {
  background-color: transparent;
}

.bar {
  padding: 1rem 1.5rem;
  border-radius: 1rem;
}
.bar-pink {
  color: #FF2D55;
}
.bar-red {
  color: #FF3B30;
}
.bar-orange {
  color: #FF9500;
}
.bar-yellow {
  color: #FFCC00;
}
.bar-green {
  color: #4CD964;
}
.bar-aqua {
  color: #5AC8FA;
}
.bar-sky {
  color: #34AADC;
}
.bar-blue {
  color: #007AFF;
}
.bar-violet {
  color: #5856D6;
}
.bar-gray {
  color: #8E8E93;
}
.bar-lead {
  color: #29292C;
}
.bar-steel {
  color: #444449;
}
.bar-iron {
  color: #6E6E74;
}
.bar-titanium {
  color: #8E8E93;
}
.bar-silver {
  color: #C2C2C9;
}
.bar-platinum {
  color: #E5E5ED;
}
.bar-dark {
  color: #222224;
}
.bar-light {
  color: #F3F3FC;
}
.bar-transparent {
  color: transparent;
}
.bar-dark {
  color: #222224;
}
.bar-light {
  color: #F3F3FC;
}
.bar-transparent {
  color: transparent;
}
.bar-100 {
  width: 100%;
}
.bar-92 {
  width: 92%;
}
.bar-90 {
  width: 90%;
}
.bar-87 {
  width: 87%;
}
.bar-83 {
  width: 83%;
}
.bar-80 {
  width: 80%;
}
.bar-75 {
  width: 75%;
}
.bar-66 {
  width: 66%;
}
.bar-50 {
  width: 50%;
}
.bar-33 {
  width: 33.3%;
}
.bar-25 {
  width: 25%;
}
.bar-20 {
  width: 20%;
}
.bar-16 {
  width: 16.6%;
}
.bar-12 {
  width: 12.5%;
}
.bar-10 {
  width: 10%;
}
.bar-8 {
  width: 8.2%;
}

.btn {
  background-color: #8E8E93;
  color: #F3F3FC;
  border: none;
  font-size: 1rem;
  border-radius: 0.2rem;
  padding: 0.2rem 0.6rem;
}
.btn:hover {
  opacity: 0.8;
}
.btn-pink {
  background-color: #FF2D55;
}
.btn-red {
  background-color: #FF3B30;
}
.btn-orange {
  background-color: #FF9500;
}
.btn-yellow {
  background-color: #FFCC00;
}
.btn-green {
  background-color: #4CD964;
}
.btn-aqua {
  background-color: #5AC8FA;
}
.btn-sky {
  background-color: #34AADC;
}
.btn-blue {
  background-color: #007AFF;
}
.btn-violet {
  background-color: #5856D6;
}
.btn-gray {
  background-color: #8E8E93;
}
.btn-lead {
  background-color: #29292C;
}
.btn-steel {
  background-color: #444449;
}
.btn-iron {
  background-color: #6E6E74;
}
.btn-titanium {
  background-color: #8E8E93;
}
.btn-silver {
  background-color: #C2C2C9;
}
.btn-platinum {
  background-color: #E5E5ED;
}
.btn-dark {
  background-color: #222224;
}
.btn-light {
  background-color: #F3F3FC;
}
.btn-transparent {
  background-color: transparent;
}
.btn-dark {
  background-color: #222224;
}
.btn-light {
  background-color: #F3F3FC;
}
.btn-transparent {
  background-color: transparent;
}
.btn-border {
  background-color: transparent;
  border: 0.1rem solid #222224;
  border-radius: 0.2rem;
  padding: 0.2rem 0.6rem;
}
.btn-border-pink {
  border-color: #FF2D55;
  color: #FF2D55;
}
.btn-border-red {
  border-color: #FF3B30;
  color: #FF3B30;
}
.btn-border-orange {
  border-color: #FF9500;
  color: #FF9500;
}
.btn-border-yellow {
  border-color: #FFCC00;
  color: #FFCC00;
}
.btn-border-green {
  border-color: #4CD964;
  color: #4CD964;
}
.btn-border-aqua {
  border-color: #5AC8FA;
  color: #5AC8FA;
}
.btn-border-sky {
  border-color: #34AADC;
  color: #34AADC;
}
.btn-border-blue {
  border-color: #007AFF;
  color: #007AFF;
}
.btn-border-violet {
  border-color: #5856D6;
  color: #5856D6;
}
.btn-border-gray {
  border-color: #8E8E93;
  color: #8E8E93;
}
.btn-border-lead {
  border-color: #29292C;
  color: #29292C;
}
.btn-border-steel {
  border-color: #444449;
  color: #444449;
}
.btn-border-iron {
  border-color: #6E6E74;
  color: #6E6E74;
}
.btn-border-titanium {
  border-color: #8E8E93;
  color: #8E8E93;
}
.btn-border-silver {
  border-color: #C2C2C9;
  color: #C2C2C9;
}
.btn-border-platinum {
  border-color: #E5E5ED;
  color: #E5E5ED;
}
.btn-border-dark {
  border-color: #222224;
  color: #222224;
}
.btn-border-light {
  border-color: #F3F3FC;
  color: #F3F3FC;
}

.card {
  padding: 2rem;
  border: 1px solid #8E8E93;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #F3F3FC;
}
.card-header {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #222224;
}
.card-body {
  font-size: 1rem;
  color: #8E8E93;
}
.card-footer {
  margin-top: 2rem;
  text-align: right;
}
.card-hover:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.container {
  max-width: 3rem;
  margin: 0 auto;
  padding: 0 1.5rem;
}
.container-fluid {
  max-width: 100%;
}

.link {
  color: #5AC8FA;
}
.link-pink {
  color: #FF2D55;
}
.link-pink:hover {
  color: #000000, #FF2D55, 90;
  text-decoration: underline;
}
.link-pink:active {
  opacity: 0.8;
}
.link-red {
  color: #FF3B30;
}
.link-red:hover {
  color: #000000, #FF3B30, 90;
  text-decoration: underline;
}
.link-red:active {
  opacity: 0.8;
}
.link-orange {
  color: #FF9500;
}
.link-orange:hover {
  color: #000000, #FF9500, 90;
  text-decoration: underline;
}
.link-orange:active {
  opacity: 0.8;
}
.link-yellow {
  color: #FFCC00;
}
.link-yellow:hover {
  color: #000000, #FFCC00, 90;
  text-decoration: underline;
}
.link-yellow:active {
  opacity: 0.8;
}
.link-green {
  color: #4CD964;
}
.link-green:hover {
  color: #000000, #4CD964, 90;
  text-decoration: underline;
}
.link-green:active {
  opacity: 0.8;
}
.link-aqua {
  color: #5AC8FA;
}
.link-aqua:hover {
  color: #000000, #5AC8FA, 90;
  text-decoration: underline;
}
.link-aqua:active {
  opacity: 0.8;
}
.link-sky {
  color: #34AADC;
}
.link-sky:hover {
  color: #000000, #34AADC, 90;
  text-decoration: underline;
}
.link-sky:active {
  opacity: 0.8;
}
.link-blue {
  color: #007AFF;
}
.link-blue:hover {
  color: #000000, #007AFF, 90;
  text-decoration: underline;
}
.link-blue:active {
  opacity: 0.8;
}
.link-violet {
  color: #5856D6;
}
.link-violet:hover {
  color: #000000, #5856D6, 90;
  text-decoration: underline;
}
.link-violet:active {
  opacity: 0.8;
}
.link-gray {
  color: #8E8E93;
}
.link-gray:hover {
  color: #000000, #8E8E93, 90;
  text-decoration: underline;
}
.link-gray:active {
  opacity: 0.8;
  text-decoration: underline;
}
.link-dark {
  color: #222224;
}
.link-dark:hover {
  color: #000000, #222224, 90;
  text-decoration: underline;
}
.link-dark:active {
  opacity: 0.8;
}
.link-light {
  color: #F3F3FC;
}
.link-light:hover {
  color: #000000, #F3F3FC, 90;
  text-decoration: underline;
}
.link-light:active {
  opacity: 0.8;
}

.bg-pink {
  background-color: #FF2D55;
}
.bg-red {
  background-color: #FF3B30;
}
.bg-orange {
  background-color: #FF9500;
}
.bg-yellow {
  background-color: #FFCC00;
}
.bg-green {
  background-color: #4CD964;
}
.bg-aqua {
  background-color: #5AC8FA;
}
.bg-sky {
  background-color: #34AADC;
}
.bg-blue {
  background-color: #007AFF;
}
.bg-violet {
  background-color: #5856D6;
}
.bg-gray {
  background-color: #8E8E93;
}
.bg-lead {
  background-color: #29292C;
}
.bg-steel {
  background-color: #444449;
}
.bg-iron {
  background-color: #6E6E74;
}
.bg-titanium {
  background-color: #8E8E93;
}
.bg-silver {
  background-color: #C2C2C9;
}
.bg-platinum {
  background-color: #E5E5ED;
}
.bg-dark {
  background-color: #222224;
}
.bg-light {
  background-color: #F3F3FC;
}
.bg-transparent {
  background-color: transparent;
}
.bg-dark {
  background-color: #222224;
}
.bg-light {
  background-color: #F3F3FC;
}
.bg-transparent {
  background-color: transparent;
}

.border {
  border: 0.2em solid #222224;
}
.border-pink {
  border-color: #FF2D55;
}
.border-red {
  border-color: #FF3B30;
}
.border-orange {
  border-color: #FF9500;
}
.border-yellow {
  border-color: #FFCC00;
}
.border-green {
  border-color: #4CD964;
}
.border-aqua {
  border-color: #5AC8FA;
}
.border-sky {
  border-color: #34AADC;
}
.border-blue {
  border-color: #007AFF;
}
.border-violet {
  border-color: #5856D6;
}
.border-gray {
  border-color: #8E8E93;
}
.border-lead {
  border-color: #29292C;
}
.border-steel {
  border-color: #444449;
}
.border-iron {
  border-color: #6E6E74;
}
.border-titanium {
  border-color: #8E8E93;
}
.border-silver {
  border-color: #C2C2C9;
}
.border-platinum {
  border-color: #E5E5ED;
}
.border-dark {
  border-color: #222224;
}
.border-light {
  border-color: #F3F3FC;
}
.border-transparent {
  border-color: transparent;
}
.border-xxl {
  border-width: 5rem;
}
.border-xl {
  border-width: 4rem;
}
.border-lg {
  border-width: 3rem;
}
.border-md {
  border-width: 2rem;
}
.border-sm {
  border-width: 1.5rem;
}
.border-xs {
  border-width: 1rem;
}
.border-t {
  border-top: 0.2em solid #222224;
}
.border-t-pink {
  border-color: #FF2D55;
}
.border-t-red {
  border-color: #FF3B30;
}
.border-t-orange {
  border-color: #FF9500;
}
.border-t-yellow {
  border-color: #FFCC00;
}
.border-t-green {
  border-color: #4CD964;
}
.border-t-aqua {
  border-color: #5AC8FA;
}
.border-t-sky {
  border-color: #34AADC;
}
.border-t-blue {
  border-color: #007AFF;
}
.border-t-violet {
  border-color: #5856D6;
}
.border-t-gray {
  border-color: #8E8E93;
}
.border-t-lead {
  border-color: #29292C;
}
.border-t-steel {
  border-color: #444449;
}
.border-t-iron {
  border-color: #6E6E74;
}
.border-t-titanium {
  border-color: #8E8E93;
}
.border-t-silver {
  border-color: #C2C2C9;
}
.border-t-platinum {
  border-color: #E5E5ED;
}
.border-t-dark {
  border-color: #222224;
}
.border-t-light {
  border-color: #F3F3FC;
}
.border-t-transparent {
  border-color: transparent;
}
.border-t-xxl {
  border-width: 5rem;
}
.border-t-xl {
  border-width: 4rem;
}
.border-t-lg {
  border-width: 3rem;
}
.border-t-md {
  border-width: 2rem;
}
.border-t-sm {
  border-width: 1.5rem;
}
.border-t-xs {
  border-width: 1rem;
}
.border-r {
  border-right: 0.2em solid #222224;
}
.border-r-pink {
  border-color: #FF2D55;
}
.border-r-red {
  border-color: #FF3B30;
}
.border-r-orange {
  border-color: #FF9500;
}
.border-r-yellow {
  border-color: #FFCC00;
}
.border-r-green {
  border-color: #4CD964;
}
.border-r-aqua {
  border-color: #5AC8FA;
}
.border-r-sky {
  border-color: #34AADC;
}
.border-r-blue {
  border-color: #007AFF;
}
.border-r-violet {
  border-color: #5856D6;
}
.border-r-gray {
  border-color: #8E8E93;
}
.border-r-lead {
  border-color: #29292C;
}
.border-r-steel {
  border-color: #444449;
}
.border-r-iron {
  border-color: #6E6E74;
}
.border-r-titanium {
  border-color: #8E8E93;
}
.border-r-silver {
  border-color: #C2C2C9;
}
.border-r-platinum {
  border-color: #E5E5ED;
}
.border-r-dark {
  border-color: #222224;
}
.border-r-light {
  border-color: #F3F3FC;
}
.border-r-transparent {
  border-color: transparent;
}
.border-r-xxl {
  border-width: 5rem;
}
.border-r-xl {
  border-width: 4rem;
}
.border-r-lg {
  border-width: 3rem;
}
.border-r-md {
  border-width: 2rem;
}
.border-r-sm {
  border-width: 1.5rem;
}
.border-r-xs {
  border-width: 1rem;
}
.border-b {
  border-bottom: 0.2em solid #222224;
}
.border-b-pink {
  border-color: #FF2D55;
}
.border-b-red {
  border-color: #FF3B30;
}
.border-b-orange {
  border-color: #FF9500;
}
.border-b-yellow {
  border-color: #FFCC00;
}
.border-b-green {
  border-color: #4CD964;
}
.border-b-aqua {
  border-color: #5AC8FA;
}
.border-b-sky {
  border-color: #34AADC;
}
.border-b-blue {
  border-color: #007AFF;
}
.border-b-violet {
  border-color: #5856D6;
}
.border-b-gray {
  border-color: #8E8E93;
}
.border-b-lead {
  border-color: #29292C;
}
.border-b-steel {
  border-color: #444449;
}
.border-b-iron {
  border-color: #6E6E74;
}
.border-b-titanium {
  border-color: #8E8E93;
}
.border-b-silver {
  border-color: #C2C2C9;
}
.border-b-platinum {
  border-color: #E5E5ED;
}
.border-b-dark {
  border-color: #222224;
}
.border-b-light {
  border-color: #F3F3FC;
}
.border-b-transparent {
  border-color: transparent;
}
.border-b-xxl {
  border-width: 5rem;
}
.border-b-xl {
  border-width: 4rem;
}
.border-b-lg {
  border-width: 3rem;
}
.border-b-md {
  border-width: 2rem;
}
.border-b-sm {
  border-width: 1.5rem;
}
.border-b-xs {
  border-width: 1rem;
}
.border-l {
  border-left: 0.2em solid #222224;
}
.border-l-pink {
  border-color: #FF2D55;
}
.border-l-red {
  border-color: #FF3B30;
}
.border-l-orange {
  border-color: #FF9500;
}
.border-l-yellow {
  border-color: #FFCC00;
}
.border-l-green {
  border-color: #4CD964;
}
.border-l-aqua {
  border-color: #5AC8FA;
}
.border-l-sky {
  border-color: #34AADC;
}
.border-l-blue {
  border-color: #007AFF;
}
.border-l-violet {
  border-color: #5856D6;
}
.border-l-gray {
  border-color: #8E8E93;
}
.border-l-lead {
  border-color: #29292C;
}
.border-l-steel {
  border-color: #444449;
}
.border-l-iron {
  border-color: #6E6E74;
}
.border-l-titanium {
  border-color: #8E8E93;
}
.border-l-silver {
  border-color: #C2C2C9;
}
.border-l-platinum {
  border-color: #E5E5ED;
}
.border-l-dark {
  border-color: #222224;
}
.border-l-light {
  border-color: #F3F3FC;
}
.border-l-transparent {
  border-color: transparent;
}
.border-l-xxl {
  border-width: 5rem;
}
.border-l-xl {
  border-width: 4rem;
}
.border-l-lg {
  border-width: 3rem;
}
.border-l-md {
  border-width: 2rem;
}
.border-l-sm {
  border-width: 1.5rem;
}
.border-l-xs {
  border-width: 1rem;
}
.border-x {
  border-left: 0.2em solid #222224;
  border-right: 0.2em solid #222224;
}
.border-x-pink {
  border-color: #FF2D55;
}
.border-x-red {
  border-color: #FF3B30;
}
.border-x-orange {
  border-color: #FF9500;
}
.border-x-yellow {
  border-color: #FFCC00;
}
.border-x-green {
  border-color: #4CD964;
}
.border-x-aqua {
  border-color: #5AC8FA;
}
.border-x-sky {
  border-color: #34AADC;
}
.border-x-blue {
  border-color: #007AFF;
}
.border-x-violet {
  border-color: #5856D6;
}
.border-x-gray {
  border-color: #8E8E93;
}
.border-x-lead {
  border-color: #29292C;
}
.border-x-steel {
  border-color: #444449;
}
.border-x-iron {
  border-color: #6E6E74;
}
.border-x-titanium {
  border-color: #8E8E93;
}
.border-x-silver {
  border-color: #C2C2C9;
}
.border-x-platinum {
  border-color: #E5E5ED;
}
.border-x-dark {
  border-color: #222224;
}
.border-x-light {
  border-color: #F3F3FC;
}
.border-x-transparent {
  border-color: transparent;
}
.border-x-xxl {
  border-width: 5rem;
}
.border-x-xl {
  border-width: 4rem;
}
.border-x-lg {
  border-width: 3rem;
}
.border-x-md {
  border-width: 2rem;
}
.border-x-sm {
  border-width: 1.5rem;
}
.border-x-xs {
  border-width: 1rem;
}
.border-y {
  border-top: 0.2em solid #222224;
  border-bottom: 0.2em solid #222224;
}
.border-y-pink {
  border-color: #FF2D55;
}
.border-y-red {
  border-color: #FF3B30;
}
.border-y-orange {
  border-color: #FF9500;
}
.border-y-yellow {
  border-color: #FFCC00;
}
.border-y-green {
  border-color: #4CD964;
}
.border-y-aqua {
  border-color: #5AC8FA;
}
.border-y-sky {
  border-color: #34AADC;
}
.border-y-blue {
  border-color: #007AFF;
}
.border-y-violet {
  border-color: #5856D6;
}
.border-y-gray {
  border-color: #8E8E93;
}
.border-y-lead {
  border-color: #29292C;
}
.border-y-steel {
  border-color: #444449;
}
.border-y-iron {
  border-color: #6E6E74;
}
.border-y-titanium {
  border-color: #8E8E93;
}
.border-y-silver {
  border-color: #C2C2C9;
}
.border-y-platinum {
  border-color: #E5E5ED;
}
.border-y-dark {
  border-color: #222224;
}
.border-y-light {
  border-color: #F3F3FC;
}
.border-y-transparent {
  border-color: transparent;
}
.border-y-xxl {
  border-width: 5rem;
}
.border-y-xl {
  border-width: 4rem;
}
.border-y-lg {
  border-width: 3rem;
}
.border-y-md {
  border-width: 2rem;
}
.border-y-sm {
  border-width: 1.5rem;
}
.border-y-xs {
  border-width: 1rem;
}
.border-cut-t {
  border: 0.2em solid #222224;
  border-top: none;
}
.border-cut-r {
  border: 0.2em solid #222224;
  border-right: none;
}
.border-cut-b {
  border: 0.2em solid #222224;
  border-bottom: none;
}
.border-cut-l {
  border: 0.2em solid #222224;
  border-left: none;
}
.border-dotted {
  border-style: dotted;
}
.border-dotted-pink {
  border-color: #FF2D55;
}
.border-dotted-red {
  border-color: #FF3B30;
}
.border-dotted-orange {
  border-color: #FF9500;
}
.border-dotted-yellow {
  border-color: #FFCC00;
}
.border-dotted-green {
  border-color: #4CD964;
}
.border-dotted-aqua {
  border-color: #5AC8FA;
}
.border-dotted-sky {
  border-color: #34AADC;
}
.border-dotted-blue {
  border-color: #007AFF;
}
.border-dotted-violet {
  border-color: #5856D6;
}
.border-dotted-gray {
  border-color: #8E8E93;
}
.border-dotted-lead {
  border-color: #29292C;
}
.border-dotted-steel {
  border-color: #444449;
}
.border-dotted-iron {
  border-color: #6E6E74;
}
.border-dotted-titanium {
  border-color: #8E8E93;
}
.border-dotted-silver {
  border-color: #C2C2C9;
}
.border-dotted-platinum {
  border-color: #E5E5ED;
}
.border-dotted-dark {
  border-color: #222224;
}
.border-dotted-light {
  border-color: #F3F3FC;
}
.border-dotted-transparent {
  border-color: transparent;
}
.border-dotted-xxl {
  border-width: 5rem;
}
.border-dotted-xl {
  border-width: 4rem;
}
.border-dotted-lg {
  border-width: 3rem;
}
.border-dotted-md {
  border-width: 2rem;
}
.border-dotted-sm {
  border-width: 1.5rem;
}
.border-dotted-xs {
  border-width: 1rem;
}
.border-dashed {
  border-style: dashed;
}
.border-dashed-pink {
  border-color: #FF2D55;
}
.border-dashed-red {
  border-color: #FF3B30;
}
.border-dashed-orange {
  border-color: #FF9500;
}
.border-dashed-yellow {
  border-color: #FFCC00;
}
.border-dashed-green {
  border-color: #4CD964;
}
.border-dashed-aqua {
  border-color: #5AC8FA;
}
.border-dashed-sky {
  border-color: #34AADC;
}
.border-dashed-blue {
  border-color: #007AFF;
}
.border-dashed-violet {
  border-color: #5856D6;
}
.border-dashed-gray {
  border-color: #8E8E93;
}
.border-dashed-lead {
  border-color: #29292C;
}
.border-dashed-steel {
  border-color: #444449;
}
.border-dashed-iron {
  border-color: #6E6E74;
}
.border-dashed-titanium {
  border-color: #8E8E93;
}
.border-dashed-silver {
  border-color: #C2C2C9;
}
.border-dashed-platinum {
  border-color: #E5E5ED;
}
.border-dashed-dark {
  border-color: #222224;
}
.border-dashed-light {
  border-color: #F3F3FC;
}
.border-dashed-transparent {
  border-color: transparent;
}
.border-dashed-xxl {
  border-width: 5rem;
}
.border-dashed-xl {
  border-width: 4rem;
}
.border-dashed-lg {
  border-width: 3rem;
}
.border-dashed-md {
  border-width: 2rem;
}
.border-dashed-sm {
  border-width: 1.5rem;
}
.border-dashed-xs {
  border-width: 1rem;
}
.border-none {
  border-style: none;
}

.text-pink {
  color: #FF2D55;
}
.text-red {
  color: #FF3B30;
}
.text-orange {
  color: #FF9500;
}
.text-yellow {
  color: #FFCC00;
}
.text-green {
  color: #4CD964;
}
.text-aqua {
  color: #5AC8FA;
}
.text-sky {
  color: #34AADC;
}
.text-blue {
  color: #007AFF;
}
.text-violet {
  color: #5856D6;
}
.text-gray {
  color: #8E8E93;
}
.text-lead {
  color: #29292C;
}
.text-steel {
  color: #444449;
}
.text-iron {
  color: #6E6E74;
}
.text-titanium {
  color: #8E8E93;
}
.text-silver {
  color: #C2C2C9;
}
.text-platinum {
  color: #E5E5ED;
}
.text-dark {
  color: #222224;
}
.text-light {
  color: #F3F3FC;
}
.text-transparent {
  color: transparent;
}
.text-dark {
  color: #222224;
}
.text-light {
  color: #F3F3FC;
}
.text-transparent {
  color: transparent;
}

.block {
  display: block;
}

.inline {
  display: inline;
}

.inline-block {
  display: inline-block;
}

.none {
  display: none;
}

.flex {
  display: flex;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-start {
  display: flex;
  justify-content: start;
  align-items: start;
}
.flex-end {
  display: flex;
  justify-content: end;
  align-items: end;
}
.flex-base {
  display: flex;
  justify-content: baseline;
  align-items: baseline;
}

.x-start {
  display: flex;
  justify-content: start;
}
.x-center {
  display: flex;
  justify-content: center;
}
.x-end {
  display: flex;
  justify-content: end;
}
.x-base {
  display: flex;
  justify-content: baseline;
}
.x-between {
  display: flex;
  justify-content: space-between;
}
.x-around {
  display: flex;
  justify-content: space-around;
}
.x-stretch {
  display: flex;
  justify-content: stretch;
}

.y-start {
  display: flex;
  align-items: start;
}
.y-center {
  display: flex;
  align-items: center;
}
.y-end {
  display: flex;
  align-items: end;
}
.y-base {
  display: flex;
  align-items: baseline;
}
.y-between {
  display: flex;
  align-items: space-between;
}
.y-around {
  display: flex;
  align-items: space-around;
}
.y-stretch {
  display: flex;
  align-items: stretch;
}

.column {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  flex-direction: row;
}

.wrap {
  display: flex;
  flex-wrap: wrap;
}

.nowrap {
  display: flex;
  flex-wrap: nowrap;
}

.sans-serif {
  font-family: sans-serif;
}

.serif {
  font-family: serif;
}

.monospace {
  font-family: monospace;
}

.cursive {
  font-family: cursive;
}

.fantasy {
  font-family: fantasy;
}

.bold {
  font-weight: bold;
}

.italic {
  font-style: italic;
}

.underline {
  text-decoration: underline;
}

.slab-serif {
  font-family: "Roboto Slab", sans-serif;
}

.modern-serif {
  font-family: "Merriweather", serif;
}

.ultrathin {
  font-family: "Roboto", sans-serif;
}

.bubble {
  font-family: "Bubblegum Sans", cursive;
}

.script {
  font-family: "Dancing Script", cursive;
}

.geometric {
  font-family: "Poppins", sans-serif;
}

.vintage {
  font-family: "Gloock", serif;
}

.impact {
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
}

.gradient-x-pink-red {
  background: linear-gradient(#FF2D55, #FF3B30);
}
.gradient-x-red-pink {
  background: linear-gradient(#FF3B30, #FF2D55);
}
.gradient-x-orange-red {
  background: linear-gradient(#FF9500, #FF3B30);
}
.gradient-x-red-orange {
  background: linear-gradient(#FF3B30, #FF9500);
}
.gradient-x-orange-yellow {
  background: linear-gradient(#FF9500, #FFCC00);
}
.gradient-x-yellow-orange {
  background: linear-gradient(#FFCC00, #FF9500);
}
.gradient-x-green-yellow {
  background: linear-gradient(#4CD964, #FFCC00);
}
.gradient-x-yellow-green {
  background: linear-gradient(#FFCC00, #4CD964);
}
.gradient-x-aqua-green {
  background: linear-gradient(#5AC8FA, #4CD964);
}
.gradient-x-green-aqua {
  background: linear-gradient(#4CD964, #5AC8FA);
}
.gradient-x-sky-aqua {
  background: linear-gradient(#34AADC, #5AC8FA);
}
.gradient-x-aqua-sky {
  background: linear-gradient(#5AC8FA, #34AADC);
}
.gradient-x-blue-sky {
  background: linear-gradient(#007AFF, #34AADC);
}
.gradient-x-sky-blue {
  background: linear-gradient(#34AADC, #007AFF);
}
.gradient-x-violet-blue {
  background: linear-gradient(#5856D6, #007AFF);
}
.gradient-x-blue-violet {
  background: linear-gradient(#007AFF, #5856D6);
}
.gradient-x-pink-violet {
  background: linear-gradient(#FF2D55, #5856D6);
}
.gradient-x-violet-pink {
  background: linear-gradient(#5856D6, #FF2D55);
}
.gradient-x-gray-light {
  background: linear-gradient(#8E8E93, #F3F3FC);
}
.gradient-x-light-gray {
  background: linear-gradient(#F3F3FC, #8E8E93);
}
.gradient-x-light-dark {
  background: linear-gradient(#F3F3FC, #222224);
}
.gradient-x-dark-light {
  background: linear-gradient(#222224, #F3F3FC);
}
.gradient-y-pink-red {
  background: linear-gradient(90deg, #FF2D55, #FF3B30);
}
.gradient-y-red-pink {
  background: linear-gradient(90deg, #FF3B30, #FF2D55);
}
.gradient-y-orange-red {
  background: linear-gradient(90deg, #FF9500, #FF3B30);
}
.gradient-y-red-orange {
  background: linear-gradient(90deg, #FF3B30, #FF9500);
}
.gradient-y-orange-yellow {
  background: linear-gradient(90deg, #FF9500, #FFCC00);
}
.gradient-y-yellow-orange {
  background: linear-gradient(90deg, #FFCC00, #FF9500);
}
.gradient-y-green-yellow {
  background: linear-gradient(90deg, #4CD964, #FFCC00);
}
.gradient-y-yellow-green {
  background: linear-gradient(90deg, #FFCC00, #4CD964);
}
.gradient-y-aqua-green {
  background: linear-gradient(90deg, #5AC8FA, #4CD964);
}
.gradient-y-green-aqua {
  background: linear-gradient(90deg, #4CD964, #5AC8FA);
}
.gradient-y-sky-aqua {
  background: linear-gradient(90deg, #34AADC, #5AC8FA);
}
.gradient-y-aqua-sky {
  background: linear-gradient(90deg, #5AC8FA, #34AADC);
}
.gradient-y-blue-sky {
  background: linear-gradient(90deg, #007AFF, #34AADC);
}
.gradient-y-sky-blue {
  background: linear-gradient(90deg, #34AADC, #007AFF);
}
.gradient-y-violet-blue {
  background: linear-gradient(90deg, #5856D6, #007AFF);
}
.gradient-y-blue-violet {
  background: linear-gradient(90deg, #007AFF, #5856D6);
}
.gradient-y-pink-violet {
  background: linear-gradient(90deg, #FF2D55, #5856D6);
}
.gradient-y-violet-pink {
  background: linear-gradient(90deg, #5856D6, #FF2D55);
}
.gradient-y-gray-light {
  background: linear-gradient(90deg, #8E8E93, #F3F3FC);
}
.gradient-y-light-gray {
  background: linear-gradient(90deg, #F3F3FC, #8E8E93);
}
.gradient-y-light-dark {
  background: linear-gradient(90deg, #F3F3FC, #222224);
}
.gradient-y-dark-light {
  background: linear-gradient(90deg, #222224, #F3F3FC);
}

.index-1 {
  z-index: 1;
}
.index-2 {
  z-index: 2;
}
.index-3 {
  z-index: 3;
}
.index-4 {
  z-index: 4;
}
.index-5 {
  z-index: 5;
}
.index-6 {
  z-index: 6;
}
.index-7 {
  z-index: 7;
}
.index-8 {
  z-index: 8;
}
.index-9 {
  z-index: 9;
}
.index-10 {
  z-index: 10;
}

.no-list > * {
  list-style-type: none;
}

.list-decimal > * {
  list-style-type: decimal;
}
.list-point > * {
  list-style-type: circle;
}

.m {
  margin: auto;
}
.m-0 {
  margin: 0;
}
.m-xxl {
  margin: 5rem;
}
.m-xl {
  margin: 4rem;
}
.m-lg {
  margin: 3rem;
}
.m-md {
  margin: 2rem;
}
.m-sm {
  margin: 1.5rem;
}
.m-xs {
  margin: 1rem;
}
.m-t {
  margin-top: auto;
}
.m-t-xxl {
  margin-top: 5rem;
}
.m-t-xl {
  margin-top: 4rem;
}
.m-t-lg {
  margin-top: 3rem;
}
.m-t-md {
  margin-top: 2rem;
}
.m-t-sm {
  margin-top: 1.5rem;
}
.m-t-xs {
  margin-top: 1rem;
}
.m-r {
  margin-right: auto;
}
.m-r-xxl {
  margin-right: 5rem;
}
.m-r-xl {
  margin-right: 4rem;
}
.m-r-lg {
  margin-right: 3rem;
}
.m-r-md {
  margin-right: 2rem;
}
.m-r-sm {
  margin-right: 1.5rem;
}
.m-r-xs {
  margin-right: 1rem;
}
.m-b {
  margin-bottom: auto;
}
.m-b-xxl {
  margin-bottom: 5rem;
}
.m-b-xl {
  margin-bottom: 4rem;
}
.m-b-lg {
  margin-bottom: 3rem;
}
.m-b-md {
  margin-bottom: 2rem;
}
.m-b-sm {
  margin-bottom: 1.5rem;
}
.m-b-xs {
  margin-bottom: 1rem;
}
.m-l {
  margin-left: auto;
}
.m-l-xxl {
  margin-left: 5rem;
}
.m-l-xl {
  margin-left: 4rem;
}
.m-l-lg {
  margin-left: 3rem;
}
.m-l-md {
  margin-left: 2rem;
}
.m-l-sm {
  margin-left: 1.5rem;
}
.m-l-xs {
  margin-left: 1rem;
}
.m-x {
  margin-right: auto;
  margin-left: auto;
}
.m-x-xxl {
  margin-right: 5rem;
  margin-left: 5rem;
}
.m-x-xl {
  margin-right: 4rem;
  margin-left: 4rem;
}
.m-x-lg {
  margin-right: 3rem;
  margin-left: 3rem;
}
.m-x-md {
  margin-right: 2rem;
  margin-left: 2rem;
}
.m-x-sm {
  margin-right: 1.5rem;
  margin-left: 1.5rem;
}
.m-x-xs {
  margin-right: 1rem;
  margin-left: 1rem;
}
.m-x {
  margin-top: auto;
  margin-bottom: auto;
}
.m-x-xxl {
  margin-top: 5rem;
  margin-bottom: 5rem;
}
.m-x-xl {
  margin-top: 4rem;
  margin-bottom: 4rem;
}
.m-x-lg {
  margin-top: 3rem;
  margin-bottom: 3rem;
}
.m-x-md {
  margin-top: 2rem;
  margin-bottom: 2rem;
}
.m-x-sm {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
.m-x-xs {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.view-100 {
  opacity: 1;
}
.view-75 {
  opacity: 0.75;
}
.view-50 {
  opacity: 0.5;
}
.view-25 {
  opacity: 0.24;
}

.invizible {
  opacity: 0;
}

.p {
  padding: auto;
}
.p-0 {
  padding: 0;
}
.p-xxl {
  padding: 5rem;
}
.p-xl {
  padding: 4rem;
}
.p-lg {
  padding: 3rem;
}
.p-md {
  padding: 2rem;
}
.p-sm {
  padding: 1.5rem;
}
.p-xs {
  padding: 1rem;
}
.p-t {
  padding-top: auto;
}
.p-t-xxl {
  padding-top: 5rem;
}
.p-t-xl {
  padding-top: 4rem;
}
.p-t-lg {
  padding-top: 3rem;
}
.p-t-md {
  padding-top: 2rem;
}
.p-t-sm {
  padding-top: 1.5rem;
}
.p-t-xs {
  padding-top: 1rem;
}
.p-r {
  padding-right: auto;
}
.p-r-xxl {
  padding-right: 5rem;
}
.p-r-xl {
  padding-right: 4rem;
}
.p-r-lg {
  padding-right: 3rem;
}
.p-r-md {
  padding-right: 2rem;
}
.p-r-sm {
  padding-right: 1.5rem;
}
.p-r-xs {
  padding-right: 1rem;
}
.p-b {
  padding-bottom: auto;
}
.p-b-xxl {
  padding-bottom: 5rem;
}
.p-b-xl {
  padding-bottom: 4rem;
}
.p-b-lg {
  padding-bottom: 3rem;
}
.p-b-md {
  padding-bottom: 2rem;
}
.p-b-sm {
  padding-bottom: 1.5rem;
}
.p-b-xs {
  padding-bottom: 1rem;
}
.p-l {
  padding-left: auto;
}
.p-l-xxl {
  padding-left: 5rem;
}
.p-l-xl {
  padding-left: 4rem;
}
.p-l-lg {
  padding-left: 3rem;
}
.p-l-md {
  padding-left: 2rem;
}
.p-l-sm {
  padding-left: 1.5rem;
}
.p-l-xs {
  padding-left: 1rem;
}
.p-x {
  padding-right: auto;
  padding-left: auto;
}
.p-x-xxl {
  padding-right: 5rem;
  padding-left: 5rem;
}
.p-x-xl {
  padding-right: 4rem;
  padding-left: 4rem;
}
.p-x-lg {
  padding-right: 3rem;
  padding-left: 3rem;
}
.p-x-md {
  padding-right: 2rem;
  padding-left: 2rem;
}
.p-x-sm {
  padding-right: 1.5rem;
  padding-left: 1.5rem;
}
.p-x-xs {
  padding-right: 1rem;
  padding-left: 1rem;
}
.p-x {
  padding-top: auto;
  padding-bottom: auto;
}
.p-x-xxl {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.p-x-xl {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.p-x-lg {
  padding-top: 3rem;
  padding-bottom: 3rem;
}
.p-x-md {
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.p-x-sm {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
.p-x-xs {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.absolute {
  position: absolute;
}

.relative {
  position: relative;
}

.fixed {
  position: fixed;
}

.static {
  position: static;
}

.sticky {
  position: sticky;
}

.top-10 {
  top: 10%;
}
.top-20 {
  top: 20%;
}
.top-30 {
  top: 30%;
}
.top-40 {
  top: 40%;
}
.top-50 {
  top: 50%;
}
.top-60 {
  top: 60%;
}
.top-70 {
  top: 70%;
}
.top-80 {
  top: 80%;
}
.top-90 {
  top: 90%;
}
.top-100 {
  top: 100%;
}

.right-10 {
  right: 10%;
}
.right-20 {
  right: 20%;
}
.right-30 {
  right: 30%;
}
.right-40 {
  right: 40%;
}
.right-50 {
  right: 50%;
}
.right-60 {
  right: 60%;
}
.right-70 {
  right: 70%;
}
.right-80 {
  right: 80%;
}
.right-90 {
  right: 90%;
}
.right-100 {
  right: 100%;
}

.bottom-10 {
  bottom: 10%;
}
.bottom-20 {
  bottom: 20%;
}
.bottom-30 {
  bottom: 30%;
}
.bottom-40 {
  bottom: 40%;
}
.bottom-50 {
  bottom: 50%;
}
.bottom-60 {
  bottom: 60%;
}
.bottom-70 {
  bottom: 70%;
}
.bottom-80 {
  bottom: 80%;
}
.bottom-90 {
  bottom: 90%;
}
.bottom-100 {
  bottom: 100%;
}

.left-10 {
  left: 10%;
}
.left-20 {
  left: 20%;
}
.left-30 {
  left: 30%;
}
.left-40 {
  left: 40%;
}
.left-50 {
  left: 50%;
}
.left-60 {
  left: 60%;
}
.left-70 {
  left: 70%;
}
.left-80 {
  left: 80%;
}
.left-90 {
  left: 90%;
}
.left-100 {
  left: 100%;
}

.rounded {
  border-radius: 1rem;
}
.rounded-t {
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}
.rounded-r {
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
}
.rounded-b {
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}
.rounded-l {
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
}
.rounded-tl {
  border-top-left-radius: 1rem;
}
.rounded-tr {
  border-top-right-radius: 1rem;
}
.rounded-bl {
  border-bottom-left-radius: 1rem;
}
.rounded-br {
  border-bottom-right-radius: 1rem;
}

.rounder {
  border-radius: 1.5rem;
}
.rounder-t {
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
}
.rounder-r {
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
}
.rounder-b {
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
}
.rounder-l {
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}
.rounder-tl {
  border-top-left-radius: 1.5rem;
}
.rounder-tr {
  border-top-right-radius: 1.5rem;
}
.rounder-bl {
  border-bottom-left-radius: 1.5rem;
}
.rounder-br {
  border-bottom-right-radius: 1.5rem;
}

.circle {
  border-radius: 50%;
}
.circle-t {
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}
.circle-r {
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
}
.circle-b {
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
}
.circle-l {
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
}
.circle-tl {
  border-top-left-radius: 50%;
}
.circle-tr {
  border-top-right-radius: 50%;
}
.circle-bl {
  border-bottom-left-radius: 50%;
}
.circle-br {
  border-bottom-right-radius: 50%;
}

.rotate-0 {
  transform: rotate(0deg);
}
.rotate-30 {
  transform: rotate(30deg);
}
.rotate-60 {
  transform: rotate(60deg);
}
.rotate-90 {
  transform: rotate(90deg);
}
.rotate-120 {
  transform: rotate(120deg);
}
.rotate-150 {
  transform: rotate(150deg);
}
.rotate-180 {
  transform: rotate(180deg);
}
.rotate-210 {
  transform: rotate(210deg);
}
.rotate-240 {
  transform: rotate(240deg);
}
.rotate-270 {
  transform: rotate(270deg);
}
.rotate-300 {
  transform: rotate(300deg);
}
.rotate-330 {
  transform: rotate(330deg);
}
.rotate-360 {
  transform: rotate(360deg);
}

.text-shadow {
  text-shadow: 1px 1px 5px #222224;
}

.shadow {
  box-shadow: 2px 0 5px #222224;
}

.filter {
  filter: drop-shadow(0 0 5px #222224);
}

.x-100 {
  width: 100%;
}
.x-92 {
  width: 92%;
}
.x-90 {
  width: 90%;
}
.x-87 {
  width: 87%;
}
.x-83 {
  width: 83%;
}
.x-80 {
  width: 80%;
}
.x-75 {
  width: 75%;
}
.x-66 {
  width: 66%;
}
.x-50 {
  width: 50%;
}
.x-33 {
  width: 33.3%;
}
.x-25 {
  width: 25%;
}
.x-20 {
  width: 20%;
}
.x-16 {
  width: 16.6%;
}
.x-12 {
  width: 12.5%;
}
.x-10 {
  width: 10%;
}
.x-8 {
  width: 8.2%;
}

.y-100 {
  height: 100vh;
}
.y-92 {
  height: 92vh;
}
.y-90 {
  height: 90vh;
}
.y-87 {
  height: 87vh;
}
.y-83 {
  height: 83vh;
}
.y-80 {
  height: 80vh;
}
.y-75 {
  height: 75vh;
}
.y-66 {
  height: 66vh;
}
.y-50 {
  height: 50vh;
}
.y-33 {
  height: 33.3vh;
}
.y-25 {
  height: 25vh;
}
.y-20 {
  height: 20vh;
}
.y-16 {
  height: 16.6vh;
}
.y-12 {
  height: 12.5vh;
}
.y-10 {
  height: 10vh;
}
.y-8 {
  height: 8.2vh;
}

.start {
  text-align: start;
}

.center {
  text-align: center;
}

.end {
  text-align: end;
}

.text-xxl {
  font-size: 5rem;
}
.text-xl {
  font-size: 4rem;
}
.text-lg {
  font-size: 3rem;
}
.text-md {
  font-size: 2rem;
}
.text-sm {
  font-size: 1.5rem;
}
.text-xs {
  font-size: 1rem;
}

/*# sourceMappingURL=main.css.map */

</style>

<img src="./public/CoolNeUI.svg" alt="CoolNeUI logo" class="x-25 m-xl" />


# <p class="text-xl italic geometric m-0"><span class="text-blue">Co</span><span class="text-green">ol</span></span><span class="text-red">Ne</span><span class="text-yellow">UI</span></p>
## Art Made Easy

**CoolNeUI** is a free and open-source **UI framework** developed by **CoolBeachBall**.

The tool uses *HTML classes* to style a website!
Without relying on *CSS*.
*CSS* is optional.


---

## What is CoolNeUI? 🤔
I am telling you what, when you want to build a website and you want to make it look good but *CSS* is hard and trust me there are a lot of websites that look aweful! Not just because they're bad at design, but because of how hard is to make a website using *CSS*.


**CoolNeUI** fixes these issues by giving already built components that will allow you to your website to not just look prettty, but also to build fast and responsive!

Don't worry!
**CoolNeUI** is undoubtly one of the easiest UI frameworks out there!
It's so easy! You can just learn it in an afternood by just reading this documentation below.

And that is the power of **CoolNeUI**! 
it makes designing websites effortless.


**CoolNeUI**
Art made easy.


### Example:
Here is an example of **CoolNeUI** used in *HTML* code:

```html
<h1 class="text-red">Hello World!</h1>
<p class="bg-blue">Welcome to my website!</p>
<button class="btn-yellow">Click!</button>
```

Renders as:

```html
<h1 style="color: red;">Hello World!</h1>
<p style="background-color: blue;">Welcome to my website!</p>
<button style="background-color: yellow;">Click!</button>
```

**Wow! It's that simple!**
With just three classes, your website becomes visually stunning!

---

## what is its Mission?
As I, **CoolBeachBall** CoolNeUI's developer, my mission is to make *Web development* simple and intuitive, to bring your ideas to come to life.
To be so easy, by just first think then do then it's done!

I hope you are going to have fun using **CoolNeUI** on you prodjects!

### Honest Facts

Even though you can make a website by just using **CoolNeUI**, it still doesn't fully replace *CSS*.
At some point you will need some *CSS* for complex design.

But don't worry! **CoolNeUI** has everything you need to build a stunning looking website!

And **CoolNeUI** is still developing!
So stay tuned fro more features to come!

## What Does CoolNeUI Offer? 📦

**CoolNeUI** provides all the bare necesities to be able to build a pretty website, quick and easy with minimal code!

Here are some that might inrerest you:

### 1. **12 stunning Colors**
- <span class="text-pink">pink</span>
- <span class="text-red">red</span>
- <span class="text-orange">orange</span>
- <span class="text-yellow">yellow</span>
- <span class="text-green">green</span>
- <span class="text-aqua">aqua</span>
- <span class="text-sky">sky</span>
- <span class="text-blue">blue</span>
- <span class="text-violet">violet</span>
- <span class="text-gray">gray</span>
- <span class="text-dark bg-light">dark</span>
- <span class="text-light">light</span>

**including metal colors 🤘**
- <span class="text-lead">lead</span>
- <span class="text-steel">steel</span>
- <span class="text-iron">iron</span>
- <span class="text-titanium">titanium</span>
- <span class="text-silver bg-light">silver</span>
- <span class="text-platinum">platinum</span>

### 2. **16 pretty Fonts**
- <span class="sans-serif">sans-serif</span>
- <span class="serif">serif</span>
- <span class="monospace">monospace</span>
- <span class="cursive">cursive</span>
- <span class="fantasy">fantasy</span>
- <span class="italic">italic</span>
- <span class="boldf">bold</span>
- <span class="underline">underline</span>
- <span class="slab-serif">slab-serif</span>
- <span class="modern-serif">modern-serif</span>
- <span class="ultrathin">ultrathin</span>
- <span class="bubble">bubble</span>
- <span class="script">script</span>
- <span class="geometric">geometric</span>
- <span class="vintage">vintage</span>
- <span class="impact">impact</span>

### 3. **6 Sizes**
- <span class="text-xxl">xxl</span>
- <span class="text-xl">xl</span>
- <span class="text-lg">lg</span>
- <span class="text-md">md</span>
- <span class="text-sm">sm</span>
- <span class="text-xs">xs</span>

### 4. **it has Geometry**
CoolNeUI supports size classes for both horizontal (`x-*`) and vertical (`y-*`) dimensions. Examples:
- `x-100` for 100% width
- `y-50` for 50% height

### 5. **Pre-Built Components**
CoolNeUI includes ready-to-use UI components, so you can get started quickly.

### 6. **Animations**
Give life to you website with the help of animations!

---

## Why Use CoolNeUI?
**CoolNeUI** is simple yet powerful. It focuses on:
- Speed: Get your website styled quickly.
- Customization: Adjust styles to fit your needs.

Compatible with:
- **HTML5** projects
- JavaScript frameworks like **React**, **Vue**, **Angular**, and **Svelte**.

---

## How to Get Started
To start using **CoolNeUI**, follow this documentation to:
1. Install it as an **NPM package**.
2. Set it up in your project.
3. Learn its features through practical examples.

Stay tuned and happy learning!

---

## Installation

### Install via NPM
```bash
npm install coolneui
```

### Add to Your Project
Include the stylesheet in your HTML file:

```html
<link rel="stylesheet" href="./coolneui.css" />
```

---

## Content:

**Basics**
1. <a href="#chapter-1">overview</a>
2. <a href="#chapter-2">colors</a>
3. <a href="#chapter-3">fonts</a>
4. <a href="#chapter-4">sizes</a>
5. <a href="#chapter-5">text position</a>
6. <a href="#chapter-6">box model</a>
7. <a href="#chapter-7">text size</a>
8. <a href="#chapter-8">borders</a>
9. <a href="#chapter-9">shades</a>
10. <a href="#chapter-10">rounding</a>
11. <a href="#chapter-11">opacity</a>
12. <a href="#chapter-12">display</a>
13. <a href="#chapter-13">rotation</a>
14. <a href="#chapter-14">list</a>
15. <a href="#chapter-15">flexbox</a>
16. <a href="#chapter-16">gradients</a>
17. <a href="#chapter-17">z axis</a>
18. <a href="#chapter-18">position</a>

**components**
1. <a href="#one">badge</a>
2. <a href="#two">button</a>
3. <a href="#three">link</a>
4. <a href="#four">card</a>
5. <a href="#five">layout</a>

**animations**
5. <a href="#animations">animations</a>


## CoolNeUI Course by CoolBeachBall
Hi! I'm **CoolBeachBall**, and I'll teach you all the concepts of CoolNeUI.

<section id="chapter-1"></section>

### Chapter 1: Overview
CoolNeUI focuses on classes. If you're unfamiliar, a class is an attribute used to style specific elements in HTML. Add a class attribute with a predefined name, and the styles will automatically apply.

Example:
```html
<p class="text-blue">Blue Text</p>
```
<p class="text-blue">Blue Text</p>
As you can see above, that is the output you'll see on your website project.

#### Usage
To apply a color:
- For background: Use `bg-{color}`.
- For text: Use `text-{color}`.

Example:
```html
<p class="bg-pink">Pink Background</p>
<p class="text-blue">Blue Text</p>
```

<p class="bg-pink">Pink Background</p>
<p class="text-blue">Blue Text</p>

<section id="chapter-ii"></section>

## Chapter 2
**Colors** 🌈


CoolNeUI has 14 colors, which are:

- <span class="badge-pink">pink</span>
- <span class="badge-red">red</span>
- <span class="badge-orange">orange</span>
- <span class="badge-yellow">yellow</span>
- <span class="badge-green">green</span>
- <span class="badge-aqua">aqua</span>
- <span class="badge-sky">sky</span>
- <span class="badge-blue">blue</span>
- <span class="badge-violet">violet</span>
- <span class="badge-gray">gray</span>
- <span class="badge-dark">dark</span>
- <span class="badge-light">light</span>

it even has **transparent**
- <span class="badge-transparent">transparent</span>

there are many ways you can use colors.

here are 2 ways:

- background-color --> *bg*
- text-color --> *text*

Simple! 
To each one of them to add a color you'll want to add a highphen after it and then the color you want

**⚠️ WARNING!**: if you try to separate the class-values will not make the code to appear, that's because
HTML percepts the class-values as different classes, so make sure you add a highphen after every element you want to initialise with a specific custom class.

**Background Color**
*bg* stands for background. So you want the background to the color you want, 
for that you'll add a any of the color I showed above.

example : **bg-*(color)***

```html
<p>
    <span class="bg-pink">bg-pink</span><br />
    <span class="bg-red">bg-red</span><br />
    <span class="bg-orange">bg-orange</span><br />
    <span class="bg-yellow">bg-yellow</span><br />
    <span class="bg-green">bg-green</span><br />
    <span class="bg-aqua">bg-aqua</span><br />
    <span class="bg-sky">bg-sky</span><br />
    <span class="bg-blue">bg-blue</span><br />
    <span class="bg-violet">bg-violet</span><br />
    <span class="bg-gray">bg-gray</span><br />
    <span class="bg-dark">bg-dark</span><br />
    <span class="bg-light">bg-light</span><br />
</p>
```

example output 👇:

<p>
    <span class="bg-pink">bg-pink</span><br />
    <span class="bg-red">bg-red</span><br />
    <span class="bg-orange">bg-orange</span><br />
    <span class="bg-yellow">bg-yellow</span><br />
    <span class="bg-green">bg-green</span><br />
    <span class="bg-aqua">bg-aqua</span><br />
    <span class="bg-sky">bg-sky</span><br />
    <span class="bg-blue">bg-blue</span><br />
    <span class="bg-violet">bg-violet</span><br />
    <span class="bg-gray">bg-gray</span><br />
    <span class="bg-dark">bg-dark</span><br />
    <span class="bg-light">bg-light</span><br />
</p>

replace the both parenthesis and color with any color.

Here I will make a rainbow, follow up the examples.


You noticed that the elements change the color of the text into other colors!
Yes! that is the default! it was meant to add less code and just automatically change into their respective text color.

example: `bg-red` = `bg-red` `text-light`.

If you want to add custom color for the text you can use text-(color) after the background (for that you don't have to add another highphen just space).

Now that you understand how the background works! try it yourself!

**Text Color**
Same with *bg*, *text* will make the text into specific color.

example: `text-{color}`

```html
<p>
    <span class="text-pink">text-pink</span><br />
    <span class="text-red">text-red</span><br />
    <span class="text-orange">text-orange</span><br />
    <span class="text-yellow">text-yellow</span><br />
    <span class="text-green">text-green</span><br />
    <span class="text-aqua">text-aqua</span><br />
    <span class="text-sky">text-sky</span><br />
    <span class="text-blue">text-blue</span><br />
    <span class="text-violet">text-violet</span><br />
    <span class="text-gray">text-gray</span><br />
    <span class="text-dark">text-dark</span><br />
    <span class="text-light">text-light</span><br />
</p>
```

<p>
    <span class="text-pink">text-pink</span><br />
    <span class="text-red">text-red</span><br />
    <span class="text-orange">text-orange</span><br />
    <span class="text-yellow">text-yellow</span><br />
    <span class="text-green">text-green</span><br />
    <span class="text-aqua">text-aqua</span><br />
    <span class="text-sky">text-sky</span><br />
    <span class="text-blue">text-blue</span><br />
    <span class="text-violet">text-violet</span><br />
    <span class="text-gray">text-gray</span><br />
    <span class="text-dark bg-light">text-dark</span><br />
    <span class="text-light bg-dark">text-light</span><br />
</p>



**CoolNeUI** has one of the most widely used colors by default!
Those colors bring life to your website and the colors are made perfectly to match together.

**Metal Colors**
CoolNeUI has *metal colors!**.

these metals are:

- `lead`
- `steel`
- `iron`
- `titanium`
- `silver`
- `platinum`

<section id="chapter-3"></section>

## Chapter 3
**Fonts** 🖋


Fonts are easy! unlike with *bg* or *text*, you don't have to use a propert and then the value!
You can just use one value.



here are all the 16 fonts:

- <span class="sans-serif">sans-serif</span><br />
- <span class="serif">serif</span><br />
- <span class="monospace">monospace</span><br />
- <span class="cursive">cursive</span><br />
- <span class="fantasy">fantasy</span><br />
- <span class="italic">italic</span><br />
- <span class="bold">bold</span><br />
- <span class="underline">underline</span><br />
- <span class="slab-serif">slab-serif</span><br />
- <span class="modern-serif">modern-serif</span><br />
- <span class="ultrathin">ultrathin</span><br />
- <span class="bubble">bubble</span><br />
- <span class="script">script</span><br />
- <span class="geometric">geometric</span><br />
- <span class="vintage">vintage</span><br />
- <span class="impact">impact</span><br />

```html
<p>
    - <span class="sans-serif">sans-serif</span><br />
    - <span class="serif">serif</span><br />
    - <span class="monospace">monospace</span><br />
    - <span class="cursive">cursive</span><br />
    - <span class="fantasy">fantasy</span><br />
    - <span class="italic">italic</span><br />
    - <span class="bold">bold</span><br />
    - <span class="underline">underline</span><br />
</p>
```

<p>
    - <span class="sans-serif">sans-serif</span><br />
    - <span class="serif">serif</span><br />
    - <span class="monospace">monospace</span><br />
    - <span class="cursive">cursive</span><br />
    - <span class="fantasy">fantasy</span><br />
    - <span class="italic">italic</span><br />
    - <span class="bold">bold</span><br />
    - <span class="underline">underline</span><br />
</p>

```html
<p>
    - <span class="slab-serif">slab-serif</span><br />
    - <span class="modern-serif">modern-serif</span><br />
    - <span class="ultrathin">ultrathin</span><br />
    - <span class="bubble">bubble</span><br />
    - <span class="script">script</span><br />
    - <span class="geometric">geometric</span><br />
    - <span class="vintage">vintage</span><br />
    - <span class="impact">impact</span><br />
</p>
```
<p>
    - <span class="slab-serif">slab-serif</span><br />
    - <span class="modern-serif">modern-serif</span><br />
    - <span class="ultrathin">ultrathin</span><br />
    - <span class="bubble">bubble</span><br />
    - <span class="script">script</span><br />
    - <span class="geometric">geometric</span><br />
    - <span class="vintage">vintage</span><br />
    - <span class="impact">impact</span><br />
</p>

```
**💥 Pro Tip**: you can combine two fonts at once! only with: bold, italic & underline.
example: cursive italic bold.
```

```html
<p class="cursive bold italic underline">
    cursive bold italic underline
</p>
```

<p class="cursive bold italic underline">
    cursive bold italic underline
</p>

<section id="chapter-4"></section>

## Chapter 4
**sizes** 📏

Sizes has an x and y axis.
if you listened to your Geometry teacher, you would know that x is left and right and y is up and down.

the Sizes' values goes into a twelfth formation.

which are the following lengths:

- `100`  (full)
- `92`   (eleven-twefths)
- `90`   (nine-tenths)
- `87`   (seven-eighths)
- `83`   (five-sixths)
- `80`   (four-fifths)
- `75`   (three-fourths)
- `66`   (two-thirds)
- `50`   (half)
- `33`   (one-third)
- `25`   (one-fourth)
- `20`   (one-fifth)
- `16`    (one-sixth)
- `12`   (one-eighth)
- `10`    (one-tenth)
- `8`     (one-twelfth)

To customize the length of the element you'll use either x or y.

here is an example:
```html
<div class="x-100">
    <p class="x-100 bg-red">100%</p>
    <p class="x-92 bg-orange">92%</p>
    <p class="x-90 bg-yellow">90%</p>
    <p class="x-87 bg-green">87%</p>
    <p class="x-83 bg-aqua">83%</p>
    <p class="x-80 bg-sky">80%</p>
    <p class="x-75 bg-blue">75%</p>
    <p class="x-66 bg-violet">66%</p>
    <p class="x-50 bg-red">50%</p>
    <p class="x-33 bg-orange">33%</p>
    <p class="x-25 bg-yellow">25%</p>
    <p class="x-20 bg-green">20%</p>
    <p class="x-16 bg-aqua">16%</p>
    <p class="x-12 bg-sky">12%</p>
    <p class="x-10 bg-blue">10%</p>
    <p class="x-8 bg-violet">8%</p>
</div>
```
 
<div class="x-100">
    <p class="x-100 bg-red">100%</p>
    <p class="x-92 bg-orange">92%</p>
    <p class="x-90 bg-yellow">90%</p>
    <p class="x-87 bg-green">87%</p>
    <p class="x-83 bg-aqua">83%</p>
    <p class="x-80 bg-sky">80%</p>
    <p class="x-75 bg-blue">75%</p>
    <p class="x-66 bg-violet">66%</p>
    <p class="x-50 bg-red">50%</p>
    <p class="x-33 bg-orange">33%</p>
    <p class="x-25 bg-yellow">25%</p>
    <p class="x-20 bg-green">20%</p>
    <p class="x-16 bg-aqua">16%</p>
    <p class="x-12 bg-sky">12%</p>
    <p class="x-10 bg-blue">10%</p>
    <p class="x-8 bg-violet">8%</p>
</div>

```html
<div class="flex between x-100">
    <p class="y-100 bg-red">100%</p>
    <p class="y-92 bg-orange">92%</p>
    <p class="y-90 bg-yellow">90%</p>
    <p class="y-87 bg-green">87%</p>
    <p class="y-83 bg-aqua">83%</p>
    <p class="y-80 bg-sky">80%</p>
    <p class="y-75 bg-blue">75%</p>
    <p class="y-66 bg-violet">66%</p>
    <p class="y-50 bg-red">50%</p>
    <p class="y-33 bg-orange">33%</p>
    <p class="y-25 bg-yellow">25%</p>
    <p class="y-20 bg-green">20%</p>
    <p class="y-16 bg-aqua">16%</p>
    <p class="y-12 bg-sky">12%</p>
    <p class="y-10 bg-blue">10%</p>
    <p class="y-8 bg-violet">8%</p>
</div>
```

<div class="flex between x-100">
    <p class="y-100 bg-red">100%</p>
    <p class="y-92 bg-orange">92%</p>
    <p class="y-90 bg-yellow">90%</p>
    <p class="y-87 bg-green">87%</p>
    <p class="y-83 bg-aqua">83%</p>
    <p class="y-80 bg-sky">80%</p>
    <p class="y-75 bg-blue">75%</p>
    <p class="y-66 bg-violet">66%</p>
    <p class="y-50 bg-red">50%</p>
    <p class="y-33 bg-orange">33%</p>
    <p class="y-25 bg-yellow">25%</p>
    <p class="y-20 bg-green">20%</p>
    <p class="y-16 bg-aqua">16%</p>
    <p class="y-12 bg-sky">12%</p>
    <p class="y-10 bg-blue">10%</p>
    <p class="y-8 bg-violet">8%</p>
</div>

The x axis will cover the full viewport of the website and y in another hand it will only cover half.

```
**💥 Pro Tip**: you can have both x and y at the same time and customize the container.
```

```
**⚠️ WARNING!**: the axis will only cover the length of the viewport of the webpage. If you want to go beyond 100 of the viewport height you don't need y in the first, the container will go according to the elements automatically.
```

<section id="chapter-5"></section>

## Chapter 5
**Position** 📐
There are 3 Text positions:

- `start`
- `center`
- `end`

when you add either of the above like for example center, that will center the text and the all texts if you add to a container.

here is an example:
```html
<div class="x-50 y-25 bg-blue">
    <span class="start">start</span><br />
    <span class="center">center</span><br />
    <span class="end">end</span><br />
</div>
```

<div class="x-50 y-26 bg-blue">
    <p class="start">start</p>
    <p class="center">center</p>
    <p class="end">end</p>
</div>

<section id="chapter-6"></section>

## Chapter 6
**Box Model** 📦

Box model is an essential way to make space around a specific element.

The:
- `p`    (adds space inside the element)
- `m`    (adds space outside the element)

**p** stands for *padding*
**m** stands for *margin*

If you have learned CSS before, or if you don't remeber, let me refresh:

*padding* increases the space inside the element, 
while *margin* increases the space outside the element.

both has 6 sizes of their space

padding (all over the place):
- `p-xxl`
- `p-xl`
- `p-lg`
- `p-md`
- `p-sm`
- `p-xs`

```html
<p class="p-xxl bg-red">p-xxl</p>
<p class="p-xl bg-orange">p-xl</p>
<p class="p-lg bg-yellow">p-lg</p>
<p class="p-md bg-green">p-md</p>
<p class="p-sm bg-sky">p-sm</p>
<p class="p-xs bg-blue">p-xs</p>
```

<p class="p-xxl bg-red">p-xxl</p>
<p class="p-xl bg-orange">p-xl</p>
<p class="p-lg bg-yellow">p-lg</p>
<p class="p-md bg-green">p-md</p>
<p class="p-sm bg-sky">p-sm</p>
<p class="p-xs bg-blue">p-xs</p>

You can customize sizes from specific places!

padding top:
- `p-t-xxl`
- `p-t-xl`
- `p-t-lg`
- `p-t-md`
- `p-t-sm`
- `p-t-xs`

padding right:
- `p-r-xxl`
- `p-r-xl`
- `p-r-lg`
- `p-r-md`
- `p-r-sm`
- `p-r-xs`

padding bottom:
- `p-b-xxl`
- `p-b-xl`
- `p-b-lg`
- `p-b-md`
- `p-b-sm`
- `p-b-xs`

padding left:
- `p-l-xxl`
- `p-l-xl`
- `p-l-lg`
- `p-l-md`
- `p-l-sm`
- `p-l-xs`

padding x (left-right):
- `p-x-xxl`
- `p-x-xl`
- `p-x-lg`
- `p-x-md`
- `p-x-sm`
- `p-x-xs`

padding y (top-bottom):
- `p-y-xxl`
- `p-y-xl`
- `p-y-lg`
- `p-y-md`
- `p-y-sm`
- `p-y-xs`

now with margins

margin (all over the place):
- `m-xxl`
- `m-xl`
- `m-lg`
- `m-md`
- `m-sm`
- `m-xs`

```html
<p class="m-xxl bg-red">m-xxl</p>
<p class="m-xl bg-orange">m-xl</p>
<p class="m-lg bg-yellow">m-lg</p>
<p class="m-md bg-green">m-md</p>
<p class="m-sm bg-sky">m-sm</p>
<p class="m-xs bg-blue">m-xs</p>
```

<p class="m-xxl bg-red">m-xxl</p>
<p class="m-xl bg-orange">m-xl</p>
<p class="m-lg bg-yellow">m-lg</p>
<p class="m-md bg-green">m-md</p>
<p class="m-sm bg-sky">m-sm</p>
<p class="m-xs bg-blue">m-xs</p>

margin tom:
- `m-t-xxl`
- `m-t-xl`
- `m-t-lg`
- `m-t-md`
- `m-t-sm`
- `m-t-xs`

margin right:
- `m-r-xxl`
- `m-r-xl`
- `m-r-lg`
- `m-r-md`
- `m-r-sm`
- `m-r-xs`

margin bottom:
- `m-b-xxl`
- `m-b-xl`
- `m-b-lg`
- `m-b-md`
- `m-b-sm`
- `m-b-xs`

margin left:
- `m-l-xxl`
- `m-l-xl`
- `m-l-lg`
- `m-l-md`
- `m-l-sm`
- `m-l-xs`

margin x (left-right):
- `m-x-xxl`
- `m-x-xl`
- `m-x-lg`
- `m-x-md`
- `m-x-sm`
- `m-x-xs`

margin y (top-bottom):
- `m-y-xxl`
- `m-y-xl`
- `m-y-lg`
- `m-y-md`
- `m-y-sm`
- `m-y-xs`

<section id="chapter-7"></section>

## Chapter 7
**Text Size** 🔍

In this chapter you'll have to use the text class.

there are 6 sizes to make the text bigger or smaller:

- `xxl`   (extra extra large)
- `xl`    (extra large)
- `lg`    (large)
- `md`    (medium)
- `sm`   (small)
- `xs`    (extra small)

just like colors or backgrounds you'll use a highphen and after that 
the wanted size for the text.

example: 
```html
<p class="text-xxl">text-xxl</p>
<p class="text-xl">text-xl</p>
<p class="text-lg">text-lg</p>
<p class="text-md">text-md</p>
<p class="text-sm">text-sm</p>
<p class="text-xs">text-xs</p>
```

<p class="text-xxl">text-xxl</p>
<p class="text-xl">text-xl</p>
<p class="text-lg">text-lg</p>
<p class="text-md">text-md</p>
<p class="text-sm">text-sm</p>
<p class="text-xs">text-xs</p>

```
**🔨 Best Practice**: You can do it the way you want. but it's best practice to put in a title formation
for example:
```

- `xxl` for title
- `xl` for subtitle
- `lg` for desctiptive title
- `md` for important title
- `sm` for normal text
- `xs` for smaller text

<section id="chapter-8"></section>

## Chapter 8
**border** 🔳

Between padding and margin there is border!

you have 3 custom ways to make a border:

- **solid**     (will add a long line and it is the default)
- **dashed**    (will make a pattern of dashes)
- **dotted**    (will make a pattern of dotts)
- **none**      (will remove the borders)

here is the proof:
```html
<p class="border">solid box</p>
<p class="border-dashed">dashed box</p>
<p class="border-dotted">dotted box</p>
<p class="border-none">no-border box</p>
```

<p class="border">solid box</p>
<p class="border-dashed">dashed box</p>
<p class="border-dotted">dotted box</p>
<p class="border-none">no-border box</p>

```
**📖 Fun Fact!**: you can add custom **colors** the borders!
```

```
**⚠️ WARNING**!: if you type border-solid, it will not work because solid is the default. 
By just adding border, you already added solid border 
```

and you can customize on specific areas:

- `border-t`
- `border-r`
- `border-b`
- `border-l`
- `border-x`
- `border-y`

```html
<p class="border-t">border-t</p>
<p class="border-r">border-r</p>
<p class="border-b">border-b</p>
<p class="border-l">border-l</p>
<p class="border-x">border-x</p>
<p class="border-y">border-y</p>
```

<p class="border-t">border-t</p>
<p class="border-r">border-r</p>
<p class="border-b">border-b</p>
<p class="border-l">border-l</p>
<p class="border-x">border-x</p>
<p class="border-y">border-y</p>

An you can chage the thickness of the border!

- `border-xxl`
- `border-xl`
- `border-lg`
- `border-md`
- `border-sm`
- `border-xs`

```html
<p class="border border-xxl">border-xxl</p>
<p class="border border-xl">border-xl</p>
<p class="border border-lg">border-lg</p>
<p class="border border-md">border-md</p>
<p class="border border-sm">border-sm</p>
<p class="border border-xs">border-xs</p>
```

<p class="border border-xxl">border-xxl</p>
<p class="border border-xl">border-xl</p>
<p class="border border-lg">border-lg</p>
<p class="border border-md">border-md</p>
<p class="border border-sm">border-sm</p>
<p class="border border-xs">border-xs</p>

border top:
- `border-t-xxl`
- `border-t-xl`
- `border-t-lg`
- `border-t-md`
- `border-t-sm`
- `border-t-xs`

border right:
- `border-r-xxl`
- `border-r-xl`
- `border-r-lg`
- `border-r-md`
- `border-r-sm`
- `border-r-xs`

border bottom:
- `border-b-xxl`
- `border-b-xl`
- `border-b-lg`
- `border-b-md`
- `border-b-sm`
- `border-b-xs`

border left:
- `border-l-xxl`
- `border-l-xl`
- `border-l-lg`
- `border-l-md`
- `border-l-sm`
- `border-l-xs`

border x:
- `border-x-xxl`
- `border-x-xl`
- `border-x-lg`
- `border-x-md`
- `border-x-sm`
- `border-x-xs`

border y:
- `border-y-xxl`
- `border-y-xl`
- `border-y-lg`
- `border-y-md`
- `border-y-sm`
- `border-y-xs`

CoolNeUI has a cool feature that allows you to remove a specific border and all the border around except that specific place you want to cut!

for that you add a **cut** then the place you want to remove.

- `border-cut-t`      removes top border
- `border-cut-r`      removes right border
- `border-cut-b`     removes bottom border
- `border-cut-l`      removes left border

```html
<p class="border border-cut-t border-red">border-cut-t</p>
<p class="border border-cut-r border-red">border-cut-r</p>
<p class="border border-cut-b border-red">border-cut-b</p>
<p class="border border-cut-l border-red">border-cut-l</p>
<p class="border border-cut-x border-red">border-cut-x</p>
<p class="border border-cut-y border-red">border-cut-y</p>
```

<p class="border border-red border-cut-t">border-cut-t</p>
<p class="border border-red border-cut-r">border-cut-r</p>
<p class="border border-red border-cut-b">border-cut-b</p>
<p class="border border-red border-cut-l">border-cut-l</p>
<p class="border border-red border-cut-x">border-cut-x</p>
<p class="border border-red border-cut-y">border-cut-y</p>

<section id="chapter-9">

## Chapter 9
**Shades** 👤

There 2 ways to add shade to an element: **text-shadow** (for text shadow) and **shadow** (for box shadow).

```html
<div class="shadow p-md rounded bg-red x-50 flex-center">
    <div class="shadow p-md rounded bg-light x-50">
        <span class="text-shadow bold text-dark">text-shadow</span>
    </div>
</div>
```

<div class="shadow p-md rounded bg-red x-50 flex-center">
    <div class="shadow p-md rounded bg-light x-50">
        <span class="text-shadow bold text-dark">text-shadow</span>
    </div>
</div>


if you have a .png file you should consider using `filter` to make the transparent image to stand out.

```HTML
<div class="x-75 bg-light">
  <img src="./images/CoolNeUI.svg" alt="logo" class="box-shadow x-25" />
</div>
<div class="x-75 bg-light">
  <img src="./images/CoolNeUI.svg" alt="logo" class="filter x-25" />
</div>
```

`box-shadow` 👎
<div class="x-75 bg-light">
  <img src="./images/CoolNeUI.svg" alt="logo" class="box-shadow x-25" />
</div>

---

`filter` 👍
<div class="x-75 bg-light">
  <img src="./images/CoolNeUI.svg" alt="logo" class="filter x-25" />
</div>

<section id="chapter-10"></section>

## Chapter 10
**Rounding** ⭕️

If you are tired of sharp corners, you came to the right place!

to round the corners all you need to do it to add **rounded** to any element you want to make the corners rounded.

```html
<div class="rounded p-sm x-25 bg-sky"></div>
```
<div class="rounded p-sm x-25 bg-sky"></div>


But what if I want to the corners to only be rounded on one place but not rounded in another place?
Don't worry! I got your back!

there are ways to customize the way you wanted!

here are all:

- `t`     top *(both right and left)*
- `r`     right *(both top-right and bottom-right)*
- `b`     bottom *(both bottom-right and bottom-left)*
- `l`     left *(both top-left and bottom-left)*

- `tr`    top-right *(only)*
- `tl`    top-left *(only)*
- `br`    bottom-right *(only)*
- `bl`    bottom-left *(only)*

and there you have it!

If you want the edges to be even more rounded! 
- `rounder`
is the solution!

```html
<div class="rounder p-sm x-25 bg-yellow"></div>
```
<div class="rounder p-sm x-25 bg-yellow"></div>

and yes you can change on specific sides!

There is also more! **circle**!
unlike **rounded** that rounds the corners a little, **circle** in another hand it makes the corners circular! (which also means you can make a perfect circle if you add both x and y the same length)

```html
<div class="circle p-sm x-25 bg-red"></div>
```
<div class="circle p-sm x-25 bg-red"></div>

And yes! you can customize specific corners too!

you can even make a box as crazy as this example below 👇:
```html
<div class="circle-tr circle-bl rounded-br rounder-tl p-sm x-25 bg-green"></div>
```
<div class="circle-tr circle-bl rounded-br rounded-tl p-sm x-25 bg-green"></div>

<section id="chapter-11"></section>

## Chapter 11
**Opacity** 👁

You can change the opacity in 4 ways.

- `100`   (it is used to make a child element stand out while the parent cascades the opacity)
- `75`
- `50`
- `25`

for the magic to work you first use **view**

`view-{opacity}`

here is an example:
```html
<p class="view-100">1</p>
<p class="view-75">0.75</p>
<p class="view-50">0.50</p>
<p class="view-25">0.25</p>
```

<p class="view-100">1</p>
<p class="view-75">0.75</p>
<p class="view-50">0.50</p>
<p class="view-25">0.25</p>

There is also **invisible**! (without using view)
Which as you guested! it makes the element invisible!
(By the way, why would you do that?)

<section id="chapter-12"></section>

## Chapter 12
**Display** 🖼

You want the box to have the same power as the text and vice versa?
Or you want an element to have the power of both worlds!
Or you don't want any?

all the above you'll find below 👇:

- `inline`            (turns a block element into an inline element)
- `block`             (turns an inline element into a block element)
- `inline-block`      (turns either inline or block to have the power of both)
- `none`              (turns any element into none of the above)

<section id="chapter-12"></section>

## Chapter 12
**Rotation** 🎡

Rotation is cool!
You can rotate anything you want with the power of `rotate`

```html
<div class="x-100">
    <button class="rotate-0">0<sup>o</sup></button>
    <button class="rotate-30">30<sup>o</sup></button>
    <button class="rotate-60">60<sup>o</sup></button>
    <button class="rotate-90">90<sup>o</sup></button>
    <button class="rotate-120">120<sup>o</sup></button>
    <button class="rotate-150">150<sup>o</sup></button>
    <button class="rotate-180">180<sup>o</sup></button>
    <button class="rotate-210">210<sup>o</sup></button>
    <button class="rotate-240">240<sup>o</sup></button>
    <button class="rotate-270">270<sup>o</sup></button>
    <button class="rotate-300">300<sup>o</sup></button>
    <button class="rotate-330">330<sup>o</sup></button>
    <button class="rotate-360">360<sup>o</sup></button>
</div>
```

<div class="x-100">
    <button class="rotate-0">0<sup>o</sup></button>
    <button class="rotate-30">30<sup>o</sup></button>
    <button class="rotate-60">60<sup>o</sup></button>
    <button class="rotate-90">90<sup>o</sup></button>
    <button class="rotate-120">120<sup>o</sup></button>
    <button class="rotate-150">150<sup>o</sup></button>
    <button class="rotate-180">180<sup>o</sup></button>
    <button class="rotate-210">210<sup>o</sup></button>
    <button class="rotate-240">240<sup>o</sup></button>
    <button class="rotate-270">270<sup>o</sup></button>
    <button class="rotate-300">300<sup>o</sup></button>
    <button class="rotate-330">330<sup>o</sup></button>
    <button class="rotate-360">360<sup>o</sup></button>
</div>

<section id="chapter-12"></section>


## Chapter 12
**List**

There are four kinds of way to stlye the list:

- `no-list` (removes any kinds of list-style)
- `decimal` (turns into a decimal list (like to-do list))
- `point` (bullet points)
- `roman` (roman numerals)

```html
<p>My top favorite foods<p>
<ul class="roman">
    <li class="no-list">Pizza</li>
    <li>Burrito</li>
    <li>Ice cream</li>
<ul>
```
<p>My top favorite foods<p>
<ul class="roman">
    <li>Pizza</li>
    <li>Burrito</li>
    <li>Ice cream</li>
<ul>

<section id="chapter-13"></section>

## Chapter 13
**Flexbox** 💪📦

And here we are! finally we can make the layout even better!

starting with 

- `flex`    it allows flex to take control of the elements. But unlike other CSS frameworks 
            out there where it is mandatory to display flex then play around,
            CoolNeUI doesn't force you to display flex in order to play around with flex because 
            you don't need to!

all of each one below of them displays flex automatically!

- `flex-start`     both x and y axis are set to start
- `flex-center`     both x and y axis are set to center
- `flex-end`     both x and y axis are set to end
- `flex-base`     both x and y axis are set to baseline

But if you'd like to only do either x or y axis separately, you can!

- X axis
- `x-start`         x axis is set to start
- `x-center`        x axis is set to center
- `x-end`           x axis is set to end
- `x-base`          x axis is set to baseline
- `x-between`       gives space between child elements on the x axis
- `x-around`        gives space around child elements on the x axis also
- `x-stretch`       it stretches all the way to the limit on the x axis again

- Y axis
- `y-start`         y axis is set to start
- `y-center`        y axis is set to center
- `y-end`           y axis is set to end
- `y-base`          y axis is set to baseline
- `y-between`       gives space between child elements on the y axis
- `y-around`        gives space around child elements on the y axis also
- `y-stretch`       it stretches all the way to the limit on the y axis again

- wrap
- `wrap`    it wraps the element
- `nowrap`  it desactivates wrap

When you work with flex box it is common to see the elements turning into another direction.
To fix that you can change the direction of the elements.

- `column`  changes from row to column
- `row`  changes from column to row

<section id="chapter-14"></section>

## Chapter 14
**Gradients**

How can we forget about gradients!

**gradients** can be adjusted both on `x` and `y` axis.

example: `gradient-{axis}-{1st color}-{2nd color}`

```html
<p class="gradient-x-pink-red">pink-red</p>
<p class="gradient-x-red-pink">red-pink</p>
<p class="gradient-x-red-orange">red-orange</p>
<p class="gradient-x-orange-red">orange-red</p>
<p class="gradient-x-yellow-orange">yellow-orange</p>
<p class="gradient-x-orange-yellow">orange-yellow</p>
<p class="gradient-x-green-yellow">green-yellow</p>
<p class="gradient-x-yellow-green">yellow-green</p>
<p class="gradient-x-aqua-green">aqua-green</p>
<p class="gradient-x-green-aqua">green-aqua</p>
<p class="gradient-x-sky-aqua">sky-aqua</p>
<p class="gradient-x-aqua-sky">aqua-sky</p>
<p class="gradient-x-blue-sky">sky-blue</p>
<p class="gradient-x-sky-blue">blue-sky</p>
<p class="gradient-x-violet-blue">violet-blue</p>
<p class="gradient-x-blue-violet">blue-violet</p>
<p class="gradient-x-violet-pink">violet-pink</p>
<p class="gradient-x-pink-violet">pink-violet</p>


<p class="gradient-x-dark-light">dark-light</p>
<p class="gradient-x-gray-light">gray-light</p>
<p class="gradient-x-light-gray">light-gray</p>
<p class="gradient-x-light-dark">light-dark</p>
```

<p class="gradient-x-pink-red">pink-red</p>
<p class="gradient-x-red-pink">red-pink</p>
<p class="gradient-x-red-orange">red-orange</p>
<p class="gradient-x-orange-red">orange-red</p>
<p class="gradient-x-yellow-orange">yellow-orange</p>
<p class="gradient-x-orange-yellow">orange-yellow</p>
<p class="gradient-x-green-yellow">green-yellow</p>
<p class="gradient-x-yellow-green">yellow-green</p>
<p class="gradient-x-aqua-green">aqua-green</p>
<p class="gradient-x-green-aqua">green-aqua</p>
<p class="gradient-x-sky-aqua">sky-aqua</p>
<p class="gradient-x-aqua-sky">aqua-sky</p>
<p class="gradient-x-blue-sky">sky-blue</p>
<p class="gradient-x-sky-blue">blue-sky</p>
<p class="gradient-x-violet-blue">violet-blue</p>
<p class="gradient-x-blue-violet">blue-violet</p>
<p class="gradient-x-violet-pink">violet-pink</p>
<p class="gradient-x-pink-violet">pink-violet</p>


<p class="gradient-x-dark-light">dark-light</p>
<p class="gradient-x-gray-light">gray-light</p>
<p class="gradient-x-light-gray">light-gray</p>
<p class="gradient-x-light-dark">light-dark</p>


```html
<p class="gradient-y-pink-red">pink-red</p>
<p class="gradient-y-red-pink">red-pink</p>
<p class="gradient-y-red-orange">red-orange</p>
<p class="gradient-y-orange-red">orange-red</p>
<p class="gradient-y-yellow-orange">yellow-orange</p>
<p class="gradient-y-orange-yellow">orange-yellow</p>
<p class="gradient-y-green-yellow">green-yellow</p>
<p class="gradient-y-yellow-green">yellow-green</p>
<p class="gradient-y-aqua-green">aqua-green</p>
<p class="gradient-y-green-aqua">green-aqua</p>
<p class="gradient-y-sky-aqua">sky-aqua</p>
<p class="gradient-y-aqua-sky">aqua-sky</p>
<p class="gradient-y-blue-sky">sky-blue</p>
<p class="gradient-y-sky-blue">blue-sky</p>
<p class="gradient-y-violet-blue">violet-blue</p>
<p class="gradient-y-blue-violet">blue-violet</p>
<p class="gradient-y-violet-pink">violet-pink</p>
<p class="gradient-y-pink-violet">pink-violet</p>

<p class="gradient-y-gray-light">gray-light</p>
<p class="gradient-y-dark-light">dark-light</p>
<p class="gradient-y-light-dark">light-dark</p>
<p class="gradient-y-light-gray">light-gray</p>
```

<p class="gradient-y-pink-red">pink-red</p>
<p class="gradient-y-red-pink">red-pink</p>
<p class="gradient-y-red-orange">red-orange</p>
<p class="gradient-y-orange-red">orange-red</p>
<p class="gradient-y-orange-yellow">orange-yellow</p>
<p class="gradient-y-yellow-orange">yellow-orange</p>
<p class="gradient-y-yellow-green">yellow-green</p>
<p class="gradient-y-green-yellow">green-yellow</p>
<p class="gradient-y-green-aqua">green-aqua</p>
<p class="gradient-y-aqua-green">aqua-green</p>
<p class="gradient-y-aqua-sky">aqua-sky</p>
<p class="gradient-y-sky-aqua">sky-aqua</p>
<p class="gradient-y-blue-sky">sky-blue</p>
<p class="gradient-y-sky-blue">blue-sky</p>
<p class="gradient-y-blue-violet">blue-violet</p>
<p class="gradient-y-violet-blue">violet-blue</p>
<p class="gradient-y-violet-pink">violet-pink</p>
<p class="gradient-y-pink-violet">pink-violet</p>


<p class="gradient-y-gray-light">gray-light</p>
<p class="gradient-y-dark-light">dark-light</p>
<p class="gradient-y-light-dark">light-dark</p>
<p class="gradient-y-light-gray">light-gray</p>

As you can see! the gradients got into a rainbow formation, You simply can't get wrong with one gradient!

<section id="chapter-15"></section>

## Chapter 15
**list**

You can customize the lists!

- `no-list`: removes any list style.
- `list-decimal`: converts into number position.
- `list-point`: converts into bullet points. 

BTW list classes cascade.

## Chapter 16
**Z axis**

what if you want to place elements go to *z axis*? 
`index` might come in handy!

here are 10 indexing methods:
- `index-1`
- `index-2`
- `index-3`
- `index-4`
- `index-5`
- `index-6`
- `index-7`
- `index-8`
- `index-9`
- `index-10`

you can add up to 10 z-index

<section id="chapter-17"></section>

## Chapter 17
**Posstiong**
if you want the elements to do not interract with each other,
you can add positions.

- `static` the default position.
- `absolute`: it desinteracts with other elements.
- `sticky`: it allows to stay on the screen even if you scroll down or up.
- `relative`: it positions relative to an element.


and you can position on the place you want after position initialization:


top:
- `top-10`: 10% to the top. 
- `top-20`: 20% to the top. 
- `top-30`: 30% to the top. 
- `top-40`: 40% to the top. 
- `top-50`: 50% to the top. 
- `top-60`: 60% to the top. 
- `top-70`: 70% to the top. 
- `top-80`: 80% to the top. 
- `top-90`: 90% to the top. 
- `top-100`: 100% to the top. 


right:
- `right-10`: 10% to the right. 
- `right-20`: 20% to the right. 
- `right-30`: 30% to the right. 
- `right-40`: 40% to the right. 
- `right-50`: 50% to the right. 
- `right-60`: 60% to the right. 
- `right-70`: 70% to the right. 
- `right-80`: 80% to the right. 
- `right-90`: 90% to the right. 
- `right-100`: 100% to the right. 


bottom:
- `bottom-10`: 10% to the bottom. 
- `bottom-20`: 20% to the bottom. 
- `bottom-30`: 30% to the bottom. 
- `bottom-40`: 40% to the bottom. 
- `bottom-50`: 50% to the bottom. 
- `bottom-60`: 60% to the bottom. 
- `bottom-70`: 70% to the bottom. 
- `bottom-80`: 80% to the bottom. 
- `bottom-90`: 90% to the bottom. 
- `bottom-100`: 100% to the bottom. 


left:
- `left-10`: 10% to the left. 
- `left-20`: 20% to the left. 
- `left-30`: 30% to the left. 
- `left-40`: 40% to the left. 
- `left-50`: 50% to the left. 
- `left-60`: 60% to the left. 
- `left-70`: 70% to the left. 
- `left-80`: 80% to the left. 
- `left-90`: 90% to the left. 
- `left-100`: 100% to the left. 

<section id="componets"></section>



# Componets

If you made it this far
then **Congratulation!** 
you have learned all the style methods you need to style a beutify website!

But you haven't learned all of **CoolNeUI**!
No! 
Of course you can make make a website by how far you have learnt previously!

But let me tell you something! life is too short to write a lot of code for a website! 
you'ss find yourself repeating yourself.

The solution?

The answer:

**Components!**

Yes you heard it right! CoolNeUI also has pre-built components for you! 

I will show you all the 5 components you need to make a website not just effortlessly but also effiently!

<section id="one"></section>

## 1. Badge 🪪

wrap a text with span tags around and add a class with *badge* as its value will add custom badge

btw you can also add colors!

example: `badge-blue`

```html
<p>user <span class="badge-blue">verified</span></p>
```
<p>user <span class="badge-blue">verified</span></p>


<section id="two"></section>

## 2. Button 🔆

If you add **btn** class to a button element, it'll make a custom made button that acts like a button!

```html
<button class="btn">Click me!</button>
```
<button class="btn">Click me!</button>

You can add custom colors for the background of the button.

example: btn-green

```html
<button class="btn btn-red">red button!</button>
<button class="btn btn-green">green button!</button>
<button class="btn btn-yellow">yellow button!</button>
<button class="btn btn-blue">blue button!</button>
```
<button class="btn btn-red">red button!</button>
<button class="btn btn-green">green button!</button>
<button class="btn btn-yellow">yellow button!</button>
<button class="btn btn-blue">blue button!</button>


There is also buttons with borders for a sub-buttons!

<button class="btn-border-red">red button!</button>
<button class="btn-border-orange">orange button!</button>
<button class="btn-border-yellow">yellow button!</button>
<button class="btn-border-green">green button!</button>
<button class="btn-border-aqua">aqua button!</button>
<button class="btn-border-sky">sky button!</button>
<button class="btn-border-blue">blue button!</button>


it also has a button without a background-color but instead just border and text!

for that there is **btn-border**

You can also add custom colors after **btn-border**

<section id="three"></section>

## 3. link 🔗

by adding a like class to an anchor tag you can add a custom made link that acts like a link!

```html
<a href="https://www.youtube.com/watch?v=E4WlUXrJgy4" class="link">click</a>
```
<a href="https://www.youtube.com/watch?v=E4WlUXrJgy4" class="link">click</a>

```
**💥 Pro tip**: try the link above on your project!
```

BTW you can add custom colors without needing to use *text* class.
```html
<a href="#" class="link-pink">click</a>
<a href="#" class="link-red">click</a>
<a href="#" class="link-orange">click</a>
<a href="#" class="link-yellow">click</a>
<a href="#" class="link-green">click</a>
<a href="#" class="link-aqua">click</a>
<a href="#" class="link-sky">click</a>
<a href="#" class="link-blue">click</a>
<a href="#" class="link-violet">click</a>
<a href="#" class="link-gray">click</a>
<a href="#" class="link-light bg-dark">click</a>
<a href="#" class="link-dark bg-light">click</a>
```
<a href="#" class="link-pink">click</a>
<a href="#" class="link-red">click</a>
<a href="#" class="link-orange">click</a>
<a href="#" class="link-yellow">click</a>
<a href="#" class="link-green">click</a>
<a href="#" class="link-aqua">click</a>
<a href="#" class="link-sky">click</a>
<a href="#" class="link-blue">click</a>
<a href="#" class="link-violet">click</a>
<a href="#" class="link-gray">click</a>
<a href="#" class="link-light bg-dark">click</a>
<a href="#" class="link-dark bg-light">click</a>


<section id="card"></section>

## 4. card 🌅

You can wrap an element into a custom mad card!

- `card`    (adds a custom card)

- `card-header`   (makes a header card, the title of the card)
- `card-body`     (makes a body card, decription)
- `card-footer`   (makes a footer card, it gives extra space)

```html
<div class="card">
    <div class="card-header">Title</div>
    <div class="card-body">description</div>
    <div class="card-footer"></div>
</div>
```
<div class="card">
    <div class="card-header">Title</div>
    <div class="card-body">description</div>
    <div class="card-footer"></div>
</div>


<section id="layout"></section>

## 5. layout 🖼

You can add a custom container to add elements inside it! it is invisible, but it's there!

all you need is to add: 

`container`

and you are good to go!

But if you want the container to be more flexible,

`container-fluid`
might come in handy!

`container-fluid` stretches the container to full width.

```html
<div class="container bg-red">
    <p>container</p>
</div>
<div class="container-fluid bg-sky">
    <p>container-fluid</p>
</div>
```
<div class="container bg-red">
    <p>container</p>
</div>
<div class="container-fluid bg-sky">
    <p>container-fluid</p>
</div>


<section id="six"></section>

## 6. bar 📊

`bar` is a pre-built progress bar!

```html
<div class="x-100">
    <p class="bar-100 bg-red">100%</p>
    <p class="bar-92 bg-orange">92%</p>
    <p class="bar-90 bg-yellow">90%</p>
    <p class="bar-87 bg-green">87%</p>
    <p class="bar-83 bg-aqua">83%</p>
    <p class="bar-80 bg-sky">80%</p>
    <p class="bar-75 bg-blue">75%</p>
    <p class="bar-66 bg-violet">66%</p>
    <p class="bar-50 bg-red">50%</p>
    <p class="bar-33 bg-orange">33%</p>
    <p class="bar-25 bg-yellow">25%</p>
    <p class="bar-20 bg-green">20%</p>
    <p class="bar-16 bg-aqua">16%</p>
    <p class="bar-12 bg-sky">12%</p>
    <p class="bar-10 bg-blue">10%</p>
    <p class="bar-8 bg-violet">8%</p>
</div>
```

<div class="x-100">
    <p class="bar-100 bg-red">100%</p>
    <p class="bar-92 bg-orange">92%</p>
    <p class="bar-90 bg-yellow">90%</p>
    <p class="bar-87 bg-green">87%</p>
    <p class="bar-83 bg-aqua">83%</p>
    <p class="bar-80 bg-sky">80%</p>
    <p class="bar-75 bg-blue">75%</p>
    <p class="bar-66 bg-violet">66%</p>
    <p class="bar-50 bg-red">50%</p>
    <p class="bar-33 bg-orange">33%</p>
    <p class="bar-25 bg-yellow">25%</p>
    <p class="bar-20 bg-green">20%</p>
    <p class="bar-16 bg-aqua">16%</p>
    <p class="bar-12 bg-sky">12%</p>
    <p class="bar-10 bg-blue">10%</p>
    <p class="bar-8 bg-violet">8%</p>
</div>

---

<section id="chapter-i"></section>

# **Animations**

CoolNeUI provides simple, reusable animation utilities to add dynamic effects to your website. With easy-to-use classes, you can apply animations like sliding, bouncing, shaking, spinning, scaling, and fading.

---

## **Available Animations**
| Animation | Description                        | Classes                   |
|-----------|------------------------------------|---------------------------|
| **slide** | Move elements in 4 directions      | `.animation-slide-left`, `.animation-slide-right`, `.animation-slide-up`, `.animation-slide-down` |
| **bounce**| Create a bounce effect             | `.animation-bounce`       |
| **shake** | Add a shaking effect               | `.animation-shake`        |
| **ccale** | Scale elements up or down          | `.animation-scale`        |
| **spin**  | Rotate elements                    | `.animation-spin`         |
| **fade**  | Smoothly fade elements in or out   | `.animation-fade`         |

---

## **Customization Options**
- **Duration**: Adjust animation speed with `.duration-*` classes.
  - Examples: `.duration-5` (0.5s), `.duration-10` (1s), up to `.duration-200` (20s)
- **Timing Functions**: Control easing with `.linear`, `.ease-in`, `.ease-out`, `.ease-in-out`.
- **Repetition**: Set repetition with `.infinite`, `.once`, or `.twice`.

#### **Custom Example**

**Bounce**
```html
<div class="animation animation-bounce duration-15 ease-in-out infinite x-16">
  <img src="./public/CoolNeUI.svg" alt="logo">
</div>
```
<div class="animation animation-bounce duration-15 ease-in-out infinite x-16">
  <img src="./public/CoolNeUI.svg" alt="logo">
</div>

---

**Shake**
```html
<div class="animation animation-shake duration-15 ease-in-out infinite x-16">
  <img src="./public/CoolNeUI.svg" alt="logo">
</div>
```
<div class="animation animation-shake duration-15 ease-in-out infinite x-16">
  <img src="./public/CoolNeUI.svg" alt="logo">
</div>

---

**Scale**
```html
<div class="animation animation-scale duration-15 ease-in-out infinite x-16">
  <img src="./public/CoolNeUI.svg" alt="logo">
</div>
```
<div class="animation animation-scale duration-15 ease-in-out infinite x-16">
  <img src="./public/CoolNeUI.svg" alt="logo">
</div>

---

**Spin**
```html
<div class="animation animation-spin duration-15 ease-in-out infinite x-16">
  <img src="./public/CoolNeUI.svg" alt="logo">
</div>
```
<div class="animation animation-spin duration-15 ease-in-out infinite x-16">
  <img src="./public/CoolNeUI.svg" alt="logo">
</div>

---

**Fade**
```html
<div class="animation animation-fade duration-15 ease-in-out infinite x-16">
  <img src="./public/CoolNeUI.svg" alt="logo">
</div>
```
<div class="animation animation-fade duration-15 ease-in-out infinite x-16">
  <img src="./public/CoolNeUI.svg" alt="logo">
</div>

---

**Slide**
```html
<div class="animation animation-slide duration-15 ease-in-out infinite x-16">
  <img src="./public/CoolNeUI.svg" alt="logo">
</div>
```
<div class="animation animation-slide duration-15 ease-in-out infinite x-16">
  <img src="./public/CoolNeUI.svg" alt="logo">
</div>

---

**Slide-up**
```html
<div class="animation animation-slide-up duration-15 ease-in-out infinite x-16">
  <img src="./public/CoolNeUI.svg" alt="logo">
</div>
```
<div class="animation animation-slide-up duration-15 ease-in-out infinite x-16">
  <img src="./public/CoolNeUI.svg" alt="logo">
</div>

---

**Slide-down**
```html
<div class="animation animation-slide-down duration-15 ease-in-out infinite x-16">
  <img src="./public/CoolNeUI.svg" alt="logo">
</div>
```
<div class="animation animation-slide-down duration-15 ease-in-out infinite x-16">
  <img src="./public/CoolNeUI.svg" alt="logo">
</div>

---

**Slide-left**
```html
<div class="animation animation-slide-left duration-15 ease-in-out infinite x-16">
  <img src="./public/CoolNeUI.svg" alt="logo">
</div>
```
<div class="animation animation-slide-left duration-15 ease-in-out infinite x-16">
  <img src="./public/CoolNeUI.svg" alt="logo">
</div>

---

**Slide-right**
```html
<div class="animation animation-slide-right duration-15 ease-in-out infinite x-16">
  <img src="./public/CoolNeUI.svg" alt="logo">
</div>
```
<div class="animation animation-slide-right duration-15 ease-in-out infinite x-16">
  <img src="./public/CoolNeUI.svg" alt="logo">
</div>

---

That’s it! Add CoolNeUI animations to your project and bring your website to life.

---

## Final Notes
With **CoolNeUI**, building beautiful websites has never been easier. Whether you’re a beginner or a pro, this framework will save you time and effort while creating stunning designs.

Happy coding! 💻


---

&copy; 2024 CoolBeachBall