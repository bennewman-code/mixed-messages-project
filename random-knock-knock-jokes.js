const jokes = {
    Says: {
        joke: 'Says',
        punchline: "Says me, that's who!"
    },
    Iam: {
        joke: 'I am',
        punchline: "I am who is knocking. Who are you?"
    },
    Art: {
        joke: 'Art',
        punchline: "R2D2 is my favourite droid in Star Wars!"
    },
    Weekend: {
        joke: 'Weekend',
        punchline: "Weekend do anything we want!"
    },
    IO: {
        joke: 'I.O.',
        punchline: "Me. When are you paying me back?"
    }
};

const joke = () => {
    const arrkeys = Object.keys(jokes);
    const jk = arrkeys[Math.floor(Math.random() * arrkeys.length)];
    console.log(`Knock knock. Who's there? ${jokes[jk].joke}. ${jokes[jk].joke} Who? ${jokes[jk].punchline}`);
}
joke();
