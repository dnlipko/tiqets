import { useCallback, ChangeEvent, memo } from "react";

import { getWeekday } from "../../utils/get-weekday";

import styles from "./date-card.module.scss";

type DateCardProps = { isChecked?: boolean; isDisabled?: boolean; date: string; onClick: (date: string) => void };

export const DateCard = memo(({ isChecked, isDisabled, date, onClick }: DateCardProps) => {
  const parsedDate = new Date(date);
  const weekday = getWeekday(parsedDate.getDay()).slice(0, 3);
  const dateNumber = parsedDate.getDate();

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onClick(event.target.value);
    },
    [onClick]
  );

  return (
    <li className={styles.dateCard}>
      <input type="radio" id={date} value={date} onChange={handleChange} checked={isChecked} disabled={isDisabled}/>
      <label htmlFor={date}>
        <div className={styles.weekday}>{weekday}</div>
        <div className={styles.date}>{dateNumber}</div>
      </label>
    </li>
  );
});
