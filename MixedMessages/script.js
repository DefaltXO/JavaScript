const randomMessage = () => {
    const randomNumber = Math.floor(Math.random() * 15);
    let message = "";
    switch (randomNumber) {
        case 0:
        message =
            '"Anyone who has ever made anything of importance was disciplined." - Andrew Hendrixson';
            console.log(message);
            break;
        case 1:
        message =
            '"Don’t spend time beating on a wall, hoping to transform it into a door. — Coco Chanel"';
            console.log(message);
            break;
        case 2:
            message = '"Creativity is intelligence having fun." — Albert Einstein';
            console.log(message);
            break;
        case 3:
            message =
            '"Optimism is the one quality more associated with success and happiness than any other." - Brian Tracy';
            console.log(message);
            break;
        case 4:
            message =
            '"Always keep your eyes open. Keep watching. Because whatever you see can inspire you." - Grace Coddington';
            console.log(message);
            break;
        case 5:
            message =
            '"What you get by achieving your goals is not as important as what you become by achieving your goals." - Henry David Thoreau';
            console.log(message);
            break;
        case 6:
            message =
            '"If the plan doesn’t work, change the plan, but never the goal." - Author Unknown';
            console.log(message);
            break;
        case 7:
            message = '"You cannot save people, you can just love them." - Anaïs Nin';
            console.log(message);
            break;
        case 8:
            message =
            '"Don’t live the same year 75 times and call it a life." - Robin Sharma';
            console.log(message);
            break;
        case 9:
            message = '"It wasn’t raining when Noah built the ark." - Howard Ruff';
            console.log(message);
            break;
        case 10:
            message = '"Take your dreams seriously." - Author Unknown';
            console.log(message);
            break;
        case 11:
            message =
            '"There is no way to happiness. Happiness is the way." - Thich Nhat Hanh';
            console.log(message);
            break;
        case 12:
            message =
            '"Holding onto anger is like drinking poison and expecting the other person to die." - (actually, not a Buddha quote)';
            console.log(message);
            break;
        case 13:
            message =
            '"Champions keep playing until they get it right." - Billie Jean King';
            console.log(message);
            break;
        case 14:
            message = '"You will succeed because most people are lazy." - Shahir Zag';
            console.log(message);
            break;
        default:
            message =
            '"I destroy my enemies when I make them my friends.!" - Abraham Lincoln';
            console.log(message);
            break;
    }
};
randomMessage();
