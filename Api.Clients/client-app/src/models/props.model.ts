export interface IApp {
    loadClientsData: () => void;
}

export interface ApiStatus {
    readonly errorMessage?: string;
}
