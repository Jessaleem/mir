const Countries = (props) => {

    // countries un solo objeto opcn 1    
    // const {name, population, flag} = props;

    // countries un solo objeto opcn 2
    const {country} = props;
    const {name, population, flag} = country
    

    return(
        <div>
            <h1>{name} - {flag}</h1>
            <p>Población:{population}</p>
            
        </div>

    ) 
}

export default Countries;