import gql from 'graphql-tag';

export const CREATE_COACHEE = gql`
    mutation createCoachee($firstName: String!,
    $lastName: String!,
    $email: String!,
    $dateOfBirth: String!,
    $firebaseAuthId: String!,
    $nationality: String,
    $countryOfResidence: String,
    $gender: String,
    $yearsOfExperience: Float,
    $occupation: String,
    $highestEducationLevel: String,
    $coachingInterest: String) {
        createCoachee(createCoachee: {
            firstName: $firstName,
            lastName: $lastName,
            email: $email,
            dateOfBirth: $dateOfBirth,
            firebaseAuthId: $firebaseAuthId,
            nationality: $nationality,
            countryOfResidence: $countryOfResidence,
            gender: $gender,
            yearsOfExperience: $yearsOfExperience,
            occupation: $occupation,
            highestEducationLevel: $highestEducationLevel,
            coachingInterest: $coachingInterest
        }) {
            _id,
        }
    }
`;