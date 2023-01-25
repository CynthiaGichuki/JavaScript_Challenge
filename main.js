
window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const textdescription = document.querySelector("#new-task-description");
	const taskdate = document.querySelector("#task-date");
	const list_el = document.querySelector("#tasks");
	const del = document.querySelector("#donetasks")
	let clear = document.querySelector('#clear-all-ctasks')
	const clear2 = document.querySelector('#clear-all-itasks')


	form.addEventListener('submit', (e) => {


		e.preventDefault();

		// do {
		// 	list_el.innerHTML = "List is Empty"
		// }
		// while (!list_el)

		// do {
		// 	del.innerHTML = "List is Empty"
		// }
		// while (!del)


		const title = input.value;
		const description = textdescription.value;
		const tdate = taskdate.value;
		console.log(tdate);


		const task_el = document.createElement('div');
		task_el.classList.add('task');



		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		const task_content_el2 = document.createElement('div');
		task_content_el2.classList.add('content');

		const task_content_el3 = document.createElement('div');
		task_content_el3.classList.add('content');

		const task_content_el4 = document.createElement('div');
		task_content_el4.classList.add('content');

		const task_content_el5 = document.createElement('div');
		task_content_el5.classList.add('content');


		task_el.appendChild(task_content_el);
		task_el.appendChild(task_content_el2);
		task_el.appendChild(task_content_el3);


		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_content_el.innerText = ("Title:")
		task_input_el.value = title;
		task_input_el.setAttribute('readonly', 'readonly');
		task_content_el.appendChild(task_input_el);


		const task_input_el2 = document.createElement('input');
		task_input_el2.classList.add('text');
		task_input_el2.type = 'text';
		task_content_el2.innerText = ("Description:")
		task_input_el2.value = description;
		task_input_el2.setAttribute('readonly', 'readonly');
		task_content_el2.appendChild(task_input_el2);


		const task_input_el3 = document.createElement('input');
		task_input_el3.classList.add('text');
		task_input_el3.type = 'date';
		task_content_el3.innerText = ("Due Date:")
		task_input_el3.value = tdate;
		task_input_el3.setAttribute('readonly', 'readonly');
		task_content_el3.appendChild(task_input_el3);


		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');

		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		const task_done_el = document.createElement('button');
		task_done_el.classList.add('done')
		task_done_el.innerText = 'Done'

		const complete_del_el = document.createElement('button');
		complete_del_el.classList.add('delete2')
		complete_del_el.innerText = 'Delete'

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);
		task_actions_el.appendChild(task_done_el);




		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);


		input.value = '';
		textdescription.value = '';
		taskdate.value = '';

		//The EDIT TASK ACTION BUTTON
		task_edit_el.addEventListener('click', (e) => {


			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();

				task_input_el2.removeAttribute("readonly");
				task_input_el2.focus();

				task_input_el3.removeAttribute("readonly");
				task_input_el3.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
				task_input_el2.setAttribute("readonly", "readonly");
				task_input_el3.setAttribute("readonly", "readonly");
			}
		});

		//the DELETE TASK ACTION BUTTON

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});


		//The DONE TASK ACTION BUTTON
		task_done_el.addEventListener('click', (e) => {


			let dueDate = new Date(tdate);

			let completedDate = new Date()
			let dayDate = completedDate.getDate()
			let month = (completedDate.getMonth() + 1).toString().padStart(2, 0);
			let year = completedDate.getFullYear()
			//Date format: 24/01/2023
			let completedDateString = `${dayDate}/${month}/${year}`;
			// console.log(completedDateString);

			// if late or on time completedDate - dueDate < 0 late else ontime
			let lateOrOntime = completedDate - dueDate;

			//converting milliseconds to Human Readable String Formart 
			const formatDuration = lateOrOntime => {
				if (lateOrOntime < 0) {
					lateOrOntime = (lateOrOntime * -1)
					const time1 = {
						day: Math.floor(lateOrOntime / 86400000),
						hour: Math.floor(lateOrOntime / 3600000) % 24,
						minute: Math.floor(lateOrOntime / 60000) % 60,
						second: Math.floor(lateOrOntime / 1000) % 60,
						millisecond: Math.floor(lateOrOntime) % 1000

					}
					return Object.entries(time1).filter(val => val[1] !== 0).map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`).join(', ')


				}

				const time = {
					day: Math.floor(lateOrOntime / 86400000),
					hour: Math.floor(lateOrOntime / 3600000) % 24,
					minute: Math.floor(lateOrOntime / 60000) % 60,
					second: Math.floor(lateOrOntime / 1000) % 60,
					millisecond: Math.floor(lateOrOntime) % 1000
				};


				return Object.entries(time).filter(val => val[1] !== 0).map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`).join(', ')


			};
			const formattedStringtwo = formatDuration(+lateOrOntime)
			const formattedString = formatDuration(lateOrOntime);
			console.log(formattedString)



			console.log(lateOrOntime);
			if (lateOrOntime > 0) {
				const timediv = document.createElement('div');
				timediv.classList.add('textlate');
				timediv.innerHTML = (`This Task is Late by: ${formattedString}`)
				timediv.setAttribute('readonly', 'readonly');
				task_content_el5.appendChild(timediv);
				// console.log("Task is Late");
			} else {
				const timediv = document.createElement('div');
				timediv.classList.add('textonTime');
				timediv.innerHTML = (`This Task is early by: ${formattedStringtwo}`)
				timediv.setAttribute('readonly', 'readonly');
				task_content_el5.appendChild(timediv);

				// console.log("Task is on time");
			}

			const task_input_el4 = document.createElement('div');
			task_input_el4.classList.add('date');
			task_content_el4.innerText = (`Completed Date: ${completedDateString}`)
			// task_input_el4.value = completedDateString;
			task_input_el4.setAttribute('readonly', 'readonly');
			task_content_el4.appendChild(task_input_el4);


			if (task_el != this) {
				if (task_edit_el.innerText === "EDIT") {
					if (donetasks.appendChild(task_el)) {
						task_el.remove()
						task_el.appendChild(task_content_el4);
						task_el.appendChild(task_content_el5);
						task_actions_el.appendChild(complete_del_el);
						task_el.appendChild(task_actions_el);
						del.appendChild(task_el)

					}

				}

				else {
					alert("Kindly Save Changes")
				}
			}
			complete_del_el.addEventListener('click', (e) => {
				del.removeChild(task_el);
			});


		})

		//deleting all items in the list

		clear.addEventListener('click', (e) => {
			del.innerHTML = ''
		})

		clear2.addEventListener('click', (e) => {
			list_el.innerHTML = ''


		})

	});



});




