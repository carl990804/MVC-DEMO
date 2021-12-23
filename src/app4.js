import './app4.css'
import $ from 'jquery'
const $c = $("#app4 .c")
$c.on('mouseenter', () => {
    $c.addClass('active')
}).on('mouseleave', () => {
    $c.removeClass('active')
})