class User {
  constructor(data) {
    this.id = Date.now();
    this.name = data.name;
    this.email = data.email;
    this.phone = data.phone;
    this.bio = data.bio;
    this.age = data.age;
    this.city = data.city;
    this.country = data.country;
    this.profession = data.profession;
    this.experience = data.experience;
    this.skills = data.skills;
    this.website = data.website;
    this.createdAt = new Date();
  }
}

module.exports = User;