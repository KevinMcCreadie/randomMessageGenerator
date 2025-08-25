//! Creating a random message generator for (Story ideas): 

//? Functions: 
//note: This will generate a random number
randomNumberGenerator = num => Math.floor(Math.random()*num);


//? Object: 
//note: Creating the options / Object for the message to generate from
const allStoryIdeas = {
      subject: [
            "A time-traveling librarian",
            "An ambitious squirrel",
            "A misunderstood robot",
            "A retired pirate",
            "An alien exchange student"
      ],
      start: [
            "wakes up in a parallel universe",
            "discovers a hidden map in their cereal box",
            "accidentally joins a secret society",
            "inherits a haunted bakery",
            "gets stuck in a virtual reality game"
      ],
      outcome: [
            "and learns the true meaning of friendship",
            "but unleashes a swarm of sentient cupcakes",
            "and solves a mystery that rewrites history",
            "only to become the ruler of a forgotten kingdom",
            "and sparks a revolution among houseplants"
      ],
      place: [
            "in the heart of a floating city",
            "beneath the ruins of an ancient arcade",
            "on a moon made entirely of cheese",
            "inside a library that rearranges itself",
            "at the edge of the multiverse"
      ]
};

//?Array: 
//note: Creating story array for the options to get stored within, for generating the random story idea.
let storyIdea = [];

//? Loop and Switch Case
//note: 
for(let storyPart in allStoryIdeas) {
      //note: using the generateRandomNumber function based on the length of each property array
      let idxNum = randomNumberGenerator(allStoryIdeas[storyPart].length);

      //note: Creating the switch case for each Property within the allStoryIdeas Object
      switch(storyPart){
            case 'subject':
                  storyIdea.push(`The main character in your story is "${allStoryIdeas[storyPart][idxNum]}".`);
                  break;
            case 'start':
                  storyIdea.push(`The story is he/she/they "${allStoryIdeas[storyPart][idxNum]},`);
                  break;
            case 'outcome':
                  storyIdea.push(`${allStoryIdeas[storyPart][idxNum]}".`);
                  break;
            case 'place':
                  storyIdea.push(`This takes place "${allStoryIdeas[storyPart][idxNum]}".`);
                  break;
            default:
                  storyIdea.push(`There is not enough info.`);
      }
}

//? Function
//note: This combineds the storyIdea array into one message that prints to the console.
const formatStoryIdea = story => console.log(story.join(' '));

formatStoryIdea(storyIdea);