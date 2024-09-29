import { Handle, HandleProps } from "reactflow";

export default function CustomHandle(props: HandleProps) {
  return (
    <Handle className="w-2 h-2 bg-white border-2 border-black" {...props} />
  );
}
