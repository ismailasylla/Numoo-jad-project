import gql from 'graphql-tag';

export const BOOK_BUNDLE_SESSION = gql`
    mutation bookBundleSession($bundleId: String!, $startsOn: String!) {
        bookBundleSession(bundleId: $bundleId, startsOn: $startsOn) {
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