import { ReactNode } from "react";
export type AccordionItems = Array<AccordionItem>;
  
export type AccordionItem = {
    title: string;
    children: ReactNode;
  };