import gql from 'graphql-tag';

export const UPDATE_COACHEE = gql`
    mutation updateCoachee($firstName: String,
    $lastName: String,
    $email: String,
    $dateOfBirth: String,
    $nationality: String,
    $countryOfResidence: String,
    $gender: String,
    $yearsOfExperience: Float,
    $occupation: String,
    $highestEducationLevel: String,
    $coachingInterest: String) {
        updateCoachee(createCoachee: {
            firstName: $firstName,
            lastName: $lastName,
            email: $email,
            dateOfBirth: $dateOfBirth,
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