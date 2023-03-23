
// Hour
// If hour is between 6am and 12 pm: Good Morning!
// If hour is between 12pm and 6pm: Good Afternoon!
// Otherwise: Good evening!

let name = 'Nick'

let hour = 18;

let role = 'moderator';


    // if (role === 'rocketeer') console.log ('Rocketeer');
    // if (role === 'moderator') console.log ('Rocketeers moderator');
    // else console.log('Guest');

    
if (hour >= 6 && hour < 12) {
    console.log ('Good morning ' + role + ' ' + name + '!')
}
else if (hour >= 12 && hour <18)
 console.log ('Good afternoon ' + role + ' ' + name + '!')
else if (hour >= 18 && hour >6)
 console.log ('Good evening ' + role + ' ' + name + '!')


//  switch (role) {
//     case 'rocketeer':
//         console.log ('Rocketeer ' + name);
//         break;

//  case 'moderator':
//     console.log ('Rocketeers moderator ' + name);
//     break;

//     default:
//         console.log ('Guest ');
//  }
