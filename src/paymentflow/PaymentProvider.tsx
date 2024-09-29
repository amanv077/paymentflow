import { X } from "react-bootstrap-icons";
import { NodeProps, Position, useReactFlow } from "reactflow";
import CustomHandle from "../customComponents/CustomHandle";

const PAYMENT_PROVIDER_IMAGE_MAP: { [code: string]: string } = {
  St: "https://cdn.worldvectorlogo.com/logos/stripe-2.svg",
  Ap: "https://cdn.worldvectorlogo.com/logos/apple-14.svg",
  Gp: "https://cdn.worldvectorlogo.com/logos/google-g-2015.svg",
  Pp: "https://avatars.githubusercontent.com/u/476675?s=280&v=4",
  Am: "https://static.wixstatic.com/media/d2252d_4c1a1bda6a774bd68f789c0770fd16e5~mv2.png",
};

export default function PaymentProvider({
  data: { name, code },
  id,
}: NodeProps<{ name: string; code: string }>) {
  const { setNodes } = useReactFlow();

  return (
    <div className="flex items-center bg-white border-2 border-blue-600 p-1 pb-1 pl-3 gap-2 rounded-3xl w-[140px]">
      <div className="h-4 w-4">
        <img
          className="h-full w-full"
          src={PAYMENT_PROVIDER_IMAGE_MAP[code]}
          alt={`${name} logo`}
        />
      </div>
      <div className="flex-grow">
        <p className="text-sm -mt-0.5">{name}</p>
      </div>
      <button
        aria-label="Delete Payment Provider"
        className="text-red-500 bg-transparent p-1"
        onClick={() =>
          setNodes((prevNodes) => prevNodes.filter((node) => node.id !== id))
        }
      >
        <X />
      </button>
      <CustomHandle type="target" position={Position.Left} />
    </div>
  );
}
