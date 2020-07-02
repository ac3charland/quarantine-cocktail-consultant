module.exports = function (chromy, scenario, vp) {
    chromy.wait('.search-bar__input')
    chromy.type('.search-bar__input', 'bourbon')
    chromy.wait('.search-bar__submit')
    chromy.click('.search-bar__submit')
    chromy.wait(5000)
}