export interface I_Database {

}

export interface I_Database_Column {
    name: string;
    type: string;
    primary?: boolean;
    autoincrement?: boolean;
    length?: number;
    foreign?: string;
}

export interface I_Database_Table {
    table_name: string;
    columns: Column[];
}