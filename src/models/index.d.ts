import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";

export enum Activities {
  CYCLING = "CYCLING",
  HIKING = "HIKING",
  TREKKING = "TREKKING",
  CONCERT = "CONCERT",
  PARTY = "PARTY",
  MOVIE = "MOVIE",
  GYM = "GYM",
  WALK = "WALK"
}

export enum Genders {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER"
}



type EagerMatch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Match, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly User1: User;
  readonly User2: User;
  readonly User1ID: string;
  readonly User2ID: string;
  readonly isMatch: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMatch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Match, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly User1: AsyncItem<User>;
  readonly User2: AsyncItem<User>;
  readonly User1ID: string;
  readonly User2ID: string;
  readonly isMatch: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Match = LazyLoading extends LazyLoadingDisabled ? EagerMatch : LazyMatch

export declare const Match: (new (init: ModelInit<Match>) => Match) & {
  copyOf(source: Match, mutator: (draft: MutableModel<Match>) => MutableModel<Match> | void): Match;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly bio: string;
  readonly gender: Genders | keyof typeof Genders;
  readonly lookingFor: Genders | keyof typeof Genders;
  readonly sub: string;
  readonly preferredActivity: Activities | keyof typeof Activities;
  readonly activity: Activities | keyof typeof Activities;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly bio: string;
  readonly gender: Genders | keyof typeof Genders;
  readonly lookingFor: Genders | keyof typeof Genders;
  readonly sub: string;
  readonly preferredActivity: Activities | keyof typeof Activities;
  readonly activity: Activities | keyof typeof Activities;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}