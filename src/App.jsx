import { Button, Flex } from '@radix-ui/themes';
import { Map } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Flex className="p-4" justify="center" gap="4">
        <Button>Radix Button</Button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md flex items-center gap-2">
          <Map className="w-4 h-4" />
          Tailwind Button
        </button>
      </Flex>
    </div>
  );
}

export default App;