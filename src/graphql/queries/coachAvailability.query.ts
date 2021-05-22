import gql from 'graphql-tag';

export const COACH_AVAILABILITY = gql`
    query coachAvailability($coachId: String!, $date: String!) {
        coachAvailability(coachId: $coachId, date: $date) {
            chemCheckAvailableFrom,
            chemCheckAvailableTo,
            availableFrom,
            availableTo
        }
    }
`;