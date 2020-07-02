module.exports = function (chromy, scenario, vp) {
    let search = 'bourbon'
    if (scenario && scenario.args && scenario.args.search) {
        search = scenario.args.search
    }

    chromy.wait('.search-bar__input')
    chromy.type('.search-bar__input', search)
    chromy.wait('.search-bar__submit')
    chromy.click('.search-bar__submit')
    chromy.wait(5000)
}