import { http, HttpResponse } from "msw";

import { GetDailyRevenueInPeriodResponse } from "../get-daily-revenue-in-period";

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>("/metrics/daily-receipt-in-period", () => {
  return HttpResponse.json([
    { date: "2024-01-01", receipt: 1000 },
    { date: "2024-01-02", receipt: 1500 },
    { date: "2024-01-03", receipt: 1200 },
    { date: "2024-01-04", receipt: 900 },
    { date: "2024-01-05", receipt: 1700 },
    { date: "2024-01-06", receipt: 2000 },
    { date: "2024-01-07", receipt: 1400 },
  ]);
});
