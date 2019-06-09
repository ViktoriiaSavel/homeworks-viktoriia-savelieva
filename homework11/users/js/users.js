class UsersModule {
  constructor (selector) {
    this.element = document.querySelector(selector);
    this.http = new CustomHttp();
    this.handleResponse = this.handleResponse.bind(this);
  };

  setClassName(className = "selected") {
    this.element.classList.add(className);
    return this;
  };

  getUsersFragment(list) {
    const usersFragment = document.createDocumentFragment();

    list.forEach(user => {
      const pEl = document.createElement("p");
      let userInfoPEl;
      
      pEl.innerHTML = `<b>Name:</b> ${user.name}`;

      pEl.addEventListener('click', () => {
        if (!userInfoPEl) {
        userInfoPEl = document.createElement("p");
        userInfoPEl.innerHTML = `<small><i>Email:</i> ${user.email}</small>`;

        pEl.appendChild(userInfoPEl);
        } else {
          userInfoPEl.parentNode.removeChild(userInfoPEl);
          userInfoPEl = null;
        };
      });
      usersFragment.appendChild(pEl);
    });

    return usersFragment;
  }

  handleResponse(list) {
    this.element.innerHTML = '';
    this.setUsers(list);
  }

  getUsers() {
    this.http.get('https://jsonplaceholder.typicode.com/users', this.handleResponse);
  }

  setUsers(list) {
    const fragment = this.getUsersFragment(list);

    this.element.appendChild(fragment);
    return this;
   };
};