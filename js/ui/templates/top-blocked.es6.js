const bel = require('bel')
const header = require('./shared/sliding-subview-header.es6.js')
const listItems = require('./shared/top-blocked-list-items.es6.js')
const noData = require('./shared/top-blocked-no-data.es6.js')

module.exports = function () {

    if (!this.model) {
        return bel`<section class="sliding-subview
            sliding-subview--has-fixed-header">
            ${header('All Trackers')}
        </section>`
    } else {
        return bel`<div class="js-top-blocked-content">
            ${renderPctPagesWithTrackers(this.model)}
            ${renderList(this.model)}
            ${renderResetButton(this.model)}
        </div>`
    }
}

function renderPctPagesWithTrackers (model) {
    return
    /*
    DISABLED; TBD: how to roll out this feature properly
    see: https://app.asana.com/0/0/460622849089890/f
    if (model.pctPagesWithTrackers) {
        return bel`<p class="top-blocked__pct card">
            Trackers were found on ${model.pctPagesWithTrackers}%
            of web sites you've visited.
        </p>`
    }
    */
}

function renderList (model) {
    if (model.companyListMap.length > 0) {
        return bel`<ol class="default-list top-blocked__list card">
            ${listItems(model.companyListMap)}
        </ol>`
    } else {
        return bel`<ol class="default-list top-blocked__list">
            <li class="top-blocked__li top-blocked__li--no-data">
                ${noData()}
            </li>
        </ol>`
    }
}

function renderResetButton (model) {
    if (model.companyListMap.length > 0) {
        return bel`<div class="top-blocked__reset-stats">
            <button class="top-blocked__reset-stats__button block
                js-reset-trackers-data">
                Reset Global Stats
            </button>
            <p>These stats are only stored locally on your device,
            and are not sent anywhere, ever.</p>
        </div>`
    }
}
