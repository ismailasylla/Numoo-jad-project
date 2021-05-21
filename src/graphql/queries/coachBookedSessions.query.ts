import gql from 'graphql-tag';

export const COACH_BOOKED_SESSIONS = gql`
    query coachBookedSessions($coachId: String!, $date: String!) {
        coachBookedSessions(coachId: $coachId, date: $date) {
            _id,
            startsOn,
            status,
            isChemCheck,
        }
    }
`;