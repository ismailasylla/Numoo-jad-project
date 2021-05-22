import gql from 'graphql-tag';

export const COACHEE = gql`
    query coachee {
        coachee {
            _id,
            firstName,
            lastName,
            email,
            dateOfBirth,
            nationality,
            countryOfResidence,
            gender,
            yearsOfExperience,
            occupation,
            highestEducationLevel,
            coachingInterest,
            chemChecksRemaining
        }
    }
`;