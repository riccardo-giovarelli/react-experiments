import { useCallback, useState } from "react";
import Dropdown from "./components/dropdown/Dropdown";
import AccordionPage from "./pages/page-accordion/PageAccordion";
import Home from "./pages/page-home/PageHome";

function App() {
  const [componentName, setComponentName] = useState("home");
  const componentsNames: Array<string> = ["home", "accordion"];

  /**
   * @function renderBodyContent
   * @return {ReactNode} The required component
   */
  const renderBodyContent = useCallback(() => {
    switch (componentName) {
      case "none":
        return <Home />;
      case "accordion":
        return <AccordionPage />;
      default:
        return <Home />;
    }
  }, [componentName]);

  return (
    <div className="app__container min-w-full min-h-full">
      <div className="app__header  flex p-4 min-w-max shadow-xl">
        <div className="flex-1 flex">
          <h1 className="app__title font-bold text-2xl sm:text-3xl">React Lab</h1>
          <span className="font-bold text-2xl sm:text-3xl">&nbsp;-&nbsp;</span>
          <h2 className="app__component-title capitalize font-bold text-2xl sm:text-3xl">
            <i>{componentName}</i>
          </h2>
        </div>
        <div className="flex-0">
          <Dropdown selected={componentName} setItems={setComponentName} items={componentsNames} />
        </div>
      </div>
      <div className="app__body min-w-full mt-8">{renderBodyContent()}</div>
    </div>
  );
}

export default App;
