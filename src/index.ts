import Photon from '@generated/photon'

const photon = new Photon()

async function main() {
	await photon.connect()

	const newUser = await photon.users.create({
		data: {
			name: 'Alice',
			email: 'alice@prisma.io',
		},
	})
	console.log(newUser)

	const allUsers = await photon.users.findMany()
	console.log(allUsers)

	await photon.disconnect()
}

main()
