import gql from 'graphql-tag';

export const CANCEL_SESSION = gql`
    mutation cancelSession($sessionId: String!, $cancellationReason: String!) {
        cancelSession(sessionId: $sessionId, cancellationReason: $cancellationReason) {
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