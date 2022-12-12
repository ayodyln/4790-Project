import { Amplify } from 'aws-amplify'
import { AWS_COGNITO_IDENTITY_POOL_ID } from '$env/static/private'

export async function load() {
	const db = Amplify.configure(awsExport)

	if (!db)
		return {
			status: 500
		}

	return {
		msg: 'Amplify Configured'
	}
}

const awsExport = {
	aws_project_region: 'us-east-1',
	aws_cognito_identity_pool_id: AWS_COGNITO_IDENTITY_POOL_ID,
	aws_cognito_region: 'us-east-1',
	aws_user_pools_id: 'us-east-1_JWvpWgaER',
	aws_user_pools_web_client_id: '5b24tn36bll2cgmg4bfgj5q7nk',
	oauth: {},
	aws_cognito_username_attributes: [],
	aws_cognito_social_providers: [],
	aws_cognito_signup_attributes: ['EMAIL'],
	aws_cognito_mfa_configuration: 'OFF',
	aws_cognito_mfa_types: ['SMS'],
	aws_cognito_password_protection_settings: {
		passwordPolicyMinLength: 8,
		passwordPolicyCharacters: []
	},
	aws_cognito_verification_mechanisms: ['EMAIL'],
	aws_user_files_s3_bucket: 'sveltekit-dgm3790-aws-storage-d5981726221052-staging',
	aws_user_files_s3_bucket_region: 'us-east-1'
}
