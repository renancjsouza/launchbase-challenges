const name = 'Renan';
const gender = 'Male';
const age = 29;
const ss_contribution_time = 12; // In years

if ((gender === 'Male' && ss_contribution_time >= 35) || (gender === 'Female' && ss_contribution_time >= 30)) {
    // MCT: Minimum contribution time
    const mct = age + ss_contribution_time;

    if ((gender === 'Male' && mct >= 95) || (gender === 'Female' && mct >= 85)) {
        console.log(`${name}, you can retire.`);
    } else {
        console.log(`${name}, you still can't retire.`);
    }
} else {
    console.log(`${name}, you still can't retire.`);
}