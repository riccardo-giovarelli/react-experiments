import { AccordionPropsType } from "../../types/types-accordion";
import AccordionItem from "../accordion-item/AccordionItem";

const Accordion = ({ accordionItems }: AccordionPropsType) => {
  return (
    <div className="accordion__container w-full">
      {accordionItems &&
        accordionItems.map(
          (item, index) => item.visible && <AccordionItem key={index} data={item} />
        )}
    </div>
  );
};

export default Accordion;
