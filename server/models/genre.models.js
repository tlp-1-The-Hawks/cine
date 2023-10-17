import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const genreModel = sequelize.define(
  'genre',
  {
    genre: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)

//Services
export async function createGenre() {
  const genresToCreate =
    [
      {
        "id": 1,
        "genre": "Acción"
      },
      {
        "id": 2,
        "genre": "Horror"
      },
      {
        "id": 3,
        "genre": "Aventura"
      },
      {
        "id": 4,
        "genre": "Animación"
      },
      {
        "id": 5,
        "genre": "Comedia"
      },
      {
        "id": 6,
        "genre": "Drama"
      },
      {
        "id": 7,
        "genre": "Ciencia ficción"
      },
      {
        "id": 8,
        "genre": "Terror"
      },
      {
        "id": 9,
        "genre": "Suspenso"
      },
      {
        "id": 10,
        "genre": "Romance"
      },
      {
        "id": 11,
        "genre": "Crimen"
      },
      {
        "id": 12,
        "genre": "Documental"
      },
      {
        "id": 13,
        "genre": "Musical"
      },
      {
        "id": 14,
        "genre": "Misterio"
      },
      {
        "id": 15,
        "genre": "Histórico"
      },
      {
        "id": 16,
        "genre": "Guerra"
      },
      {
        "id": 17,
        "genre": "Deportes"
      },
      {
        "id": 18,
        "genre": "Familiar"
      },
      {
        "id": 19,
        "genre": "Superhéroes"
      },
      {
        "id": 20,
        "genre": "Ciencia"
      }
    ]

  for (const genreData of genresToCreate) {
    const existingGenre = await genreModel.findOne({ where: { genre: genreData.genre } });

    if (!existingGenre) {
      await genreModel.create(genreData);
    }
  }
}

export async function addGenre(genre) {
  return await genreModel.create({
    genre: genre
  }) ?? null
}

export async function getAllGenre() {
  return await genreModel.findAll()
}