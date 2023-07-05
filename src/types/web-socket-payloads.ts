export namespace SocketPayload {
    export interface Identify {
        userId: number
    }

    export interface Notify {
        uuid: string;
        header: string;
        body: string;
        variant: string;
    }
};