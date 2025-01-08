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
    },
    Voodoo: {
        joke: 'Voodoo',
        punchline: "Voodoo you think you are, asking me so many questions?"
    },
    Shore: {
        joke: 'Shore',
        punchline: "Shore hope you like bad jokes!"
    },
    AWoodWok: {
        joke: 'A wood wok',
        punchline: "A wood wok 500 miles, and I wood wok 500 more!"
    },
    Euripides: {
        joke: 'Euripides',
        punchline: "Euripides clothes, you buy them!"
    },
    Venice: {
        joke: 'Venice',
        punchline: "Venice your dad coming home?"
    },
    Iva: {
        joke: 'Iva',
        punchline: "Iva sore hand from knocking so long!"
    },
    Yah: {
        joke: 'Yah',
        punchline: "Nah, I prefer Google!"
    },
    Dishes: {
        joke: 'Dishes',
        punchline: "Dishes the police, open up!"
    },
    Nana: {
        joke: 'Nana',
        punchline: "Nana your business!"
    },
    To: {
        joke: 'To',
        punchline: "It's to whom!"
    },
    Needle: {
        joke: 'Needle',
        punchline: "Needle little money, please!"
    },
    Mustache: {
        joke: 'Mustache',
        punchline: "Mustache you a question, but I'll shave it for later!"
    },
    Woodenshoe: {
        joke: 'Wooden shoe',
        punchline: "Wooden shoe like to know!"
    },
    Amish: {
        joke: 'Amish',
        punchline: "Really? You don't look like a shoe!"
    },
    Tank: {
        joke: 'Tank',
        punchline: "You're welcome!"
    },
    Adore: {
        joke: 'Adore',
        punchline: "Adore is between us. Open up!"
    },
    Cargo: {
        joke: 'Cargo',
        punchline: 'No, cargo "beep beep!"'
    },
    Boo: {
        joke: 'Boo',
        punchline: "Hey, don't cry!"
    },
    Police: {
        joke: 'Police',
        punchline: "Police stop telling these awful knock-knock jokes!"
    },
    Irish: {
        joke: 'Irish',
        punchline: "Irish you a Merry Christmas!"
    },
    Razor: {
        joke: 'Razor',
        punchline: "Razor hands, this is a stick-up!"
    },
    Snow: {
        joke: 'Snow',
        punchline: "Snow use. I forgot my name again!"
    },
    Spell: {
        joke: 'Spell',
        punchline: "Okay, fine. W-H-O!"
    },
    Closure: {
        joke: 'Closure',
        punchline: "Closure mouth while you're chewing!"
    },
    Dozen: {
        joke: 'Dozen',
        punchline: "Dozen anyone want to let me in?"
    },
    Cash: {
        joke: 'Cash',
        punchline: "No thanks, but I'd love some peanuts!"
    },
    Hoho: {
        joke: 'Ho, ho',
        punchline: "You know, your Santa impression could use a little work!"
    },
    Yacht: {
        joke: 'Yacht',
        punchline: "Yacht to know me by now!"
    },
    Déja: {
        joke: 'Déja',
        punchline: "Knock knock!"
    },
    You: {
        joke: 'You',
        punchline: "Yoo-hoo! Anybody home?"
    },
    Witches: {
        joke: 'Witches',
        punchline: "Witches the way to the store?"
    },
    Alittleoldlady: {
        joke: 'A little old lady',
        punchline: "Wow, I didn't know you could yodel!"
    },
    Brokenpencil: {
        joke: 'Broken pencil',
        punchline: "Never mind, there's no point!"
    },
    Zany: {
        joke: 'Zany',
        punchline: "Zany body home?"
    },
    Nun: {
        joke: 'Nun',
        punchline: "Nun ya business!"
    },
    Me: {
        joke: 'Me',
        punchline: "Having an identity crisis, are you?"
    },
    Hatch: {
        joke: 'Hatch',
        punchline: "Bless you!"
    },
    Zoom: {
        joke: 'Zoom',
        punchline: "Zoom did you expect!"
    },
    Cook: {
        joke: 'Cook',
        punchline: "Yeah, you do sound cuckoo!"
    },
    Noise: {
        joke: 'Noise',
        punchline: "Noise to see you!"
    },
    Leaf: {
        joke: 'Leaf',
        punchline: "Leaf me alone!"
    },
    Woo: {
        joke: 'Woo',
        punchline: "Don't get so excited, it's just a joke."
    },
    Amarillo: {
        joke: 'Amarillo',
        punchline: "Amarillo nice person!"
    },
    Armageddon: {
        joke: 'Armageddon',
        punchline: "Armageddon a little bored. Let's go out!"
    }
};

const joke = () => {
    const arrkeys = Object.keys(jokes);
    const jk = arrkeys[Math.floor(Math.random() * arrkeys.length)];
    console.log(`Knock knock. Who's there? ${jokes[jk].joke}. ${jokes[jk].joke} Who? ${jokes[jk].punchline}`);
}

joke();
