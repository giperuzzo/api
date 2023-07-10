const styles = document.createElement('link');

styles.setAttribute('rel', 'stylesheet');
styles.setAttribute('href', './assets/styles/style.css'),

/* link rel = stysheet "href=" ./assets/styles/style.css"> */

document.head.appendChild(styles);

//<link rel="preconnect" href="https://fonts.googleapis.com">
//<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//<link href="https://fonts.googleapis.com/css2?family=Ysabeau+Office:ital,wght@1,300&display=swap" rel="stylesheet">

const googleapis = document.createElement('link');
googleapis.rel = 'preconnect';
googleapis.href = 'https://fonts.googleapis.com';

const gstatic = document.createElement('link');
gstatic.rel = 'preconnect';
gstatic.href = 'https://fonts.gstatic.com';
gstatic.crossorigin = '';

const Ysabeau = document.createElement('link');
Ysabeau.rel = 'stylesheet';
Ysabeau.href = 'https://fonts.googleapis.com/css2?family=Ysabeau+Office:ital,wght@1,300&display=swap';

document.head.appendChild(googleapis);
document.head.appendChild(gstatic);
document.head.appendChild(Ysabeau);

