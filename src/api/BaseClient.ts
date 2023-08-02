import axios, {AxiosError, AxiosRequestConfig} from "axios";

export class BaseClient {
    static baseUrl = "https://rickandmortyapi.com/api"
    static async get<T>(url: string, options?: AxiosRequestConfig) {
        try {
            const response = await axios.get<T>(`${this.baseUrl}/${url}`, options)
            return response.data
        }catch (error) {
            return this.mapError(error as AxiosError<T>)
        }
    }
    static mapError<T>(error: AxiosError<T>) {
        return Promise.reject({data: error.response})
    }
    static get defaultOptions(): AxiosRequestConfig {
        return {
            withCredentials: true
        };
    }
    static getOptions(options?: AxiosRequestConfig) {
        if (options) {
            options.withCredentials = true;
            return options;
        }
        return this.defaultOptions;
    }
}
