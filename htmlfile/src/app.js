/* global algoliasearch instantsearch */

const searchClient = algoliasearch('######', '########');

const search = instantsearch({
  indexName: 'YimingWeibo',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.addWidgets([
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div>
 
          <div class="hit-name">
          <div class="hit-price">{{Date}} {{Time}}</div>
          </div>

	<div class="hit-price">via：{{Via}}</div>
          <div class="hit-description">
            {{#helpers.highlight}}{ "attribute": "WeiboText" }{{/helpers.highlight}}
          </div>

        </div>
      `,
    },
  })
]);

// After the `searchBox` widget
search.addWidgets([
  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
  }),

  instantsearch.widgets.refinementList({
    container: '#brand-list',
    attribute: "Year",
  }),

  instantsearch.widgets.configure({
    hitsPerPage: 20
  }),
]);

search.start();
