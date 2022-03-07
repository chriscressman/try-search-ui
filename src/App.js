import AppSearchAPIConnector from '@elastic/search-ui-app-search-connector'

const ENTERPRISE_SEARCH_BASE_URL = 'https://try-search-ui.ent.us-central1.gcp.cloud.es.io';
const APP_SEARCH_SEARCH_KEY = 'search-eaesy8bpwje7u7jgtydgs846';
const APP_SEARCH_ENGINE_NAME = 'national-parks-demo';

const connectorConfiguration = {
  endpointBase: ENTERPRISE_SEARCH_BASE_URL,
  searchKey: APP_SEARCH_SEARCH_KEY,
  engineName: APP_SEARCH_ENGINE_NAME,
  cacheResponses: false,
}

const connector = new AppSearchAPIConnector(connectorConfiguration);

function App() {
  return (
    <div className="App">
    </div>
  );
}

export default App;
