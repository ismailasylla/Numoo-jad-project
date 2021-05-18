import React from 'react';
import { Container, CardContent, Footer, Tag } from './CardCoach.styled';
import { useHistory } from "react-router-dom";
import { CoachShortProfile } from 'components';

interface CoachProps {
  id: number;
  experience: number;
  numooHours: number;
  rating: number;
  name: string;
  short: string;
  location: string;
  price: string;
  tags: Array<string>
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
          name={data.name}
          about={data.short}
          location={data.location}
        />

        <div>
          <h2>{data.price} /hr</h2>
        </div>

        <Footer>
          {data.tags.map((item, key) =>
            <Tag
              key={key}
            >{item}</Tag>
          )}
        </Footer>

      </CardContent>
    </Container>
  )
}

export default CardCoach;