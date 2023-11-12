"use strict";
const greetFriend = (...friends) => {
    friends.forEach((friend) => console.log(`Hi ${friend}`));
};
greetFriend("kasem", "hasem", "rashem", "tashem");
