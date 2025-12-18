import React, { memo } from 'react';
import { Trash2, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

type TBulkOperationsBarProps = {
  selectedCount: number;
  totalCount: number;
  onSelectAll: () => void;
  onDelete: () => void;
  onCancel: () => void;
};

const BulkOperationsBar: React.FC<TBulkOperationsBarProps> = ({
  selectedCount,
  totalCount,
  onSelectAll,
  onDelete,
  onCancel,
}) => {
  return (
    <Card className="p-2">
      <CardContent className="flex items-center justify-between p-2">
        <div className="flex items-center gap-4">
          <span className="font-medium">{selectedCount} selected</span>
          <Button
            variant="outline"
            size="sm"
            onClick={onSelectAll}
            className={cn(
              'text-gray-700 hover:text-gray-900',
              'dark:text-white dark:hover:text-gray-300'
            )}
          >
            {selectedCount === totalCount ? 'Deselect all' : 'Select all'}
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="destructive"
            size="sm"
            onClick={onDelete}
            disabled={selectedCount === 0}
            className="flex items-center justify-center gap-2"
          >
            <Trash2 className="h-4 w-4" />
            <span className="hidden sm:block">Delete</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={onCancel}
            className="gap-2"
          >
            <X className="h-4 w-4" />
            <span className="hidden sm:block">Cancel</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default memo(BulkOperationsBar);
