import { Amplify } from 'aws-amplify'
import {
	AWS_COGNITO_IDENTITY_POOL_ID,
	AWS_USER_POOLS_ID,
	AWS_USER_POOLS_WEB_CLIENT_ID,
	AWS_USER_FILES_S3_BUCKET
} from '$env/static/private'

export async function load() {
	const db = Amplify.configure(awsExport)

	if (!db)
		return {
			status: 500,
			msg: 'DB Connection Failed'
		}

	return {
		msg: 'Amplify Configured'
	}
}

const awsExport = {
	aws_project_region: 'us-east-1',
	aws_cognito_identity_pool_id: AWS_COGNITO_IDENTITY_POOL_ID,
	aws_cognito_region: 'us-east-1',
	aws_user_pools_id: AWS_USER_POOLS_ID,
	aws_user_pools_web_client_id: AWS_USER_POOLS_WEB_CLIENT_ID,
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
	aws_user_files_s3_bucket: AWS_USER_FILES_S3_BUCKET,
	aws_user_files_s3_bucket_region: 'us-east-1'
}
