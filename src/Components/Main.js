const name = 'Amith N Senevirathna';
const position = 'Web Developer';
const myObj = [{
    name : `${name}`,
    position : `${position}`,
    city : 'Monaragala'
}];

function Main({children, name, city, position}) {
    // const {city}= myObj;
    return (
        <div>This is  Main Component
            <ul>
                <li>{name}</li>
                <li>{position}</li>
                <li>{city}</li>
            </ul>
            {children}
        </div>
    )
}

export default Main
