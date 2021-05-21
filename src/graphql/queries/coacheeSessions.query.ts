import gql from 'graphql-tag';

export const COACHEE_SESSIONS = gql`
    query coacheeSessions {
        coacheeSessions {
            _id,
            coachId,
            coachFirstName,
            coachLastName,
            coachEmail,
            coachTimeZone,
            startsOn,
            status,
            isChemCheck,
            bundleId,
            rescheduledTo,
            rescheduledOn,
            rescheduleReason,
            rescheduledSessionId,
            cancellationReason,
            cancelledOn,
            bookedOn,
            completedOn
        }
    }
`;