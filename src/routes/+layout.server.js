import { Amplify } from 'aws-amplify'
// import awsExports from '../aws-exports'
import { aws_exports } from '$env/static/private'

export async function load() {
	Amplify.configure(JSON.parse(aws_exports))

	return {
		msg: 'Amplify Configured'
	}
}
