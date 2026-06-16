export type Blog = {
  _id: string;
  title: string;
  featuredImage: string;
  category:
    string;
  excerpt: string;
  featured: boolean;
  readingTime: string;
  createdAt: string;
  likes?:number;
  shareCount?:number;
};

export type User = {
    _id: string,
    email:string,
    token?:string,
    admin?:true
}

export type SubscriberType ={
  _id:string,
  email:string,
  firstName:string,
  lastName:string,
  service:string
}