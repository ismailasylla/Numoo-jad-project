import gql from 'graphql-tag';

export const COACH_BOOKED_SESSIONS = gql`
    query coachBookedSessions($coachId: string, $date: string) {
        coachBookedSessions(coachId: $coachId, date: $date) {
            _id,
            startsOn,
            status,
            isChemCheck,
        }
    }
`;