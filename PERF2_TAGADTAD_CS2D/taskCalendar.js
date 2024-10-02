// Prompt the user to enter a day of the week
const dayOfWeek = prompt("Enter a day of the week:");

// Define the task for each day using a switch statement
let task;
switch (dayOfWeek) {
    case "Monday":
        task = "Prioritize tasks in school.";
        break;
    case "Tuesday":
        task = "Learn and analyze the task.";
        break;
    case "Wednesday":
        task = "Focus and maintain health.";
        break;
    case "Thursday":
        task = "Finish all the task.";
        break;
    case "Friday":
        task = "Submit all tasks and activities in school.";
        break;
    case "Saturday":
        task = "Rest or go partying in a nightclub with friends.";
        break;
    case "Sunday":
        task = "Attend mass.";
        break;
    default:
        task = "Invalid day entered. Please enter a valid day of the week.";
}

// Log the task for the entered day to the console
console.log(`Your task for ${dayOfWeek} is: ${task}`);
