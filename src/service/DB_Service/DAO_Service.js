import { createFileDao, createALbumDao, createAlbumFileDao, FILE_DB_MYSQL, ALBUMFILE_DB_MYSQL, ALBUM_DB_MYSQL } from "../../DB/DBFactory.js";

export default class DAO_DB_Service{
    static fileDao= createFileDao(FILE_DB_MYSQL);
    static albumDao=createALbumDao(ALBUM_DB_MYSQL);
    static albumFileDao= createAlbumFileDao(ALBUMFILE_DB_MYSQL);
    static getFiles(fileParam){
        return this.fileDao.get(fileParam).then(res=>res);
    }
    static setFile(fileParam){
        this.fileDao.set(fileParam);
    }
    static updateFile(newFile, oldFile){
        this.fileDao.update(newFile, oldFile);
    }

    static async deleteFile(fileParam){
        this.fileDao.delete(fileParam);
    }


    static setAlbum(albumParam){
        this.albumDao.set(albumParam);
    }
    static getAlbums(albumParam){
        return this.albumDao.get(albumParam).then(res=>res);
    }
    static updateAlbum(newAlbum, oldAlbum){
        this.albumDao.update(newAlbum, oldAlbum);
    }
    static deleteAlbum(albumParam){
        this.albumDao.delete(albumParam);
    }

    
    static getAlbumFiles(albumFileParam){
        return this.albumFileDao.get(albumFileParam).then(res=>res);
    }
    static setAlbumFile(albumFileParam){
        this.albumFileDao.set(albumFileParam);
    }
    static updateAlbumFile(newAlbumFile, oldAlbumFile){
        this.albumFileDao.update(newAlbumFile, oldAlbumFile);
    }
    static deleteAlbumFile(albumFileParam){
        this.albumFileDao.delete(albumFileParam);
    }

}