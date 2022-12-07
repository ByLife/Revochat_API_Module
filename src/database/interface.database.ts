export interface I_Database { // This is the interface for the database

}

export interface I_Database_Column { // Database Interface for the columns
    name: string;
    type: string;
    primary?: boolean;
    autoincrement?: boolean;
    length?: number;
    foreign?: string;
}

export interface I_Database_Table { // Database Interface for the tables
    table_name: string;
    columns: I_Database_Column[];
}
