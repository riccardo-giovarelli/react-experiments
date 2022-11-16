import { AccordionPropsType } from "../../interface/interface-accordion";
import AccordionItem from "../accordion-item/AccordionItem";

const Accordion = ({ accordionItems }: AccordionPropsType) => {
  return (
    <div className="accordion__container w-full">
      {accordionItems &&
        accordionItems.map((item, index) => <AccordionItem key={index} data={item} />)}
    </div>
  );
};

export default Accordion;
