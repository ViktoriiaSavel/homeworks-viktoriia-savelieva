import { 
    AuthService
} from './../services/auth.service';

export class SignupComponent {
    constructor() {
        this._authService = new AuthService();
    };

    render() {
        return `
        <div class="auth-wrap d-flex mt-5">
            <div class="auth-form col col-6 mx-auto my-auto">
                <h3>Signup to Social.</h3>
                <p class="text-secondary">Welcome! Enter the information below to create to your Social account.</p>
                <form name="signupForm" novalidate>
                    <div class="form-group">
                        <input type="email" class="form-control form-control-sm" id="email" placeholder="name@example.com" required data-pattern="^\S+@[a-z]+\.[a-z]+$">
                        <input type="password" class="form-control form-control-sm mt-3" id="password" placeholder="password" required data-pattern="\S+">
                        <input type="nickname" class="form-control form-control-sm mt-3" id="nickname" placeholder="nickname" required data-pattern="\S+">
                        <input type="first_name" class="form-control form-control-sm mt-3" id="first_name" placeholder="first name" required data-pattern="\S+">
                        <input type="last_name" class="form-control form-control-sm mt-3" id="last_name" placeholder="last name" required data-pattern="\S+">
                        <input type="phone" class="form-control form-control-sm mt-3" id="phone" placeholder="phone" required data-pattern="\S+">
                        <br>
                        <div class="form-group mt-0">
                            <select class="form-control form-control-sm" id="gender_orientation" required data-pattern="\S+">
                                <option>male</option>
                                <option>female</option>
                            </select>
                        </div>
                        <input type="city" class="form-control form-control-sm mt-0" id="city" placeholder="city" required data-pattern="\S+">
                        <input type="country" class="form-control form-control-sm mt-3" id="country" placeholder="country" required data-pattern="\S+">
                        <label class="form-control-sm mt-2">Date of birth</label>
                        <div class="form-row">
                            <div class="col">
                                <input type="date_of_birth_day" class="form-control form-control-sm" id="date_of_birth_day" placeholder="dd" required data-pattern="\S+">
                            </div>
                            <div class="col">
                                <input type="date_of_birth_month" class="form-control form-control-sm" id="date_of_birth_month" placeholder="mm" required data-pattern="\S+">
                            </div>
                            <div class="col">
                                <input type="date_of_birth_year" class="form-control form-control-sm" id="date_of_birth_year" placeholder="yyyy" required data-pattern="\S+">
                            </div>
                        </div>
                        <div class="form-row">
                        <div class="d-flex mt-5">
                            <button type="submit" class="btn btn-primary btn-sm">Signup</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="auth-bg col col-6"></div>
        </div>
        `
    };

    afterRender() {
        document.forms['signupForm'].addEventListener('submit', (e) => {
            //console.log(e);
            debugger;
            e.preventDefault();

            const email = e.target.elements['email'].value;
            const password = e.target.elements['password'].value;
            const nickname = e.target.elements['nickname'].value;
            const firstName = e.target.elements['first_name'].value;
            const lastName = e.target.elements['last_name'].value;
            const phone = e.target.elements['phone'].value;
            const gender = e.target.elements['gender_orientation'].options[e.target.elements['gender_orientation'].selectedIndex].value;
            const city = e.target.elements['city'].value;
            const country = e.target.elements['country'].value;
            const dateOfBirthDay = e.target.elements['date_of_birth_day'].value;
            const dateOfBirthMonth = e.target.elements['date_of_birth_month'].value;
            const dateOfBirthYear = e.target.elements['date_of_birth_year'].value;

            if (!email || !password || !nickname || !firstName || !lastName || !phone || !gender || !city || !country || !dateOfBirthDay || !dateOfBirthMonth || !dateOfBirthYear) return;

            let userData = { 
                email, 
                password, 
                nickname, 
                first_name: firstName, 
                last_name: lastName, 
                phone, 
                gender_orientation: gender, 
                city, 
                country, 
                date_of_birth_day: dateOfBirthDay, 
                date_of_birth_month: dateOfBirthMonth, 
                date_of_birth_year: dateOfBirthYear 
            };

            this._authService.signup(userData).then((res) => {
                console.log('Signup ok -> ', res)
            }).catch((err) => console.log('Signup error -> ', err));
        });
    };
};