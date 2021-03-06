export interface Brewery {
  id: string; // Unique id generated by Firebase
  uid: string; // User id who created the Brewery
  name: string;
  description: string;
  createdOn: Date;
  numberReviews: number;
  views: number;
}
