export default async function Home() {
	const getUsers = async () => {
		const res = await fetch("https://jsonplaceholder.typicode.com/users");
		const data = await res.json();

		return data;
	};

	const users = await getUsers();

	return (
		<div>
			<ul>
				{users.map((user) => {
					return <li>{user.name}</li>;
				})}
			</ul>
		</div>
	);
}
