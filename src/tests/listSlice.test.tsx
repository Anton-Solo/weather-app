import listSlice, {addCity, removeCity, updateCity} from "../store/slices/listSlice";

describe('listSlice', () => {
    it('should return default state when passed an empty action', () => {
        const res = listSlice(undefined, {type: ''})

        expect(res).toEqual({"list": []})
    });

    it('should add new city width "addCity"', () => {
        const weather =
            {
                "coord":{"lon":30.5167,"lat":50.4333},
                "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],
                "base":"stations",
                "main":{"temp":-0.22,"feels_like":-3.56,"temp_min":-0.22,"temp_max":-0.22,"pressure":996,"humidity":95},"visibility":5610,
                "wind":{"speed":2.78,"deg":305,"gust":5.97},"clouds":{"all":93},"dt":1669571341,
                "sys":{"type":2,"id":2013236,"country":"UA","sunrise":1669527044,"sunset":1669557637},
                "timezone":7200,
                "id":703448,
                "name":"Kyiv",
                "cod":200
            };

        const action = { type: addCity.type, payload: weather}
    })

    it('should add new city width "addCity"', () => {
        const weatherList = [
            {
                "coord":{"lon":30.5167,"lat":50.4333},
                "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],
                "base":"stations",
                "main":{"temp":-0.22,"feels_like":-3.56,"temp_min":-0.22,"temp_max":-0.22,"pressure":996,"humidity":95},"visibility":5610,
                "wind":{"speed":2.78,"deg":305,"gust":5.97},"clouds":{"all":93},"dt":1669571341,
                "sys":{"type":2,"id":2013236,"country":"UA","sunrise":1669527044,"sunset":1669557637},
                "timezone":7200,
                "id":703448,
                "name":"Kyiv",
                "cod":200
            },
            {
                "coord":{"lon":30.5167,"lat":50.4333},
                "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],
                "base":"stations",
                "main":{"temp":-0.22,"feels_like":-3.56,"temp_min":-0.22,"temp_max":-0.22,"pressure":996,"humidity":95},"visibility":5610,
                "wind":{"speed":2.78,"deg":305,"gust":5.97},"clouds":{"all":93},"dt":1669571341,
                "sys":{"type":2,"id":2013236,"country":"UA","sunrise":1669527044,"sunset":1669557637},
                "timezone":7200,
                "id":703448,
                "name":"Lviv",
                "cod":200
            },
        ]

        const action = { type: removeCity.type, payload: 'Lviv'}
    });

    it('should add new city width "addCity"', () => {
        const weather = [
            {
                "coord":{"lon":30.5167,"lat":50.4333},
                "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],
                "base":"stations",
                "main":{"temp":-0.22,"feels_like":-3.56,"temp_min":-0.22,"temp_max":-0.22,"pressure":996,"humidity":95},"visibility":5610,
                "wind":{"speed":2.78,"deg":305,"gust":5.97},"clouds":{"all":93},"dt":1669571341,
                "sys":{"type":2,"id":2013236,"country":"UA","sunrise":1669527044,"sunset":1669557637},
                "timezone":7200,
                "id":703448,
                "name":"Kyiv",
                "cod":200
            }
        ]

        const action = { type: updateCity.type, payload: weather }
    })

    it('should add new city with "addCity" action', () => {
        const weather =
            {
                "coord":{"lon":30.5167,"lat":50.4333},
                "weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],
                "base":"stations",
                "main":{"temp":-0.22,"feels_like":-3.56,"temp_min":-0.22,"temp_max":-0.22,"pressure":996,"humidity":95},"visibility":5610,
                "wind":{"speed":2.78,"deg":305,"gust":5.97},"clouds":{"all":93},"dt":1669571341,
                "sys":{"type":2,"id":2013236,"country":"UA","sunrise":1669527044,"sunset":1669557637},
                "timezone":7200,
                "id":703448,
                "name":"Kyiv",
                "cod":200
            };

        const action = { type: addCity.type, payload: weather};

        const result = listSlice({list:[]}, action);

        expect(result.list[0].name).toBe("Kyiv");
    }) 
})

