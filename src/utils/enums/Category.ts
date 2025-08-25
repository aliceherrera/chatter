export const Favorite = {
  LIKED: "favorito",
  NOTLIKED: "nao favorito",
} as const;

export type Favorite = (typeof Favorite)[keyof typeof Favorite];

export const Follow = {
  FOLLOWING: "seguindo",
  NOTFOLLOWING: "nao seguindo",
} as const;

export type Follow = (typeof Follow)[keyof typeof Follow];
