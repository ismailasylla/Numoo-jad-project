import gql from 'graphql-tag';

export const RESCHEDULE_SESSION = gql`
    mutation rescheduleSession($sessionId: String!, $rescheduledTo: String!, $rescheduleReason: String!) {
        rescheduleSession(sessionId: $sessionId, rescheduledTo: $rescheduledTo, rescheduleReason: $rescheduleReason) {
            _id,
            coachId,
            coachFirstName,
            coachLastName,
            coachEmail,
            coachTimeZone,
            startsOn,
            status,
            isChemCheck,
            bookedOn,
            bundleId
        }
    }
`;