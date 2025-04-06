import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import Books from "./components/Books";
import AddBook from "./components/AddBook";
import AddAuthor from "./components/AddAuthor";

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Library System</h1>
        <AddBook />
        <AddAuthor />
        <Books />
      </div>
    </ApolloProvider>
  );
}

export default App;
