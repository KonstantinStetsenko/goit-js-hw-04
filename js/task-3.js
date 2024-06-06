const profile = {
  username: "Jacob",
  playTime: 300,

  changeUsername(newName) {
    this.username = newName; // Обновляем свойство username
  },

  updatePlayTime(hours) {
    this.playTime += hours; // Увеличиваем playTime на указанное количество часов
  },

  getInfo() {
    let amount = this.playTime;
    return `${this.username} has ${amount} active hours!`;
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
