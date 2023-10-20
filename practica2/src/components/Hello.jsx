// function Hello(props){
//     const {userName, country} = props;

//     return <div>Hello {userName} {country}</div>;
// }

// con función flecha ////////////////////////

// const Hello = (props) => {
//     const {userName, country} = props;
//     return <div>Hello {userName} {country}</div>;
// }
// 

//Solo con objeto ////////////////////////////////////
// const Hello = (props) => {
//     const {profile} = props;
//      return <div>Hello {profile.userName} - {profile.country}</div>;
//     }


// para que combine con objeto y sin objeto
const Hello = (props) => {
    const {userName, country} = props;
    return <div>Hello {userName} - {country}</div>
}

export default Hello;


