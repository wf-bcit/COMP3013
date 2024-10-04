export function ListGroupHeader({city}){
    if(!city) return (<h1>No cities are selected</h1>);
    if(city) return (<h1>The city you selected is {city}</h1>);
}