import { useCallback, useState } from "react";
import "./App.scss";
import Dropdown from "./components/dropdown";
import Accordion from "./components/accordion/Accordion";
import { AccordionItems } from "./types/Accordion";

function App() {
  const [componentName, setComponentName] = useState("");
  const componentsNames: Array<string> = ["none", "accordion"];
  const accordionItems: AccordionItems = [{ title: "Title", children: <></> }];

  const renderBodyContent = useCallback(() => {
    switch (componentName) {
      case "none":
        return <></>;
      case "accordion":
        return <Accordion accordionItems={accordionItems} />;
    }
  }, [componentName]);

  return (
    <div className="app__container min-w-full min-h-full">
      <div className="app__header md:flex md:items-center md:justify-between bg-slate-200 p-4">
        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            React Lab{" "}
            <span className="capitalize">
              {componentName && componentName !== "none" && " - " + componentName}
            </span>
          </h2>
        </div>
        <div className="mt-4 flex md:mt-0 md:ml-4">
          <Dropdown selected={componentName} setItems={setComponentName} items={componentsNames} />
        </div>
      </div>
      <div className="app__body min-w-full">{renderBodyContent()}</div>
    </div>
  );
}

export default App;
