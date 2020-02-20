const sortContacts = (contacts, direction) => {
    if (typeof(contacts) != 'object') return null;

    if (!direction) direction = true;

    const result = contacts
        .sort((a, b) => {
            return a.name.localeCompare(b.name);
        });

    return result;
};

sortContacts({ name: "Tom", phoneNumber: '777-77-77' }, true);