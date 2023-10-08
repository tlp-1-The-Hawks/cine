import { sequelize } from "../config/database.js" 
import { DataTypes } from "sequelize"

export const infoMovieModel = sequelize.define(
    'infomovie', {
    director: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release_year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    synopsis: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    actors: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    score: {
      type: DataTypes.FLOAT,
      allowNull: false,
    }
    })

//services

export async function addInfoMovie(  director,
        release_year,
        genre,
        synopsis,
        duration,
        rating,
        actors,
        score){
 return await infoMovieModel.create({  director,
            release_year :release_year,
            genre  :genre,
            synopsis  :synopsis,
            duration  :duration,
            rating  :rating,
            actors :actors,
            score :score})
    } 

