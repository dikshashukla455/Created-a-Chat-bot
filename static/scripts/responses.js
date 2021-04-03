function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    }
    else if (input == "How are you?"||input=="How are you"||input=="how are you?") {
        return "I am good thanks!";
    }
    else if (input == "what are you doing?"||input == "What are you doing?"||input == "what are you doing") {
        return "Nothing much.WBU?";
    }
    else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}