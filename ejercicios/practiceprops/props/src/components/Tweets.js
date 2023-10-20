import Tweet from "./Tweet";


const Tweets = (props) => {

  const tweets =[
    {name:'devjess', tweet:'react ughhh, I need alcohol'},
    {name:'Travesy media', tweet: 'Whats up guys, Im out taking a break'},
    {
      name: 'webdevsimplified', 
      tweet:'hey guys Im simplified the web? guyss hello, where is everybody'
    },
   ]

  return (

    <section>
    {tweets.map((tweet) =>(
      <Tweet name={tweet.name} tweet={tweet.tweet}/>
    ))}
   </section>


  )
};



export default Tweets;