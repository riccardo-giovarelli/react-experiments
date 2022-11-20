/**
 * @description Interface for props of Dropdown
 */
export interface DropdownProps {
  selected: string;
  items: Array<string>;
  setItems: React.Dispatch<React.SetStateAction<string>>;
}
