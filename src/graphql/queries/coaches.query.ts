import gql from 'graphql-tag';

export const COACHES = gql`
    type Filter {
        coachingType: [String];
        gender: String;
        languages: [string];
        location: String;
        experience: Float;
        budget: number;
    } 

    query coaches($top: Int, $skip: Int, $filter: Filter) {
      coaches(top: $top,
      skip: $skip,
      filter: {
         coachingType: $filter.coachingType,
         gender:  $filter.gender,
         languages: $filter.languages,
         location: $filter.location,
         experience: $filter.experience,
         budget: $filter.number
      }) {
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