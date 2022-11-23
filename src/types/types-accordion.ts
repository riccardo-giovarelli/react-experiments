import { ReactNode } from "react";

/**
 * @interface AccordionItemType
 * @description Interface for ACCORDION ITEM
 */
export interface AccordionItemType {
  readonly title: string;
  readonly children: ReactNode;
}

/**
 * @interface AccordionItemExtType
 * @description Interface for ACCORDION ITEM (extended)
 */
export interface AccordionItemExtType extends AccordionItemType {
  visible: boolean;
}

/**
 * @interface AccordionPropsType
 * @description Interface for the PROPS OF THE ACCORDION COMPONENT
 */
export interface AccordionPropsType {
  accordionItems: Array<AccordionItemExtType> | null;
}

/**
 * @interface AccordionItemPropsType
 * @description Interface for the PROPS OF THE ACCORDION ITEMS COMPONENT
 */
export interface AccordionItemPropsType {
  data: AccordionItemExtType;
  defaultStatus?: boolean;
}
