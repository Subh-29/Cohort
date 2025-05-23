const Read = (props) => {
    console.log(props);
    const usernames = props.usernames;
    const setUsernames = props.setUsernames;
    const renderUser = usernames.map((username, idx) => {
    return (
        <li key={`username-${idx}`}>Name: {username.name} | Age: {username.age}</li>
    );
});
    return (
        <>
            <h2>Show users</h2>
            <ol>{renderUser}</ol>
            <br />
        </>
    );
};

export default Read;