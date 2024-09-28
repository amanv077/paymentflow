import ReactFlow, { Node } from "reactflow";
import "reactflow/dist/style.css";

const nodes: Node[] = [
  {
    id: "1",
    data: {
      label: "node 1",
    },
    position: { x: 100, y: 100 },
  },
  {
    id: "2",
    data: {
      label: "node 2",
    },
    position: { x: 200, y: 200 },
  },
];

export const PaymnentFlow = () => {
  return (
    <div className="w-[500px] h-[500px] border border-black">
      <ReactFlow nodes={nodes}></ReactFlow>
    </div>
  );
};
