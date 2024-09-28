import { useCallback } from "react";
import ReactFlow, {
  addEdge,
  Background,
  Connection,
  Controls,
  Edge,
  Node,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import PaymentInit from "./PaymentInit";
import { initialEdges, initialNodes } from "./Paymentflow.constants";
import CountryForPayment from "./CountryForPayment";

// const initialNodes: Node[] = [
//   {
//     id: "1",
//     data: {
//       label: "node 1",
//     },
//     position: { x: 100, y: 100 },
//   },
//   {
//     id: "2",
//     data: {
//       label: "node 2",
//     },
//     position: { x: 200, y: 200 },
//   },
//   {
//     id: "3",
//     data: {
//       label: "node 3",
//     },
//     position: { x: 300, y: 300 },
//   },
// ];
// const initialEdges: Edge[] = [
//   {
//     id: "1-2",
//     source: "1",
//     target: "2",
//     animated: true,
//   },
// ];
const nodeTypes = {
  paymentinit: PaymentInit,
  CountryForPayment: CountryForPayment,
};

export const PaymnentFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((connection: Connection) => {
    const edge = { ...connection, animated: true, id: `${edges.length} + 1` };
    setEdges((prevEdges) => addEdge(edge, prevEdges));
  }, []);

  return (
    <div className="w-[500px] h-[500px] border border-black">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />

        <Controls />
      </ReactFlow>
    </div>
  );
};
