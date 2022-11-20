import { ReactNode } from "react";

/**
 * @description Interface for accordion item
 */
export interface AccordionItemType {
  title: string;
  children: ReactNode;
}

/**
 * @description Interface accordion items
 */
export interface AccordionItemsType extends Array<AccordionItemType> {}

/**
 * @description Interface for the props of Accordion component
 */
export interface AccordionPropsType {
  accordionItems: AccordionItemsType | null;
}

/**
 * @description Interface for the props of Accordion items component
 */
export interface AccordionItemPropsType {
  data: AccordionItemType;
  defaultStatus?: boolean;
}
