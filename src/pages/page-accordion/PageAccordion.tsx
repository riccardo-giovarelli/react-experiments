import Accordion from "../../components/accordion/Accordion";
import { getAccordionItems } from "../../model/data-provider";

const PageAccordion = () => {
  return (
    <div className="page-accordion__container w-full flex justify-center">
      <Accordion accordionItems={getAccordionItems()} />
    </div>
  );
};

export default PageAccordion;
