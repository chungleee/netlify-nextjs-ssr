const UserId = async ({ params }) => {
	const getUserById = async () => {
		const res = await fetch(
			`https://jsonplaceholder.typicode.com/users/${params.userId}`
		);
		const data = await res.json();

		return data;
	};

	const data = await getUserById();
	const user = JSON.stringify(data, null, 4);
	return <div>user: {user}</div>;
};

export default UserId;
