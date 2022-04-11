import { useCallback } from "react";
import cn from "classnames";

import { Dropdown } from "../../ui-kit/dropdown/dropdown";

import styles from "./country-filter.module.scss";

const CITY_SELECTOR_FOR = "country-filter";
const COUNTRY_PLACCEHOLDER = "Choose the country";

type CountryFilterType = {
  countries?: string[];
  isDisabled?: boolean;
  onSelect: (value?: string) => void;
};


export const CountryFilter = ({
  countries,
  isDisabled,
  onSelect,
}: CountryFilterType) => {
  const items = countries?.map((name) => ({ value: name, name }));

  return (
    <div
      className={cn(styles.citySelector, { [styles.isDisabled]: isDisabled })}
    >
      <label htmlFor={CITY_SELECTOR_FOR}>Country</label>
      <Dropdown
        className={styles.dropdown}
        id={CITY_SELECTOR_FOR}
        items={items}
        isDisabled={isDisabled}
        placeholder={COUNTRY_PLACCEHOLDER}
        onSelect={onSelect}
      />
    </div>
  );
};
