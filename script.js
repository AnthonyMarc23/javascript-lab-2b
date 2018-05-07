"using strict";
{
  // Contact Class
  class Contacts {
    constructor(name, phone, email, relation) {
      this.name = name;
      this.email = email;
      this.phone = phone;
      this.relation = relation;
    }
  }

  // Address Book Class
  class AddressBook {
    constructor(contacts) {
      let storedContacts = localStorage.getItem('contacts') || "[]";
      this.contacts = JSON.parse(storedContacts);
      this.displayToScreen();
    }

    add(info) {
      // Adds the new contact into the Address Book
      let newContact = new Contacts(info.name.value, info.phone.value, info.email.value, info.relation.value);
      info.name.value = "";
      info.phone.value = "";
      info.email.value = "";
      info.relation.value = "";
      this.contacts.push(newContact);
      this.displayToScreen();
      // document.getElementById("demo").innerHTML = "Hello World!";
    }

    deleteAt(index) {
      // Deletes an entry at an index point
      this.contacts.splice(index, 1);
      this.displayToScreen();
    }

    displayToScreen() {
      // Log each contact
      localStorage.setItem("contacts", JSON.stringify(this.contacts));
      let contactHTML = this.contacts.map( (contact, index) => {
        return `
          <div class="col-4 outer-contact-box">
            <div class="contact-box">
              <p>Name: ${contact.name}</p>
              <p>Phone: ${contact.phone}</p>
              <p>Email: ${contact.email}</p>
              <p>Relationship: ${contact.relation}</p>
              <div class="delete" onclick = "addressBook.deleteAt(${index});"><i class="material-icons">delete</i></div>
            </div>
          </div>
        `;
      });

      document.getElementById("contacts").innerHTML = contactHTML.join("")
    }
  }

  // let defaultContact = new Contacts("Anthony", "anthony@adaptivelite.com", "248-231-7660", "Myself");
  window.addressBook = new AddressBook();
  // console.log(addressBook);

}