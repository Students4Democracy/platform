import { HoudiniClient } from 'houdini';
import { env } from '$env/dynamic/private'

export default new HoudiniClient({
    url: 'https://mfnhosjyjcrwvfozqoth.hasura.us-east-1.nhost.run/v1/graphql',

    // uncomment this to configure the network call (for things like authentication)
    // for more information, please visit here: https://www.houdinigraphql.com/guides/authentication
    fetchParams({ session }) {
        return {
            headers: {
                'x-hasura-admin-secret': env.SECRET_HASURA,
            }
        }
    }
})
