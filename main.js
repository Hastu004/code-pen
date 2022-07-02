import './style.css'
import Split from 'split-grid'

const $ = selector => document.querySelector(selector)

const $js = $('#js')
const $css = $('#css')
const $html = $('#html')

$js.addEventListener('input', update)
$css.addEventListener('input', update)
$html.addEventListener('input', update)




Split({
  columnGutters: [{
    track: 1,
    element: document.querySelector('.gutter-col-1'),
  }],
  rowGutters: [{
    track: 1,
    element: document.querySelector('.gutter-row-1'),
  }]
})

function update() {
  const html = createHtml()
  $('iframe').setAttribute('srcdoc', html)
}


const createHtml = () => {

  const html = $html.value
  const css = $css.value
  const js = $js

  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <style>
        ${css}
      </style>
    </head>
    <body>
      <script>
        ${js}
      </script>
      ${html}
    </body>
  </html>
  `
}
