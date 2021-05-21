import gql from 'graphql-tag';

export const CREATE_COACHEE = gql`
    mutation createCoachee($createCoachee: CreateCoacheeInput!) {
        createCoachee(createCoachee: $createCoachee) {
            _id,
        }
    }
`;