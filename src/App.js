import AppSearchAPIConnector from '@elastic/search-ui-app-search-connector'
import { SearchProvider } from '@elastic/react-search-ui'

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
    <SearchProvider config={{apiConnector: connector}}>
      <div className="App">
      </div>
    </SearchProvider>
  );
}

export default App;
