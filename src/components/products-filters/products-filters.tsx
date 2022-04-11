import { useState, memo } from "react";
import { FiltersType, Countries } from "../../types";
import { CountryFilter } from "../country-filter";
import { CityFilter } from "../city-filter";
import { DateFilter } from "../date-filter";
import { getLocationsApi } from "../../network";

import styles from "./products-filters.module.scss";
import { useEffect } from "react";

export const ProductsFilters = memo(
  ({
    addFilter,
  }: {
    addFilter: (name: FiltersType, value: string | undefined) => void;
  }) => {
    const [countries, setCountries] = useState<string[]>();
    const [locations, setLocations] = useState<Countries>();
    const [country, setCountry] = useState<string>();
    const [city, setCity] = useState<string>();

    useEffect(() => {
      const getLocations = async () => {
        const locations = await getLocationsApi();
        setCountries(Object.keys(locations));
        setLocations(locations);
      };
      getLocations();
    }, []);

    useEffect(() => {
      setCity(undefined);
      addFilter("cityId", undefined);
    }, [country]);

    const handleCitySelect = (cityId?: string) => {
      addFilter("cityId", cityId);
      setCity(cityId);
    };

    return (
      <div className={styles.filters}>
        <div className={styles.locationFilters}>
          <CountryFilter countries={countries} onSelect={setCountry}/>
          <CityFilter
            cities={country ? locations?.[country] : undefined}
            onSelect={handleCitySelect}
            isDisabled={!country}
          />
        </div>
        <DateFilter addFilter={addFilter} isDisabled={!city} />
      </div>
    );
  }
);
