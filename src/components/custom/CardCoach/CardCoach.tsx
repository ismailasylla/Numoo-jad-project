import React from 'react';
import { Container, CardContent, Footer, Tag } from './CardCoach.styled';
import { useHistory } from "react-router-dom";
import { CoachShortProfile } from 'components';

interface CoachProps {
  id: number;
  img: string;
  experience: number;
  numooHours: number;
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