const randjokes = () => {
    const jokes = ['Says', 'I am', 'Art', 'Weekend', 'I.O.'];
    return jokes[Math.floor(Math.random() * 5)];
}

const punchline = {
    Says: "Says me, that's who!",
    Iam: "I am who is knocking. Who are you?",
    Art: "R2D2 is my favourite droid in Star Wars!",
    Weekend: "Weekend do anything we want!",
    IO: "Me. When are you paying me back?"
};

