import gql from 'graphql-tag';

export const BUNDLE = gql`
    query bundle($bundleId: String!) {
        bundle(bundleId: $bundleId) {
            name,
            totalSessions,
            price,
            coachId,
            coachFirstName,
            coachLastName,
            coachEmail,
            remainingSessions
        }
    }
`;