import Link from "next/link";

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
					return (
						<Link href={`/${user.id}`}>
							<li>{user.name}</li>
						</Link>
					);
					// return <li>{user.name}</li>;
				})}
			</ul>
		</div>
	);
}
