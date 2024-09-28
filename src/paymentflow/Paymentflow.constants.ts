import { Edge, Node } from "reactflow";

export const initialEdges: Edge[] = [];

export const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: { amount: 10 },
    type: "paymentInit",
  },
  {
    id: "2",
    position: { x: 200, y: 20 },
    data: { currency: "$", country: "United State", countryCode: "US" },
    type: "CountryForPayment",
  },
  {
    id: "3",
    position: { x: 300, y: 200 },
    data: { currency: "&", country: "England", countryCode: "GB" },
    type: "CountryForPayment",
  },
];
