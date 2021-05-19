import React from 'react';
import { Container, CardContent } from './CardCoach.styled';
import { useHistory } from "react-router-dom";
import { CoachShortProfile, CoachStatistics } from 'components';


interface CoachProps {
  id: number;
  img: string;
  experience: string;
  numooHours: string;
  rating: number;
  name: string;
  short: string;
  location: string;
  price: string;
  tags: Array<string>
  categories: Array<string>;
  languages: Array<string>;
}
interface Props {
  data: CoachProps
}

function CardCoach({ data }: Props) {
  const history = useHistory();

  return (
    <Container>
      <CardContent onClick={() => history.push(`/app/coach/${data.id}`)}>

        <CoachShortProfile
          pic={data.img}
          name={data.name}
          about={data.short}
          location={data.location}
          categories={data.categories}
          languages={data.languages}
        />
        <CoachStatistics
          numooHours={data.numooHours}
          experience={data.experience}
          rating={data.rating}
          tags={data.tags}
        />
        

      </CardContent>
    </Container>
  )
}

export default CardCoach;