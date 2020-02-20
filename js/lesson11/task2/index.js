const sortContacts = (contacts, direction) => {
    if (typeof(contacts) != 'object') return null;

    const result = contacts
        .sort((a, b) => {
            if (direction == true) {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        });

    return result;
};

const contacts = [
    { name: "Tom", phoneNumber: '777-77-77' },
    { name: "John", phoneNumber: '666-77-77' },
    { name: "Jack", phoneNumber: '555-77-77' },
    { name: "Bob", phoneNumber: '444-77-77' }
];

sortContacts(contacts, true);