import { useQuery } from "@tanstack/react-query";
import { DollarSign } from "lucide-react";

import { getMonthRevenueOrdersAmount } from "@/api/get-month-revenue";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { MetricCardSkeleton } from "./metric-card-skeleton";

export function MonthRevenueCard() {
  const { data: monthRevenueOrdersAmount } = useQuery({
    queryFn: getMonthRevenueOrdersAmount,
    queryKey: ["metrics", "month-revenue-orders-amount"],
  });

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Recita total do (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthRevenueOrdersAmount ? (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {(monthRevenueOrdersAmount.receipt / 100).toLocaleString(
                "pt-BR",
                {
                  style: "currency",
                  currency: "BRL",
                },
              )}
            </span>
            <p className="text-sm text-muted-foreground">
              {monthRevenueOrdersAmount.diffFromLastMonth >= 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    +{monthRevenueOrdersAmount.diffFromLastMonth}%
                  </span>{" "}
                  em relação ao mês passado
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    {monthRevenueOrdersAmount.diffFromLastMonth}%
                  </span>{" "}
                  em relação ao mês passado
                </>
              )}
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  );
}
