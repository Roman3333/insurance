export type DropdownItem = {
  label: string;
  description: string;
  href: string;
};

export type NavItem = {
  label: string;
  href?: string;
  dropdownItems?: DropdownItem[];
};
