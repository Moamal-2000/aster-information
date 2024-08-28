import useEventListener from "./Hooks/Helper/useEventListener";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  useEventListener(document.body, "touchmove", (event) => {
    if (event.source == document.body) event.preventDefault();
  });

  return <AppRoutes />;
}

export default App;
