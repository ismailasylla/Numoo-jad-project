import gql from 'graphql-tag';

export const BOOK_CHEM_CHECK_SESSION = gql`
    mutation bookChemCheckSession($coachId: String!, $startsOn: String!) {
        bookChemCheckSession(coachId: $coachId, startsOn: $startsOn) {
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
        }
    }
`;