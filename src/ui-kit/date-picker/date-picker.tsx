import { useState, useCallback, memo } from "react";
import cn from "classnames";

import { DateCard } from "../date-card";
import { checkIsSameMonths } from "../../utils/check-is-same-months";

import styles from "./date-picker.module.scss";

const DATE_SELECTOR_FOR = "date-selector";

export const DatePicker = memo(
  ({
    dates,
    onClick,
    isDisabled,
  }: {
    dates?: string[];
    isDisabled?: boolean;
    onClick: (date: string) => void;
  }) => {
    const [checkedDate, setCheckedDate] = useState<string | undefined>();

    const handleClick = useCallback((date: string) => {
      setCheckedDate(date);
      onClick(date);
    }, []);

    return (
      <div className={cn(styles.datePicker, { [styles.isDisabled]: isDisabled })} >
        <label htmlFor={DATE_SELECTOR_FOR}>Date</label>
        <ul id={DATE_SELECTOR_FOR} className={styles.dates}>
          {dates?.reduce((elements, date, index, array) => {
            if (index !== 0 && !checkIsSameMonths(date, array[index - 1])) {
              elements.push(
                <div key={`${date}-separator`} className={styles.separator} />
              );
            }

            elements.push(
              <DateCard
                key={date}
                isChecked={date === checkedDate}
                date={date}
                onClick={handleClick}
                isDisabled={isDisabled}
              />
            );
            return elements;
          }, [] as JSX.Element[])}
        </ul>
      </div>
    );
  }
);
