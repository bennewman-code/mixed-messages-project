const randjokes = () => {
    const jokes = ['Says', 'I am', 'Art', 'Weekend', 'I.O.'];
    return jokes[Math.floor(Math.random() * 5)];
};

const punchline = {
    Says: "Says me, that's who!",
    Iam: "I am who is knocking. Who are you?",
    Art: "R2D2 is my favourite droid in Star Wars!",
    Weekend: "Weekend do anything we want!",
    IO: "Me. When are you paying me back?"
};

const joke = () => {
    randjokes()
    const jk = randjokes()
    if (jk === 'Says') {
        console.log(`Knock knock. Who's there? ${jk}. ${jk} Who? ${punchline.Says}`);
    } else if (jk === 'I am') {
        console.log(`Knock knock. Who's there? ${jk}. ${jk} Who? ${punchline.Iam}`);
    } else if (jk === 'Art') {
        console.log(`Knock knock. Who's there? ${jk}. ${jk} Who? ${punchline.Art}`);
    } else if (jk === 'Weekend') {
        console.log(`Knock knock. Who's there? ${jk}. ${jk} Who? ${punchline.Weekend}`);
    } else if (jk === 'I.O.') {
        console.log(`Knock knock. Who's there? ${jk} ${jk} Who? ${punchline.IO}`);
    }
};

joke();