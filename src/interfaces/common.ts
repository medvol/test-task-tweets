export interface IUser {
    id: number;
    user: string;
    tweets: number;
    followers: number;
    avatar: string;
  
}

export interface ICardItemProps{
    user: IUser
}