import { ChevronBarDown } from "react-bootstrap-icons";
import { useReactFlow } from "reactflow";
import { useState } from "react"; // Import useState

const PAYMENT_PROVIDERS = [
  { code: "St", name: "Stripe" },
  { code: "Gp", name: "Google Pay" },
  { code: "Ap", name: "Apple Pay" },
  { code: "Pp", name: "Paypal" },
  { code: "Am", name: "Amazon Pay" },
];

export default function PaymentProviderSelect() {
  const { setNodes } = useReactFlow();
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown open/close

  const onProviderClick = ({ name, code }: { name: string; code: string }) => {
    const location = Math.random() * 500;

    setNodes((prevNodes) => [
      ...prevNodes,
      {
        id: `${prevNodes.length + 1}`,
        data: { name, code },
        type: "paymentProvider",
        position: { x: location, y: location },
      },
    ]);

    setIsOpen(false); // Close dropdown when a provider is selected
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setIsOpen((prev) => !prev)} // Toggle dropdown
          className="inline-flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md"
        >
          Add Payment Provider
          <ChevronBarDown className="ml-2 -mr-1 h-5 w-5" />
        </button>
      </div>

      {isOpen && ( // Conditionally render dropdown based on isOpen state
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {PAYMENT_PROVIDERS.map((provider) => (
              <button
                key={provider.code}
                onClick={() => onProviderClick(provider)}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {provider.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
