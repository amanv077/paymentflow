import React from "react";
import { Handle, NodeProps, Position } from "reactflow";

export default function PaymentInit({
  data: { amount },
}: NodeProps<{ amount: number }>) {
  return (
    <div className=" bg-white border border-blue-950">
      <div className=" bg-blue-800 p-1">
        <h2 className=" text-lg text-white">Payment Initialized</h2>
      </div>
      <div className="p-2">
        <h3 className=" text-lg text-blue-800">${amount}</h3>
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  );
}
