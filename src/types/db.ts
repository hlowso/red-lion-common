export interface UserRow {
  id: number;
  username: string;
  email: string;
}

export interface GameRow {
  id: number;
  name: string;
}

export interface CharacterLogSubjectRow {
  id: number;
  characterId: number;
  logId: number;
}

export interface ActivityLogObjectRow {
  id: number;
  activityId: number;
  logId: number;
}

export interface TallyRow {
  id: number;
  gameId: number;
  name: string;
  key: string;
  description: string;
  icon: string;
}
