import randomColor from 'randomcolor';

function set_mobile_theme() {
    var color = randomColor();
    document.querySelector('meta[name="theme-color"]').setAttribute('content', color);
}


export default set_mobile_theme;
