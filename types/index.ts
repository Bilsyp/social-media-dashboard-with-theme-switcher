export interface UserData {
  account: string;
  follower: number;
  counter: number;
  followType: string;
  platform: string;
  borderTop: string | string[];
  icon: string;
}
export interface UserView {
  page: {
    view: number;
    counter: number;
    viewType: string;
  };
  likes: {
    view: number;
    viewType: string;
    counter: number;
  };
  platform?: string;
}
