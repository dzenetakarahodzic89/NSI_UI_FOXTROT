export interface Branch {
  id?: string;
  address: string;
  city: string;
}

export const BRANCHES: Branch[] = [
  {
    id: '1000',
    address: 'Dzemala Bijedica 90',
    city: 'Sarajevo'
  },
  {
    id: '2000',
    address: 'Envera Sehovica 20',
    city: 'Tuzla'
  },
];
