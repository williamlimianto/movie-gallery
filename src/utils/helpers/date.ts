import moment from 'moment';

export const formatDate = (dateString: Date | string): Date | string => {
  try {
    const formattedDate = moment(dateString).format('MMMM Do YYYY, HH:mm');
    return formattedDate;
  } catch {
    return (dateString || '').toString();
  }
};
