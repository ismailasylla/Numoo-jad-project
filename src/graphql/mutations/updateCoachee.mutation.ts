import gql from 'graphql-tag';

export const UPDATE_COACHEE = gql`
    mutation updateCoachee($updateCoachee: UpdateCoacheeInput!) {
        updateCoachee(updateCoachee: $updateCoachee) {
            _id,
        }
    }
`;