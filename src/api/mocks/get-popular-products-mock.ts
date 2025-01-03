import { http, HttpResponse } from "msw";

import { GetPopularProductsResponse } from "../get-popular-products";

export const getPopularProductsMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>("/metrics/popular-products", () => {
  return HttpResponse.json([
    {
      product: "Pizza de Calabresa",
      amount: 36,
    },
    {
      product: "Pizza de Frango com Catupiri",
      amount: 32,
    },
    {
      product: "Pizza de Mussarela",
      amount: 28,
    },
    {
      product: "Pizza de Margherita",
      amount: 24,
    },
    {
      product: "Pizza de Bacon",
      amount: 20,
    },
  ]);
});
