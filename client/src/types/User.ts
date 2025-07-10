export interface IUser  {
    name: string,
    email: string,
    password?: string,
    image: string,
    balance: number,
    savedAccounts: string[],
    tranzactions: object[],
    accounts: string[],
    googleId?: string,
    displayName?: string,
    firstName?: string,
    lastName?: string,
    chats?: string[]
}