import { ReactNode } from "react";

/**
 * @interface AccordionItemType
 * @description Interface for ACCORDION ITEM
 */
export interface AccordionItemType {
  title: string;
  children: ReactNode;
}

/**
 * @interface AccordionPropsType
 * @description Interface for the PROPS OF THE ACCORDION COMPONENT
 */
export interface AccordionPropsType {
  accordionItems: Array<AccordionItemType> | null;
}

/**
 * @interface AccordionItemPropsType
 * @description Interface for the PROPS OF THE ACCORDION ITEMS COMPONENT
 */
export interface AccordionItemPropsType {
  data: AccordionItemType;
  defaultStatus?: boolean;
}
