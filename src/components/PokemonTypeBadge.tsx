import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';

export type PokemonType =
  | 'normal'
  | 'fighting'
  | 'flying'
  | 'poison'
  | 'ground'
  | 'rock'
  | 'bug'
  | 'ghost'
  | 'steel'
  | 'fire'
  | 'water'
  | 'grass'
  | 'electric'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy'
  | 'stellar'
  | 'unknown'
  | 'shadow';

type PokemonTypeBadgeProps = {
  type: PokemonType;
  className?: string;
};

const typeColors: Record<PokemonType, { bg: string; text: string }> = {
  normal: { bg: '#A8A878', text: '#000000' },
  fighting: { bg: '#C03028', text: '#FFFFFF' },
  flying: { bg: '#A890F0', text: '#000000' },
  poison: { bg: '#A040A0', text: '#FFFFFF' },
  ground: { bg: '#E0C068', text: '#000000' },
  rock: { bg: '#B8A038', text: '#FFFFFF' },
  bug: { bg: '#A8B820', text: '#000000' },
  ghost: { bg: '#705898', text: '#FFFFFF' },
  steel: { bg: '#B8B8D0', text: '#000000' },
  fire: { bg: '#F08030', text: '#FFFFFF' },
  water: { bg: '#6890F0', text: '#FFFFFF' },
  grass: { bg: '#78C850', text: '#000000' },
  electric: { bg: '#F8D030', text: '#000000' },
  psychic: { bg: '#F85888', text: '#FFFFFF' },
  ice: { bg: '#98D8D8', text: '#000000' },
  dragon: { bg: '#7038F8', text: '#FFFFFF' },
  dark: { bg: '#705848', text: '#FFFFFF' },
  fairy: { bg: '#EE99AC', text: '#000000' },
  stellar: { bg: '#FFFFFF', text: '#000000' },
  unknown: { bg: '#68A090', text: '#FFFFFF' },
  shadow: { bg: '#3B3052', text: '#FFFFFF' },
};

const PokemonTypeBadge: React.FC<PokemonTypeBadgeProps> = ({
  type,
  className,
}) => {
  const colors = typeColors[type] || typeColors.unknown;

  return (
    <Badge
      className={cn('border-none font-semibold capitalize', className)}
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
      }}
    >
      {type}
    </Badge>
  );
};

export default PokemonTypeBadge;
