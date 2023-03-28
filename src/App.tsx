import AppRoute from "./router";
import UserProvider from "./providers/userProvider";

function App() {
  return (
    <UserProvider>
      <main>
        <AppRoute />
      </main>
    </UserProvider>
  );
}

export default App;
