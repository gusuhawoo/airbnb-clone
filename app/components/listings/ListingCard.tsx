'use client';

import { Listing, Reservation } from '@prisma/client';

import { SafeUser } from '@/app/types';
import { useRouter } from 'next/navigation';
import useCountries from '@/app/hooks/useCountries';
import { useCallback } from 'react';

interface ListingCardProps {
  data: Listing;
  reservation?: Reservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionId?: string;
  currentUser?: SafeUser | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
  data,
  reservation,
  onAction,
  disabled,
  actionId = '',
  currentUser,
}) => {
  const router = useRouter();
  const { getByValue } = useCountries();

  const location = getByValue(data.locationValue);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) {
        return;
      }

      onAction?.(actionId);
    },
    [onAction, actionId, disabled]
  );

  return (
    <div>
      <div>ff</div>
    </div>
  );
};

export default ListingCard;
