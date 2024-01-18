import { UserData, UserView } from "@/types";

export const dataUserAccountMedia: { user: UserData[]; userView: UserView[] } =
  {
    user: [
      {
        account: "@nathanf",
        icon: "/icon-facebook.svg",
        follower: 1987,
        counter: 21,
        followType: "followers",
        borderTop: "rgb(25,143,245)",
        platform: "facebook",
      },
      {
        icon: "/icon-twitter.svg",
        account: "@nathanf",
        followType: "followers",
        follower: 1044,
        counter: 99,
        borderTop: "rgb(28,160,242)",
        platform: "twitter",
      },
      {
        icon: "/icon-instagram.svg",
        account: "@realnathanf",
        followType: "followers",
        borderTop: "yellow",

        follower: 11044,
        counter: 1099,
        platform: "instagram",
      },
      {
        icon: "/icon-youtube.svg",
        account: "Natfhan F.",
        followType: "subcribers",
        borderTop: "rgb(196,3,42)",
        follower: 8239,
        counter: -144,
        platform: "youtube",
      },
    ],
    userView: [
      {
        platform: "facebook",

        page: {
          viewType: "page views",
          view: 87,
          counter: 3,
        },
        likes: {
          view: 52,
          viewType: "likes",
          counter: -2,
        },
      },
      {
        platform: "instagram",
        page: {
          viewType: "profile views",
          view: 57000,
          counter: 1375,
        },
        likes: {
          view: 5643,
          counter: 2257,
          viewType: "likes",
        },
      },
      {
        platform: "twitter",
        page: {
          viewType: "retweets",
          view: 117,
          counter: 303,
        },
        likes: {
          view: 507,
          counter: 553,
          viewType: "likes",
        },
      },
      {
        platform: "youtube",
        page: {
          viewType: "total views",
          view: 1407,
          counter: -12,
        },
        likes: {
          view: 507,
          counter: -19,
          viewType: "likes",
        },
      },
    ],
  };
