import ReactFlow, {
  addEdge,
  Background,
  Connection,
  Controls,
  useEdgesState,
  useNodesState,
} from "reactflow";
import "reactflow/dist/style.css";
import { useCallback } from "react";
import {
  initialEdges,
  initialNodes,
} from "../constants/Paymnentflow.constants";
import PaymentInit from "./PaymentInit";
import PaymentCountry from "./PaymentCountry";
import PaymentProvider from "./PaymentProvider";
import PaymentProviderSelect from "./PaymentProviderSelect";
import CustomEdge from "../customComponents/CustomEdge";

// Define the custom node types
const nodeTypes = {
  paymentInit: PaymentInit,
  paymentCountry: PaymentCountry,
  paymentProvider: PaymentProvider,
  paymentProviderSelect: PaymentProviderSelect,
};

// Define the custom edge types
const edgeTypes = {
  customEdge: CustomEdge,
};

export const PaymnentFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes); // Removed setNodes
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Handle the connection event for adding edges
  const onConnect = useCallback(
    (connection: Connection) => {
      const edge = {
        ...connection,
        animated: true,
        id: `${edges.length} + 1`,
        type: "customEdge",
      };
      setEdges((prevEdges) => addEdge(edge, prevEdges));
    },
    [edges]
  );

  return (
    <div className="h-[500px] w-[500px] border border-black">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};
