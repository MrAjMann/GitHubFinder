class Github {
  constructor() {
    this.client_id = '54bb295118691a18cbe6';
    this.client_secret = '7d001af89b5e69417a5d83f05150eeb9eddb622f';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`
    );
    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
