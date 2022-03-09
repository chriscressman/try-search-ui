Create an Elastic deployment
Use the sample engine
Find the engine name
Find the base URL
Find the search key

Create a React app
`nvm use 17.6.0`
`npm init react-app try-search-ui`
`cd try-search-ui`
`npm start`

Install Search UI packages from npm
`npm install --save-prod @elastic/search-ui-app-search-connector`
`npm install --save-prod @elastic/react-search-ui`

Clear out the default content for the App component

Start by roughly following the getting started experience in the README, but be more explicit about each step

Define a configuration for an `AppSearchAPIConnector`
Use the values from the Elastic deployment

Initialize an AppSearchAPIConnector
Use the connector configuration
https://github.com/chriscressman/try-search-ui/commit/6e3da95b871d05d22869b067892c07adc68e8412

Add a SearchProvider element to the App component
Pass it a `config` prop that includes a reference to the connector
https://github.com/chriscressman/try-search-ui/commit/fe991bf855ea6aedc9e3766cd1ee927b11e0c3b2

Add a Layout element to the App component
Add placeholder content for `header` and `bodyContent`
https://github.com/chriscressman/try-search-ui/commit/d461351ad1a424163f14997603a62ba7998010ab

Replace header content placeholder with a SearchBox element
https://github.com/chriscressman/try-search-ui/commit/55e4d955925da145d461313ed6b661ffee0f8e07

Replace body content placeholder with a Results element
https://github.com/chriscressman/try-search-ui/commit/e8adb8b3d5d9109fa31cf272bdf2657ca2572918

Add default CSS
https://github.com/chriscressman/try-search-ui/commit/2ba3599648449a64ecbaf829544aad43602bea65

Search, and view the results
`git checkout 2ba3599648449a64ecbaf829544aad43602bea65`
`npm start`

So, here's what I used:

```
AppSearchAPIConnector
SearchProvider
Layout
SearchBox
Results
(stylesheet)
```

Layout also provides a sidebar, which is currently empty

What are all the primitives provided by these packages?
Change to a bottom-up method of exploration

Clear the changes I made
Import everything

Explore the installed packages
https://github.com/chriscressman/try-search-ui/commit/95b3e8aa920bfabd19915e9734e6a608c9a53f43

```
@elastic/search-ui
  SearchDriver
  helpers
@elastic/search-ui-app-search-connector
  default
@elastic/react-search-ui
  ErrorBoundary
  Facet
  Paging
  PagingInfo
  Result
  Results
  ResultsPerPage
  SearchBox
  SearchContext
  SearchProvider
  Sorting
  WithSearch
  withSearch
@elastic/react-search-ui-views
  ./lib/styles/styles.css'
  Autocomplete
  BooleanFacet
  ErrorBoundary
  Facets
  Layout
  MultiCheckboxFacet
  Paging
  PagingInfo
  Result
  Results
  ResultsPerPage
  SearchBox
  SingleLinksFacet
  SingleSelectFacet
  Sorting
```

There is one stylesheet

```
@elastic/react-search-ui-views
  ./lib/styles/styles.css'
```

Everything else is JavaScript
Three APIs are vanilla JS
I would explore those first

```
@elastic/search-ui
  SearchDriver
  helpers
@elastic/search-ui-app-search-connector
  default
```

Everything else is a React component

```
@elastic/react-search-ui
  ErrorBoundary
  Facet
  Paging
  PagingInfo
  Result
  Results
  ResultsPerPage
  SearchBox
  SearchContext
  SearchProvider
  Sorting
  WithSearch
  withSearch
@elastic/react-search-ui-views
  Autocomplete
  BooleanFacet
  ErrorBoundary
  Facets
  Layout
  MultiCheckboxFacet
  Paging
  PagingInfo
  Result
  Results
  ResultsPerPage
  SearchBox
  SingleLinksFacet
  SingleSelectFacet
  Sorting
```

Why are the components split between two libraries?
It has to do with some React patterns that I'm not familiar with
Components that take responsibility for rendering other components

I started learning React recently, using up-to-date resources
I didn't encounter these patterns, so maybe they are a bit older?
It seems like React changed its architecture when it introduced hooks
