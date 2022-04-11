import { ChangeEvent } from "react";
import cn from "classnames";

import styles from "./dropdown.module.scss";

const DEFAULT_VALUE = "-1";

interface DropdownItem {
  value: number | string;
  name: string;
}

interface Props {
  items?: DropdownItem[];
  id?: string;
  className?: string;
  isDisabled?: boolean;
  onSelect?: any;
  placeholder: string;
}

export const Dropdown = ({
  items,
  id,
  className,
  isDisabled,
  placeholder,
  onSelect,
}: Props) => {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const {value} = event.target;
    const data = value !== DEFAULT_VALUE ? value : undefined;
    onSelect(data);
  };

  return (
    <div className={cn(styles.dropdown, className)}>
      <select
        id={id}
        className={styles.select}
        disabled={isDisabled}
        onChange={handleChange}
      >
        <option value={DEFAULT_VALUE}>{placeholder}</option>
        {items?.map(({ value, name }) => (
          <option key={value} value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};
