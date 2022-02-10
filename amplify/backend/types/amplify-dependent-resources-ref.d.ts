export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "photoalbumsd384bb20": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "api": {
        "photoalbums": {
            "GraphQLAPIKeyOutput": "string",
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "function": {
        "S3Trigger188069f9": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        },
        "workshopphotoprocessor": {
            "Name": "string",
            "Arn": "string",
            "Region": "string"
        }
    },
    "storage": {
        "photoalbumsstorage": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}