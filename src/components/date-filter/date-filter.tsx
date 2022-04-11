import { useEffect, useState, useCallback, memo } from "react";

import { getAvaliableDatesApi } from "../../network";
import { FiltersType } from "../../types";
import { DatePicker } from "../../ui-kit/date-picker";

export const DateFilter = memo(
  ({
    isDisabled,
    addFilter,
  }: {
    isDisabled?: boolean;
    addFilter: (name: FiltersType, value: string) => void;
  }) => {
    const [dates, setDates] = useState<string[]>([]);

    useEffect(() => {
      const getDates = async () => {
        const dates = await getAvaliableDatesApi();
        if (dates) {
          setDates(dates);
        }
      };

      getDates();
    }, []);

    const handleClick = useCallback((date: string) => {
      addFilter("date", date);
    }, []);

    return <DatePicker dates={dates} isDisabled={isDisabled} onClick={handleClick}/>;
  }
);
