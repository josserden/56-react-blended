import { formatDistance } from 'date-fns';

export const formatDate = date => {
  return formatDistance(new Date(date), new Date(), { addSuffix: true });
};
