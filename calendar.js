var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
				'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

var calendarObject = document.getElementById('calendar');

var currentMonth = (new Date()).getMonth();

var currentYear = (new Date()).getFullYear();

function loadCalendar(month, year) {
	var firstDay = new Date(year, month, 01).getDay();
	var numberOfDays = 32 - (new Date(year, month, 32).getDate());
	let table = document.createElement('table');
	let thead = document.createElement('thead');
	let theadrow = document.createElement('tr');
	for (wd=0; wd<=6; wd++) {
		let th = document.createElement('th');
		let thtext = document.createTextNode(days[wd]);
		th.append(thtext);
		theadrow.append(th);
	}
	thead.append(theadrow);
	table.append(thead);
	let tbody = document.createElement('tbody');
	var datedate = 1;
	for (wks=0; wks<=5; wks++) {
		let tr = document.createElement('tr');
		for (wds=0; wds<=6; wds++) {
			let td = document.createElement('td');
			if (datedate > numberOfDays) {
				continue;
			}
			if (wks==0 && wds < firstDay) {
			} else {
				let tdtext = document.createTextNode(datedate);
				td.append(tdtext);
				datedate = datedate + 1;
			}
			tr.append(td);
		}
		tbody.append(tr);
	}
	table.append(tbody);
	calendarObject.append(table);
}
loadCalendar(currentMonth, currentYear);

function next() {

}

function back() {
	
}