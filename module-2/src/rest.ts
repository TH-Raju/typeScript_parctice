const greetFriend = (...friends: string[]): void => {
  friends.forEach((friend) => console.log(`Hi ${friend}`));
};

greetFriend("kasem", "hasem", "rashem", "tashem");
