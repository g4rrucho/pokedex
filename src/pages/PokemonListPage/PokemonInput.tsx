import { Input } from '@/components/ui/input';

type PokemonInputProps = {
  input: string;
  setInput: (input: string) => void;
};

const PokemonInput: React.FC<PokemonInputProps> = ({ input, setInput }) => {
  return (
    <Input
      placeholder="Enter pokemon name"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};

export default PokemonInput;
