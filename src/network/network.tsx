import {Countries, ProductType, FiltersType} from "../types";
const HOST = "http://localhost:3001";

export const getLocationsApi = async (): Promise<Countries> => {
  return fetch(`${HOST}/locations`).then((response) => {
    return response.json();
  });
};

export const getAvaliableDatesApi = async (): Promise<string[]> => {
  return fetch(`${HOST}/available_dates`).then((response) => {
    return response.json();
  });
};


export const getProductsApi = async ({date, cityId}: Record<FiltersType, string>): Promise<ProductType[]> => {
  const url = new URL(`${HOST}/products`);
  url.search = new URLSearchParams({date, city_id: cityId}).toString();

  return fetch(url.toString()).then((response) => {
    return response.json();
  });
};
