const wakeUp = () => 'Acordando!!';

const drinkCoffe = () => 'Bora tomar café!!';

const goSleep = () => 'Partiu dormir!!';

const doingThings = (callback) => {
    const result = callback();
    console.log(result);
};

doingThings(wakeUp);
doingThings(drinkCoffe);
doingThings(goSleep);