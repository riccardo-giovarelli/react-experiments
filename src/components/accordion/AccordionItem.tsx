import { useState } from "react";
import { AccordionItemPropsType } from "../../types/type-accordion";
import "./AccordionItem.scss";

const AccordionItem = ({ data, defaultStatus = false }: AccordionItemPropsType) => {
  const [isOpen, setIsOpen] = useState(defaultStatus);

  return (
    <div className="accordionitem__container mb-2 mx-3">
      <div
        className={
          "accordionitem__header py-5 px-3 flex justify-between border-2 border-slate-600 justify-between accordionitem__header " +
          (isOpen ? "bg-slate-600" : "bg-slate-100")
        }
      >
        <div
          className={
            "accordionitem__header-title grow text-xl truncate uppercase " +
            (isOpen ? "text-slate-100" : "text-slate-600")
          }
        >
          {data.title}
        </div>
        <div
          className={
            "accordionitem__header-button-container accordionitem__header-button-container" +
            (isOpen ? "--open" : "--close")
          }
        >
          <span
            className={
              "accordionitem__header-button material-symbols-outlined grow-0 " +
              (isOpen ? "text-slate-100" : "text-slate-600")
            }
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            arrow_downward
          </span>
        </div>
      </div>
      <div
        className={
          "accordionitem__body overflow-y-auto accordionitem__body" +
          (isOpen ? "--open border-x-2 border-b-2 border-slate-600 border-slate-600" : "--close")
        }
      >
        <div className="accordionitem_content p-3">{data.children}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
