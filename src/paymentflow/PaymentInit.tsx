import { NodeProps, Position } from "reactflow";
import CustomHandle from "../customComponents/CustomHandle";

export default function PaymentInit({
  data: { amount },
}: NodeProps<{ amount: number }>) {
  return (
    <div className="bg-white border border-purple-600">
      <div className="bg-purple-900 p-1">
        <p className="text-sm text-white">Payment Initialized</p>
      </div>
      <div className="p-2">
        <p className="text-2xl text-blue-600">${amount}</p>
      </div>
      <CustomHandle type="source" position={Position.Right} />
    </div>
  );
}
