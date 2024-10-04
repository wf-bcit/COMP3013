export function ListGroupHeader({cities, chosenCityIndex}){
    if(chosenCityIndex < 0) return (<h1>No cities are selected</h1>);
    if(chosenCityIndex >= 0) return (<h1>The city you selected is {cities[chosenCityIndex]}</h1>);
}