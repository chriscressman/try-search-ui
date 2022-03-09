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

Add a SearchProvider element to the App component
Pass it a `config` prop that includes a reference to the connector

Add a Layout element to the App component
Add placeholder content for `header` and `bodyContent`

Replace header content placeholder with a SearchBox element

Replace body content placeholder with a Results element

Add default CSS

Search, and view the results

Layout also provides a sidebar, which is currently empty

What are all the primitives provided by these packages?
Change to a bottom-up method of exploration

Clear the changes I made
Import everything

Explore the installed packages

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
