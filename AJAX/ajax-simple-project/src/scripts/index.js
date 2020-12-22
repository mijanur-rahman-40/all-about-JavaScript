import '../styles/index.scss';
import '../styles/style.css';
import Axios from "axios";

const BASE_URL = 'http://localhost:3000/contacts';

window.onload = function ()
{

    let tbody = this.document.querySelector('#tbody');

    //get data from server and fill the table when page load
    Axios.get(BASE_URL)
        .then(response =>
        {
            response.data.forEach(contact =>
            {
                createTDElement(contact, tbody);
            });
        })
        .catch(error => this.console.log(error));

    //add event listener to save contact button
    let saveContact = document.querySelector('#save-contact');
    saveContact.addEventListener('click', function ()
    {
        createNewContact();
    });
};

//create new contact function
function createNewContact()
{

    let nameField = document.querySelector('#nameField');
    let phoneField = document.querySelector('#phoneField');
    let emailField = document.querySelector('#emailField');

    let contact = {
        name: nameField.value,
        phone: phoneField.value,
        email: emailField.value
    };

    Axios.post(BASE_URL, contact)
        .then(response =>
        {
            let tbody = document.querySelector('#tbody');
            createTDElement(response.data, tbody);

            nameField.value = '';
            phoneField.value = '';
            emailField.value = '';
        })
        .catch(error => console.log(error));
}

//creating a tr element and appending to it's parent element
function createTDElement(contact, parentElement)
{

    const TR = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.innerHTML = contact.name;
    TR.appendChild(tdName);

    const tdPhone = document.createElement('td');
    tdPhone.innerHTML = contact.phone ? contact.phone : 'N/A';
    TR.appendChild(tdPhone);

    const tdEmail = document.createElement('td');
    tdEmail.innerHTML = contact.email ? contact.email : 'N/A';
    TR.appendChild(tdEmail);

    const tdActions = document.createElement('td');

    const editButton = document.createElement('button');
    editButton.className = 'btn btn-warning';
    editButton.innerHTML = 'EDIT';

    editButton.addEventListener('click', function ()
    {

        let mainModal = $('#contact-edit-model');
        mainModal.modal('toggle');

        let editName = document.querySelector('#edit-name');
        let editPhone = document.querySelector('#edit-phone');
        let editEmail = document.querySelector('#edit-email');

        editName.value = contact.name;
        editPhone.value = contact.phone ? contact.phone : '';
        editEmail.value = contact.email ? contact.email : '';

        let updateButton = document.querySelector('#update-contact');
        updateButton.addEventListener('click', function ()
        {
            Axios.put(`${BASE_URL}/${contact.id}`, {
                name: editName.value,
                phone: editPhone.value,
                email: editEmail.value
            })
                .then(response =>
                {
                    tdName.innerHTML = response.data.name;
                    tdEmail.innerHTML = response.data.email;
                    tdPhone.innerHTML = response.data.phone;

                    mainModal.modal('hide');
                })
                .catch(error => console.log(error));
        });

    });
    tdActions.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-danger mx-1';
    deleteButton.innerHTML = 'DELETE';

    deleteButton.addEventListener('click', function ()
    {
        //console.log("I am Delete Button");
        //console.log(contact);
        Axios.delete(`${BASE_URL}/${contact.id}`)
            .then(response =>
            {
                parentElement.removeChild(TR);
            })
            .catch(error => console.log(error));
    });
    
    tdActions.appendChild(deleteButton);
    TR.appendChild(tdActions);
    parentElement.appendChild(TR);
}