import AlbumFileMysqlDao from "./MYSQLDB/albumFileMysqlDao.js";
import albumMysqlDao from "./MYSQLDB/albumMysqlDao.js";
import fileMysqlDao from "./MYSQLDB/fileMysqlDao.js";

export const FILE_DB_MYSQL=1;
export const ALBUM_DB_MYSQL=1;
export const ALBUMFILE_DB_MYSQL=1;

const FILE_DB_OPTIONS={
    FILE_DB_MYSQL: fileMysqlDao
}
const ALBUM_DB_OPTIONS={
    ALBUM_DB_MYSQL:albumMysqlDao
}
const ALBUM_FILE_DB_OPTIONS={
    ALBUMFILE_DB_MYSQL:AlbumFileMysqlDao    
}

export function createFileDao(dbType){
    return new FILE_DB_OPTIONS[dbType]();
}

export function createALbumDao(dbType){
    return new ALBUM_DB_OPTIONS[dbType]();
}

export function createAlbumFileDao(dbType){
    return new ALBUM_FILE_DB_OPTIONS[dbType]();
}