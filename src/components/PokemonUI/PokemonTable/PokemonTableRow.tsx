import { useCallback, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { TableCell, TableRow } from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';

import { formatDateString } from '@/utils/formatDateString';
import { cn } from '@/lib/utils';
import usePokedex from '@/hooks/usePokedex';
import { TPokemonDataRow } from '@/components/PokemonUI/PokemonTable/types';
import PokemonTypeBadge, { PokemonType } from '@/components/PokemonTypeBadge';

type TPokemonTableRowProps = TPokemonDataRow & {
  isSelectionMode?: boolean;
  isSelected?: boolean;
  onToggleSelection?: (id: number) => void;
  showCaughtDate: boolean;
};

const PokemonTableRow: React.FC<TPokemonTableRowProps> = ({
  pokemon,
  caughtAt,
  showCaughtDate,
  isSelectionMode = false,
  isSelected = false,
  onToggleSelection,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isCaught } = usePokedex();
  const navigate = useNavigate();
  const displayName = pokemon.name.replaceAll('-', ' ');
  const caught = isCaught(pokemon.id);

  const onHover = useCallback(() => setIsHovered(true), []);
  const onLeave = useCallback(() => setIsHovered(false), []);
  const onToggle = useCallback(() => {
    if (isSelectionMode) onToggleSelection?.(pokemon.id);
    else void navigate(`/pokemon/${pokemon.id}`);
  }, [isSelectionMode, onToggleSelection, navigate, pokemon.id]);

  return (
    <TableRow
      key={pokemon.id}
      className="h-12 hover:bg-gray-50 dark:hover:bg-gray-800"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onToggle}
    >
      {isSelectionMode && (
        <TableCell>
          <Checkbox
            checked={isSelected}
            onClick={() => onToggleSelection?.(pokemon.id)}
          />
        </TableCell>
      )}
      <TableCell className="font-medium">
        <Link
          to={`/pokemon/${pokemon.id}`}
          className={cn(isHovered && 'underline')}
        >
          #{pokemon.id.toString().padStart(3, '0')}
        </Link>
      </TableCell>
      <TableCell className="w-60">
        <div className="relative flex w-full items-center gap-3">
          {pokemon.sprites?.front_default && (
            <img
              src={pokemon.sprites.front_default}
              alt={displayName}
              className="h-8 w-8 object-contain"
            />
          )}
          <Link
            to={`/pokemon/${pokemon.id}`}
            className={cn(
              'truncate font-medium capitalize hover:underline',
              isHovered && 'underline'
            )}
          >
            {displayName}
          </Link>
        </div>
      </TableCell>
      <TableCell>
        <div className="flex gap-1">
          {pokemon.types.slice(0, 2).map(({ slot, type }) => (
            <PokemonTypeBadge
              key={`${slot}-${type.name}`}
              type={type.name as PokemonType}
            />
          ))}
        </div>
      </TableCell>
      <TableCell>{(pokemon.height / 10).toFixed(1)}m</TableCell>
      <TableCell>{(pokemon.weight / 10).toFixed(1)}kg</TableCell>
      {!showCaughtDate && (
        <TableCell className="text-center">
          {caught ? (
            <span className="font-medium text-green-600">✓ Caught</span>
          ) : (
            <span className="text-gray-400">—</span>
          )}
        </TableCell>
      )}
      {showCaughtDate && caughtAt && (
        <TableCell className="text-center text-xs text-gray-500">
          {formatDateString(caughtAt)}
        </TableCell>
      )}
    </TableRow>
  );
};

export default PokemonTableRow;
