import React from "react";
import { NodeProps } from "reactflow";

export default function CountryForPayment({
  data: { currency, country, countryCode },
}: NodeProps<{
  currency: string;
  country: string;
  countryCode: string;
}>) {
  return <div>CountryForPayment</div>;
}
