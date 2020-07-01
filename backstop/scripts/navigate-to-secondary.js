module.exports = function (chromy, scenario, vp) {
    chromy.wait('#secondary-link')
    chromy.click('#secondary-link')
    chromy.wait(1000)
}