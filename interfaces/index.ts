export interface PropertyProps {
    name: string,
    address: {
        state: string,
        city: string,
        country: string
    },
    rating: number,
    category: string[],
    price: number,
    offers: {
        bed: string,
        shower: string,
        occupants: string
    },
    image: string,
    discount?: string,
    description?: string,


}

interface Button{
    content: string,
    onClick?: () => void;
}

interface Card{
    title: string;
    content: string;
}

export interface ReviewProps {
  image: string;        
  name: string;         
  yearsOnALX: number;   
  date: string;         
  tripType: string;     
  review: string;       
}
