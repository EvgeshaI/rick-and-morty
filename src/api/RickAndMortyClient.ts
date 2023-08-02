import {BaseClient} from "./BaseClient";
import {IAllCharacters, ICharacter, IParams} from "../app/types";


export class MonitoringClient extends BaseClient {
    static async getAllCharacters (params?: IParams) {
        return this.get<IAllCharacters>(`/character`, {params})
    }
    static async getInfoOfCharacter (id: number) {
        return this.get<ICharacter>(`/character/${id}`)
    }
}

