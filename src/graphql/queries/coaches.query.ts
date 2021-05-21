import gql from 'graphql-tag';

export const COACHES = gql`
    query coaches {
      coaches {
        _id,

            firstName,
            lastName,
            email,
            slugName,
            image,
            location,
            languages,
            currentProfession,
            yearsOfExperience,
            educationalBackground,
            certifications,
            coachingType,
            gender,
            hoursOfCoaching,
            topics,
            languages
        }
    }
`;