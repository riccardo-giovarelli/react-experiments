import { ReactNode } from "react";

/**
 * @description Custom type for accordion item
 */
export type AccordionItemType = {
  title: string;
  children: ReactNode;
};

/**
 * @description Custom type accordion items
 */
export type AccordionItemsType = Array<AccordionItemType>;

/**
 * @description Custom type for the props of Accordion component
 */
export type AccordionPropsType = {
  accordionItems: AccordionItemsType | null;
};

/**
 * @description Custom type for the props of Accordion items component
 */
export type AccordionItemPropsType = {
  data: AccordionItemType
  defaultStatus?: boolean
}