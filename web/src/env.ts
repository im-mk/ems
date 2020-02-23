export function GetApiUrl(): string {
    return process.env.REACT_APP_API_URL + '';
}

export function GetOktaIssuer(): string {
    return process.env.REACT_APP_OKTA_ISSUER + '';
}

export function GetOktaClientId(): string {
    return process.env.REACT_APP_OKTA_CLIENTID + '';
}