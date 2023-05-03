// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

function xPathToCss(xpath) {
  return xpath
    .replace(/\[(\d+?)\]/g, function (s, m1) {
      return '[' + (m1 - 1) + ']';
    })
    .replace(/\/{2}/g, '')
    .replace(/\/+/g, ' > ')
    .replace(/@/g, '')
    .replace(/\[(\d+)\]/g, ':eq($1)')
    .replace(/^\s+/, '')
    .replace(/=/, '{')
    .replace(/$/, '}')
    .replace(/sup/, 'vertical-align: super !important;')
    .replace(
      /bolditalic;/gi,
      ' font-style: italic !important;font-weight: bold!important;'
    )
    .replace(/italic;/gi, ' font-style: italic !important;');
}

// ARISOC, MELUSJ
//.forEach(function (item, idx, arr) {console.log(xPathToCss(item));})
var CSSObj = [
  [
    'table-wrap-foot/fn/label=sup',
    'contrib/xref=sup',
    'contrib/xref/x=sup',
    'underline=Underline',
    'aff/label=sup',
    '"author-notes/fn[@fn-type="fntext"]/label=sup',
    'ref/mixed-citation/source=italic',
    'diss-formula/label=eqnlabel(rightalign)',
  ],
  [
    // CHRIBI, JMPHIL
    'tr/th/italic=bolditalic;',
    'table-wrap-foot/fn/label=sup',
    'contrib/xref=sup',
    'contrib/xref/x=sup',
    'underline=Underline',
    'aff/label=sup',
    'author-notes/fn[@fn-type="fntext"]/label=sup',
    'ref/mixed-citation/source=italic;',
    'diss-formula/label=eqnlabel(rightalign)',
  ],
];

CSSObj.forEach(function (arr, index, array) {
  if (index + 1 != array.length) return;
  var tempArr = [];
  arr.forEach(function (item, idx, arr) {
    tempArr.push(xPathToCss(item));
  });
  console.log(tempArr.join(''));
});
