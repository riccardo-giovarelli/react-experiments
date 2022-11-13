import { AccordionPropsType } from "../../types/type-accordion";
import AccordionItem from "./AccordionItem";

const Accordion = ({ accordionItems }: AccordionPropsType) => {
  return (
    <div className="accordion__container w-full">
      {accordionItems &&
        accordionItems.map((item, index) => <AccordionItem key={index} data={item} />)}
    </div>
  );
};

export default Accordion;
