const schema = `
"""
A hello world Query
"""
type Query {
   hello: String!
}

type ListingType {
   name: String
}
   
type ListingActivities {
   name: String
}
   
type Guide {
   Name: String
   Bio: String
   Avatar: String
}
   
type Listing {
   listingId: String
   coverPhoto: String
   listingName: String
   listingDescription: String
   listingType: [ListingType]
   listingLocation: String
   listingActivities: [ListingActivities]
   specialType: String
   specialAmount: Int
   rating: Int
   guide: Guide
   price: String
   numberOfDays: Int
}

type Query {
   getAllListings: [Listing]
}
`
export { schema }
