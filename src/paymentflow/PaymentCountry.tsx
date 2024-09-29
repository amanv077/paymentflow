import ReactCountryFlag from "react-country-flag";
import { NodeProps, Position } from "reactflow";
import CustomHandle from "../customComponents/CustomHandle";

export default function PaymentCountry({
  data: { currency, country, countryCode },
}: NodeProps<{
  currency: string;
  country: string;
  countryCode: string;
}>) {
  return (
    <div className="flex items-center bg-gray-200 border-2 border-gray-400 p-2 gap-2 rounded-lg w-[155px]">
      <div>
        <ReactCountryFlag
          countryCode={countryCode}
          svg
          aria-label={country}
          style={{ fontSize: "2em", lineHeight: "2em" }}
        />
      </div>
      <div className="flex-grow">
        <div>
          <p>{country}</p>
          <p className="text-xs">{currency}</p>
        </div>
      </div>
      <CustomHandle type="source" position={Position.Right} />
      <CustomHandle type="target" position={Position.Left} />
    </div>
  );
}
