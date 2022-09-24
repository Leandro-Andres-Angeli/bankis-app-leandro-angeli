'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
alert(
	'HELLO WELCOME  TO BANKIST !! APP CHECK THE CONSOLE TO SEE INSTRUCTIONS ABOUT LOG IN AND APP FUNCTIONALITIES'
);
// BANKIST APP
const displayList = (list) => {
	let joinedString = '';
	for (const item of list) {
		joinedString = [
			...joinedString,
			'✨',
			item[0].toUpperCase() + item.slice(1) + '\n',
		];
	}
	return joinedString.join().replaceAll(',', '').trim();
};
const functionalitiesList = () => {
	const functionalities = [
		'login',

		'get loan form bank',
		'transfer to another account',
		'for every action you must introduce id and pin (e.g: if you want to transfer to another user you must introduce his/her  id)',
		'close account',
		'log out after 5 minutes of inactivity',
		'sort movements in ascending or descending order',
		'currency internationalization according to users location account',
		'date internationalization according to users location account',
		"project 100% front end using vanilla JS , so changes doesn't persist in any DB , everything will be back to default after refresh",
		"validation for  movements (e.g: user can only have a loan if its amount is  equal or higher than 10% of at least one deposit in his/her account , user can only transfer to existing accounts and only transfer and amount equal or lower that his/her current balance, user can't transfer money to himself/herself)",
	];
	return displayList(functionalities);
};

console.log(
	`%c WELCOME TO BANKIST APP \n This is an activity from Jonas Schmedtmann's Javascript Course \n I followed the guidilines of the course but used my own approach , changed the code to make it as concise and DRY as possible I used method chaining and logical operator chaining , ternary operators and destructuring  \n App functionalities :${functionalitiesList()} `,
	'background:blue ; color :white'
);
// Data
// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
	owner: 'Jonas Schmedtmann',
	movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
	interestRate: 1.2, // %
	pin: 1111,

	movementsDates: [
		'2022-09-22T21:31:17.178Z',
		'2022-08-22T07:42:02.383Z',
		'2020-01-28T09:15:04.904Z',
		'2020-04-01T10:17:24.185Z',
		'2020-05-08T14:11:59.604Z',
		'2020-05-27T17:01:17.194Z',
		'2020-07-11T23:36:17.929Z',
		'2020-07-12T10:51:36.790Z',
	],
	currency: 'EUR',
	locale: 'pt-PT', // de-DE
};

const account2 = {
	owner: 'Jessica Davis',
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,

	movementsDates: [
		'2019-11-01T13:15:33.035Z',
		'2019-11-30T09:48:16.867Z',
		'2019-12-25T06:04:23.907Z',
		'2020-01-25T14:18:46.235Z',
		'2020-02-05T16:33:06.386Z',
		'2020-04-10T14:43:26.374Z',
		'2020-06-25T18:49:59.371Z',
		'2020-07-26T12:01:20.894Z',
	],
	currency: 'USD',
	locale: 'en-US',
};
const account3 = {
	owner: 'Steven Thomas Williams',
	movements: [200, -200, 340, -300, -20, 50, 400, -460],
	interestRate: 0.7,
	pin: 3333,
	movementsDates: [
		'2019-11-18T21:31:17.178Z',
		'2019-12-23T07:42:02.383Z',
		'2020-01-28T09:15:04.904Z',
		'2020-04-01T10:17:24.185Z',
		'2020-05-08T14:11:59.604Z',
		'2020-05-27T17:01:17.194Z',
		'2020-07-11T23:36:17.929Z',
		'2020-07-12T10:51:36.790Z',
	],
	currency: 'EUR',
	locale: 'pt-PT', // de-DE
};
const account4 = {
	owner: 'Sarah Smith',
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444,
	movementsDates: [
		'2019-11-18T21:31:17.178Z',
		'2019-12-23T07:42:02.383Z',
		'2020-01-28T09:15:04.904Z',
		'2020-04-01T10:17:24.185Z',
		'2020-05-08T14:11:59.604Z',
	],
	currency: 'EUR',
	locale: 'pt-PT', // de-DE
};

const accounts = [account1, account2, account3, account4];
const validAccounts = () => {
	let accounstStr = [];
	for (const account of accounts) {
		const [name, lastName] = account.owner.split(' ');
		const accs = `🙍‍♂️ user id: ${
			name[0].toLowerCase() + lastName[0].toLowerCase()
		} pin : ${account.pin} \n `;
		accounstStr = [...accounstStr, accs];
	}
	return accounstStr.join().replaceAll(',', '').trim();
};

console.log(
	`%cThese are the valid accounts that you can use to log in \n ${validAccounts()}`,
	'background:yellow'
);

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
const arrowBtnSort = document.querySelector('.btn--sort_arrow');
/////////////////////////////////////////////////
/////////////////////////////////////////////////
const options = {
	day: '2-digit',
	month: '2-digit',
	year: 'numeric',
};
const formatMovementDate = (date, lang = 'en-US', options) => {
	return new Intl.DateTimeFormat(lang, options).format(date);
	//REFACTORED DATE FORMAT USING INTL API
	// return `${String(date.getMonth() + 1).padStart(2, 0)} /${String(
	// 	date.getDate()
	// ).padStart(2, 0)} / ${String(date.getFullYear())}`;
	//REFACTORED DATE FORMAT USING INTL API
};
const formatAmount = (amount, locale, currency) =>
	new Intl.NumberFormat(locale, { currency, style: 'currency' }).format(amount);
(function () {
	const date = new Date();
	labelDate.innerText = formatMovementDate(date, undefined, {
		...options,
		weekday: 'long',
		hour: '2-digit',
		minute: '2-digit',
	});
	//REFACTORED DATE FORMAT USING INTL API
	// labelDate.innerText = `${String(date.getMonth() + 1).padStart(2, 0)}/${String(
	// 	date.getDate()
	// ).padStart(2, 0)}/${date.getFullYear()}`;
	//REFACTORED DATE FORMAT USING INTL API
})();
// LECTURES
//LOGGED USER
let currentAccount;
//LOGGED USER
const calcDaysPassed = (date1, date2) => {
	const daysPassed = Math.round(
		Math.abs(date2 - date1) / (1000 * 60 * 60 * 24)
	);

	return daysPassed;
};

const displayMovements = function (acc, sort = false) {
	const movsAndDate = () => {
		let movsAndDates = [];
		const { movementsDates, movements } = acc;
		for (const [index, val] of Object.entries(movements)) {
			movsAndDates = [
				...movsAndDates,
				{
					movements: val,
					movementsDates: new Date(movementsDates[`${index}`]),
				},
			];
		}
		return movsAndDates;
	};
	// const m = acc.movements.slice();
	const m = movsAndDate().slice();

	let movs =
		sort === false
			? m.slice().sort((a, b) => a.movements - b.movements)
			: m.slice().sort((a, b) => b.movements - a.movements);

	containerMovements.innerHTML = '';
	for (const mov of Object.values(movs)) {
		const type = mov.movements > 0 ? 'deposit' : 'withdrawal';

		const daysPassed = calcDaysPassed(new Date(), mov.movementsDates);

		const html = ` <div class="movements__row">
			<div class="movements__type movements__type--${type}"> ${type}</div>
					<div class="movements__date">${formatMovementDate(
						mov.movementsDates,
						currentAccount.locale
					)} ${(daysPassed > 1 && daysPassed) || ''} ${
			daysPassed === 0 ? 'today' : daysPassed === 1 ? 'yesterday' : ' days ago'
		} </div>
			<div class="movements__value">${formatAmount(
				mov.movements,
				acc.locale,
				acc.currency
			)} </div>
		</div>`;
		containerMovements.insertAdjacentHTML('afterbegin', html);
	}
};

////////////////////////////
const currencies = new Map([
	['USD', 'United States dollar'],
	['EUR', 'Euro'],
	['GBP', 'Pound sterling'],
]);
const currenciesUnique = new Set([
	'USD',
	'EUR',
	'GBP',
	'Pound sterling',
	'USD',
	'EUR',
	'Peso',
]); //Map Method = Returns new array , instead of the forEach method

const createUserName = (accs) => {
	accs.forEach((user) => {
		// const { owner } = user;
		user.username = user.owner
			.split(' ')
			.map((name) => name[0])
			.join('')
			.toLowerCase();
	});
};

const calcPrintBalance = (acc) => {
	const balance = acc.movements.reduce((acc, curr, i, arr) => acc + curr, 0);

	labelBalance.innerText = `${formatAmount(
		balance,
		acc.locale,
		acc.currency
	)} `;
	return balance;
};
const calcDisplaySummary = (acc) => {
	const moneyIncome = acc.movements
		.filter((mov) => mov > 0)
		.reduce((a, b) => a + b, 0);

	labelSumIn.innerText = `${formatAmount(
		moneyIncome,
		acc.locale,
		acc.currency
	)} `;
	return moneyIncome;
};
const calcOutSummary = (acc) => {
	const moneyWithdrew = Math.abs(
		acc.movements.filter((mov) => mov < 0).reduce((a, b) => a + b, 0)
	);
	labelSumOut.innerText = `${formatAmount(
		moneyWithdrew,
		acc.locale,
		acc.currency
	)} `;
	return moneyWithdrew;
};
const calcInterest = (acc) => {
	const interest = Number(
		acc.movements
			.map((v) => v * (currentAccount.interestRate / 100))
			.filter((interest) => interest > 1)
			.reduce((a, b) => a + b, 0)
			.toFixed(2)
	);

	labelSumInterest.innerText = `${formatAmount(
		interest,
		acc.locale,
		acc.currency
	)}`;
	return interest;
};

const returnMaxVal = (movs) => movs.reduce((a, b) => (a > b && a) || b);

const userFindFor = (users, name) => {
	for (const user of users) {
		return (user.owner === name && user) || null;
	}
};
const initialLetterNames = (names) =>
	names
		.split(' ')
		.map((name) => name.slice(0, 1))
		.join('')
		.toLowerCase();
//FIND METHOD
//EVENT HANDLER

const updateUi = (acc) => {
	//DISPLAY BALANCE

	displayMovements(acc);
	calcDisplaySummary(acc);
	//DISPLAY BALANCE
	calcOutSummary(acc);
	//DISPLAY SUMMARY
	//DISPLAY BALANCE
	calcPrintBalance(acc);
	//DISPLAY BALANCE
	//DISPLAY INTEREST
	calcInterest(acc);
	//DISPLAY INTEREST
};
const startLogOutTimer = () => {
	let time = 60 * 5;
	const tick = () => {
		const min = String(Math.trunc(time / 60)).padStart(2, 0);
		const sec = String(Math.trunc(time % 60)).padStart(2, 0);

		labelTimer.innerText = `${min} : ${sec}`;
		if (time === 0) {
			clearInterval(timer);
			containerApp.style.opacity = 0;
			labelWelcome.innerText = 'Login to get started';
			alert("time out you've been logged out , please log in again ");
		}
		time--;
	};
	tick();
	const timer = setInterval(tick, 1000);
	return timer;
};
//GLOBALVARIABLE VAR
let timer = startLogOutTimer();
//GLOBALVARIABLE  VAR

btnLogin.addEventListener('click', (e) => {
	e.preventDefault();
	const {
		user: { value: owner },
		PIN: { value: pin },
	} = e.target.form;

	currentAccount = accounts.find(
		(account) =>
			initialLetterNames(account.owner) === owner.toLowerCase() &&
			account.pin === Number(pin)
	);

	//IF USER FOUND
	if (currentAccount) {
		//DISPLAY UI

		labelWelcome.textContent = `Welcome back ${currentAccount.owner}`;
		containerApp.style.opacity = 1;
		//DISPLAY UI

		updateUi(currentAccount);
		e.target.form.reset();
		//DISPLAY SUMMARY
		//TIMER
		timer && clearInterval(timer);
		timer = startLogOutTimer();
		//TIMER
	} else {
		containerApp.style.opacity = 0;
		alert('account not found');
	}

	//IF USER FOUND
});

//EVENT HANDLER
//TRANSFER MONEY FUNCTIONALITY
const transferMoneyTo = (accountId, amount) => {
	let msg = '';
	const userToTransfer = accounts.find(
		(user) => initialLetterNames(user.owner) === accountId.toLowerCase()
	);
	const validOperation =
		amount > 0 && amount <= calcPrintBalance(currentAccount);

	if (
		validOperation &&
		userToTransfer &&
		userToTransfer?.owner !== currentAccount.owner
	) {
		userToTransfer.movements.push(Number(amount));
		userToTransfer.movementsDates.push(new Date().toISOString());
		currentAccount.movementsDates.push(new Date().toISOString());
		currentAccount.movements.push(Number(-amount));
		msg = `Transfered ${formatAmount(
			amount,
			currentAccount.locale,
			currentAccount.currency
		)} to ${userToTransfer.owner} `;

		timer && clearInterval(timer);
		timer = startLogOutTimer();
	} else {
		msg = `operation failed `;
	}
	alert(msg);
};
btnTransfer.addEventListener('click', (e) => {
	e.preventDefault();
	transferMoneyTo(inputTransferTo.value, inputTransferAmount.value);
	e.target.form.reset();
	updateUi(currentAccount);
});
//TRANSFER MONEY FUNCTIONALITY

//CLOSING ACCOUNT USING FINDINDEX
btnClose.addEventListener('click', (e) => {
	e.preventDefault();
	const [user, pin] = e.target.form.querySelectorAll('input');

	if (
		initialLetterNames(currentAccount.owner) === user.value &&
		currentAccount.pin === Number(pin.value)
	) {
		confirm('delete account ?') &&
			accounts.splice(
				accounts.findIndex((acc) => acc.pin === Number(pin.value)),
				1
			) &&
			alert('deleted account');
		containerApp.style.opacity = 0;
		labelWelcome.innerText = 'Login to get started';
	} else {
		alert('username and pin must match current user');
	}
	e.target.form.reset();
});

btnLoan.addEventListener('click', (e) => {
	e.preventDefault();
	const loanValue = Math.floor(
		Number(e.target.form.querySelector('input').value)
	);

	loanValue > 0 &&
	currentAccount.movements.some((mov) => mov >= loanValue * 0.1) &&
	currentAccount.movements.push(loanValue) &&
	currentAccount.movementsDates.push(new Date()) &&
	confirm(
		`request loan for ${formatAmount(
			loanValue,
			currentAccount.locale,
			currentAccount.currency
		)}`
	)
		? setTimeout(() => {
				// console.log('requesting loan');
				clearInterval(timer);
				timer = startLogOutTimer();
				return updateUi(currentAccount) && alert('loan requested successfully');
		  }, 2500)
		: alert(
				"Error : you must have a movement that's at leat 10% or greater than the value of the loan requested"
		  );
	e.target.form.reset();
});

let orderDescending = false;
btnSort.addEventListener('click', (e) => {
	e.preventDefault();
	orderDescending = !orderDescending;

	displayMovements(currentAccount, orderDescending);
	const rotateDeg = (prop) => (!prop || !prop.includes('180') ? 180 : 0);

	arrowBtnSort.style.display = 'inline-block';
	arrowBtnSort.style.transform = `rotate(${rotateDeg(
		arrowBtnSort.style.MozTransform
	)}deg)`;
});

labelBalance.addEventListener('click', () => {
	const movementsDataFromUi = document.querySelectorAll('.movements__value');
	console.log('another way of converting array like structures into arrays', [
		...movementsDataFromUi,
	]);
	const movementsDataFromUiArray = Array.from(movementsDataFromUi, (e) =>
		Number(e.innerText.slice(0, -1))
	);
	alert(`getting movements data from ui ${movementsDataFromUiArray}`);
});
