window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const textdescription = document.querySelector("#new-task-description");
	const taskdate = document.querySelector("#task-date");
	const list_el = document.querySelector("#tasks");
	

	form.addEventListener('submit', (e) => {
		e.preventDefault();


		const title = input.value;
		const description = textdescription.value;
		const tdate = taskdate.value;


		const task_el = document.createElement('div');
		task_el.classList.add('task');
		

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		const task_content_el2 = document.createElement('div');
		task_content_el2.classList.add('content');

		const task_content_el3 = document.createElement('div');
		task_content_el3.classList.add('content');
		
		
		

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
		task_input_el3.type = 'text';
		task_content_el3.innerText = ("Date:")
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

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);
		task_actions_el.appendChild(task_done_el);


		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';
		textdescription.value = '';
		taskdate.value = '';

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

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});

		task_done_el.addEventListener('click', (e) => {
			if(task_el != this){
				donetasks.appendChild(task_el.cloneNode(true));
				task_el.remove()
			  }

			
		})

		list_el.addEventListener('submit', (e) => {
			list_el.remove();
			

		} )

	});
});

