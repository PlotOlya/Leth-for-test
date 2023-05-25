type MainReservation = {
  id: number | null;
  name: string;
  number: string;
  email: string;
  date: string;
  time: string;
  table: number | undefined;
  guests: string;
  comment: string;
  status: boolean;
};

export default MainReservation;
