import $ from 'jquery'
import './app3.css'
const $sq=$('#app3 .sq')
$sq.on('click',()=>{
    $sq.toggleClass('active')
})