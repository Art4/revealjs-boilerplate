import main from './main';
import Reveal from 'reveal.js/dist/reveal.esm.js';
import ZoomPlugin from 'reveal.js/plugin/zoom/zoom.esm.js';

import 'reveal.js/dist/reveal.css';
// Themes: beige, black, blood, league, moon, night, serif, simple, sky, solarized, white
import 'reveal.js/dist/theme/white.css';
// Theme used for syntax highlighting of code
import 'reveal.js/plugin/highlight/zenburn.css';

// configuration see https://revealjs.com/config/
Reveal.initialize({
    // define plugins here
    plugins: [
        ZoomPlugin,
    ],
    history: true,
    transition: 'slide', // none/fade/slide/convex/concave/zoom
    dependencies: [
        // DONT LOAD PLUGINS HERE!
        // use require() for plugins after Reveal.initialize()
    ],
    // parallaxBackgroundImage: (window.location.search.match( /print-pdf/gi )) ? null :'img/background.jpg',
    // parallaxBackgroundSize: '3648px 2056px',
    pdfSeparateFragments: false,
});

main.run();
