export interface IAllCharacters {
    info: {
        count: number,
        pages: number,
        next: string,
        prev: string
    }
    results: Array<ICharacter>
}

export interface ICharacter {
    id: number,
    name: string,
    status: Status,
    species: string,
    type: string,
    gender: Genders,
    origin: IInfo,
    location: IInfo,
    image: string,
    episode: Array<string>,
    created: string
}
export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "Unknown"
}
export enum Genders {
    Female = "Female",
    Male = "Male",
    Genderless = "Genderless",
    Unknown = "Unknown"
}

export interface IInfo {
    name: string,
    url: string
}

export interface IParams {
    page?: string,
    id?: number,
    name?: string,
    status?: string,
    species?: string,
    type?: string,
    gender?: string
}
