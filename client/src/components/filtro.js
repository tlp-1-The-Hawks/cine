
const response = [
    {
        "id": 19,
        "title": "dadsa",
        "rating": "0",
        "createdAt": "2023-11-08T19:43:51.000Z",
        "updatedAt": "2023-11-08T19:43:51.000Z",
        "cinemas": [
            {
                "id": 1,
                "name": "Avenida",
                "address": "a",
                "createdAt": "2023-11-07T17:20:21.000Z",
                "updatedAt": "2023-11-07T17:20:21.000Z",
                "movie_cinema": {
                    "movieId": 19,
                    "cinemaId": 1
                }
            }
        ],
        "information": [
            {
                "id": 21,
                "rutaImage": "TecnologíaInternet.png",
                "director": "dasda",
                "description": "dasdsa",
                "duration": "2123",
                "actors": "dasdsa",
                "price": "11",
                "url_trailer": "dasdas",
                "createdAt": "2023-11-08T19:43:51.000Z",
                "updatedAt": "2023-11-08T19:43:51.000Z",
                "cinemaId": 1,
                "genreId": 1,
                "type_emissionId": 1,
                "hallId": 1,
                "movieInfo": {
                    "movieId": 19,
                    "informationId": 21
                },
                "genre": {
                    "id": 1,
                    "genre": "Acción"
                }
            }
        ]
    },
    {
        "id": 20,
        "title": "asdasd",
        "rating": "0",
        "createdAt": "2023-11-08T19:45:16.000Z",
        "updatedAt": "2023-11-08T19:45:16.000Z",
        "cinemas": [
            {
                "id": 1,
                "name": "Avenida",
                "address": "a",
                "createdAt": "2023-11-07T17:20:21.000Z",
                "updatedAt": "2023-11-07T17:20:21.000Z",
                "movie_cinema": {
                    "movieId": 20,
                    "cinemaId": 1
                }
            }
        ],
        "information": [
            {
                "id": 22,
                "rutaImage": "TecnologíaInternet.png",
                "director": "dasdsa",
                "description": "dadsa",
                "duration": "12312",
                "actors": "dadas",
                "price": "11",
                "url_trailer": "dsadsa",
                "createdAt": "2023-11-08T19:45:16.000Z",
                "updatedAt": "2023-11-08T19:45:16.000Z",
                "cinemaId": 1,
                "genreId": 1,
                "type_emissionId": 1,
                "hallId": 1,
                "movieInfo": {
                    "movieId": 20,
                    "informationId": 22
                },
                "genre": {
                    "id": 1,
                    "genre": "Acción"
                }
            }
        ]
    },
    {
        "id": 21,
        "title": "dasdsa",
        "rating": "0",
        "createdAt": "2023-11-08T19:47:09.000Z",
        "updatedAt": "2023-11-08T19:47:09.000Z",
        "cinemas": [
            {
                "id": 1,
                "name": "Avenida",
                "address": "a",
                "createdAt": "2023-11-07T17:20:21.000Z",
                "updatedAt": "2023-11-07T17:20:21.000Z",
                "movie_cinema": {
                    "movieId": 21,
                    "cinemaId": 1
                }
            }
        ],
        "information": [
            {
                "id": 23,
                "rutaImage": "ingles.png",
                "director": "dadas",
                "description": "dsadsa",
                "duration": "123",
                "actors": "dsadsa",
                "price": "123",
                "url_trailer": "dadsa",
                "createdAt": "2023-11-08T19:47:09.000Z",
                "updatedAt": "2023-11-08T19:47:09.000Z",
                "cinemaId": 1,
                "genreId": 1,
                "type_emissionId": 1,
                "hallId": 1,
                "movieInfo": {
                    "movieId": 21,
                    "informationId": 23
                },
                "genre": {
                    "id": 1,
                    "genre": "Acción"
                }
            }
        ]
    }
]


function filterByTitle(movieList, title) {
    return movieList.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
}


const searchTerm = "dasdsa";
const filteredMovies = filterByTitle(response, searchTerm);

console.log(filteredMovies);
