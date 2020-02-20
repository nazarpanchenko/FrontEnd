const sortContacts = (contacts) => {
    if (typeof(contacts) != 'object') return null;

    const result = contacts
        .sort((a, b) => {
            return a.name.localeCompare(b.name);
        });

    return result;
};

sortContacts({ name: "Tom", phoneNumber: '777-77-77' });